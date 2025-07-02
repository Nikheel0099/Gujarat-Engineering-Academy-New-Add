// home.js
const channelId = "UCXl7e6EJhJkzPgSTqNVE7FA"; // તમારા YouTube ચેનલનું ID મુકવું
const maxResults = 6; // કેટલાં video લોડ કરવા છે

const apiKey = "AIzaSyAmGSYe-IOkba8to5KglWQwtWDoYeWa-n0"; // તમારું YouTube API Key

const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("videosContainer");
    container.innerHTML = ""; // Clear Loading...
    data.items.forEach(item => {
      if (item.id.kind === "youtube#video") {
        const videoId = item.id.videoId;
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allowFullscreen = true;
        iframe.className = "video";
        container.appendChild(iframe);
      }
    });
  })
  .catch(err => {
    document.getElementById("videosContainer").innerText = "Failed to load videos.";
    console.error("YouTube API Error:", err);
  });