"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<NavItem | null>(null);

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

  const openModal = (item: NavItem) => {
    setModalItem(item);
    setModalOpen(true);
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
              /* Company nav item — click opens modal */
              <button
                key={`link-${idx}`}
                onClick={() => openModal(navItem)}
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
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                target={navItem.external ? "_blank" : undefined}
                rel={navItem.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
                )}
              >
                <span className="!cursor-pointer text-sm">{navItem.name}</span>
              </Link>
            )
          )}
        </motion.nav>
      </AnimatePresence>

      {/* ── Full-screen company image modal ── */}
      <AnimatePresence>
        {modalOpen && modalItem?.logo && (
          <motion.div
            key="company-modal"
            className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setModalOpen(false)}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
            />

            {/* Modal card */}
            <motion.div
              className="relative z-10 flex flex-col items-center"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: 560, width: "100%" }}
            >
              {/* Glow ring */}
              <div
                className="absolute -inset-1 rounded-3xl blur-xl opacity-40"
                style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
              />

              {/* Card */}
              <div
                className="relative rounded-3xl overflow-hidden w-full"
                style={{
                  border: "1px solid rgba(124,58,237,0.5)",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.7), 0 0 60px rgba(124,58,237,0.2)",
                  background: "rgba(10,10,30,0.95)",
                }}
              >
                {/* Company image — full size */}
                <div className="relative w-full" style={{ height: 380 }}>
                  <Image
                    src={modalItem.logo}
                    alt={modalItem.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Footer bar */}
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
                    onClick={() => setModalOpen(false)}
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

              {/* Click outside hint */}
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
