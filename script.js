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

// Tampilkan durasi hubungan (jumlah hari bersama)
function hitungHariJadian() {
  const tanggalJadian = new Date("2024-12-25"); // ← Ganti tanggal jadian kalian
  const hariIni = new Date();
  
  // Hitung selisih waktu dalam milidetik
  const selisihWaktu = hariIni - tanggalJadian;

  // Konversi ke hari
  const hari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
  
  const output = `Sudah bersama selama 💗 ${hari} hari 💗`;
  document.getElementById("love-duration").textContent = output;
}

hitungHariJadian();
