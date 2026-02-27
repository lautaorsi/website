const NODES = [
  { id:'center',   label:'Portfolio', cx:0.50, cy:0.50, isCenter:true },
  { id:'about',    label:'Sobre Mi',  cx:0.22, cy:0.22 },
  { id:'academic', label:'Academico',  cx:0.70, cy:0.20 },
  { id:'projects', label:'Proyectos',  cx:0.82, cy:0.52 },
  { id:'courses',  label:'Cursos',   cx:0.64, cy:0.78 },
  { id:'skills',   label:'Habilidades',    cx:0.30, cy:0.78 },
  { id:'contact',  label:'Contacto & Links',   cx:0.14, cy:0.54 },
];

const EDGES = [
  ['center','about'], ['center','academic'], ['center','projects'],
  ['center','courses'], ['center','skills'], ['center','contact'],
  ['about','academic'], ['projects','skills'], ['academic','courses'],
];

const CONTENT_ES = {
  about: { title:'Sobre Mi', cards:[
    { title:'Perfil', meta:'Introduccion', body:"Soy un estudiante de 4to año en la carrera de Ciencias de la Computación, UBA. Estoy interesado en el desarrollo backend, bases de datos y ciberseguridad. A lo largo de mis estudios fui aprendiendo múltiples soft-skills relacionadas a las buenas prácticas de desarrollo de código y teorias relacionadas con el análisis de complejidades de algoritmos, estructuras de datos y comportamientos en bajo nivel de los programas y computadoras.", tags:['CS','Backend'] },
    { title:'Idiomas', meta:'Comunicacion', body:"Español Nativo, Ingles Avanzado (C2).", tags:[] },
  ]},
  academic: { title:'Academic', cards:[
    { title:'Licenciatura en Ciencias de la Computacion', meta:'Universidad de Buenos Aires · 2022–2027', body:'Actualmente en 4to año con 11/19 materias regularizadas.', tags:['UBA','Analisis 1','Algebra Lineal Computacional','Sistemas Operativos','Lenguajes Formales, Automatas y Computabilidad','Algebra 1','Introduccion a la Programacion','Algoritmos y Estructuras de Datos','Tecnicas de Diseño de Algoritmos','Sistemas Digitales','Paradigmas de la Programacion','Ingenieria del Software','Arquitectura y Organizacion de Computadores'] },
    { title:'Bachiller en Ciencias de la Computacion', meta:'UBA · Completado', body:'Titulo intermedio de la Licenciatura en Ciencias de la Computacion. Promedio 7.25.', tags:['UBA','Algebra 1','Introduccion a la Programacion','Algoritmos y Estructuras de Datos','Tecnicas de Diseño de Algoritmos','Sistemas Digitales','Paradigmas de la Programacion','Ingenieria del Software','Arquitectura y Organizacion de Computadores'] },
    { title:'Secundaria', meta:'Carlos Pellegrini · 2017–2022', body:'Promedio 7.83. Especialización en Economía.', tags:[] },
  ]},
  projects: { title:'Proyectos', cards:[
    { title:'Pet Finder App', meta:'Mobile Development', body:'App dinamica para encontrar mascotas perdidas utilizando sistemas de autenticación de solicitudes (JWT), creación de cuentas y comunicación con un servidor y base de datos (MongoDB), usando Docker-Compose para aislar el entorno de desarrollo..', tags:['React Native','Express','MongoDB','Docker','JWT'], link:'https://github.com/lautaorsi/pet-finder', linkText:'Ver Repositorio' },
    { title:'Videojuego Online Geografía', meta:'Multiplayer', body:'Juego online de geografía, empleando distintas API`s, tecnicas anti-exploits y mantenimiento del servidor.', tags:['Node.js','Socket.io','Leaflet','Javascript'], link:'https://github.com/lautaorsi/pet-finder' ,linkText:'Ver Repositorio'},
    { title:'WhatsApp Scraper', meta:'Data Analysis', body:'Pequeño proyecto que scrappea chats entre dos o mas usuarios para generar estadisticas y datos relevantes de las conversaciónes.', tags:['Python','Regex','MatPlotLib'], link:'https://github.com/lautaorsi/pet-finder' ,linkText:'Ver Repositorio'},
  ]},
  courses: { title:'Cursos', cards:[
    { title: 'Machine Learning with Python', meta:'Machine Learning', body:'Curso aplicado de Machine Learning de IBM (en curso)', tags:['Python','Machine Learning'], linkText:'Ir al repositorio', link:'https://github.com/lautaorsi/AI-IBM-COURSE'},
    {title:'Google Cybersecurity Specialization', meta:'Ciberseguridad', body:'Curso de ciberseguridad teorico y practico', tags:['Linux','SQL','Python','Windows'], linkText:'Certificado', link:'https://coursera.org/share/a733688561956f4471289add8737c8f0'},
    { title:'Linux for Developers', meta:'General', body:'Curso inicial de Linux.', tags:['Linux'], linkText:"Certificado", link:"https://coursera.org/share/593ba8abb4b3be969cb2f59fd431daeb" },
    { title:'Linux Server Management and Security', meta:'Ciberseguridad', body:'Curso de seguridad en Linux.', tags:['OS','SQL','Databases'],linkText:"Certificado", link:"https://coursera.org/share/6770bf6fd701df4d06230ef2fdd019a2" },
    { title:'Introduction to Databases', meta:'General', body:'Curso inicial de Bases de Datos.', tags:['SQL'], linkText:"Certificado", link:"https://coursera.org/share/934b732b8048ae9f5b41a90240926343" },
  ]},
  skills: { title:'Habilidades', cards:[
    { title:'Lenguajes', meta:'Programacion', body:'', tags:['C++','Python','Assembly','JavaScript','Java','C'] },
    { title:'Frameworks & Tools', meta:'Ecosistema', body:'', tags:['Docker','Git','Express','SQL','React Native','Expo Go','MongoDB'] },
  ]},
  contact: { title:'Contacto & Links', cards:[
    { title:'Email', meta:'Contacto', body:'lautaromorsi [at] gmail com', tags:['Contact'] },
    { title:'Github', meta:'Repositorios', body:'github.com/lautaorsi', tags:['Personal'], link:'https://www.github.com/lautaorsi', linkText:"Ir a Github" },
    { title:'Linkedin', meta:'Social', body:'linkedin.com/in/lautaro-orsi ', tags:['Profesional'], link:'https://linkedin.com/in/lautaro-orsi', linkText:'Ver Perfil' },
  ]},
};






















