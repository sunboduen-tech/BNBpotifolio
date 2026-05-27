"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { useState, useCallback } from "react";

import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  link: string;
  external?: boolean;
  logo?: string;
  modal?: boolean;
};

type FloatingNavProps = {
  navItems: readonly NavItem[];
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Company image modal
  const [companyModalOpen, setCompanyModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<NavItem | null>(null);

  // Waiting prompt modal
  const [promptOpen, setPromptOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < 50) {
        setVisible(true);
      } else {
        setVisible(current <= lastScrollY);
      }
      setLastScrollY(current);
    }
  });

  // Show waiting prompt, then run action on Continue
  const withPrompt = useCallback((action: () => void) => {
    setPendingAction(() => action);
    setPromptOpen(true);
  }, []);

  const handleContinue = () => {
    setPromptOpen(false);
    pendingAction?.();
    setPendingAction(null);
  };

  const handleCancel = () => {
    setPromptOpen(false);
    setPendingAction(null);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-3xl border border-white/[0.2] bg-black-100 px-3 py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
            className
          )}
        >
          {navItems.map((navItem, idx) =>
            navItem.modal ? (
              /* Company nav item */
              <button
                key={`link-${idx}`}
                onClick={() =>
                  withPrompt(() => {
                    setModalItem(navItem);
                    setCompanyModalOpen(true);
                  })
                }
                className="flex items-center gap-1.5 cursor-pointer group"
              >
                {navItem.logo && (
                  <div
                    className="relative overflow-hidden rounded-full border-2 transition-all duration-300 group-hover:scale-110"
                    style={{
                      width: 28,
                      height: 28,
                      borderColor: "rgba(124,58,237,0.6)",
                      boxShadow: "0 0 8px rgba(124,58,237,0.4)",
                    }}
                  >
                    <Image src={navItem.logo} alt={navItem.name} fill className="object-cover" />
                  </div>
                )}
                <span
                  className="text-sm font-semibold transition-colors group-hover:text-purple-300"
                  style={{ color: "#a78bfa" }}
                >
                  {navItem.name}
                </span>
              </button>
            ) : (
              /* Regular nav item */
              <button
                key={`link-${idx}`}
                onClick={() =>
                  withPrompt(() => {
                    if (navItem.external) {
                      window.open(navItem.link, "_blank", "noopener,noreferrer");
                    } else {
                      const el = document.querySelector(navItem.link);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }
                  })
                }
                className={cn(
                  "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300 cursor-pointer"
                )}
              >
                <span className="!cursor-pointer text-sm">{navItem.name}</span>
              </button>
            )
          )}
        </motion.nav>
      </AnimatePresence>

      {/* ── Waiting Prompt Modal ── */}
      <AnimatePresence>
        {promptOpen && (
          <motion.div
            key="prompt-modal"
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(10px)" }}
            />

            {/* Card */}
            <motion.div
              className="relative z-10 w-full"
              style={{ maxWidth: 420 }}
              initial={{ scale: 0.88, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 24 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Glow */}
              <div
                className="absolute -inset-1 rounded-3xl blur-xl opacity-30"
                style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
              />

              <div
                className="relative rounded-3xl p-7 flex flex-col items-center text-center gap-5"
                style={{
                  background: "rgba(10,10,30,0.97)",
                  border: "1px solid rgba(124,58,237,0.45)",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.7), 0 0 50px rgba(124,58,237,0.15)",
                }}
              >
                {/* Animated pulse icon */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    className="absolute w-16 h-16 rounded-full"
                    style={{ background: "rgba(124,58,237,0.15)" }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                  <div
                    className="relative w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.2))",
                      border: "1px solid rgba(124,58,237,0.5)",
                    }}
                  >
                    ⏳
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">Please Wait</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    Waiting... if you don&apos;t want to wait, call
                  </p>
                  <a
                    href="tel:0732972867"
                    className="inline-flex items-center gap-2 text-base font-bold transition-all hover:scale-105"
                    style={{ color: "#a78bfa" }}
                  >
                    📞 Niyonkuru Allay Sun Boduen
                    <span
                      className="px-3 py-1 rounded-full text-sm font-mono"
                      style={{
                        background: "rgba(124,58,237,0.15)",
                        border: "1px solid rgba(124,58,237,0.4)",
                        color: "#c4b5fd",
                      }}
                    >
                      0732972867
                    </span>
                  </a>
                </div>

                {/* Animated loading dots */}
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#7c3aed" }}
                      animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 w-full">
                  <button
                    onClick={handleCancel}
                    className="flex-1 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#94a3b8",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleContinue}
                    className="flex-1 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                      boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
                    }}
                  >
                    Continue →
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Company image modal ── */}
      <AnimatePresence>
        {companyModalOpen && modalItem?.logo && (
          <motion.div
            key="company-modal"
            className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setCompanyModalOpen(false)}
          >
            <div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
            />
            <motion.div
              className="relative z-10 flex flex-col items-center"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: 560, width: "100%" }}
            >
              <div
                className="absolute -inset-1 rounded-3xl blur-xl opacity-40"
                style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
              />
              <div
                className="relative rounded-3xl overflow-hidden w-full"
                style={{
                  border: "1px solid rgba(124,58,237,0.5)",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.7), 0 0 60px rgba(124,58,237,0.2)",
                  background: "rgba(10,10,30,0.95)",
                }}
              >
                <div className="relative w-full" style={{ height: 380 }}>
                  <Image
                    src={modalItem.logo}
                    alt={modalItem.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div
                  className="flex items-center justify-between px-6 py-4"
                  style={{ borderTop: "1px solid rgba(124,58,237,0.2)" }}
                >
                  <div>
                    <p className="text-base font-bold text-white">{modalItem.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#a78bfa" }}>
                      CEO of NBGroup · Niyonkuru Allay Sun Boduen
                    </p>
                  </div>
                  <button
                    onClick={() => setCompanyModalOpen(false)}
                    className="flex items-center justify-center w-9 h-9 rounded-full text-white transition-all hover:scale-110"
                    style={{
                      background: "rgba(124,58,237,0.2)",
                      border: "1px solid rgba(124,58,237,0.4)",
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>
              <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                Click outside to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
