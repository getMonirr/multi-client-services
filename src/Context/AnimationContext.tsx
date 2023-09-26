"use client"
import { useEffect } from "react";
const AOS = require("aos")

const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        AOS.init();
    },[])
    return <div>{children}</div>;
  };

  export default AnimationProvider
  