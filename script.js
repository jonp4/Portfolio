// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Find the target section
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    });
});

// Form Submission Alert
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
    alert('Thank you for reaching out! I will get back to you soon.'); // Show an alert
    this.reset(); // Clear the form fields
});