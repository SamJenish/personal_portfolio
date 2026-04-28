// components/ui/Button.tsx
import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "cta";
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...rest
}) => {
  const base = "font-medium rounded transition-colors duration-200 focus:outline-none";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent/90",
    outline: "border border-accent text-accent hover:bg-accent/10",
    cta: "bg-accent text-white py-2 px-6 text-lg hover:bg-accent/90",
  }[variant];

  return (
    <button
      className={`${base} ${variants} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
