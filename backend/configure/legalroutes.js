const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { askQuestion } = require("../controllers/legalController");

router.post("/ask", auth, askQuestion);

module.exports = router;
