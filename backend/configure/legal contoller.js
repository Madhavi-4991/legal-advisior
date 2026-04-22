const Query = require("../models/Query");
const getLegalAdvice = require("../utils/legalEngine");

exports.askQuestion = async (req, res) => {
  const { question } = req.body;

  const answer = getLegalAdvice(question);

  const query = await Query.create({
    userId: req.user.id,
    question,
    answer
  });

  res.json(query);
};
