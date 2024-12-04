// src/models/expenseModel.js

let expenses = [];  // This will be an in-memory "database"

// Add expense to the "database"
const addExpenseToDatabase = (category, amount, date) => {
  const newExpense = { id: expenses.length + 1, category, amount, date };
  expenses.push(newExpense);
};

// Get expenses from the "database"
const getExpensesFromDatabase = (category, startDate, endDate) => {
  return expenses.filter(expense => {
    let isValid = true;
    if (category) isValid = isValid && expense.category === category;
    if (startDate) isValid = isValid && new Date(expense.date) >= new Date(startDate);
    if (endDate) isValid = isValid && new Date(expense.date) <= new Date(endDate);
    return isValid;
  });
};

// Analyze spending (total by category)
const analyzeSpendingData = () => {
  const analysis = {};
  expenses.forEach(expense => {
    if (!analysis[expense.category]) analysis[expense.category] = 0;
    analysis[expense.category] += expense.amount;
  });
  return analysis;
};

module.exports = {
  addExpenseToDatabase,
  getExpensesFromDatabase,
  analyzeSpendingData,
};
