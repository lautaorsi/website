const REPO_OWNER = 'lautaorsi';
const REPO_NAME  = location.hash.slice(1) || 'AI-IBM-COURSE';
const BRANCH     = 'main';

document.getElementById('site-name').innerText = REPO_NAME.replaceAll("-", " ");
document.getElementById('repo-name').innerText = REPO_NAME.replaceAll("-", " ");
document.getElementById('github-repo-link').href = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;

marked.setOptions({ headerIds: true, gfm: true });

let currentBasePath = "";
let globalTree = {};
let homeLoaded = false;

// Protect math from marked's parser
function safeParseMd(src) {
    const store = [];

    // Block math first ($$...$$), then inline ($...$)
    src = src.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => {
        store.push({ type: 'block', tex });
        return `%%MATH_${store.length - 1}%%`;
    });
    src = src.replace(/\$([^\n$]+?)\$/g, (_, tex) => {
        store.push({ type: 'inline', tex });
        return `%%MATH_${store.length - 1}%%`;
    });

    let html = marked.parse(src);

    // Restore placeholders as KaTeX-ready delimiters
    html = html.replace(/%%MATH_(\d+)%%/g, (_, i) => {
        const { type, tex } = store[i];
        return type === 'block' ? `$$${tex}$$` : `$${tex}$`;
    });

    return html;
}   

// 2. initAutomaticSidebar — replaceState con el path correcto, navigateTo sin push
async function initAutomaticSidebar() {
    const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/trees/${BRANCH}?recursive=1`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        globalTree = buildTree(data.tree);
        renderSidebar(globalTree, document.getElementById('dynamic-nav'));

        const initialPath = getPathFromURL();

        // Siempre cargamos el home para que el botón "atrás" funcione
        await loadHomeReadme();

        // Estado inicial correcto: si hay path en la URL, ese es el estado base
        history.replaceState({ path: initialPath || null }, '');

        if (initialPath) {
            // false = no hacer pushState, la URL ya es correcta
            await navigateTo(initialPath, false);
        }
    } catch (err) { console.error("Sidebar Error:", err); }
}


// 3. loadHomeReadme — con guard y rewriteInternalLinks
async function loadHomeReadme() {
    if (homeLoaded) return;
    const url = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/README.md`;
    try {
        const res = await fetch(url);
        if (!res.ok) return;
        const text = await res.text();
        const home = document.getElementById('page-home');
        const existing = home.querySelector('div');
        existing.insertAdjacentHTML('afterend', `
            <div class="md-body" style="max-width:700px; margin-top:40px; padding-bottom:60px;">
                ${safeParseMd(text)}
            </div>`);
        rewriteInternalLinks(home, ''); // ← links del home ahora interceptados
        renderMath(home);
        homeLoaded = true;
    } catch (err) { console.error("Home README error:", err); }
}


function buildTree(files) {
    const root = {};
    files.forEach(file => {
        const parts = file.path.split('/');
        let current = root;
        parts.forEach((part, i) => {
            if (!current[part]) {
                current[part] = { _path: file.path, _isFolder: i < parts.length - 1 || file.type === 'tree', _hasSubfolders: false };
            }
            if (i > 0) {
                const parent = parts.slice(0, i).reduce((acc, p) => acc[p], root);
                if (i < parts.length - 1 || file.type === 'tree') parent._hasSubfolders = true;
            }
            current = current[part];
        });
    });
    return root;
}

