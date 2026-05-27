"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { links } from "@/config";

const contactMethods = [
  {
    icon: <FaPhone className="text-xl" />,
    label: "Phone",
    value: links.ownerPhone,
    href: `tel:${links.ownerPhone}`,
    color: "#3b82f6",
    colorSoft: "rgba(59,130,246,0.12)",
    colorBorder: "rgba(59,130,246,0.3)",
    cta: "Call Now",
  },
  {
    icon: <FaWhatsapp className="text-xl" />,
    label: "WhatsApp",
    value: links.ownerWhatsApp,
    href: links.ownerWhatsAppLink,
    color: "#25d366",
    colorSoft: "rgba(37,211,102,0.12)",
    colorBorder: "rgba(37,211,102,0.3)",
    cta: "Chat on WhatsApp",
    external: true,
  },
  {
    icon: <FaEnvelope className="text-xl" />,
    label: "Email",
    value: links.ownerEmail,
    href: `mailto:${links.ownerEmail}`,
    color: "#f59e0b",
    colorSoft: "rgba(245,158,11,0.12)",
    colorBorder: "rgba(245,158,11,0.3)",
    cta: "Send Email",
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-24 overflow-hidden"
      style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
    >
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #25d366, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "#818cf8" }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#818cf8" }}>
              Get In Touch
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed" style={{ color: "#64748b" }}>
            Ready to build something amazing together? Reach out via any channel below —
            I typically respond within a few hours.
          </p>

          <div
            className="mx-auto mt-6 h-px w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, #6366f1, transparent)" }}
          />
        </motion.div>

        {/* ── Contact cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative rounded-3xl p-6 flex flex-col items-center text-center gap-4"
              style={{
                background: "rgba(15,23,42,0.6)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: `1px solid ${method.colorBorder}`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 60px ${method.colorSoft}`,
              }}
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${method.color}90, transparent)` }}
              />

              {/* Icon */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl"
                style={{
                  background: method.colorSoft,
                  border: `1px solid ${method.colorBorder}`,
                  color: method.color,
                  boxShadow: `0 0 20px ${method.colorSoft}`,
                }}
              >
                {method.icon}
              </div>

              {/* Label + value */}
              <div>
                <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: "#64748b" }}>
                  {method.label}
                </p>
                <p className="text-sm font-bold" style={{ color: "#e2e8f0" }}>{method.value}</p>
              </div>

              {/* CTA button */}
              <Link
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noreferrer noopener" : undefined}
                className="w-full"
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold transition-all"
                  style={{
                    background: method.colorSoft,
                    border: `1px solid ${method.colorBorder}`,
                    color: method.color,
                  }}
                >
                  {method.cta} <FaArrowRight className="text-[10px]" />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Big WhatsApp CTA ── */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            href={links.ownerWhatsAppLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.button
              whileHover={{ scale: 1.06, boxShadow: "0 0 50px rgba(37,211,102,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 rounded-full px-10 py-4 text-base font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #25d366, #128c7e)",
                boxShadow: "0 4px 30px rgba(37,211,102,0.35)",
                fontFamily: "'Inter', 'Poppins', sans-serif",
              }}
            >
              <FaWhatsapp className="text-xl" />
              Message me on WhatsApp
            </motion.button>
          </Link>
        </motion.div>

        {/* ── Availability note ── */}
        <motion.p
          className="mt-6 text-center text-xs"
          style={{ color: "#475569" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          📍 Based in Rwanda &nbsp;·&nbsp; ⏰ Available Mon–Sat, 8am–8pm (CAT) &nbsp;·&nbsp; ⚡ Fast response guaranteed
        </motion.p>
      </div>
    </section>
  );
}
