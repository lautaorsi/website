const fs = require('fs');
const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Node-Action' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function fetchFeed() {
  const xml = await fetchUrl('https://github.com/lautaorsi.atom');
  
  // Split the feed into individual <entry> blocks
  const entries = xml.split('<entry>').slice(1);
  
  const activity = entries.map(entry => {
    const title = entry.split('<title type="html">')[1].split('</title>')[0];
    const link = entry.split('rel="alternate" href="')[1].split('"')[0];
    const date = entry.split('<published>')[1].split('</published>')[0];
    
    // Extract commit message from blockquote
    // 1. Get the content part
    let content = entry.split('<content type="html">')[1].split('</content>')[0];

    // 2. Decode HTML entities (replace &lt; with <, etc.)
    content = content.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

    // 3. Extract the message from inside the blockquote
    const msgMatch = content.match(/<blockquote>\s*(.*?)\s*<\/blockquote>/s);
    const message = msgMatch ? msgMatch[1] : 'No message';

    return {
      repo: title.replace('lautaorsi pushed ', ''),
      message: message,
      date: date,
      url: link
    };
  }).filter(item => item.repo !== 'website'); // Optional: exclude this repo itself

  fs.writeFileSync('github-activity.json', JSON.stringify(activity.slice(0, 10), 2, 2));
}

fetchFeed().catch(err => { console.error(err); process.exit(1); });