const CONTENT_EN = {
  about: { title:'About Me', cards:[
    { title:'Profile', meta:'Introduction', body:"I am a 4th-year Computer Science student at UBA. Interested in backend development, databases, and cybersecurity.", tags:['CS','Backend'] },
    { title:'Languages', meta:'Communication', body:"Native Spanish speaker with Advanced (C2) English proficiency.", tags:['English C2','Spanish'] },
  ]},
  academic: { title:'Academic', cards:[
    { title:'B.Sc. Computer Science', meta:'University of Buenos Aires · 2022–2027', body:'Currently in 4th year with 11/19 subjects approved.', tags:['UBA','Algorithms','Data Structures'] },
  ]},
  projects: { title:'Projects', cards:[
    { title:'Pet Finder App', meta:'Mobile Development', body:'Dynamic app for finding lost pets.', tags:['React Native','Express','MongoDB','Docker','JWT'], link:'https://github.com/lautaorsi/pet-finder', linkText:'View Repo' },
  ]},
  courses: { title:'Core Theory', cards:[
    { title:'Algorithms & Data', meta:'Theory', body:'Advanced knowledge in asymptotic complexity analysis.', tags:['Complexity','Optimization'] },
  ]},
  skills: { title:'Skills', cards:[
    { title:'Languages', meta:'Programming', body:'', tags:['C++','Python','Assembly', 'JavaScript','Java','C'] },
    { title:'Frameworks & Tools', meta:'Ecosystem', body:'', tags:['Docker','Git','Express','SQL','React Native','Expo Go','MongoDB'] },
  ]},
  contact: { title:'Contact & Links', cards:[
    { title:'Email', meta:'Primary', body:'lautaromorsi [at] gmail com', tags:['Contact'] },
    { title:'Github', meta:'Profile', body:'github.com/lautaorsi', tags:['Personal'], link:'https://www.github.com/lautaorsi', linkText:'Go to Github' },
    { title:'Linkedin', meta:'Social', body:'linkedin.com/in/lautaro-orsi ', tags:['Professional'], link:'https://linkedin.com/in/lautaro-orsi', linkText:'View Profile' },
  ]},
};

