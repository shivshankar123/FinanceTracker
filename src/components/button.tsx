import React from "react";

function Button({ text, onClick, red, name }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${red ? "btn-error" : "btn-primary"} w-full ${name}`}
    >
      {text}
    </button>
  );
}

export default Button;
