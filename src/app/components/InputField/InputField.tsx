import React from "react";
import styles from "./InputFields.module.css";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder = "",
  required = false,
  value,
  onChange,
  name,
}) => {
  return (
    <div className={styles.form_group}>
      <label htmlFor={label} className={styles.label}> {label} {required && <span className={styles.required}>*</span>}
      </label>


      <input
        id={label}
        name ={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={styles.input}
      ></input>
    </div>
  );
};

export default InputField;
