import { useState } from "react";
import axios from "axios";

export default function ChatBox({ code }) {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAskGemini = async () => {
    try {
      setIsLoading(true);
      setError("");
      const res = await axios.post("http://localhost:5000/gemini/explain", { code });
      setResponse(res.data.reply);
    } catch (error) {
      setError("Error: " + error.message);
      setResponse("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="section-title">AI Assistant</h2>
      <div className="chat-response">
        {response ? (
          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>{response}</pre>
        ) : (
          <p className="chat-placeholder">Ask AI to explain your code...</p>
        )}
      </div>
      {error && <p className="error-message">{error}</p>}
      <button
        onClick={handleAskGemini}
        disabled={isLoading}
        className="chat-button"
      >
        {isLoading ? "Processing..." : "Get Explanation"}
      </button>
    </div>
  );
}
