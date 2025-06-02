document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Replace with your actual WhatsApp number in international format, without '+' or spaces
  const phoneNumber = "254721924010"; // e.g. Kenya number

  // Collect form data
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Format the message
  const whatsappMessage = `*From Your Website:*   Hello Gicha Expeditions,%0AMy name is *${name}*.%0A${message}`;

  // Open WhatsApp chat
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  window.open(whatsappURL, "_blank");
});
