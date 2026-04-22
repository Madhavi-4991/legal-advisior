// Basic rule-based responses (replace with AI later)

const getLegalAdvice = (question) => {
  question = question.toLowerCase();

  if (question.includes("divorce")) {
    return "Under Indian law, divorce can be filed under Hindu Marriage Act or Special Marriage Act depending on your case.";
  }

  if (question.includes("property")) {
    return "Property disputes are governed by Transfer of Property Act and local land laws.";
  }

  if (question.includes("police")) {
    return "You have the right to remain silent and request a lawyer before answering.";
  }

  return "Please consult a qualified lawyer for detailed legal advice.";
};

module.exports = getLegalAdvice;
