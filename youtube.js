// youtube.js
const apiKey = "AIzaSyC05S7rCzyWTR8Xn5WBw-SrflmF-kclO5Y"; // તમારું YouTube API Key
const channelId = "UCJ8RxJgqv-UeXZbJbQaQ_TA"; // તમારું ચેનલ ID

const videoContainer = document.getElementById("youtubeVideos");

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=6`)
  .then(response => response.json())
  .then(data => {
    if (data.items.length === 0) {
      videoContainer.innerHTML = "<p>No videos found.</p>";
      return;
    }

    data.items.forEach(item => {
      if (item.id.kind === "youtube#video") {
        const videoId = item.id.videoId;
        const videoTitle = item.snippet.title;
        const video = `
          <div class="video-card">
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            <p>${videoTitle}</p>
          </div>
        `;
        videoContainer.innerHTML += video;
      }
    });
  })
  .catch(error => {
    console.error("Error fetching videos:", error);
    videoContainer.innerHTML = "<p>Failed to load videos.</p>";
  });