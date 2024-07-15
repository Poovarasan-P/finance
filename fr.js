// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Example data (you would fetch real data from your backend)
    const incomes = [
        { amount: 1500 },
        { amount: 2000 },
    ];

    const expenses = [
        { amount: 500 },
        { amount: 1000 },
    ];

    // Calculate total income
    const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);

    // Calculate total expenses
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    // Calculate current balance
    const currentBalance = totalIncome - totalExpenses;

    // Display totals on the page
    document.getElementById('total-income').textContent = `$${totalIncome.toFixed(2)}`;
    document.getElementById('total-expenses').textContent = `$${totalExpenses.toFixed(2)}`;
    document.getElementById('current-balance').textContent = `$${currentBalance.toFixed(2)}`;
});
