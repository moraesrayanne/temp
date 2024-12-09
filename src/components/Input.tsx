// Input.tsx
import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`;

const InputField = styled.input`
  padding: 14px 16px;
  font-size: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background-color: transparent;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  color: #fff;

  &:focus {
    border-color: #6c5ce7;
    box-shadow: 0 0 8px rgba(108, 92, 247, 0.2);
    outline: none;
  }

  &:hover {
    border-color: #a29bfe;
  }

  &::placeholder {
    color: #aaa;
    font-style: italic;
  }
`;

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  placeholder,
}) => {
  return (
    <div>
      <Label style={{ color: "#a29bfe" }}>{label}</Label>
      <InputField
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
