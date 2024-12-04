// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Welcome to the Expense Tracker API");
// });

// module.exports = app;


const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.json()); // Express built-in JSON parsing
const expenseRoutes = require("./routes/expenseRoutes"); // Import routes file
app.use("/api", expenseRoutes); // Make sure routes are prefixed with /api


// POST route for adding an expense
app.post("/api/expenses", (req, res) => {
  const { category, amount, date } = req.body;

  if (!category || !amount || !date) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // If all fields are valid, send a success response
  res.status(201).json({
    message: "Expense added successfully",
    data: { category, amount, date },
  });
});

// Home route to confirm server is working
app.get("/", (req, res) => {
  res.send("Welcome to the Expense Tracker API");
});

module.exports = app;

