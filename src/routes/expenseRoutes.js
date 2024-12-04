// src/routes/expenseRoutes.js

// 

const express = require("express");
const router = express.Router();

// POST route to add an expense
router.post("/expenses", (req, res) => {
  const { category, amount, date } = req.body;

  if (!category || !amount || !date) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Here you would add logic to store the expense (e.g., in memory, database, etc.)
  return res.status(201).json({
    message: "Expense added successfully",
    data: { category, amount, date },
  });
});

module.exports = router;


