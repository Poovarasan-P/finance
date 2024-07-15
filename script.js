// script.js
document.getElementById('add-transaction').addEventListener('click', function() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;
    
    if (description && !isNaN(amount)) {
        addTransaction(description, amount, type);
        updateBalance();
    } else {
        alert('Please fill out all fields correctly.');
    }
});

let transactions = [];

function addTransaction(description, amount, type) {
    const transaction = {
        id: generateId(),
        description,
        amount,
        type
    };
    transactions.push(transaction);
    addTransactionToDOM(transaction);
}

function generateId() {
    return Math.floor(Math.random() * 1000000);
}

function addTransactionToDOM(transaction) {
    const transactionList = document.getElementById('transaction-list');
    const item = document.createElement('li');
    item.classList.add(transaction.type === 'income' ? 'income' : 'expense');
    item.innerHTML = `
        ${transaction.description} 
        <span>${transaction.type === 'income' ? '+' : '-'}$${transaction.amount.toFixed(2)}</span>
    `;
    transactionList.appendChild(item);
}

function updateBalance() {
    const balanceAmount = transactions.reduce((acc, transaction) => {
        return transaction.type === 'income' ? acc + transaction.amount : acc - transaction.amount;
    }, 0);
    
    document.getElementById('balance-amount').textContent = `$${balanceAmount.toFixed(2)}`;
}
