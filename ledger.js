/* ===============================
   CMBOOKS – LEDGER ENGINE
================================ */

let accounts = JSON.parse(localStorage.getItem("cmbooks_accounts")) || [
  { id: 1, name: "Cash", type: "asset", debit: 0, credit: 0 },
  { id: 2, name: "Bank", type: "asset", debit: 0, credit: 0 },
  { id: 3, name: "Accounts Receivable", type: "asset", debit: 0, credit: 0 },
  { id: 4, name: "Accounts Payable", type: "liability", debit: 0, credit: 0 },
  { id: 5, name: "Sales", type: "income", debit: 0, credit: 0 },
  { id: 6, name: "Purchase", type: "expense", debit: 0, credit: 0 },
  { id: 7, name: "Expenses", type: "expense", debit: 0, credit: 0 },
  { id: 8, name: "Capital", type: "equity", debit: 0, credit: 0 }
];

function saveAccounts() {
  localStorage.setItem("cmbooks_accounts", JSON.stringify(accounts));
}

function postEntry(debitAccount, creditAccount, amount) {
  const debit = accounts.find(a => a.name === debitAccount);
  const credit = accounts.find(a => a.name === creditAccount);

  if (!debit || !credit) {
    console.error("Account not found");
    return;
  }

  debit.debit += amount;
  credit.credit += amount;

  saveAccounts();
}

function getBalance(accountName) {
  const acc = accounts.find(a => a.name === accountName);
  if (!acc) return 0;

  if (acc.type === "asset" || acc.type === "expense") {
    return acc.debit - acc.credit;
  } else {
    return acc.credit - acc.debit;
  }
}

function resetLedger() {
  localStorage.removeItem("cmbooks_accounts");
  location.reload();
}
