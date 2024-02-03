import "./index.css";
import "../../styles/main.css";

interface OppositeGradientButtonProps {
  onClick?: () => void;
  text: string;
  className?: string;
  type: "submit" | "reset" | "button" | undefined;
}

const GradientButton: React.FC<OppositeGradientButtonProps> = ({ onClick, text, className, type }) => {
  return (
    <>
      <button className={`btn font-bold ${className}`} onClick={onClick} type={type}>
        <span className='gradient-text'>{text}</span>
      </button>
    </>
  );
};

export default GradientButton;
