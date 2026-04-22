import React, { useState } from "react";
import API from "../api";

function QueryForm({ setResponse }) {
  const [question, setQuestion] = useState("");

  const submit = async () => {
    const token = localStorage.getItem("token");

    const res = await API.post(
      "/legal/ask",
      { question },
      { headers: { Authorization: token } }
    );

    setResponse(res.data.answer);
  };

  return (
    <div>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask legal question..."
      />
      <button onClick={submit}>Ask</button>
    </div>
  );
}

export default QueryForm;
