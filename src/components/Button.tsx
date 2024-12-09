// Button.tsx
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 14px 24px;
  font-size: 16px;
  font-weight: bold;
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 8px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  width: 100%;

  &:hover {
    background-color: #a29bfe;
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }
`;

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
