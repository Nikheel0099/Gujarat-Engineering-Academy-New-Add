// youtube.js
const apiKey = "AIzaSyC05S7rCzyWTR8Xn5WBw-SrflmF-kclO5Y";
const channelId = "UCJ8RxJgqv-UeXZbJbQaQ_TA";

const videoContainer = document.getElementById("youtubeVideos");

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=30`)
  .then(response => response.json())
  .then(data => {
    if (!data.items || data.items.length === 0) {
      videoContainer.innerHTML = "<p>No videos found.</p>";
      return;
    }

    data.items.forEach(item => {
      if (item.id.kind === "youtube#video") {
        const videoId = item.id.videoId;
        const title = item.snippet.title;

        const card = `
          <div class="video-card">
            <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
            <p>${title}</p>
          </div>
        `;
        videoContainer.innerHTML += card;
      }
    });
  })
  .catch(error => {
    console.error("Error loading videos:", error);
    videoContainer.innerHTML = "<p>Failed to load videos.</p>";
  });