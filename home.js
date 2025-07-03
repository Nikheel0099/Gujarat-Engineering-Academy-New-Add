// Home.js

const videosContainer = document.getElementById("videosContainer");

// સચોટ Uploads Playlist ID
const uploadsPlaylistId = "UUJ8RxJgqv-UeXZbJbQaQ_TA";

// તમારું YouTube API Key
const apiKey = "AIzaSyAmGSYe-IOkba8to5KglWQwtWDoYeWa-n0";

fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${uploadsPlaylistId}&key=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    videosContainer.innerHTML = ""; 
    if (!data.items || data.items.length === 0) {
      videosContainer.textContent = "No videos found yet.";
      return;
    }
    data.items.forEach(item => {
      const vId = item.snippet.resourceId.videoId;
      const title = item.snippet.title;
      videosContainer.innerHTML += `
        <div style="margin-bottom:20px;">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/${vId}" frameborder="0" allowfullscreen></iframe>
          <p style="color:#FFE4B5;">${title}</p>
        </div>`;
    });
  })
  .catch(err => {
    console.error("YouTube API error:", err);
    videosContainer.textContent = "Failed to load videos.";
  });