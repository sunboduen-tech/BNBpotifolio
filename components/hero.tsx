"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaDownload, FaArrowRight, FaEye } from "react-icons/fa";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { links } from "@/config";

export const Hero = () => {
  return (
    <div className="relative pb-20 pt-36 overflow-hidden">
      {/* Spotlights */}
      <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white" />
      <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      {/* Grid background */}
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/4 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
      />

      {/* Hero content */}
      <div className="relative z-10 my-20 flex justify-center px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-6xl w-full">

          {/* ── Left: Text content ── */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.3)",
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: "#818cf8" }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#818cf8" }}>
                Available for hire
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2"
              style={{
                background: "linear-gradient(135deg, #f8fafc 0%, #94a3b8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'Inter', 'Poppins', sans-serif",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {links.ownerName}
            </motion.h1>

            {/* Animated title */}
            <TextGenerateEffect
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1"
              words="Full-Stack Developer & AI Systems Engineer"
            />

            {/* CEO badge */}
            <motion.p
              className="text-sm font-semibold mb-4"
              style={{
                background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              🏢 {links.ownerTitle}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base leading-relaxed mb-8 max-w-lg"
              style={{ color: "#94a3b8", fontFamily: "'Inter', 'Poppins', sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I build modern full-stack web applications, AI-powered systems, mobile apps,
              and smart automation solutions. Passionate about turning complex ideas into
              elegant, production-ready digital experiences.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {/* Hire Me */}
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #3b82f6)",
                    boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
                    fontFamily: "'Inter', 'Poppins', sans-serif",
                  }}
                >
                  Hire Me <FaArrowRight className="text-xs" />
                </motion.button>
              </Link>

              {/* View CV */}
              <motion.a
                href="/niyonkuru_ally_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6,182,212,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all"
                style={{
                  background: "linear-gradient(135deg, #0891b2, #06b6d4)",
                  boxShadow: "0 4px 20px rgba(6,182,212,0.25)",
                  fontFamily: "'Inter', 'Poppins', sans-serif",
                }}
              >
                <FaEye className="text-xs" /> View CV
              </motion.a>

              {/* Download CV */}
              <motion.a
                href="/niyonkuru_ally_cv.pdf"
                download="Niyonkuru_Ally_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(99,102,241,0.4)",
                  color: "#e2e8f0",
                  backdropFilter: "blur(10px)",
                  fontFamily: "'Inter', 'Poppins', sans-serif",
                }}
              >
                <FaDownload className="text-xs" /> Download CV
              </motion.a>

              {/* WhatsApp */}
              <Link href={links.ownerWhatsAppLink} target="_blank" rel="noreferrer noopener">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(37,211,102,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all"
                  style={{
                    background: "linear-gradient(135deg, #25d366, #128c7e)",
                    boxShadow: "0 4px 20px rgba(37,211,102,0.25)",
                    fontFamily: "'Inter', 'Poppins', sans-serif",
                  }}
                >
                  <FaWhatsapp className="text-base" /> WhatsApp
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="mt-10 flex gap-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              {[
                { value: "5+", label: "Projects" },
                { value: "3+", label: "Years Exp." },
                { value: "10+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-2xl font-extrabold"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #3b82f6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs" style={{ color: "#64748b" }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Profile image ── */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30"
              style={{ background: "radial-gradient(circle, #6366f1 0%, #3b82f6 50%, transparent 70%)" }}
            />

            {/* Rotating dashed border */}
            <motion.div
              className="absolute inset-[-8px] rounded-full"
              style={{
                border: "2px dashed rgba(99,102,241,0.4)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Glassmorphism frame */}
            <div
              className="relative rounded-full p-1.5"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.5), rgba(59,130,246,0.3), rgba(139,92,246,0.4))",
                boxShadow: "0 0 60px rgba(99,102,241,0.3), 0 0 120px rgba(59,130,246,0.15)",
              }}
            >
              <div
                className="rounded-full overflow-hidden"
                style={{
                  width: "280px",
                  height: "280px",
                  border: "3px solid rgba(255,255,255,0.1)",
                }}
              >
                <Image
                  src="/boduen-profile.jpg"
                  alt={`${links.ownerName} - Full-Stack Developer`}
                  width={280}
                  height={280}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Floating badge — top right */}
            <motion.div
              className="absolute -top-2 -right-2 rounded-2xl px-3 py-2 text-xs font-semibold"
              style={{
                background: "rgba(15,23,42,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(99,102,241,0.35)",
                color: "#818cf8",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🤖 AI Engineer
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              className="absolute -bottom-2 -left-2 rounded-2xl px-3 py-2 text-xs font-semibold"
              style={{
                background: "rgba(15,23,42,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(37,211,102,0.35)",
                color: "#25d366",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              💻 Full-Stack Dev
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
