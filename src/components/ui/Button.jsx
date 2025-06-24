import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`from-pink to-purple font-poppins cursor-pointer rounded-lg bg-gradient-to-l px-4 py-2 text-sm font-semibold text-white lg:px-6 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
