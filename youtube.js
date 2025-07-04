// youtube.js (with smart fallback to playlist embed) const apiKey = "AIzaSyCRjBfTD3w4tmRAyoGxsLrKR9-DSJPTzWc"; // તમારા YouTube Data API v3 Key const channelId = "UCJ8RxJgqv-UeXZbJbQaQ_TA"; // Gujarat Engineering Academy Channel ID const videoContainer = document.getElementById("youtubeVideos");

let allVideos = [];

function fetchVideos(pageToken = "") { const url = https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50&pageToken=${pageToken};

fetch(url) .then(res => res.json()) .then(data => { if (!data.items) throw new Error("No videos found");

allVideos = allVideos.concat(data.items.filter(item => item.id.kind === "youtube#video"));

  if (data.nextPageToken) {
    fetchVideos(data.nextPageToken); // Fetch next page recursively
  } else {
    renderVideos(allVideos);
  }
})
.catch(err => {
  console.error("YouTube API Error:", err.message);
  fallbackToPlaylist();
});

}

function renderVideos(videos) { videoContainer.innerHTML = ""; videos.forEach(item => { videoContainer.innerHTML += <div class="video-card"> <iframe src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe> <p>${item.snippet.title}</p> </div>; }); }

function fallbackToPlaylist() { videoContainer.innerHTML = <p style="color: #ff4d4d; font-weight: bold; text-align: center;">📛 Failed to load videos via API. Loading from YouTube playlist...</p> <div style="display: flex; justify-content: center;"> <iframe width="100%" height="400" src="https://www.youtube.com/embed/videoseries?list=UUJ8RxJgqv-UeXZbJbQaQ_TA" frameborder="0" allowfullscreen></iframe> </div>; }

fetchVideos();

