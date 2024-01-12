import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  width: string;
}

const Card = ({ children, width }: CardProps) => {
  return (
    <div
      className={`rounded-[15px] px-[70px] py-[55px] bg-cardbg bg-opacity-25 flex flex-col max-w-${width} h-[650px]`}
    >
      {children}
    </div>
  );
};

export default Card;
