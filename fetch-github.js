const fs = require('fs');
const https = require('https');

// Helper to fetch the Atom feed without external dependencies
function fetchAtom(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function fetchFeed() {
  const USERNAME = 'lautaorsi';
  const xml = await fetchAtom(`https://github.com/${USERNAME}.atom`);
  
  // Basic Regex parsing to get the info we need from the XML string
  const entries = xml.match(/<entry>([\s\S]*?)<\/entry>/g) || [];
  const activity = entries.slice(0, 10).map(entry => {
    const title = entry.match(/<title>(.*?)<\/title>/)[1];
    const link = entry.match(/href="(.*?)"/)[1];
    const date = entry.match(/<updated>(.*?)<\/updated>/)[1];
    
    // Clean up the title (e.g., "lautaorsi pushed to main in lautaorsi/repo")
    return {
      repo: title.split(' in ')[1] || 'unknown',
      message: title.replace(/<!\[CDATA\[|\]\]>/g, ''), // Strip XML CDATA
      date: date,
      url: link
    };
  }).filter(item => item.message.includes('pushed'));

  fs.writeFileSync('github-activity.json', JSON.stringify(activity, null, 2));
}

fetchFeed();