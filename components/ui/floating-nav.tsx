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
};

type FloatingNavProps = {
  navItems: readonly NavItem[];
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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

  return (
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
          navItem.logo ? (
            /* Company nav item with hover image card */
            <div
              key={`link-${idx}`}
              className="relative"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <Link
                href={navItem.link}
                target={navItem.external ? "_blank" : undefined}
                rel={navItem.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1.5"
              >
                {/* Logo circle */}
                <div
                  className="relative overflow-hidden rounded-full border-2 transition-all duration-300"
                  style={{
                    width: 28,
                    height: 28,
                    borderColor: hoveredIdx === idx ? "rgba(124,58,237,1)" : "rgba(124,58,237,0.5)",
                    boxShadow: hoveredIdx === idx ? "0 0 14px rgba(124,58,237,0.8)" : "0 0 6px rgba(124,58,237,0.3)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Image src={navItem.logo} alt={navItem.name} fill className="object-cover" />
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{ color: hoveredIdx === idx ? "#c4b5fd" : "#a78bfa" }}
                >
                  {navItem.name}
                </span>
              </Link>

              {/* Hover popup card with full company image */}
              <AnimatePresence>
                {hoveredIdx === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.92 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-50"
                    style={{ width: 220 }}
                  >
                    {/* Arrow */}
                    <div
                      className="mx-auto mb-1 w-3 h-3 rotate-45"
                      style={{
                        background: "rgba(15,23,42,0.95)",
                        border: "1px solid rgba(124,58,237,0.4)",
                        borderBottom: "none",
                        borderRight: "none",
                        marginBottom: "-6px",
                      }}
                    />
                    {/* Card */}
                    <div
                      className="rounded-2xl overflow-hidden"
                      style={{
                        background: "rgba(15,23,42,0.95)",
                        border: "1px solid rgba(124,58,237,0.4)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.6), 0 0 40px rgba(124,58,237,0.2)",
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      {/* Company image */}
                      <div className="relative w-full" style={{ height: 140 }}>
                        <Image
                          src={navItem.logo}
                          alt={navItem.name}
                          fill
                          className="object-cover"
                        />
                        {/* Gradient overlay */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: "linear-gradient(to bottom, transparent 50%, rgba(15,23,42,0.95) 100%)",
                          }}
                        />
                      </div>
                      {/* Label */}
                      <div className="px-4 py-3 text-center">
                        <p className="text-sm font-bold" style={{ color: "#e2e8f0" }}>
                          {navItem.name}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: "#a78bfa" }}>
                          Visit on GitHub →
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
  );
};
