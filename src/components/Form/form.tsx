"use client";
import React, { ComponentProps, ReactNode } from "react";
import Button from "../Buttom/button";

interface FormProps extends ComponentProps<"form"> {
  children?: ReactNode;
  inputProps?: ComponentProps<"input">;
  buttonName: string;
}

export const Form = ({ children, buttonName, ...rest }: FormProps) => {
  return (
    <form
      className="w-full max-w-md bg-white shadow-lg rounded-lg p-8"
      {...rest}
    >
      <div className="mb-4"></div>
      {children}
      <Button type="submit">{buttonName}</Button>
    </form>
  );
};

export default Form;
