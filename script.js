document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById('mode-toggle');
  const body = document.body;
  const filter = document.getElementById('filter');
  const items = document.querySelectorAll('.item');

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    toggleBtn.textContent = body.classList.contains('dark') ? '☀️ Mode Terang' : '🌙 Mode Gelap';
  });

  filter.addEventListener('change', () => {
    const value = filter.value;
    items.forEach(item => {
      if (value === 'all' || item.dataset.moment === value) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });

  // Lightbox logic
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.querySelector(".lightbox .close");

  document.querySelectorAll(".item img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      const caption = img.parentElement.querySelector(".caption").textContent;
      lightboxCaption.textContent = caption;
      lightbox.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  // Tampilkan durasi hubungan
  function hitungHariJadian() {
    const tanggalJadian = new Date("2024-12-25"); // Ganti sesuai tanggal jadianmu
    const hariIni = new Date();
    const selisihWaktu = hariIni - tanggalJadian;
    const hari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
    const output = `Sudah bersama selama 💗 ${hari} hari 💗`;
    document.getElementById("love-duration").textContent = output;
  }

  hitungHariJadian();

  // Halaman Rahasia
  const unlockBtn = document.getElementById('unlock-btn');
  const secretInput = document.getElementById('secret-code');
  const secretMsg = document.getElementById('secret-msg');
  const secretContent = document.getElementById('secret-content');

  const kodeRahasia = "251224"; // contoh: 25 Desember 2024

  unlockBtn.addEventListener("click", () => {
    const kodeMasuk = secretInput.value.trim();
    if (kodeMasuk === kodeRahasia) {
      secretContent.style.display = "block";
      secretMsg.textContent = "✅ Kode benar, halaman rahasia dibuka!";
      secretMsg.style.color = "green";
    } else {
      secretMsg.textContent = "❌ Salah dong sayang 😅";
      secretMsg.style.color = "red";
      secretContent.style.display = "none";
    }
  });
});