function renderSidebar(node, container, pathPrefix = "") { 
    Object.keys(node).sort().forEach(key => {
        if (key.startsWith('_')) return;
        
        const item = node[key];
        
        // 1. FILTRADO DE ARCHIVOS
        if (!item._isFolder) {
            // Excluir archivos ocultos (ej: .gitignore)
            if (key.startsWith('.')) return; 
            
            // Excluir extensiones .png y .pdf
            const ext = key.split('.').pop().toLowerCase();
            if (ext === 'png' || ext === 'pdf' || ext === 'txt') return; 
        }

        const fullPath = pathPrefix ? `${pathPrefix}/${key}` : key;
        const el = document.createElement('div');

        // Función auxiliar para saber si la carpeta tiene contenido que valga la pena cargar
        const hasRenderableContent = () => {
            return Object.keys(item).some(k => {
                const lowerK = k.toLowerCase();
                return lowerK === 'readme.md' || lowerK.endsWith('.ipynb');
            });
        };

        // 2. Manejo de carpetas con subcarpetas
        if (item._isFolder && item._hasSubfolders) {
            el.innerHTML = `
                <div class="folder-label">
                    <span class="arrow"></span> <span>${key}</span>
                </div>
                <div class="folder-content" style="padding-left:12px; border-left: 1px solid var(--border); display: none;"></div>`;
            
            const label = el.querySelector('.folder-label');
            const content = el.querySelector('.folder-content');
            
            label.onclick = (e) => {
                const isOpened = content.style.display === 'block';
                content.style.display = isOpened ? 'none' : 'block';
                label.classList.toggle('open', !isOpened);
                
                // SOLO navegamos si la carpeta tiene un README o Notebook
                if (hasRenderableContent()) {
                    navigateTo(fullPath); 
                }
                e.stopPropagation();
            };
            renderSidebar(item, content, fullPath);
            container.appendChild(el);
        } 
        // 3. Manejo de carpetas sin subcarpetas (hojas)
        else if (item._isFolder && !item._hasSubfolders) {
            const pageLink = document.createElement('div');
            pageLink.className = 'sidebar-item';
            pageLink.innerHTML = `<span style="opacity:0.3">📁</span> ${key}`;
            
            pageLink.onclick = (e) => {
                // SOLO navegamos si hay contenido para mostrar
                if (hasRenderableContent()) {
                    navigateTo(fullPath);
                }
                e.stopPropagation();
            };
            container.appendChild(pageLink);
        }
        // 4. Manejo de archivos individuales sueltos
        else if (!item._isFolder) {
            if (key.toLowerCase() === 'readme.md') return; 
            
            const fileLink = document.createElement('div');
            fileLink.className = 'sidebar-item';
            
            const ext = key.split('.').pop().toLowerCase();
            let icon = '📄';
            if (ext === 'ipynb') icon = '📓';
            else if (['py', 'js', 'html', 'css', 'java', 'xml'].includes(ext)) icon = '💻';
            else if (key.toLowerCase().includes('docker')) icon = '🐳';

            fileLink.innerHTML = `<span style="opacity:0.5">${icon}</span> ${key}`;
            fileLink.onclick = (e) => {
                navigateTo(fullPath);
                e.stopPropagation();
            };
            container.appendChild(fileLink);
        }
    });
}

async function loadCombinedContent(folderNode, folderData) {
    const container = document.getElementById('my-notebook-container');
    nav('notebook');
    container.innerHTML = `<div style="padding:40px; color:var(--text3)">Loading Project...</div>`;

    const files = Object.keys(folderData).filter(k => !k.startsWith('_'));
    const readmeFile = files.find(f => f.toLowerCase() === 'readme.md');
    const notebookFile = files.find(f => f.endsWith('.ipynb'));

    let combinedHtml = `<div class="notebook-card md-body">`;

    try {
        if (readmeFile) {
            const res = await fetch(`https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${folderData[readmeFile]._path}`);
            const text = await res.text();
            combinedHtml += `<div class="nb-row md-row">${safeParseMd(text)}</div>`;
        }

        if (notebookFile) {
            const res = await fetch(`https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${folderData[notebookFile]._path}`);
            const nbData = await res.json();
            combinedHtml += renderNotebookRows(nbData);
        }

        container.innerHTML = combinedHtml + `</div>`;
        rewriteInternalLinks(container, currentBasePath);

        document.querySelector('.main').classList.add('has-toc');
        document.querySelector('.toc').classList.add('visible');
        generateUniqueTOC(container);
        document.querySelectorAll('pre code').forEach(hljs.highlightElement);
        renderMath(container); 
        await renderMermaid(container);
        
    } catch (err) { container.innerHTML = `<div style="padding:40px;">Error loading files.</div>`; }
}


function generateUniqueTOC(contentArea) {
    const tocItems = document.getElementById('toc-items');
    tocItems.innerHTML = "";
    const headers = contentArea.querySelectorAll('h1, h2');
    const seenTitles = new Set();
    
    headers.forEach((h, index) => {
        const titleText = h.innerText.trim();
        if (seenTitles.has(titleText)) {
            h.style.display = 'none';
            return;
        }
        seenTitles.add(titleText);

        const id = `header-${index}`;
        h.id = id;
        const link = document.createElement('a');
        link.className = 'toc-item';
        link.href = `#${id}`;
        link.innerText = titleText;
        link.onclick = (e) => {
            e.preventDefault();
            const offset = 75; 
            const top = h.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        };
        tocItems.appendChild(link);
    });
}

