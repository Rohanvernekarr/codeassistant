import { useState } from "react";
import axios from "axios";

export default function ChatBox({ code }) {
  const [response, setResponse] = useState("");

  const handleAskGemini = async () => {
    const res = await axios.post("http://localhost:5000/gemini/explain", { code });
    setResponse(res.data.reply);
  };

  return (
    <div>
      <button onClick={handleAskGemini}>Ask Gemini</button>
      <pre>{response}</pre>
    </div>
  );
}
