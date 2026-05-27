"use client";

import { useState } from "react";
import { SplashScreen } from "./splash-screen";

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      {/* Render children underneath so the page is ready when splash exits */}
      <div style={{ visibility: splashDone ? "visible" : "hidden" }}>
        {children}
      </div>
    </>
  );
};
