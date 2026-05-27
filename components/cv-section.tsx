"use client";

import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";
import {
  FaReact, FaNodeJs, FaMobileAlt, FaDatabase, FaBrain,
  FaGraduationCap, FaTrophy, FaBriefcase, FaCode,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";
import { links } from "@/config";

/* ── Data ── */
const skills = [
  { name: "React.js", icon: <FaReact />, level: 95, color: "#61dafb" },
  { name: "Node.js", icon: <FaNodeJs />, level: 90, color: "#68a063" },
  { name: "Express.js", icon: <SiExpress />, level: 88, color: "#ffffff" },
  { name: "MySQL", icon: <SiMysql />, level: 85, color: "#4479a1" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95, color: "#38bdf8" },
  { name: "Mobile App Dev", icon: <FaMobileAlt />, level: 85, color: "#a78bfa" },
  { name: "AI Systems", icon: <FaBrain />, level: 88, color: "#f59e0b" },
  { name: "UI/UX Design", icon: <FaCode />, level: 90, color: "#f472b6" },
  { name: "Database Design", icon: <FaDatabase />, level: 87, color: "#34d399" },
];

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Freelance / Self-Employed",
    period: "2022 – Present",
    desc: "Building full-stack web applications, mobile apps, and AI-powered systems for clients across various industries.",
    color: "#6366f1",
  },
  {
    role: "AI Systems Engineer",
    company: "Personal Projects & Research",
    period: "2021 – Present",
    desc: "Designing and implementing machine learning models, autonomous systems, and smart automation solutions.",
    color: "#3b82f6",
  },
  {
    role: "Mobile App Developer",
    company: "Freelance Projects",
    period: "2022 – Present",
    desc: "Developing cross-platform mobile applications using React Native with smooth UX and offline capabilities.",
    color: "#8b5cf6",
  },
  {
    role: "Embedded Systems Engineer",
    company: "Academic & Personal Projects",
    period: "2020 – Present",
    desc: "Engineering Arduino and Raspberry Pi based systems including parking automation, traffic control, and IoT devices.",
    color: "#10b981",
  },
];

const education = [
  {
    degree: "Computer Science & Engineering",
    school: "University of Rwanda",
    period: "2020 – 2024",
    desc: "Specialized in software engineering, AI systems, and embedded computing.",
    color: "#6366f1",
  },
  {
    degree: "Full-Stack Web Development",
    school: "Online Certifications (Udemy, Coursera)",
    period: "2021 – 2023",
    desc: "Advanced React.js, Node.js, Express.js, MySQL, and modern web technologies.",
    color: "#3b82f6",
  },
];

const achievements = [
  { icon: "🏆", title: "Autonomous Vehicle Project", desc: "Built a self-driving car prototype using AI & computer vision" },
  { icon: "🤖", title: "Smart Parking System", desc: "Automated parking management with real-time sensor integration" },
  { icon: "🚦", title: "AI Traffic Control", desc: "Adaptive traffic light system reducing congestion by 40%" },
  { icon: "📱", title: "Mobile App Portfolio", desc: "Delivered multiple cross-platform apps with 4.8+ star ratings" },
  { icon: "🌐", title: "Full-Stack Projects", desc: "10+ production web applications deployed for real clients" },
  { icon: "🧠", title: "AI & ML Systems", desc: "Implemented neural networks and deep learning models for automation" },
];

/* ── Skill Bar ── */
function SkillItem({ skill, index }: { skill: typeof skills[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span style={{ color: skill.color, fontSize: "1rem" }}>{skill.icon}</span>
          <span className="text-sm font-medium" style={{ color: "#e2e8f0" }}>{skill.name}</span>
        </div>
        <span
          className="text-xs font-bold px-2 py-0.5 rounded-full"
          style={{ background: `${skill.color}20`, color: skill.color, border: `1px solid ${skill.color}40` }}
        >
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.07 + 0.3 }}
        />
      </div>
    </motion.div>
  );
}

/* ── Section header ── */
function SectionLabel({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className="flex items-center justify-center w-9 h-9 rounded-xl text-base"
        style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)" }}
      >
        {icon}
      </div>
      <h3 className="text-lg font-bold" style={{ color: "#f1f5f9" }}>{text}</h3>
    </div>
  );
}

