// src/utils/validators.js

const validateExpense = (category, amount) => {
    const validCategories = ["Food", "Travel", "Shopping", "Exercise"];
    if (!validCategories.includes(category)) {
      return { isValid: false, message: "Invalid category" };
    }
    if (amount <= 0) {
      return { isValid: false, message: "Amount must be positive" };
    }
    return { isValid: true };
  };
  
  module.exports = {
    validateExpense,
  };
  