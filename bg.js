// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('budget-form');
    const budgetsList = document.getElementById('budgets-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const category = document.getElementById('budget-category').value;
        const amount = document.getElementById('budget-amount').value;

        if (category && amount) {
            addBudget(category, amount);
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    function addBudget(category, amount) {
        const budgetItem = document.createElement('li');
        budgetItem.classList.add('budget-item');
        budgetItem.innerHTML = `
            <strong>Category:</strong> ${category} <br>
            <strong>Amount:</strong> $${amount} <br>
        `;
        budgetsList.appendChild(budgetItem);
    }
});
