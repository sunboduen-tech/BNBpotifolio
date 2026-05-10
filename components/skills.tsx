"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const leftSkills = [
  { name: "HTML", pct: 100 },
  { name: "PHP", pct: 100 },
  { name: "Tailwind CSS", pct: 100 },
  { name: "Node.js", pct: 100 },
  { name: "TypeScript", pct: 100 },
  { name: "Neo4j", pct: 100 },
  { name: "Web Designer", pct: 100 },
  { name: "Python", pct: 100 },
  { name: "Machine Learning", pct: 90 },
  { name: "Deep Learning", pct: 85 },
  { name: "Neural Networks", pct: 82 },
  { name: "Artificial Intelligence", pct: 100 },
  { name: "Automation", pct: 100 },
  { name: "Embedded Systems", pct: 100 },
  { name: "IoT", pct: 100 },
];

const rightSkills = [
  { name: "JavaScript", pct: 100 },
  { name: "Bootstrap", pct: 100 },
  { name: "React.js", pct: 100 },
  { name: "Vue.js", pct: 100 },
  { name: "Next.js", pct: 100 },
  { name: "Django", pct: 100 },
  { name: "MySQL Workbench", pct: 100 },
  { name: "MongoDB", pct: 100 },
  { name: "Laravel", pct: 100 },
  { name: "Graphic Designer", pct: 100 },
  { name: "Blockchain", pct: 80 },
  { name: "Robotics", pct: 100 },
  { name: "TensorFlow", pct: 100 },
  { name: "Arduino", pct: 100 },
  { name: "Raspberry Pi", pct: 100 },
];

function SkillBar({ name, pct, delay }: { name: string; pct: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setAnimated(true), delay);
      return () => clearTimeout(t);
    }
  }, [inView, delay]);

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-sm font-medium tracking-wide"
          style={{ color: "#e2e8f0", fontFamily: "'Inter', 'Poppins', sans-serif" }}
        >
          {name}
        </span>
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: "rgba(99,102,241,0.18)",
            color: "#818cf8",
            border: "1px solid rgba(99,102,241,0.3)",
            fontFamily: "'Inter', 'Poppins', sans-serif",
          }}
        >
          {pct}%
        </span>
      </div>

      {/* Track */}
      <div
        className="relative h-1.5 w-full rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.4)" }}
      >
        {/* Fill */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, #3b82f6, #6366f1, #818cf8)",
            boxShadow: "0 0 10px rgba(99,102,241,0.7), 0 0 20px rgba(59,130,246,0.4)",
          }}
          initial={{ width: 0 }}
          animate={{ width: animated ? `${pct}%` : 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        {/* Shimmer */}
        {animated && (
          <motion.div
            className="absolute inset-y-0 w-16 rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
            }}
            initial={{ left: "-4rem" }}
            animate={{ left: "110%" }}
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
          />
        )}
      </div>
    </div>
  );
}

function SkillCard({
  skills,
  delay,
}: {
  skills: { name: string; pct: number }[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="relative flex flex-col gap-5 rounded-3xl p-7"
      style={{
        background: "rgba(15,23,42,0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(99,102,241,0.18)",
        boxShadow:
          "0 0 0 1px rgba(99,102,241,0.08), 0 8px 32px rgba(0,0,0,0.5), 0 0 60px rgba(99,102,241,0.06)",
      }}
    >
      {/* Corner glow */}
      <div
        className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 h-px w-3/4 rounded-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)" }}
      />

      {skills.map((s, i) => (
        <SkillBar key={s.name} name={s.name} pct={s.pct} delay={delay * 1000 + i * 80} />
      ))}
    </motion.div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-24 overflow-hidden"
      style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
    >
      {/* Background image with opacity only */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/skills-bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.07,
        }}
      />

      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full opacity-10 blur-2xl"
        style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full opacity-10 blur-2xl"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Pill badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "#818cf8" }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#818cf8" }}>
              Expertise
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
            Skills &amp; Technologies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "#64748b" }}>
            Technologies, frameworks, and tools I use to build modern scalable applications and premium digital experiences.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-6 h-px w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, #6366f1, transparent)" }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <SkillCard skills={leftSkills} delay={0.1} />
          <SkillCard skills={rightSkills} delay={0.25} />
        </div>
      </div>
    </section>
  );
}
