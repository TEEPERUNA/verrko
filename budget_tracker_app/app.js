let transactions = [];


const form = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const transactionList = document.getElementById('transaction-list');
const balanceDisplay = document.getElementById('balance');


form.addEventListener('submit', function(e) {
  e.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (!description || isNaN(amount)) {
    alert('Please enter a valid description and amount.');
    return;
  }


  const transaction = {
    id: Date.now(),
    description,
    amount
  };

  transactions.push(transaction);

  // Update UI
  updateUI();

  descriptionInput.value = '';
  amountInput.value = '';
});

function updateUI() {

  transactionList.innerHTML = '';

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach(transaction => {
    const li = document.createElement('li');
    li.classList.add(transaction.amount >= 0 ? 'income' : 'expense');
    li.innerHTML = `
      <span>${transaction.description}: $${Math.abs(transaction.amount).toFixed(2)}</span>
      <button onclick="deleteTransaction(${transaction.id})">x</button>
    `;
    transactionList.appendChild(li);

    if (transaction.amount >= 0) {
      totalIncome += transaction.amount;
    } else {
      totalExpense += transaction.amount;
    }
  });

  const currentBalance = totalIncome + totalExpense;
  balanceDisplay.textContent = `$${currentBalance.toFixed(2)}`;
}


function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  updateUI();
}