let espanol = 1;

// ── Background Engine ────────────────────────────────────────────────────────
const bgCanvas = document.getElementById('bg-canvas');
const bgCtx    = bgCanvas.getContext('2d');
let bW, bH, bgNodes, bgEdges, bgT = 0;

function initBg() {
  bW = bgCanvas.width  = window.innerWidth;
  bH = bgCanvas.height = window.innerHeight;
  bgNodes = Array.from({ length: 70 }, () => ({
    x:  Math.random() * bW,
    y:  Math.random() * bH,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    r:  1.1 + Math.random() * 1.8,
  }));
  buildBgEdges();
}

function buildBgEdges() {
  bgEdges = [];
  const THRESH = Math.min(bW, bH) * 0.21;
  for (let i = 0; i < bgNodes.length; i++)
    for (let j = i + 1; j < bgNodes.length; j++) {
      const dx = bgNodes[i].x - bgNodes[j].x;
      const dy = bgNodes[i].y - bgNodes[j].y;
      if (Math.sqrt(dx*dx + dy*dy) < THRESH)
        bgEdges.push({ a: i, b: j, maxD: THRESH });
    }
}

function drawBg() {
  bgCtx.clearRect(0, 0, bW, bH);
  bgT++;
  bgNodes.forEach(n => {
    n.x += n.vx; n.y += n.vy;
    if (n.x < -30) n.x = bW + 30; if (n.x > bW + 30) n.x = -30;
    if (n.y < -30) n.y = bH + 30; if (n.y > bH + 30) n.y = -30;
  });
  if (bgT % 55 === 0) buildBgEdges();
  bgEdges.forEach(({ a, b, maxD }) => {
    const na = bgNodes[a], nb = bgNodes[b];
    const d = Math.sqrt((na.x-nb.x)**2 + (na.y-nb.y)**2);
    bgCtx.beginPath();
    bgCtx.moveTo(na.x, na.y);
    bgCtx.lineTo(nb.x, nb.y);
    bgCtx.strokeStyle = `rgba(150,100,255,${(1 - d/maxD) * 0.12})`;
    bgCtx.lineWidth = 0.5;
    bgCtx.stroke();
  });
  bgNodes.forEach((n, i) => {
    const r = n.r * (1 + Math.sin(bgT * 0.018 + i * 0.6) * 0.3);
    bgCtx.beginPath(); bgCtx.arc(n.x, n.y, r * 5, 0, Math.PI * 2);
    bgCtx.fillStyle = `rgba(140,80,255,0.05)`; bgCtx.fill();
    bgCtx.beginPath(); bgCtx.arc(n.x, n.y, r, 0, Math.PI * 2);
    bgCtx.fillStyle = `rgba(220,200,255,0.8)`; bgCtx.fill();
  });
  requestAnimationFrame(drawBg);
}
initBg(); drawBg();
window.addEventListener('resize', initBg);

// ── Main Graph Logic ─────────────────────────────────────────────────────────
const graphEl = document.getElementById('graph');
const linesEl  = document.getElementById('lines');

