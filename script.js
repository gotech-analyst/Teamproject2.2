// Mobile Navigation Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('error-message');

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        errorMessage.textContent = "All fields are required!";
        return false;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address!";
        return false;
    }

    errorMessage.textContent = "";
    alert("Form submitted successfully!");
    return true;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}