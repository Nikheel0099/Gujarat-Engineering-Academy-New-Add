// youtube.js
const apiKey = "AIzaSyC05S7rCzyWTR8Xn5WBw-SrflmF-kclO5Y"; // અહીં પોતાની API KEY મૂકો
const channelId = "UCJ8RxJgqv-UeXZbJbQaQ_TA";
const videoContainer = document.getElementById("youtubeVideos");

async function fetchAllVideos(pageToken = "") {
  const url = `https://www.googleapis.com/youtube/v3/search?` + 
    `key=${apiKey}&channelId=${channelId}` +
    `&part=snippet,id&order=date&maxResults=50&pageToken=${pageToken}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.error) {
      console.error("YouTube API error:", data.error);
      videoContainer.innerHTML = `<p>Failed to load videos. (${data.error.message})</p>`;
      return;
    }
    const videos = data.items.filter(i => i.id.kind === "youtube#video");
    videos.forEach(item => {
      const div = document.createElement("div");
      div.className = "video-card";
      div.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${item.id.videoId}" allowfullscreen></iframe>
        <p>${item.snippet.title}</p>
      `;
      videoContainer.appendChild(div);
    });
    if (data.nextPageToken) {
      await fetchAllVideos(data.nextPageToken);
    }
  } catch(e) {
    console.error("Fetch error:", e);
    videoContainer.innerHTML = "<p>Failed to load videos.</p>";
  }
}

fetchAllVideos();