/* ── Glass card wrapper ── */
function GlassCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="relative rounded-3xl p-7"
      style={{
        background: "rgba(15,23,42,0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(99,102,241,0.18)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 60px rgba(99,102,241,0.06)",
      }}
    >
      <div
        className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 h-px w-3/4 rounded-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)" }}
      />
      {children}
    </motion.div>
  );
}

export function CVSection() {
  return (
    <section
      id="cv"
      className="relative w-full py-24 overflow-hidden"
      style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
    >
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

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
              Curriculum Vitae
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
            Professional CV
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "#64748b" }}>
            {links.ownerName} — Full-Stack Developer, AI Systems Engineer & Mobile App Developer
          </p>

          <div
            className="mx-auto mt-6 h-px w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, #6366f1, transparent)" }}
          />
        </motion.div>

        {/* ── Top row: Skills + Experience ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* Skills */}
          <GlassCard delay={0.1}>
            <SectionLabel icon={<FaCode />} text="Skills & Technologies" />
            <div className="flex flex-col gap-4">
              {skills.map((skill, i) => (
                <SkillItem key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </GlassCard>

          {/* Experience */}
          <GlassCard delay={0.2}>
            <SectionLabel icon={<FaBriefcase />} text="Work Experience" />
            <div className="flex flex-col gap-5">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-4"
                  style={{ borderLeft: `2px solid ${exp.color}60` }}
                >
                  <div
                    className="absolute -left-[5px] top-1 w-2 h-2 rounded-full"
                    style={{ background: exp.color }}
                  />
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <p className="text-sm font-bold" style={{ color: "#f1f5f9" }}>{exp.role}</p>
                      <p className="text-xs font-medium mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs mt-2 leading-relaxed" style={{ color: "#64748b" }}>{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* ── Bottom row: Education + Achievements ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Education */}
          <GlassCard delay={0.3}>
            <SectionLabel icon={<FaGraduationCap />} text="Education" />
            <div className="flex flex-col gap-5">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative pl-4"
                  style={{ borderLeft: `2px solid ${edu.color}60` }}
                >
                  <div
                    className="absolute -left-[5px] top-1 w-2 h-2 rounded-full"
                    style={{ background: edu.color }}
                  />
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <p className="text-sm font-bold" style={{ color: "#f1f5f9" }}>{edu.degree}</p>
                      <p className="text-xs font-medium mt-0.5" style={{ color: edu.color }}>{edu.school}</p>
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ background: `${edu.color}15`, color: edu.color, border: `1px solid ${edu.color}30` }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs mt-2 leading-relaxed" style={{ color: "#64748b" }}>{edu.desc}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* Achievements */}
          <GlassCard delay={0.4}>
            <SectionLabel icon={<FaTrophy />} text="Key Achievements" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  className="rounded-2xl p-3"
                  style={{
                    background: "rgba(99,102,241,0.06)",
                    border: "1px solid rgba(99,102,241,0.15)",
                  }}
                >
                  <div className="text-xl mb-1">{ach.icon}</div>
                  <p className="text-xs font-bold mb-1" style={{ color: "#e2e8f0" }}>{ach.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{ach.desc}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* ── CTA buttons: View + Download ── */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* View CV */}
          <motion.a
            href="/niyonkuru_ally_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6,182,212,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #0891b2, #06b6d4)",
              boxShadow: "0 4px 30px rgba(6,182,212,0.35)",
              fontFamily: "'Inter', 'Poppins', sans-serif",
            }}
          >
            <FaEye /> View CV
          </motion.a>

          {/* Download CV */}
          <motion.a
            href="/niyonkuru_ally_cv.pdf"
            download="Niyonkuru_Ally_CV.pdf"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(99,102,241,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #6366f1, #3b82f6)",
              boxShadow: "0 4px 30px rgba(99,102,241,0.35)",
              fontFamily: "'Inter', 'Poppins', sans-serif",
            }}
          >
            <FaDownload /> Download Full CV (PDF)
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
