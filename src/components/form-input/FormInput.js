import React from "react";
import "./form-input.styles.scss";

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
