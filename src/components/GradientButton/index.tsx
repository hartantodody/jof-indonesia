import "./index.css";

interface GradientButtonProps {
  onClick: () => void;
  buttonText: string;
}

const GradientButton = ({ onClick, buttonText, ...props }: GradientButtonProps) => {
  return (
    <></>
    // <div className='container'>
    //   <button className='btn' onClick={onClick} data={buttonText} {...props}></button>
    // </div>
  );
};

export default GradientButton;
