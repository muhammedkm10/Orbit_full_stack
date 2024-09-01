import React from "react";
import styles from "./registration-input.module.css";

function RegistrationInput({ placeholder, type, onChange, value, name }) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
}

export default RegistrationInput;
