"use client";

import { SessionProvider } from "next-auth/react";

const ForSession = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default ForSession;
