// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Example data (you would fetch real data from your backend)
    const incomes = [
        { amount: 100000 },
        { amount: income-amount },
    ];

    const expenses = [
        { amount: 100000 },
        { amount: expense-amount},
    ];

    // Calculate total income
    const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);

    // Calculate total expenses
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    // Calculate current balance
    const currentBalance = totalIncome - totalExpenses;

    // Display current balance on the page
    const balanceElement = document.getElementById('current-balance');
    balanceElement.textContent = `$${currentBalance.toFixed(2)}`;
});
