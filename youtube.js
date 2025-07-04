// youtube.js
const apiKey = "AIzaSyC05S7rCzyWTR8Xn5WBw-SrflO5Y"; // YouTube API Key
const channelId = "UCJ8RxJgqv-UeXZbJbQaQ_TA";
const container = document.getElementById("youtubeVideos");
let allVideos = [];
let nextToken = "";

function fetchVideos(pageToken = "") {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50&pageToken=${pageToken}`;
  fetch(url).then(r => r.json()).then(data => {
    allVideos = allVideos.concat(data.items.filter(i => i.id.kind === "youtube#video"));
    if (data.nextPageToken) fetchVideos(data.nextPageToken);
    else showVideos();
  }).catch(e => {
    console.error(e);
    container.innerHTML = "<p>Failed to load videos.</p>";
  });
}

function showVideos() {
  container.innerHTML = "";
  allVideos.forEach(v => {
    const div = document.createElement("div");
    div.className = "video-card";
    div.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${v.id.videoId}" allowfullscreen></iframe>
      <p>${v.snippet.title}</p>
    `;
    container.append(div);
  });
}

fetchVideos();