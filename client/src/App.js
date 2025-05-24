import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import ChatBox from "./components/ChatBox";

export default function Home() {
  const [code, setCode] = useState("// Start coding...");

  return (
    <>
      <CodeEditor code={code} setCode={setCode} />
      <ChatBox code={code} />
    </>
  );
}
