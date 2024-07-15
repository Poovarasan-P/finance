// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('profile-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;

        // Example: Save profile data to localStorage or send to backend
        saveProfileData(name, email, phone);

        alert('Profile updated successfully!');
    });

    function saveProfileData(name, email, phone) {
        // Example: Save data to localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
    }

    // Load profile data if available
    function loadProfileData() {
        const savedName = localStorage.getItem('name');
        const savedEmail = localStorage.getItem('email');
        const savedPhone = localStorage.getItem('phone');

        if (savedName) {
            nameInput.value = savedName;
        }

        if (savedEmail) {
            emailInput.value = savedEmail;
        }

        if (savedPhone) {
            phoneInput.value = savedPhone;
        }
    }

    // Load profile data on page load
    loadProfileData();
});
