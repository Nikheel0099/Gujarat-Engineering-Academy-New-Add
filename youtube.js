// youtube.js
const apiKey = "AIzaSyCRjBfTD3w4tmRAyoGxsLrKR9-DSJPTzWc";
const channelId = "UCJ8RxJgqv-UeXZbJbQaQ_TA";
const videoContainer = document.getElementById("youtubeVideos");

let nextPageToken = "";
let allVideos = [];

function fetchVideos(pageToken = "") {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20&pageToken=${pageToken}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      allVideos = allVideos.concat(data.items.filter(item => item.id.kind === "youtube#video"));

      if (data.nextPageToken) {
        fetchVideos(data.nextPageToken); // recursive fetch
      } else {
        renderVideos(allVideos);
      }
    })
    .catch(err => {
      console.error("Error loading videos: ", err);
      videoContainer.innerHTML = "<p style='color: red;'>📛 Failed to load videos. Please try again later.</p>";
    });
}

function renderVideos(videos) {
  videoContainer.innerHTML = "";
  videos.forEach(item => {
    videoContainer.innerHTML += `
      <div class="video-card">
        <iframe width="100%" height="250" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
        <p style="color:#F5D6A0; font-family:'Poppins'; font-size:16px; margin-top:10px;">
          ${item.snippet.title}
        </p>
      </div>`;
  });
}

fetchVideos(); // Initial Call