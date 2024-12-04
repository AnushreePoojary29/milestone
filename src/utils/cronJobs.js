// src/utils/cronJobs.js

const cron = require("node-cron");
const { getExpensesFromDatabase } = require("../models/expenseModel");

// Cron job to generate weekly report every Monday at noon
cron.schedule("0 12 * * MON", () => {
  const lastWeekDate = new Date();
  lastWeekDate.setDate(lastWeekDate.getDate() - 7);
  const weeklyExpenses = getExpensesFromDatabase(null, lastWeekDate.toISOString(), new Date().toISOString());
  console.log("Weekly Expense Summary:", weeklyExpenses);
});
