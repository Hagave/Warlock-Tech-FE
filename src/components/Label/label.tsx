import { ComponentProps, ReactNode } from "react";

interface LabelProp extends ComponentProps<"label"> {
  children: ReactNode;
}

export const Label = ({ children, ...rest }: LabelProp) => {
  return (
    <label className="block mb-1 font-medium" {...rest}>
      {children}
    </label>
  );
};
