import React from "react";
import { InputProps } from "../types/Form";
import "./Input.css";

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type,
  placeholder,
  className,
  id,
  style
}) => {
  return (
    //container
    // <div className="Input container-fluid">
    <input
      autoComplete="on"
      className={className}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      id={id}
      type={type}
      placeholder={placeholder}
      style={style}
    ></input>
    // </div>
  );
};

export default Input;
