"use client";

import { useRouter } from "next/navigation";

interface ButtonProps {
  content: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  typeOfClickEvent: "navigate" | "action";
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  content,
  backgroundColor = "secondary-bg",
  textColor = "white",
  typeOfClickEvent = "action",
  onClick,
  href,
}) => {
  const router = useRouter();
  if (typeOfClickEvent === "navigate") {
    onClick = () => {
      if (href) {
        router.push(href, { scroll: false });
      } else {
        throw new Error(`Attribute is ${href} now. Please enter a valid href!`);
      }
    };
  }
  return (
    <button
      onClick={onClick}
      className={`text-sm flex gap-2 justify-center items-center w-full bg-${backgroundColor} text-${textColor} p-3 rounded-md cursor-pointer hover:opacity-95 hover:scale-98 transition-all ease-in`}
    >
      {content}
    </button>
  );
};

export default Button;
