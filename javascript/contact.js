document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Ambil nilai dari input form
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Validasi untuk memastikan semua input terisi
  if (name === "" || email === "" || message === "") {
    alert("Harap isi semua field sebelum mengirim pesan.");
    return; // Hentikan proses jika ada input yang kosong
  }

  // Format pesan WhatsApp
  var whatsappMessage = `Hallo, nama saya ${name},\nEmail saya ${email},\nsaya ingin menyampaikan: ${message}`;

  // URL untuk membuka WhatsApp
  var whatsappUrl = `https://wa.me/6282127312767?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Buka URL WhatsApp di tab baru
  window.open(whatsappUrl, "_blank");
});
