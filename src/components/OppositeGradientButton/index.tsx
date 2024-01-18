import React from "react";
import "./index.css";

interface OppositeGradientButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
  type: "submit" | "reset" | "button" | undefined;
}

const OppositeGradientButton: React.FC<OppositeGradientButtonProps> = ({ onClick, text, className, type }) => {
  return (
    <button className={`opposite-btn font-bold ${className}`} onClick={onClick} type={type}>
      <span className='opposite-gradient-text'>{text}</span>
    </button>
  );
};

export default OppositeGradientButton;
