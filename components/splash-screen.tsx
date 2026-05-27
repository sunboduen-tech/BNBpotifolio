"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RobotAnimation } from "./robot-animation";

const SPLASH_DURATION = 4500; // ms before hiding splash

// Floating particle dot
const Particle = ({ x, y, delay }: { x: string; y: string; delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-cyan-400"
    style={{ left: x, top: y }}
    animate={{ y: [-10, 10, -10], opacity: [0.2, 0.8, 0.2] }}
    transition={{ duration: 3 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

// Typewriter hook
const useTypewriter = (text: string, speed = 55, startDelay = 1200) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, ++i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);
  return displayed;
};

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const title = useTypewriter("Welcome to AI Creator Studio");
  const subtitle = useTypewriter("Initializing AI Systems...", 40, 2400);

  // Progress bar
  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / (SPLASH_DURATION - 600)) * 100, 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Auto-dismiss
  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, SPLASH_DURATION);
    return () => clearTimeout(t);
  }, [onComplete]);

  const particles = [
    { x: "8%", y: "15%" }, { x: "85%", y: "10%" }, { x: "20%", y: "75%" },
    { x: "75%", y: "80%" }, { x: "50%", y: "5%" }, { x: "92%", y: "50%" },
    { x: "5%", y: "50%" }, { x: "60%", y: "90%" }, { x: "35%", y: "20%" },
    { x: "70%", y: "35%" },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 50% 40%, #0d0a2e 0%, #000319 60%, #000000 100%)",
          }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Floating particles */}
          {particles.map((p, i) => (
            <Particle key={i} x={p.x} y={p.y} delay={i * 0.3} />
          ))}

          {/* Ambient glow blobs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }} />

          {/* Main card */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-6 px-8 py-10 rounded-3xl"
            style={{
              background: "rgba(17, 25, 40, 0.6)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
              boxShadow: "0 0 60px rgba(124,58,237,0.15), 0 0 120px rgba(6,182,212,0.08)",
              maxWidth: "420px",
              width: "90%",
            }}
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Robot */}
            <RobotAnimation />

            {/* Title typewriter */}
            <div className="text-center space-y-2">
              <h1
                className="text-xl sm:text-2xl font-bold tracking-wide min-h-[2rem]"
                style={{
                  background: "linear-gradient(135deg, #e0e7ff, #a5b4fc, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {title}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{ WebkitTextFillColor: "#06b6d4" }}
                >
                  |
                </motion.span>
              </h1>

              <p className="text-cyan-400/70 text-sm font-mono min-h-[1.25rem]">
                {subtitle}
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full space-y-2">
              <div className="w-full h-1.5 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.08)" }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                    boxShadow: "0 0 10px #06b6d4",
                    width: `${progress}%`,
                  }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Animated dots */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                      animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
                <span className="text-xs font-mono text-purple-400">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>

            {/* Status badge */}
            <motion.div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono"
              style={{
                background: "rgba(6,182,212,0.08)",
                border: "1px solid rgba(6,182,212,0.25)",
                color: "#67e8f9",
              }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              AI SYSTEMS ONLINE
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
