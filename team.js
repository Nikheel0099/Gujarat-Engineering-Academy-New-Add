// team.js
fetch("team.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("teamContainer");

    data.forEach(member => {
      const card = document.createElement("div");
      card.className = "team-card";

      card.innerHTML = `
        <img src="${member.photo}" alt="${member.name}" class="team-photo" />
        <h3>${member.name}</h3>
        <p>${member.role}</p>
        <div class="social-icons">
          ${member.whatsapp ? `<a href="https://wa.me/${member.whatsapp}" target="_blank"><img src="icons/whatsapp.png" class="icon" alt="WhatsApp" /></a>` : ''}
          ${member.instagram ? `<a href="${member.instagram}" target="_blank"><img src="icons/instagram.png" class="icon" alt="Instagram" /></a>` : ''}
          ${member.youtube ? `<a href="${member.youtube}" target="_blank"><img src="icons/youtube.png" class="icon" alt="YouTube" /></a>` : ''}
          ${member.telegram ? `<a href="${member.telegram}" target="_blank"><img src="icons/telegram.png" class="icon" alt="Telegram" /></a>` : ''}
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    document.getElementById("teamContainer").innerHTML = "<p>Error loading team data.</p>";
    console.error(err);
  });