import React from "react";

type SimpleBtnProps = {
  children: React.ReactNode;
  className?: string;
};

const SimpleBtn = ({ className, children }: SimpleBtnProps) => {
  return (
    <button
      className={`bg-multi-secondary px-6 py-2 rounded-md hover:bg-multi-hover transition font-bold shadow-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default SimpleBtn;
