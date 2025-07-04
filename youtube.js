// youtube.js (with fallback)
const apiKey = "AIzaSyCRjBfTD3w4tmRAyoGxsLrKR9-DSJPTzWc"; // તમારા નવા API Key
const channelId = "UCJ8RxJgqv-UeXZbJbQaQ_TA"; // Gujarat Engineering Academy Channel
const videoContainer = document.getElementById("youtubeVideos");

let nextPageToken = "";
let allVideos = [];

function fetchVideos(pageToken = "") {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50&pageToken=${pageToken}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.items) throw new Error("No videos found");

      allVideos = allVideos.concat(data.items.filter(item => item.id.kind === "youtube#video"));

      if (data.nextPageToken) {
        fetchVideos(data.nextPageToken); // Recursive call
      } else {
        renderVideos(allVideos);
      }
    })
    .catch(err => {
      console.error("❌ YouTube API error:", err.message);

      // fallback to embedded playlist
      videoContainer.innerHTML = `
        <p style="color: #ff4d4d; font-weight: bold;">📛 API quota exceeded or failed. Loading fallback videos...</p>
        <iframe 
          src="https://www.youtube.com/embed?listType=user_uploads&list=${channelId}"
          width="100%" height="400"
          frameborder="0" allowfullscreen>
        </iframe>
      `;
    });
}

function renderVideos(videos) {
  videoContainer.innerHTML = "";
  videos.forEach(item => {
    videoContainer.innerHTML += `
      <div class="video-card">
        <iframe src="https://www.youtube.com/embed/${item.id.videoId}" allowfullscreen></iframe>
        <p>${item.snippet.title}</p>
      </div>`;
  });
}

fetchVideos(); // Initial call 