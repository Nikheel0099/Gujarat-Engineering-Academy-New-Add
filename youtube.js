// youtube.js (Working + Styled as original)
const apiKey = "AIzaSyC05S7rCzyWTR8Xn5WBw-SrflmF-kclO5Y";
const channelId = "UCJ8RxJgqv-UeXZbJbQaQ_TA";
const videoContainer = document.getElementById("youtubeVideos");

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=12`)
  .then(res => res.json())
  .then(data => {
    const videos = data.items.filter(item => item.id.kind === "youtube#video");
    if (videos.length === 0) {
      videoContainer.innerHTML = "<p>No videos found.</p>";
      return;
    }

    videoContainer.innerHTML = videos.map(video => `
      <div class="video-card">
        <iframe width="100%" height="215" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
        <p style="margin-top: 5px; font-weight: bold;">${video.snippet.title}</p>
      </div>
    `).join('');
  })
  .catch(error => {
    console.error("Failed to fetch videos:", error);
    videoContainer.innerHTML = "<p style='color: red;'>Failed to load videos.</p>";
  });