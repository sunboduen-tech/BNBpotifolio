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

import { navItems } from "@/data";
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

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
       if (current < 50) {
        setVisible(true);
      } else {
        if (current > lastScrollY) {
          setVisible(false);
        } else {
          setVisible(true);
        }
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
            /* NBGroup logo nav item */
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              target={navItem.external ? "_blank" : undefined}
              rel={navItem.external ? "noopener noreferrer" : undefined}
              className="relative flex items-center gap-1.5 group"
              title={navItem.name}
            >
              <div
                className="relative overflow-hidden rounded-full border-2 transition-all duration-300"
                style={{
                  width: 28,
                  height: 28,
                  borderColor: "rgba(124,58,237,0.6)",
                  boxShadow: "0 0 8px rgba(124,58,237,0.4)",
                }}
              >
                <Image
                  src={navItem.logo}
                  alt={navItem.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span
                className="text-sm font-semibold transition-colors"
                style={{ color: "#a78bfa" }}
              >
                {navItem.name}
              </span>
            </Link>
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
