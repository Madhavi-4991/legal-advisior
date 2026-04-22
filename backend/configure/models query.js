const mongoose = require("mongoose");

const QuerySchema = new mongoose.Schema({
  userId: String,
  question: String,
  answer: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Query", QuerySchema);
