import React from "react";

const RootContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="container mx-auto px-3">{children}</div>;
};

export default RootContainer;