function renderNotebookRows(nbData) {
    return nbData.cells.map(cell => {
        const source = Array.isArray(cell.source) ? cell.source.join('') : (cell.source || "");
        if (cell.cell_type === 'markdown') {
            return `<div class="nb-row md-row">${safeParseMd(source)}</div>`;
        } else if (cell.cell_type === 'code') {
            return `<div class="nb-row">
                <div class="nb-label">In [${cell.execution_count || ' '}]:</div>
                <div class="nb-content">
                    <pre class="nb-code"><code>${source}</code></pre>
                    <div class="nb-output-container">${renderOutputs(cell.outputs)}</div>
                </div></div>`;
        }
        return "";
    }).join('');
}

function renderOutputs(outputs) {
    if (!outputs) return "";
    return outputs.map(out => {
        if (out.data && out.data['text/html']) return `<div class="nb-html-output">${Array.isArray(out.data['text/html']) ? out.data['text/html'].join('') : out.data['text/html']}</div>`;
        if (out.text) return `<div class="nb-output">${Array.isArray(out.text) ? out.text.join('') : out.text}</div>`;
        if (out.data && out.data['image/png']) return `<img src="data:image/png;base64,${out.data['image/png'].replace(/\n/g, '')}" class="nb-img">`;
        return "";
    }).join('');
}


function renderMath(container) {
    renderMathInElement(container, {
        delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false
    });
}

function nav(pageId) {
    const mainEl = document.querySelector('.main');
    const tocEl = document.querySelector('.toc');
    if(pageId === 'home') {
        mainEl.classList.remove('has-toc');
        tocEl.classList.remove('visible');
        // Reinicia el breadcrumb al volver al Home
        document.getElementById('breadcrumb-paths').innerHTML = '';
        document.getElementById('bc-active').innerText = 'Home';
    }
    document.querySelectorAll('.content').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
}

async function renderMermaid(container) {
    const blocks = container.querySelectorAll('code.language-mermaid');
    for (const block of blocks) {
        const source = block.textContent;
        const wrapper = document.createElement('div');
        wrapper.className = 'mermaid-output';
        try {
            const id = 'mermaid-' + Math.random().toString(36).slice(2);
            const { svg } = await mermaid.render(id, source);
            wrapper.innerHTML = svg;
        } catch (e) {
            wrapper.textContent = 'Mermaid render error: ' + e.message;
            wrapper.style.color = 'red';
        }
        block.closest('pre').replaceWith(wrapper);
    }
}


// --- MANUAL CONFIGURATION ---
const PROJECT_CONFIG = [
    {
        name: "Introduction",
        type: "folder",
        readmeUrl: "https://raw.githubusercontent.com/user/repo/main/intro/README.md",
        children: [
            { 
                name: "Getting Started", 
                type: "leaf", 
                readmeUrl: "https://raw.githubusercontent.com/user/repo/main/intro/setup.md" 
            }
        ]
    },
    {
        name: "Data Analysis",
        type: "folder",
        readmeUrl: "https://raw.githubusercontent.com/user/repo/main/analysis/overview.md",
        children: [
            { 
                name: "Exploration", 
                type: "leaf", 
                notebookUrl: "https://raw.githubusercontent.com/user/repo/main/analysis/eda.ipynb" 
            }
        ]
    }
];

// --- UPDATED CORE LOGIC ---
async function initManualSidebar() {
    renderManualSidebar(PROJECT_CONFIG, document.getElementById('dynamic-nav'));
}

