import GradientButton from "../GradientButton";
import { ModalProps } from "../../interfaces/interface";
import "../../styles/main.css";

const Modal = ({ text, buttonText, handleClose }: ModalProps) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center '>
      <div className='fixed inset-0 bg-black opacity-50' onClick={handleClose}></div>

      <div className='rounded-lg bg-black p-4 z-10 w-[400px] h-[250px] flex justify-center items-center flex-col modal-background'>
        <p className='text-title text-[28px] mb-[50px] text-center font-bold'>{text}</p>
        <GradientButton text={buttonText} type='button' onClick={handleClose} />
      </div>
    </div>
  );
};

export default Modal;
