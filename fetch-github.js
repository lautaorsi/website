// fetch-github.js
const fs = require('fs');

async function fetchFeed() {
  const USERNAME = 'lautaorsi';
  // IMPORTANT: Change this path if your static files live in a specific folder like 'public/' or 'dist/'
  const OUTPUT_FILE = 'github-activity.json'; 
  
  const response = await fetch(`https://api.github.com/users/${USERNAME}/events/public`, {
    headers: {
      'User-Agent': 'Portfolio-Build-Script',
      'Accept': 'application/vnd.github.v3+json',
      // GitHub Actions provides this token automatically to bypass the 60/hr limit
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}` 
    }
  });

  if (!response.ok) throw new Error(`API error: ${response.status}`);

  const events = await response.json();
  const pushEvents = events.filter(e => e.type === 'PushEvent');
  
  const activity = [];
  for (const event of pushEvents) {
    const repoFullName = event.repo.name;
    const repoName = repoFullName.split('/')[1];
    
    // The events API provides the commits directly in the payload
    const commits = event.payload.commits || [];
    
    // Reverse to show the newest commits first
    for (const commit of commits.reverse()) {
      activity.push({
        repo: repoName,
        message: commit.message.split('\n')[0], // Grab just the first line
        date: event.created_at,
        url: `https://github.com/${repoFullName}/commit/${commit.sha}`
      });
      if (activity.length >= 10) break;
    }
    if (activity.length >= 10) break;
  }
  
  // Write the clean data to a local file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(activity, null, 2));
  console.log(`Saved ${activity.length} commits to ${OUTPUT_FILE}`);
}

fetchFeed().catch(console.error);