function renderManualSidebar(items, container) {
    items.forEach(item => {
        const el = document.createElement('div');

        if (item.type === "folder") {
            el.innerHTML = `
                <div class="folder-label">
                    <span class="arrow"></span> <span>${item.name}</span>
                </div>
                <div class="folder-content" style="padding-left:12px; border-left: 1px solid var(--border);">
                    <div class="sidebar-item folder-index"><span style="opacity:0.3">#</span> Overview</div>
                </div>`;
            
            const label = el.querySelector('.folder-label');
            const content = el.querySelector('.folder-content');
            const indexLink = el.querySelector('.folder-index');
            
            label.onclick = (e) => {
                content.style.display = (content.style.display === 'block') ? 'none' : 'block';
                label.classList.toggle('open');
                e.stopPropagation();
            };

            indexLink.onclick = () => loadStaticContent(item.name, item.readmeUrl, null);
            
            if (item.children) renderManualSidebar(item.children, content);
            container.appendChild(el);
        } else {
            const pageLink = document.createElement('div');
            pageLink.className = 'sidebar-item';
            pageLink.innerHTML = `<span style="opacity:0.3">#</span> ${item.name}`;
            pageLink.onclick = () => loadStaticContent(item.name, item.readmeUrl, item.notebookUrl);
            container.appendChild(pageLink);
        }
    });
}

async function loadStaticContent(title, readmeUrl, notebookUrl) {
    const container = document.getElementById('my-notebook-container');
    const bcActive = document.getElementById('bc-active');
    nav('notebook');
    bcActive.innerText = title;
    container.innerHTML = `<div style="padding:40px; color:var(--text3)">Loading Content...</div>`;

    let combinedHtml = `<div class="notebook-card md-body">`;

    try {
        if (readmeUrl) {
            const res = await fetch(readmeUrl);
            const text = await res.text();
            combinedHtml += `<div class="nb-row md-row">${safeParseMd(text)}</div>`;
        }

        if (notebookUrl) {
            const res = await fetch(notebookUrl);
            const nbData = await res.json();
            combinedHtml += renderNotebookRows(nbData);
        }

        container.innerHTML = combinedHtml + `</div>`;
        rewriteInternalLinks(container, currentBasePath);
        
        document.querySelector('.main').classList.add('has-toc');
        document.querySelector('.toc').classList.add('visible');
        
        setTimeout(async () => {
            generateUniqueTOC(container);
            document.querySelectorAll('pre code').forEach(hljs.highlightElement);
            renderMath(container);
            await renderMermaid(container);
            
        }, 50);
        
    } catch (err) { 
        container.innerHTML = `<div style="padding:40px;">Error loading content. Check the URLs in your manual config.</div>`; 
    }
}

// Resuelve un href relativo contra la ruta base actual
function resolvePath(basePath, href) {
    if (href.startsWith('./')) href = href.slice(2);
    // Si la base es un archivo, tomamos su directorio
    const baseDir = /\.[^/]+$/.test(basePath)
        ? basePath.slice(0, basePath.lastIndexOf('/'))
        : basePath;
    const combined = baseDir ? `${baseDir}/${href}` : href;
    const resolved = [];
    for (const part of combined.split('/').filter(Boolean)) {
        if (part === '..') resolved.pop();
        else if (part !== '.') resolved.push(part);
    }
    return resolved.join('/');
}

// Devuelve el nodo del árbol dado un path tipo "carpeta/subcarpeta"
function getNodeByPath(path) {
    return path.split('/').filter(Boolean)
        .reduce((node, part) => node?.[part] ?? null, globalTree);
}


function initLinkInterception() {
    document.addEventListener('click', async e => {
        const a = e.target.closest('a[href]');
        if (!a || !a.closest('#my-notebook-container, #page-home')) return;

        const navPath = a.dataset.navPath;
        if (!navPath) return; // externo o anchor → browser lo maneja solo

        e.preventDefault();
        await navigateTo(navPath);
    });
}



// --- Historia y URLs ---

function pushNav(path, title = '') {
    const params = new URLSearchParams(location.search);
    path ? params.set('path', path) : params.delete('path');
    const url = params.toString() ? `${location.pathname}?${params}` : location.pathname;
    history.pushState({ path }, title || document.title, url);
    if (title) document.title = title;
}

function getPathFromURL() {
    return new URLSearchParams(location.search).get('path');
}

// 5. rewriteInternalLinks — agrega target="_blank" a externos
function rewriteInternalLinks(container, basePath) {
    container.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (!href) return;

        if (/^https?:\/\//.test(href)) {
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            return;
        }
        if (href.startsWith('#')) return;

        const resolved = resolvePath(basePath, href);
        const params = new URLSearchParams(location.search);
        params.set('path', resolved);
        a.href = `${location.pathname}?${params}`;
        a.dataset.navPath = resolved;
    });
}

