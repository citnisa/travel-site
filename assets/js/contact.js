document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  const formData = new FormData(this);

  fetch("https://script.google.com/macros/s/AKfycbyAsVkq-iq6PO3dXeYfmD0UF3VIvvc5fPEVCjV2y-ti-x9XxaWflgIi5TVQb5ec3UCgFw/exec", 
    { // replace with your Apps Script URL
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === "success") {
      window.location.href = "thank-you.html";;
      this.reset();
    } else {
      alert("Error: " + data.message);
    }
  })
  .catch(err => alert("Submission failed: " + err));
});
