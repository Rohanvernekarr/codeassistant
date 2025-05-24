const axios = require("axios");

const getExplanation = async (code) => {
  const prompt = `Explain what this code does:\n${code}`;
  const endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + process.env.GEMINI_API_KEY;

  const response = await axios.post(endpoint, {
    contents: [{ parts: [{ text: prompt }] }]
  });

  return response.data.candidates[0].content.parts[0].text;
};

module.exports = { getExplanation };
