document.getElementById("enrollmentForm").addEventListener("submit", function (e) {
  // Prevent default form submission
  e.preventDefault();

  // Collect form data
  const formData = new FormData(this);

  // Submit form data using Fetch API
  fetch("https://formsubmit.co/el/tehufu", {
    method: "POST",
    body: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then((response) => {
      if (response.ok) {
        alert("Form submitted successfully!");
        this.reset(); // Reset the form
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    })
    .catch(() => {
      alert("Network error. Please check your connection and try again.");
    });
});
