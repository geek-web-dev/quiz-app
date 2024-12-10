import React from "react";
import { BUTTON_VARIANTS } from "../../constants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode; // Text displayed on the button
  variant?: "water" | "blue" | "red" | "green";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "blue",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 text-white rounded-md  focus:outline-none text-center select-none duration-150 ${BUTTON_VARIANTS[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
