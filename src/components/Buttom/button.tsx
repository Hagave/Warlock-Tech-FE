import React, { ComponentProps, ReactNode } from "react";

interface ButtomProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtomProps) => {
  return (
    <button
      className="w-full bg-blue-500 text-white h-10 rounded-md mt-4 hover:bg-blue-400 mb-4"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
