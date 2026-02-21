"use client";

import { useRouter } from "next/navigation";

interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor = "secondary-bg",
  textColor = "white",
  onClick,
  href,
  type = "button",
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href, { scroll: false });
    } else {
      onClick?.();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`text-sm flex gap-2 justify-center items-center w-full bg-${backgroundColor} text-${textColor} p-3 rounded-md cursor-pointer hover:opacity-95 hover:scale-98 transition-all ease-in`}
    >
      {children}
    </button>
  );
};

export default Button;
