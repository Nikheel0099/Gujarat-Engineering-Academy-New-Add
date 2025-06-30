const apiKey = "AIzaSyC05S7rCzyWTR8Xn5WBw-SrflmF-kclO5Y"; // Your YouTube API Key
const channelId = "UC_4jG8K5YzQfGk3SJwB7BoA"; // Your channel ID

const videoContainer = document.getElementById("video-list");

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=6`)
  .then(response => response.json())
  .then(data => {
    data.items.forEach(item => {
      if (item.id.kind === "youtube#video") {
        const videoId = item.id.videoId;
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        videoContainer.appendChild(iframe);
      }
    });
  })
  .catch(err => {
    videoContainer.innerHTML = "<p>Something went wrong while loading videos.</p>";
    console.error(err);
  });
