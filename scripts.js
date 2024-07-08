
let expenses = [];
let investedExpenses = [];

const expenseForm = document.getElementById('myExpenseForm');
const investedExpenseForm = document.getElementById('myInvestedExpenseForm');
const expenseList = document.getElementById('myExpenseList');
const investedExpenseList = document.getElementById('myInvestedExpenseList');
const totalExpenses = document.getElementById('totalExpenses');
const totalInvestedExpenses = document.getElementById('totalInvestedExpenses');
const budgetLeft = document.getElementById('budgetLeft');

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
    
    if (expenseName && !isNaN(expenseAmount)) {
        const newExpense = {
            name: expenseName,
            amount: expenseAmount
        };
        expenses.push(newExpense);
        
       
        updateExpenseList();
        updateBudget();
        
      
        document.getElementById('expenseName').value = '';
        document.getElementById('expenseAmount').value = '';
    }
});

investedExpenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const investedExpenseName = document.getElementById('investedExpenseName').value;
    const investedExpenseAmount = parseFloat(document.getElementById('investedExpenseAmount').value);
    
    if (investedExpenseName && !isNaN(investedExpenseAmount)) {
        const newInvestedExpense = {
            name: investedExpenseName,
            amount: investedExpenseAmount
        };
        investedExpenses.push(newInvestedExpense);
        
       
        updateInvestedExpenseList();
        updateInvestedExpensesTotal();
        updateBudget();
        
        
        document.getElementById('investedExpenseName').value = '';
        document.getElementById('investedExpenseAmount').value = '';
    }
});

function updateExpenseList() {
    expenseList.innerHTML = '';
    expenses.forEach(function(expense, index) {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `<strong>${expense.name}</strong>: $${expense.amount}`;
        expenseList.appendChild(expenseItem);
    });
}

function updateInvestedExpenseList() {
    investedExpenseList.innerHTML = '';
    investedExpenses.forEach(function(expense, index) {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `<strong>${expense.name}</strong>: $${expense.amount}`;
        investedExpenseList.appendChild(expenseItem);
    });
}

function updateBudget() {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const investedTotal = investedExpenses.reduce((acc, expense) => acc + expense.amount, 0);
    const remainingBudget = 1000 - total - investedTotal; 
    
    totalExpenses.textContent = `$${total.toFixed(2)}`;
    totalInvestedExpenses.textContent = `$${investedTotal.toFixed(2)}`;
    budgetLeft.textContent = `$${remainingBudget.toFixed(2)}`;
}

function updateInvestedExpensesTotal() {
    const investedTotal = investedExpenses.reduce((acc, expense) => acc + expense.amount, 0);
    totalInvestedExpenses.textContent = `$${investedTotal.toFixed(2)}`;
}
