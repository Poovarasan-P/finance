// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('settings-form');
    const currencySelect = document.getElementById('currency');
    const themeSelect = document.getElementById('theme');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const currency = currencySelect.value;
        const theme = themeSelect.value;

        // Example: Save settings to localStorage or send to backend
        saveSettings(currency, theme);

        alert('Settings saved successfully!');
    });

    function saveSettings(currency, theme) {
        // Example: Save data to localStorage
        localStorage.setItem('currency', currency);
        localStorage.setItem('theme', theme);

        // Apply theme changes (if applicable)
        applyTheme(theme);
    }

    function applyTheme(theme) {
        document.body.className = theme; // Assuming you have predefined CSS classes for themes
    }

    // Load saved settings on page load
    function loadSettings() {
        const savedCurrency = localStorage.getItem('currency');
        const savedTheme = localStorage.getItem('theme');

        if (savedCurrency) {
            currencySelect.value = savedCurrency;
        }

        if (savedTheme) {
            themeSelect.value = savedTheme;
            applyTheme(savedTheme);
        }
    }

    // Load settings on page load
    loadSettings();
});