function renderGraph() {
  const W = window.innerWidth, H = window.innerHeight;
  const pos = {};
  NODES.forEach(n => { pos[n.id] = { x: n.cx * W, y: n.cy * H }; });
  linesEl.innerHTML = '';
  EDGES.forEach(([a, b]) => {
    const pa = pos[a], pb = pos[b];
    ['edge', 'edge-bright'].forEach(cls => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', pa.x); line.setAttribute('y1', pa.y);
      line.setAttribute('x2', pb.x); line.setAttribute('y2', pb.y);
      line.setAttribute('class', cls);
      linesEl.appendChild(line);
    });
  });
  graphEl.querySelectorAll('.node').forEach(n => n.remove());
  NODES.forEach(n => {
    const el = document.createElement('div');
    el.className = 'node' + (n.isCenter ? ' center' : '');
    el.style.left = pos[n.id].x + 'px'; el.style.top  = pos[n.id].y + 'px';
    if (n.isCenter) {
      el.innerHTML = `<div class="node-circle"><span class="node-label">${n.label}</span><span class="node-hint">View CV</span></div>`;
      el.addEventListener('click', () => window.open('your-cv.pdf', '_blank'));
    } else {
      el.innerHTML = `<div class="node-circle"><span class="node-label">${n.label}</span></div>`;
      el.addEventListener('click', () => openPanel(n.id));
    }
    el.addEventListener('mouseenter', e => showTooltip(e, n.isCenter ? 'Open CV' : `Open ${n.label}`));
    el.addEventListener('mousemove', moveTooltip);
    el.addEventListener('mouseleave', hideTooltip);
    graphEl.appendChild(el);
  });
}
window.addEventListener('resize', renderGraph);

// ── Panel & Modal Logic ──────────────────────────────────────────────────────
const panelEl = document.getElementById('panel'), panelTitle = document.getElementById('panel-title'), panelBody = document.getElementById('panel-body'), panelBackBtn = document.getElementById('panel-back-btn');
const modalOverlay = document.getElementById('card-modal-overlay'), modalMeta = document.getElementById('modal-meta'), modalTitle = document.getElementById('modal-title'), modalBody = document.getElementById('modal-body'), modalTags = document.getElementById('modal-tags'), modalCloseBtn = document.getElementById('modal-close-btn'), modalLinkBtn = document.getElementById('modal-link-btn');

function openPanel(id) {
  const section = espanol ? CONTENT_ES[id] : CONTENT_EN[id];
  panelTitle.textContent = section.title;
  panelBody.innerHTML = section.cards.map((card, i) => `
    <div class="card" data-section="${id}" data-index="${i}">
      <div class="card-meta">${card.meta}</div>
      <div class="card-title">${card.title}</div>
      <div class="card-body">${card.body}</div>
      <div class="tags">${card.tags.map(t => `<span class="tag" data-tag="${t}">${t}</span>`).join('')}</div>
    </div>`).join('');
  graphEl.style.opacity = '0.12'; panelEl.classList.add('active');
}

function closePanel() { panelEl.classList.remove('active'); graphEl.style.opacity = '1'; }

function openModal(sectionId, cardIndex) {
  const card = espanol ? CONTENT_ES[sectionId].cards[cardIndex] : CONTENT_EN[sectionId].cards[cardIndex];
  modalMeta.textContent = card.meta; modalTitle.textContent = card.title; modalBody.textContent = card.body;
  modalTags.innerHTML = card.tags.map(t => `<span class="tag" data-tag="${t}">${t}</span>`).join('');
  if (card.link) {
    modalLinkBtn.href = card.link; modalLinkBtn.style.display = 'inline-flex';
    modalLinkBtn.innerText = card.linkText || (espanol ? 'Ver Más' : 'View More');
  } else { modalLinkBtn.style.display = 'none'; }
  modalOverlay.classList.add('active');
}

function closeModal() { modalOverlay.classList.remove('active'); }
panelBackBtn.addEventListener('click', closePanel);
modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

