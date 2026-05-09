"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Building scalable full-stack applications with modern APIs, responsive frontends, and robust backend architectures.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
    accent: "#3b82f6",
    accentSoft: "rgba(59,130,246,0.15)",
    accentBorder: "rgba(59,130,246,0.3)",
    // Dark coding setup — monitors, code editor
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    imageAlt: "Web development coding setup with multiple monitors",
    overlay: "linear-gradient(180deg, rgba(5,10,25,0.45) 0%, rgba(5,10,25,0.82) 60%, rgba(5,10,25,0.97) 100%)",
    svgOverlay: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="30" y="20" width="220" height="110" rx="10" fill="rgba(15,23,42,0.75)" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5"/>
        <rect x="30" y="20" width="220" height="22" rx="10" fill="rgba(59,130,246,0.2)"/>
        <circle cx="46" cy="31" r="4" fill="#ef4444" opacity="0.9"/>
        <circle cx="60" cy="31" r="4" fill="#f59e0b" opacity="0.9"/>
        <circle cx="74" cy="31" r="4" fill="#22c55e" opacity="0.9"/>
        <rect x="44" y="54" width="60" height="4" rx="2" fill="rgba(99,102,241,0.9)"/>
        <rect x="44" y="64" width="100" height="4" rx="2" fill="rgba(59,130,246,0.7)"/>
        <rect x="52" y="74" width="80" height="4" rx="2" fill="rgba(139,92,246,0.7)"/>
        <rect x="52" y="84" width="50" height="4" rx="2" fill="rgba(59,130,246,0.6)"/>
        <rect x="44" y="94" width="70" height="4" rx="2" fill="rgba(99,102,241,0.8)"/>
        <rect x="44" y="104" width="40" height="4" rx="2" fill="rgba(59,130,246,0.5)"/>
        <rect x="160" y="50" width="76" height="70" rx="6" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.35)" strokeWidth="1"/>
        <rect x="168" y="60" width="60" height="6" rx="3" fill="rgba(59,130,246,0.6)"/>
        <rect x="168" y="72" width="40" height="4" rx="2" fill="rgba(255,255,255,0.25)"/>
        <rect x="168" y="82" width="50" height="4" rx="2" fill="rgba(255,255,255,0.18)"/>
        <rect x="168" y="104" width="55" height="8" rx="4" fill="rgba(59,130,246,0.65)"/>
      </svg>
    ),
  },
  {
    title: "Web Design",
    description:
      "Crafting pixel-perfect UI/UX experiences with intuitive layouts, design systems, and Figma-to-code precision.",
    tags: ["Figma", "UI/UX", "Tailwind CSS", "Framer", "Design Systems"],
    accent: "#6366f1",
    accentSoft: "rgba(99,102,241,0.15)",
    accentBorder: "rgba(99,102,241,0.3)",
    // Clean UI design workspace
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    imageAlt: "UI UX design workspace with Figma mockups",
    overlay: "linear-gradient(180deg, rgba(5,5,20,0.45) 0%, rgba(5,5,20,0.82) 60%, rgba(5,5,20,0.97) 100%)",
    svgOverlay: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="20" y="15" width="240" height="130" rx="12" fill="rgba(15,23,42,0.7)" stroke="rgba(99,102,241,0.45)" strokeWidth="1.5"/>
        <rect x="20" y="15" width="52" height="130" rx="12" fill="rgba(99,102,241,0.1)"/>
        {[38, 58, 78, 98, 118].map((y, i) => (
          <rect key={i} x="32" y={y} width="28" height="12" rx="6" fill={i === 0 ? "rgba(99,102,241,0.75)" : "rgba(255,255,255,0.1)"}/>
        ))}
        <rect x="84" y="28" width="164" height="104" rx="8" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" strokeWidth="1"/>
        <rect x="96" y="38" width="140" height="84" rx="6" fill="rgba(15,23,42,0.85)" stroke="rgba(99,102,241,0.3)" strokeWidth="1"/>
        <rect x="96" y="38" width="140" height="20" rx="6" fill="rgba(99,102,241,0.28)"/>
        <rect x="104" y="66" width="60" height="6" rx="3" fill="rgba(99,102,241,0.7)"/>
        <rect x="104" y="78" width="120" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
        <rect x="104" y="88" width="90" height="4" rx="2" fill="rgba(255,255,255,0.14)"/>
        <rect x="104" y="102" width="50" height="10" rx="5" fill="rgba(99,102,241,0.7)"/>
        {["#6366f1","#3b82f6","#8b5cf6","#06b6d4"].map((c, i) => (
          <circle key={i} cx={170 + i * 14} cy={108} r="5" fill={c} opacity="0.9"/>
        ))}
      </svg>
    ),
  },
  {
    title: "Game Development",
    description:
      "Developing immersive 2D/3D game experiences with physics engines, real-time rendering, and interactive gameplay systems.",
    tags: ["Unity", "Three.js", "WebGL", "C#", "Blender"],
    accent: "#8b5cf6",
    accentSoft: "rgba(139,92,246,0.15)",
    accentBorder: "rgba(139,92,246,0.3)",
    // Gaming setup with RGB lighting
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
    imageAlt: "Gaming development setup with RGB lighting",
    overlay: "linear-gradient(180deg, rgba(8,4,20,0.45) 0%, rgba(8,4,20,0.82) 60%, rgba(8,4,20,0.97) 100%)",
    svgOverlay: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="60" y="45" width="160" height="80" rx="40" fill="rgba(15,23,42,0.8)" stroke="rgba(139,92,246,0.55)" strokeWidth="1.5"/>
        <circle cx="105" cy="95" r="14" fill="rgba(139,92,246,0.18)" stroke="rgba(139,92,246,0.45)" strokeWidth="1"/>
        <circle cx="105" cy="95" r="7" fill="rgba(139,92,246,0.65)"/>
        <circle cx="175" cy="95" r="14" fill="rgba(139,92,246,0.18)" stroke="rgba(139,92,246,0.45)" strokeWidth="1"/>
        <circle cx="175" cy="95" r="7" fill="rgba(139,92,246,0.65)"/>
        <rect x="88" y="62" width="8" height="22" rx="3" fill="rgba(255,255,255,0.22)"/>
        <rect x="80" y="70" width="24" height="8" rx="3" fill="rgba(255,255,255,0.22)"/>
        <circle cx="168" cy="65" r="6" fill="rgba(239,68,68,0.75)"/>
        <circle cx="182" cy="72" r="6" fill="rgba(234,179,8,0.75)"/>
        <circle cx="168" cy="79" r="6" fill="rgba(34,197,94,0.75)"/>
        <circle cx="154" cy="72" r="6" fill="rgba(59,130,246,0.75)"/>
        <circle cx="140" cy="75" r="8" fill="rgba(139,92,246,0.35)" stroke="rgba(139,92,246,0.65)" strokeWidth="1"/>
        <circle cx="140" cy="75" r="4" fill="rgba(139,92,246,0.8)"/>
        <circle cx="55" cy="50" r="3" fill="rgba(139,92,246,0.7)"/>
        <circle cx="225" cy="55" r="2" fill="rgba(99,102,241,0.7)"/>
        <circle cx="240" cy="100" r="3" fill="rgba(139,92,246,0.6)"/>
        <circle cx="40" cy="110" r="2" fill="rgba(59,130,246,0.6)"/>
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    description:
      "Creating compelling brand identities, visual systems, posters, and digital artwork with professional design tools.",
    tags: ["Photoshop", "Illustrator", "Figma", "Branding", "Typography"],
    accent: "#06b6d4",
    accentSoft: "rgba(6,182,212,0.15)",
    accentBorder: "rgba(6,182,212,0.3)",
    // Creative design tools and color palette
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
    imageAlt: "Graphic design workspace with color palettes and creative tools",
    overlay: "linear-gradient(180deg, rgba(2,12,20,0.45) 0%, rgba(2,12,20,0.82) 60%, rgba(2,12,20,0.97) 100%)",
    svgOverlay: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="40" y="20" width="200" height="120" rx="10" fill="rgba(15,23,42,0.75)" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5"/>
        {["#ef4444","#f97316","#eab308","#22c55e","#06b6d4","#6366f1","#8b5cf6"].map((c, i) => (
          <rect key={i} x={48 + i * 26} y="28" width="20" height="12" rx="4" fill={c} opacity="0.9"/>
        ))}
        <circle cx="110" cy="95" r="38" fill="rgba(6,182,212,0.14)" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5"/>
        <circle cx="110" cy="95" r="24" fill="rgba(6,182,212,0.25)"/>
        <polygon points="175,58 215,118 135,118" fill="rgba(99,102,241,0.18)" stroke="rgba(99,102,241,0.45)" strokeWidth="1.5"/>
        <path d="M200 45 L215 30 L220 40 L205 55 Z" fill="rgba(6,182,212,0.7)" stroke="rgba(6,182,212,0.9)" strokeWidth="1"/>
        <line x1="215" y1="30" x2="225" y2="20" stroke="rgba(6,182,212,0.6)" strokeWidth="1.5"/>
        <rect x="48" y="126" width="80" height="6" rx="3" fill="rgba(6,182,212,0.55)"/>
        <rect x="48" y="136" width="50" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
      </svg>
    ),
  },
  {
    title: "Machine Learning",
    description:
      "Building intelligent predictive models, data pipelines, and AI-powered automation systems using modern ML frameworks.",
    tags: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas"],
    accent: "#10b981",
    accentSoft: "rgba(16,185,129,0.15)",
    accentBorder: "rgba(16,185,129,0.3)",
    // AI / data science neural visualization
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    imageAlt: "AI machine learning neural network visualization",
    overlay: "linear-gradient(180deg, rgba(2,15,10,0.45) 0%, rgba(2,15,10,0.82) 60%, rgba(2,15,10,0.97) 100%)",
    svgOverlay: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M100 80 C100 50 130 30 155 45 C170 35 195 45 195 65 C210 65 220 80 210 95 C220 110 205 125 190 118 C180 132 155 130 145 118 C130 130 105 120 100 105 C85 105 75 90 100 80Z" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.55)" strokeWidth="1.5"/>
        {[
          [120,70,150,85],[150,85,175,70],[150,85,155,105],[120,70,130,100],[175,70,180,100],
          [130,100,155,105],[155,105,180,100]
        ].map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(16,185,129,0.5)" strokeWidth="1.2"/>
        ))}
        {[[120,70],[150,85],[175,70],[130,100],[155,105],[180,100]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="5.5" fill="rgba(16,185,129,0.7)" stroke="rgba(16,185,129,1)" strokeWidth="1"/>
        ))}
        {[0,1,2,3].map(i => (
          <rect key={i} x={38} y={50 + i*22} width={40 + i*8} height="10" rx="5" fill="rgba(16,185,129,0.3)" stroke="rgba(16,185,129,0.25)" strokeWidth="1"/>
        ))}
        <rect x="210" y="55" width="50" height="22" rx="6" fill="rgba(16,185,129,0.18)" stroke="rgba(16,185,129,0.4)" strokeWidth="1"/>
        <rect x="216" y="61" width="30" height="4" rx="2" fill="rgba(16,185,129,0.65)"/>
        <rect x="216" y="69" width="20" height="4" rx="2" fill="rgba(255,255,255,0.25)"/>
      </svg>
    ),
  },
  {
    title: "Blockchain",
    description:
      "Developing decentralized applications, smart contracts, and secure distributed ledger systems on modern blockchain platforms.",
    tags: ["Solidity", "Web3.js", "Ethereum", "IPFS", "Smart Contracts"],
    accent: "#f59e0b",
    accentSoft: "rgba(245,158,11,0.15)",
    accentBorder: "rgba(245,158,11,0.3)",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
    imageAlt: "Blockchain cryptocurrency network visualization",
    overlay: "linear-gradient(180deg, rgba(15,10,2,0.45) 0%, rgba(15,10,2,0.82) 60%, rgba(15,10,2,0.97) 100%)",
    svgOverlay: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {[30, 90, 150, 210].map((x, i) => (
          <g key={i}>
            <rect x={x} y="55" width="50" height="50" rx="8" fill="rgba(245,158,11,0.12)" stroke="rgba(245,158,11,0.5)" strokeWidth="1.5"/>
            <rect x={x+8} y="65" width="34" height="5" rx="2.5" fill="rgba(245,158,11,0.55)"/>
            <rect x={x+8} y="75" width="24" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
            <rect x={x+8} y="84" width="28" height="4" rx="2" fill="rgba(255,255,255,0.14)"/>
            <circle cx={x+38} cy="96" r="4" fill="rgba(245,158,11,0.65)"/>
          </g>
        ))}
        {[80, 140, 200].map((x, i) => (
          <line key={i} x1={x} y1="80" x2={x+10} y2="80" stroke="rgba(245,158,11,0.65)" strokeWidth="2" strokeDasharray="3 2"/>
        ))}
        <rect x="38" y="115" width="204" height="4" rx="2" fill="rgba(245,158,11,0.2)"/>
        <circle cx="140" cy="80" r="10" fill="rgba(245,158,11,0.22)" stroke="rgba(245,158,11,0.65)" strokeWidth="1.5"/>
        <path d="M136 80 L136 76 Q140 72 144 76 L144 80" stroke="rgba(245,158,11,0.85)" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Automation",
    description:
      "Designing smart workflow automation systems with robotic process automation, intelligent pipelines, and connected industrial technology.",
    tags: ["Automation", "Robotics", "Smart Workflows", "Python", "RPA"],
    accent: "#38bdf8",
    accentSoft: "rgba(56,189,248,0.15)",
    accentBorder: "rgba(56,189,248,0.3)",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    imageAlt: "Futuristic automation robotic system",
    overlay: "linear-gradient(180deg, rgba(2,8,20,0.45) 0%, rgba(2,8,20,0.82) 60%, rgba(2,8,20,0.97) 100%)",
    svgOverlay: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="30" y="50" width="50" height="60" rx="8" fill="rgba(56,189,248,0.12)" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5"/>
        <rect x="40" y="62" width="30" height="6" rx="3" fill="rgba(56,189,248,0.7)"/>
        <rect x="40" y="74" width="20" height="4" rx="2" fill="rgba(255,255,255,0.25)"/>
        <rect x="40" y="84" width="25" height="4" rx="2" fill="rgba(255,255,255,0.18)"/>
        <circle cx="55" cy="98" r="5" fill="rgba(56,189,248,0.65)"/>
        <line x1="80" y1="80" x2="115" y2="80" stroke="rgba(56,189,248,0.6)" strokeWidth="2" strokeDasharray="4 3"/>
        <rect x="115" y="55" width="50" height="50" rx="25" fill="rgba(56,189,248,0.1)" stroke="rgba(56,189,248,0.45)" strokeWidth="1.5"/>
        <circle cx="140" cy="80" r="14" fill="rgba(56,189,248,0.2)" stroke="rgba(56,189,248,0.6)" strokeWidth="1"/>
        <circle cx="140" cy="80" r="6" fill="rgba(56,189,248,0.8)"/>
        <line x1="165" y1="80" x2="200" y2="80" stroke="rgba(56,189,248,0.6)" strokeWidth="2" strokeDasharray="4 3"/>
        <rect x="200" y="50" width="50" height="60" rx="8" fill="rgba(56,189,248,0.12)" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5"/>
        <rect x="210" y="62" width="30" height="6" rx="3" fill="rgba(56,189,248,0.7)"/>
        <rect x="210" y="74" width="20" height="4" rx="2" fill="rgba(255,255,255,0.25)"/>
        <circle cx="225" cy="98" r="5" fill="rgba(56,189,248,0.65)"/>
        {[50,80,110,140,170,200,230].map((x,i) => (
          <circle key={i} cx={x} cy={130} r="2" fill="rgba(56,189,248,0.4)"/>
        ))}
      </svg>
    ),
  },
  {
    title: "Artificial Intelligence",
    description:
      "Building advanced AI systems with neural networks, intelligent assistants, predictive analytics, and deep learning models.",
    tags: ["AI", "TensorFlow", "Deep Learning", "Neural Networks", "Python"],
    accent: "#a78bfa",
    accentSoft: "rgba(167,139,250,0.15)",
    accentBorder: "rgba(167,139,250,0.3)",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    imageAlt: "Advanced AI neural network brain visualization",
    overlay: "linear-gradient(180deg, rgba(8,4,20,0.45) 0%, rgba(8,4,20,0.82) 60%, rgba(8,4,20,0.97) 100%)",
    svgOverlay: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <ellipse cx="140" cy="80" rx="55" ry="45" fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.4)" strokeWidth="1.5"/>
        {([[100,55],[140,45],[180,55],[195,80],[180,105],[140,115],[100,105],[85,80]] as [number,number][]).map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="rgba(167,139,250,0.75)" stroke="rgba(167,139,250,1)" strokeWidth="1"/>
        ))}
        {([[100,55,140,45],[140,45,180,55],[180,55,195,80],[195,80,180,105],[180,105,140,115],[140,115,100,105],[100,105,85,80],[85,80,100,55],[100,55,195,80],[140,45,140,115],[85,80,180,55]] as [number,number,number,number][]).map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(167,139,250,0.3)" strokeWidth="1"/>
        ))}
        <circle cx="140" cy="80" r="10" fill="rgba(167,139,250,0.5)" stroke="rgba(167,139,250,0.9)" strokeWidth="1.5"/>
        {[0,1,2,3,4].map(i => (
          <rect key={i} x={22} y={30+i*5} width={18+i*4} height="3" rx="1.5" fill="rgba(167,139,250,0.4)"/>
        ))}
        {[0,1,2,3,4].map(i => (
          <rect key={i} x={240-i*4} y={30+i*5} width={18+i*4} height="3" rx="1.5" fill="rgba(167,139,250,0.4)"/>
        ))}
      </svg>
    ),
  },
  {
    title: "Embedded Systems",
    description:
      "Engineering microcontroller-based solutions with Arduino, Raspberry Pi, circuit design, and smart hardware systems.",
    tags: ["Embedded Systems", "Arduino", "Raspberry Pi", "C/C++", "IoT Hardware"],
    accent: "#34d399",
    accentSoft: "rgba(52,211,153,0.15)",
    accentBorder: "rgba(52,211,153,0.3)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    imageAlt: "Microcontroller circuit board embedded systems",
    overlay: "linear-gradient(180deg, rgba(2,15,10,0.45) 0%, rgba(2,15,10,0.82) 60%, rgba(2,15,10,0.97) 100%)",
    svgOverlay: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="90" y="40" width="100" height="80" rx="6" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.55)" strokeWidth="1.5"/>
        <rect x="100" y="50" width="80" height="60" rx="4" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.3)" strokeWidth="1"/>
        {[55,65,75,85,95,105].map((y,i) => (
          <g key={i}>
            <rect x="82" y={y} width="8" height="4" rx="1" fill="rgba(52,211,153,0.6)"/>
            <rect x="190" y={y} width="8" height="4" rx="1" fill="rgba(52,211,153,0.6)"/>
          </g>
        ))}
        {[105,120,135,155,170].map((x,i) => (
          <g key={i}>
            <rect x={x} y="32" width="4" height="8" rx="1" fill="rgba(52,211,153,0.6)"/>
            <rect x={x} y="120" width="4" height="8" rx="1" fill="rgba(52,211,153,0.6)"/>
          </g>
        ))}
        <circle cx="140" cy="80" r="12" fill="rgba(52,211,153,0.2)" stroke="rgba(52,211,153,0.7)" strokeWidth="1.5"/>
        <circle cx="140" cy="80" r="5" fill="rgba(52,211,153,0.8)"/>
        {([[115,60],[165,60],[115,100],[165,100]] as [number,number][]).map(([cx,cy],i) => (
          <rect key={i} x={cx-4} y={cy-4} width="8" height="8" rx="1" fill="rgba(52,211,153,0.45)" stroke="rgba(52,211,153,0.6)" strokeWidth="1"/>
        ))}
      </svg>
    ),
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "Connecting smart devices, sensors, and cloud platforms to build intelligent IoT ecosystems and wireless communication networks.",
    tags: ["IoT", "Smart Devices", "Cloud Computing", "Sensors", "Wireless"],
    accent: "#22d3ee",
    accentSoft: "rgba(34,211,238,0.15)",
    accentBorder: "rgba(34,211,238,0.3)",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    imageAlt: "Smart IoT connected devices network",
    overlay: "linear-gradient(180deg, rgba(2,12,20,0.45) 0%, rgba(2,12,20,0.82) 60%, rgba(2,12,20,0.97) 100%)",
    svgOverlay: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="140" cy="80" r="18" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.7)" strokeWidth="1.5"/>
        <circle cx="140" cy="80" r="8" fill="rgba(34,211,238,0.6)"/>
        {([[50,40],[230,40],[50,120],[230,120],[30,80],[250,80]] as [number,number][]).map(([cx,cy],i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="10" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.45)" strokeWidth="1"/>
            <circle cx={cx} cy={cy} r="4" fill="rgba(34,211,238,0.55)"/>
            <line x1={cx} y1={cy} x2="140" y2="80" stroke="rgba(34,211,238,0.3)" strokeWidth="1" strokeDasharray="4 3"/>
          </g>
        ))}
        {[1,2,3].map(r => (
          <circle key={r} cx="140" cy="80" r={r*22} fill="none" stroke="rgba(34,211,238,0.12)" strokeWidth="1" strokeDasharray="3 4"/>
        ))}
        <circle cx="140" cy="25" r="5" fill="rgba(34,211,238,0.4)" stroke="rgba(34,211,238,0.7)" strokeWidth="1"/>
        <circle cx="140" cy="135" r="5" fill="rgba(34,211,238,0.4)" stroke="rgba(34,211,238,0.7)" strokeWidth="1"/>
      </svg>
    ),
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative flex flex-col rounded-3xl overflow-hidden"
      style={{
        background: "rgba(8,12,28,0.8)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: `1px solid ${service.accentBorder}`,
        boxShadow: `0 0 0 1px rgba(255,255,255,0.03), 0 8px 40px rgba(0,0,0,0.6), 0 0 80px ${service.accentSoft}`,
      }}
    >
      {/* Top edge glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 rounded-full z-10"
        style={{ background: `linear-gradient(90deg, transparent, ${service.accent}90, transparent)` }}
      />

      {/* ── Image area ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "200px" }}>
        {/* Real photo */}
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ objectPosition: "center" }}
        />

        {/* Dark gradient overlay so text/SVG stays readable */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: service.overlay }}
        />

        {/* Hover accent glow overlay */}
        <div
          className="absolute inset-0 z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at 50% 80%, ${service.accentSoft} 0%, transparent 70%)`,
          }}
        />

        {/* SVG illustration on top of photo */}
        <div className="absolute inset-0 z-[3] flex items-center justify-center p-4">
          {service.svgOverlay}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col gap-3 p-6 pt-5">
        <h3
          className="text-lg font-bold tracking-tight"
          style={{
            background: `linear-gradient(135deg, #f8fafc 0%, ${service.accent} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "'Inter', 'Poppins', sans-serif",
          }}
        >
          {service.title}
        </h3>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "#94a3b8", fontFamily: "'Inter', 'Poppins', sans-serif" }}
        >
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: service.accentSoft,
                color: service.accent,
                border: `1px solid ${service.accentBorder}`,
                fontFamily: "'Inter', 'Poppins', sans-serif",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom hover glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${service.accent}70, transparent)` }}
      />
    </motion.div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative w-full py-24 overflow-hidden"
      style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
    >
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-0 h-64 w-64 rounded-full opacity-[0.05] blur-3xl"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "#818cf8" }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#818cf8" }}>
              What I Do
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
            My Services &amp; Expertise
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "#64748b" }}>
            I build modern digital products, intelligent systems, and creative visual experiences
            using advanced technologies.
          </p>

          <div
            className="mx-auto mt-6 h-px w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, #6366f1, transparent)" }}
          />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
