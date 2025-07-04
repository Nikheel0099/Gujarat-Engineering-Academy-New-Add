// youtube.js
const apiKey = "AIzaSyC05S7rCzyWTR8Xn5WBw-SrflmF-kclO5Y";
const channelId = "UCJ8RxJgqv-UeXZbJbQaQ_TA";
const videoContainer = document.getElementById("youtubeVideos");

let nextPageToken = "";
let allVideos = [];

function fetchVideos(pageToken = "") {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50&pageToken=${pageToken}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      allVideos = allVideos.concat(data.items.filter(item => item.id.kind === "youtube#video"));

      if (data.nextPageToken) {
        fetchVideos(data.nextPageToken);
      } else {
        renderVideos(allVideos);
      }
    })
    .catch(err => {
      console.error("Error loading videos: ", err);
      videoContainer.innerHTML = "<p>Failed to load videos.</p>";
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

fetchVideos();