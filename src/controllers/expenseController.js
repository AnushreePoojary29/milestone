// src/controllers/expenseController.js

const { addExpenseToDatabase, getExpensesFromDatabase, analyzeSpendingData } = require('../models/expenseModel');

// Add a new expense
const addExpense = (req, res) => {
  const { category, amount, date } = req.body;

  if (!category || !amount || !date) {
    return res.status(400).json({ status: "error", error: "All fields are required" });
  }

  if (amount <= 0) {
    return res.status(400).json({ status: "error", error: "Amount must be positive" });
  }

  addExpenseToDatabase(category, amount, date);
  return res.status(201).json({ status: "success", data: { category, amount, date } });
};

// Get expenses with filters
const getExpenses = (req, res) => {
  const { category, startDate, endDate } = req.query;
  const expenses = getExpensesFromDatabase(category, startDate, endDate);
  return res.json({ status: "success", data: expenses });
};

// Analyze spending
const analyzeSpending = (req, res) => {
  const analysis = analyzeSpendingData();
  return res.json({ status: "success", data: analysis });
};

module.exports = {
  addExpense,
  getExpenses,
  analyzeSpending,
};
