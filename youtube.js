// youtube.js
const apiKey = "AIzaSyC05S7rCzyWTR8Xn5WBw-SrflmF-kclO5Y";
const channelId = "UCJ8RxJgqv-UeXZbJbQaQ_TA";
const videoContainer = document.getElementById("youtubeVideos");

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=30`)
  .then(res => res.json())
  .then(data => {
    if (!data.items || data.items.length === 0) {
      videoContainer.innerHTML = "<p>No videos found.</p>";
      return;
    }

    videoContainer.innerHTML = ""; // ✅ remove "Loading videos..."
    data.items.forEach(item => {
      if (item.id.kind === "youtube#video") {
        videoContainer.innerHTML += `
          <div class="video-card">
            <iframe src="https://www.youtube.com/embed/${item.id.videoId}" allowfullscreen></iframe>
            <p>${item.snippet.title}</p>
          </div>`;
      }
    });
  })
  .catch(err => {
    console.error(err);
    videoContainer.innerHTML = "<p>Failed to load videos.</p>";
  });