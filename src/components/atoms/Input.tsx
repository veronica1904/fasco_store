import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = ({ error, className = "", ...props }: InputProps) => (
  <input
    className={`w-full px-4 py-2.5 border  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 ${
      error ? "border-red-500" : ""
    } ${className}`}
    {...props}
  />
);
