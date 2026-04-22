import React from "react";

function ResponseBox({ response }) {
  return (
    <div>
      <h3>Advice:</h3>
      <p>{response}</p>
    </div>
  );
}

export default ResponseBox;
