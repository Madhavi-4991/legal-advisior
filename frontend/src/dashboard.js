import React, { useState } from "react";
import QueryForm from "../components/QueryForm";
import ResponseBox from "../components/ResponseBox";

function Dashboard() {
  const [response, setResponse] = useState("");

  return (
    <div>
      <h1>Legal Advisor</h1>
      <QueryForm setResponse={setResponse} />
      <ResponseBox response={response} />
    </div>
  );
}

export default Dashboard;