// 4. navigateTo — nuevo parámetro pushHistory
async function navigateTo(path, pushHistory = true) {
    const node = getNodeByPath(path);
    if (!node) { console.warn(`[Nav] Path no encontrado: "${path}"`); return; }

    currentBasePath = path;
    const parts = path.split('/').filter(Boolean);
    const title = parts[parts.length - 1];

    if (pushHistory) pushNav(path, title);

    // --- ACTUALIZACIÓN DE BREADCRUMBS ---
    const bcPathsContainer = document.getElementById('breadcrumb-paths');
    let accumulatedPath = '';
    let html = '';
    
    parts.slice(0, -1).forEach(part => {
        accumulatedPath = accumulatedPath ? `${accumulatedPath}/${part}` : part;
        html += `<a href="#" onclick="event.preventDefault(); navigateTo('${accumulatedPath}')" style="color: var(--text2); text-decoration: none;">${part}</a> / `;
    });
    
    bcPathsContainer.innerHTML = html;
    document.getElementById('bc-active').innerText = title;
    // ------------------------------------

        if (node._isFolder) {
            await loadCombinedContent(node, node);
        } else {
            const rawUrl = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${node._path}`;
            const ext = node._path.split('.').pop().toLowerCase();
            
            // Evaluamos el tipo de archivo para renderizarlo correctamente
            if (ext === 'md') {
                await loadStaticContent(title, rawUrl, null);
            } else if (ext === 'ipynb') {
                await loadStaticContent(title, null, rawUrl);
            } else {
                // Función nueva para manejar código
                await loadRawCodeContent(title, rawUrl, ext);
            }
        }
}

// 6. popstate — garantiza que el home esté cargado antes de mostrarlo
window.addEventListener('popstate', async e => {
    const path = e.state?.path ?? null;
    if (!path) {
        await loadHomeReadme(); // no-op si ya fue cargado
        nav('home');
        return;
    }
    const node = getNodeByPath(path);
    if (!node) return;
    currentBasePath = path;
    if (node._isFolder) {
        await loadCombinedContent(node, node);
    } else {
        const rawUrl = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${node._path}`;
        await loadStaticContent(path.split('/').pop(), rawUrl, null);
    }
});


async function loadRawCodeContent(title, rawUrl, ext) {
    const container = document.getElementById('my-notebook-container');
    const bcActive = document.getElementById('bc-active');
    
    nav('notebook');
    bcActive.innerText = title;
    container.innerHTML = '<div style="padding:40px; color:var(--text3)">Loading File...</div>';

    try {
        const res = await fetch(rawUrl);
        if (!res.ok) throw new Error("File not found");
        const text = await res.text();
        
        // Identificar el lenguaje para highlight.js
        let lang = ext;
        if (title.toLowerCase().includes('dockerfile')) lang = 'dockerfile';
        else if (['yml', 'yaml'].includes(ext)) lang = 'yaml';
        else if (ext === 'txt') lang = 'plaintext';
        
        // CORRECCIÓN: Concatenación segura de strings sin romper el código JS
        const mdContent = "```" + lang + "\n" + text + "\n```";
        
        // Insertamos el contenido parseado
        const combinedHtml = '<div class="notebook-card md-body"><div class="nb-row md-row">' + safeParseMd(mdContent) + '</div></div>';
        container.innerHTML = combinedHtml;
        
        // Ocultar la tabla de contenidos (TOC) para archivos sueltos
        const mainEl = document.querySelector('.main');
        const tocEl = document.querySelector('.toc');
        if (mainEl) mainEl.classList.remove('has-toc');
        if (tocEl) tocEl.classList.remove('visible');
        
        // Aplicar estilos de código
        document.querySelectorAll('pre code').forEach(hljs.highlightElement);
        
    } catch (err) { 
        container.innerHTML = '<div style="padding:40px;">Error loading file: ' + title + '</div>'; 
        console.error("Error al cargar código raw:", err);
    }
}



mermaid.initialize({ startOnLoad: false, theme: 'dark' });
initAutomaticSidebar();
initLinkInterception();


// Ocultar cualquier imagen que falle al cargar (imágenes rotas en markdown)
document.addEventListener('error', function(e) {
    if (e.target && e.target.tagName && e.target.tagName.toLowerCase() === 'img') {
        e.target.style.display = 'none';
    }
}, true); // El 'true' activa la fase de captura para atrapar el error de los elementos