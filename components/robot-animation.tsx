"use client";

import { motion } from "framer-motion";

export const RobotAnimation = () => {
  return (
    <div className="relative flex items-center justify-center w-48 h-48 sm:w-64 sm:h-64">
      {/* Outer rotating glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 60%, #7c3aed, #06b6d4, transparent 100%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner glow pulse */}
      <motion.div
        className="absolute inset-2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating robot SVG */}
      <motion.div
        className="relative z-10"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 120 140"
          className="w-32 h-32 sm:w-44 sm:h-44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Antenna */}
          <motion.line
            x1="60" y1="8" x2="60" y2="22"
            stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <motion.circle
            cx="60" cy="6" r="4"
            fill="#06b6d4"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />

          {/* Head */}
          <rect x="30" y="22" width="60" height="48" rx="12" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1.5" />

          {/* Left eye */}
          <motion.ellipse
            cx="46" cy="44" rx="9" ry="9"
            fill="#0f172a"
            animate={{}}
          />
          <motion.ellipse
            cx="46" cy="44" rx="6" ry="6"
            fill="#06b6d4"
            animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <ellipse cx="46" cy="44" rx="2.5" ry="2.5" fill="white" opacity="0.9" />

          {/* Right eye */}
          <motion.ellipse
            cx="74" cy="44" rx="9" ry="9"
            fill="#0f172a"
          />
          <motion.ellipse
            cx="74" cy="44" rx="6" ry="6"
            fill="#7c3aed"
            animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          <ellipse cx="74" cy="44" rx="2.5" ry="2.5" fill="white" opacity="0.9" />

          {/* Mouth / scanner bar */}
          <rect x="40" y="60" width="40" height="5" rx="2.5" fill="#0f172a" />
          <motion.rect
            x="40" y="60" width="12" height="5" rx="2.5"
            fill="#06b6d4"
            animate={{ x: [40, 68, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Neck */}
          <rect x="52" y="70" width="16" height="10" rx="3" fill="#312e81" />

          {/* Body */}
          <rect x="20" y="80" width="80" height="50" rx="14" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1.5" />

          {/* Chest panel */}
          <rect x="36" y="92" width="48" height="26" rx="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1" />

          {/* Chest lights */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx={46 + i * 14} cy="105" r="4"
              fill={i === 1 ? "#7c3aed" : "#06b6d4"}
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.25 }}
            />
          ))}

          {/* Left arm */}
          <rect x="2" y="84" width="16" height="36" rx="8" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1.5" />
          <motion.circle cx="10" cy="126" r="6" fill="#312e81" stroke="#06b6d4" strokeWidth="1"
            animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} />

          {/* Right arm */}
          <rect x="102" y="84" width="16" height="36" rx="8" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1.5" />
          <motion.circle cx="110" cy="126" r="6" fill="#312e81" stroke="#7c3aed" strokeWidth="1"
            animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
        </svg>
      </motion.div>

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
        style={{ zIndex: 20 }}
      >
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #06b6d4, transparent)" }}
          animate={{ top: ["10%", "90%", "10%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};
