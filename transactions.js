/* ===============================
   CMBOOKS – TRANSACTION ENGINE
================================ */

let transactions = JSON.parse(localStorage.getItem("cmbooks_transactions")) || [];

function saveTransactions() {
  localStorage.setItem("cmbooks_transactions", JSON.stringify(transactions));
}

function addTransaction(type, party, amount) {
  const transaction = {
    id: Date.now(),
    type,
    party,
    amount: parseFloat(amount),
    date: new Date().toISOString()
  };

  transactions.unshift(transaction);

  // AUTO POST TO LEDGER
  if (type === "sale") {
    postEntry("Accounts Receivable", "Sales", transaction.amount);
  }

  if (type === "purchase") {
    postEntry("Purchase", "Accounts Payable", transaction.amount);
  }

  if (type === "expense") {
    postEntry("Expenses", "Cash", transaction.amount);
  }

  saveTransactions();
  updateDashboard();
}

function getAllTransactions() {
  return transactions;
}
