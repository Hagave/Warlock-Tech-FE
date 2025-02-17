import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
}

export const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  return (
    <input
      name={name}
      className="bg-gray-50 h-10 w-full border rounded-md px-2"
      {...rest}
    />
  );
};
