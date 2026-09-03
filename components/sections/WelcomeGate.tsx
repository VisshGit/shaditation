"use client";

import { ReactNode } from "react";

type WelcomeGateProps = {
  children: ReactNode;
  leftImage?: string;
  rightImage?: string;
};

export default function WelcomeGate({ children }: WelcomeGateProps) {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <div className="w-full">
        {children}
      </div>
    </main>
  );
}