panelBody.addEventListener('click', e => {
  const tag = e.target.dataset.tag;
  if (tag) { closePanel(); openTechGraph(tag); return; }
  const card = e.target.closest('.card');
  if (card) openModal(card.dataset.section, parseInt(card.dataset.index));
});

modalTags.addEventListener('click', e => {
  const tag = e.target.dataset.tag;
  if (tag) { closeModal(); closePanel(); openTechGraph(tag); }
});

// ── Tech Graph Logic ─────────────────────────────────────────────────────────
const techOverlay = document.getElementById('tech-overlay'), techTagBadge = document.getElementById('tech-tag-badge'), techCanvasWrap = document.getElementById('tech-canvas-wrap'), techSvg = document.getElementById('tech-svg'), techBackBtn = document.getElementById('tech-back-btn');

function openTechGraph(tag) {
  const results = [];
  const source = espanol ? CONTENT_ES : CONTENT_EN;
  Object.entries(source).forEach(([sectionId, section]) => {
    section.cards.forEach((card, cardIndex) => {
      if (card.tags.includes(tag)) results.push({ sectionId, cardIndex, card, sectionTitle: section.title });
    });
  });
  techTagBadge.textContent = tag;
  techOverlay.classList.add('active');
  requestAnimationFrame(() => renderTechGraph(tag, results));
}

function closeTechGraph() {
  techOverlay.classList.remove('active');
  techSvg.innerHTML = '';
  techCanvasWrap.querySelectorAll('.tech-center-node, .tech-result-node').forEach(el => el.remove());
}

function renderTechGraph(tag, results) {
  techSvg.innerHTML = '';
  techCanvasWrap.querySelectorAll('.tech-center-node, .tech-result-node').forEach(el => el.remove());
  const W = techCanvasWrap.offsetWidth, H = techCanvasWrap.offsetHeight;
  const cx = W * 0.5, cy = H * 0.5, radius = Math.min(W, H) * 0.3;
  results.forEach((r, i) => {
    const angle = (2 * Math.PI * i / results.length) - Math.PI / 2;
    const tx = cx + radius * Math.cos(angle), ty = cy + radius * Math.sin(angle);
    ['tech-edge', 'tech-edge-bright'].forEach(cls => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', cx); line.setAttribute('y1', cy);
      line.setAttribute('x2', tx); line.setAttribute('y2', ty);
      line.setAttribute('class', cls); techSvg.appendChild(line);
    });
    const el = document.createElement('div');
    el.className = 'tech-result-node'; el.style.left = tx + 'px'; el.style.top = ty + 'px';
    el.innerHTML = `<div class="tech-result-circle"><div class="tech-result-section">${r.sectionTitle}</div><div class="tech-result-title">${r.card.title}</div></div>`;
    el.addEventListener('click', () => { closeTechGraph(); openPanel(r.sectionId); setTimeout(() => openModal(r.sectionId, r.cardIndex), 380); });
    techCanvasWrap.appendChild(el);
  });
  const centerEl = document.createElement('div');
  centerEl.className = 'tech-center-node'; centerEl.style.left = cx + 'px'; centerEl.style.top = cy + 'px';
  centerEl.innerHTML = `<div class="tech-center-circle"><span class="tech-center-label">${tag}</span></div>`;
  techCanvasWrap.appendChild(centerEl);
}
techBackBtn.addEventListener('click', closeTechGraph);

const tooltipEl = document.getElementById('tooltip');
function showTooltip(e, text) { tooltipEl.textContent = text; tooltipEl.style.opacity = '1'; moveTooltip(e); }
function moveTooltip(e) { tooltipEl.style.left = (e.clientX + 16) + 'px'; tooltipEl.style.top = (e.clientY - 10) + 'px'; }
function hideTooltip() { tooltipEl.style.opacity = '0'; }

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (techOverlay.classList.contains('active')) { closeTechGraph(); return; }
  if (modalOverlay.classList.contains('active')) { closeModal(); return; }
  if (panelEl.classList.contains('active')) { closePanel(); return; }
});

renderGraph();