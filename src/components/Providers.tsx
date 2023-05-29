"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
  // we use this ThemeProvider to add dark and light themes to our app
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {/* we use this because useSession must wrapped in a SessionProvider */}
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
