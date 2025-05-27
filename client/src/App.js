import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import ChatBox from "./components/ChatBox";
import "./App.css";

export default function Home() {
  const [code, setCode] = useState("// Start coding...");

  return (
    <div className="app-container">
      <div className="main-content">
        <h1 className="app-title">Code Assistant</h1>
        <div className="editor-container">
          <div className="editor-section">
            <CodeEditor code={code} setCode={setCode} />
          </div>
          <div className="editor-section">
            <ChatBox code={code} />
          </div>
        </div>
      </div>
    </div>
  );
}
