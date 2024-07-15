// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('expense-form');
    const expensesList = document.getElementById('expenses-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const category = document.getElementById('expense-category').value;
        const description = document.getElementById('expense-description').value;
        const amount = document.getElementById('expense-amount').value;
        const date = document.getElementById('expense-date').value;

        if (category && description && amount && date) {
            addExpense(category, description, amount, date);
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    function addExpense(category, description, amount, date) {
        const expenseItem = document.createElement('li');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <strong>Category:</strong> ${category} <br>
            <strong>Description:</strong> ${description} <br>
            <strong>Amount:</strong> $${amount} <br>
            <strong>Date:</strong> ${date} <br>
        `;
        expensesList.appendChild(expenseItem);
    }
});
