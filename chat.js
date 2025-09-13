const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Balasan bot 100+ keyword
function getBotReply(message) {
  const msg = message.toLowerCase();

  // Sapaan & perkenalan
  if (msg.includes("halo") || msg.includes("hai") || msg.includes("hello")) return "Halo! Apa kabar?";
  if (msg.includes("apa kabar")) return "Saya baik, terima kasih! Kamu gimana?";
  if (msg.includes("siapa kamu")) return "Saya NINZ STUDIO AI, asisten virtualmu 🤖";
  if (msg.includes("nama kamu")) return "Namaku NINZ STUDIO AI!";
  if (msg.includes("buat apa")) return "Saya dibuat untuk menemani dan membantu kamu.";
  if (msg.includes("siapa pembuatmu")) return "Saya dibuat oleh tim kreatif NINZ STUDIO 🛠";
  if (msg.includes("ninz studio")) return "NINZ STUDIO adalah rumah kreatif penuh ide 💡";

  // Perasaan & emosi
  if (msg.includes("senang")) return "Wah bagus dong! Senang itu harus dibagi 😊";
  if (msg.includes("sedih")) return "Jangan sedih, kamu tidak sendirian. Aku di sini 💙";
  if (msg.includes("marah")) return "Tenang, tarik napas dulu 😌";
  if (msg.includes("bosan")) return "Kalau bosan, coba hobi baru atau ngobrol sama saya 😉";
  if (msg.includes("capek")) return "Kalau capek, istirahat dulu ya 😴";
  if (msg.includes("ngantuk")) return "Tidur sebentar biar segar 🌙";

  // Aktivitas & hobi
  if (msg.includes("makan")) return "Saya tidak makan, tapi suka dengar cerita makanan 😋";
  if (msg.includes("minum")) return "Saya minum data setiap hari ☕";
  if (msg.includes("game")) return "Kamu main game apa? Saya suka dengar cerita game 🎮";
  if (msg.includes("musik")) return "Musik itu bikin semangat! Genre favoritmu apa? 🎶";
  if (msg.includes("film")) return "Film favoritmu apa? Saya suka nonton rekomendasi juga 🍿";
  if (msg.includes("baca")) return "Buku atau artikel favoritmu apa? 📚";

  // Pendidikan & pekerjaan
  if (msg.includes("sekolah")) return "Belajar itu penting, tetap semangat ya!";
  if (msg.includes("kerja")) return "Kerja keras bagus, tapi jangan lupa istirahat 🙂";
  if (msg.includes("kuliah")) return "Belajar giat ya, masa depan cerah menanti 🌟";

  // Waktu & tanggal
  if (msg.includes("jam")) return "Sekarang jam: " + new Date().toLocaleTimeString("id-ID");
  if (msg.includes("tanggal") || msg.includes("hari")) return "Hari ini: " + new Date().toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  // Lokasi & dunia
  if (msg.includes("dimana")) return "Saya ada di dunia digital 🌐";
  if (msg.includes("cuaca")) return "Cuaca selalu berubah, semoga harimu cerah ☀";

  // Interaksi & humor
  if (msg.includes("hehe") || msg.includes("haha") || msg.includes("wkwk")) return "Hehe 😄 kamu lucu juga!";
  if (msg.includes("stecu stecu")) return "Stecu stecu🦍🦍🦍";
  if (msg.includes("ok") || msg.includes("oke")) return "Oke, sip! 👍";

  // Ungkapan cinta & sayang
  if (msg.includes("cinta")) return "Cinta itu indah ❤";
  if (msg.includes("sayang")) return "Iya sayanggg 💖";

  // Terima kasih & perpisahan
  if (msg.includes("terima kasih") || msg.includes("thanks")) return "Sama-sama! Senang bisa membantu 🙌";
  if (msg.includes("bye") || msg.includes("dadah") || msg.includes("selamat tinggal")) return "Dadah! Sampai jumpa lagi 👋";

  // Identitas bot
  if (msg.includes("ai") || msg.includes("bot")) return "Ya, saya AI sederhana tapi selalu belajar!";
  if (msg.includes("teman")) return "Saya senang jadi teman ngobrolmu! 🤝";

  // Tambahan umum & random
  if (msg.includes("malam")) return "Selamat malam 🌙";
  if (msg.includes("pagi")) return "Selamat pagi! Semoga harimu cerah ☀";
  if (msg.includes("siang")) return "Selamat siang! Tetap semangat 💪";
  if (msg.includes("sore")) return "Selamat sore 🌇";
  if (msg.includes("kamu dimana")) return "Saya di server, selalu dekat denganmu 💻";
  if (msg.includes("lagi apa")) return "Sedang ngobrol denganmu 😉";
  if (msg.includes("favorit")) return "Favoritmu apa? Ceritakan dong! 😄";
  if (msg.includes("ingin")) return "Ceritakan lebih lanjut tentang itu ✨";
  if (msg.includes("bisa")) return "Saya akan berusaha membantu sebisa mungkin 👍";

  // Default jawaban kalau gak ketemu keyword
  return "Hmm... aku belum ngerti maksudmu. Bisa ceritakan lebih detail? 🤔";
}

// Event kirim pesan
sendBtn.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (text === "") return;

  addMessage("user", text);
  userInput.value = "";

  setTimeout(() => {
    const reply = getBotReply(text);
    addMessage("bot", reply);
  }, 700);
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
