const express = require("express");
const router = express.Router();
const { getExplanation } = require("../services/geminiService");

router.post("/explain", async (req, res) => {
  const { code } = req.body;
  const reply = await getExplanation(code);
  res.json({ reply });
});

module.exports = router;
