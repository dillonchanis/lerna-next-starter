import React, { ReactNode } from "react";

type ButtonProps = {
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => {}
};

/**
 * General button component.
 */
export const Button = ({
  children,
  type = "button",
  ...props
}: ButtonProps) => (
  <button type={type} {...props}>
    {children}
  </button>
);
