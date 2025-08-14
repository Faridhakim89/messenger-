const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const adBtn = document.getElementById("show-ad-btn");

sendBtn.addEventListener("click", () => {
    const msg = input.value.trim();
    if (msg) {
        const p = document.createElement("p");
        p.textContent = msg;
        chatBox.appendChild(p);
        chatBox.scrollTop = chatBox.scrollHeight;
        input.value = "";
    }
});

// Tampilkan iklan rewarded saat tombol ditekan
adBtn.addEventListener("click", () => {
    if (typeof show_9713817 === "function") {
        show_9713817().then(() => {
            alert("Terima kasih! Kamu sudah menonton iklan.");
            // Tambahkan reward user di sini
        }).catch(e => {
            console.error("Gagal memutar iklan:", e);
            alert("Iklan gagal dimuat, coba lagi.");
        });
    } else {
        alert("Iklan belum siap dimuat.");
    }
});
