import React from "react";

function Input({ label, state, setState, placeholder }) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
}

export default Input;
