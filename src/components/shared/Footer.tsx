import React from "react";
import RootContainer from "./RootContainer";

const Footer = () => {
  return (
    <div className="bg-slate-700 py-16">
      <RootContainer>
        <h1 className="text-white text-center">
          © All right reserve - Solutions - {new Date().getFullYear()}
        </h1>
      </RootContainer>
    </div>
  );
};

export default Footer;
