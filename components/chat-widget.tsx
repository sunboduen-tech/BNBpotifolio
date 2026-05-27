"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaCommentDots,
  FaTimes,
  FaPaperPlane,
  FaWhatsapp,
  FaSmile,
} from "react-icons/fa";
import { links } from "@/config";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type Role = "bot" | "user";

interface Message {
  id: string;
  role: Role;
  text: string;
  time: string;
  status?: "sent" | "delivered" | "read";
}

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function nowTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

/* ─────────────────────────────────────────────
   STATIC AUTO-REPLY ENGINE
   Pure frontend — no API, no backend
───────────────────────────────────────────── */
const AUTO_REPLIES: { pattern: RegExp; replies: string[] }[] = [
  {
    pattern: /hi|hello|hey|howdy|sup|greetings/i,
    replies: [
      "Hey there! 👋 Great to hear from you!",
      "Hello! 😊 How can I help you today?",
    ],
  },
  {
    pattern: /project|work|portfolio|built|made|created/i,
    replies: [
      "I've built some cool projects! 🚀 Check out the Projects section above — Automatic Parking System, Self-Driving Car, Traffic Light AI, and more!",
    ],
  },
  {
    pattern: /hire|job|freelance|available|opportunity|contract/i,
    replies: [
      "I'm currently available for freelance & full-time opportunities! 💼 Feel free to reach out via WhatsApp or email — let's build something great together.",
    ],
  },
  {
    pattern: /skill|tech|stack|language|framework|react|node|ai/i,
    replies: [
      "My stack includes React.js, Node.js, Express.js, MySQL, Tailwind CSS, AI/ML systems, and Mobile App Development. Check the CV section for the full list! 🛠️",
    ],
  },
  {
    pattern: /price|cost|rate|charge|budget|quote/i,
    replies: [
      "Pricing depends on the project scope. Let's discuss your requirements! 💬 Message me on WhatsApp for a quick quote.",
    ],
  },
  {
    pattern: /contact|reach|email|phone|whatsapp|message/i,
    replies: [
      `You can reach me at:\n📧 ${links.ownerEmail}\n📞 ${links.ownerPhone}\n💬 WhatsApp: ${links.ownerWhatsApp}`,
    ],
  },
  {
    pattern: /cv|resume|experience|education|background/i,
    replies: [
      "You can view my full CV in the CV section of this portfolio, or download the PDF directly! 📄",
    ],
  },
  {
    pattern: /name|who are you|introduce|about you/i,
    replies: [
      `I'm ${links.ownerName} — a Full-Stack Developer, AI Systems Engineer & Mobile App Developer based in Rwanda. 🇷🇼`,
    ],
  },
  {
    pattern: /thanks|thank you|thx|appreciate|great|awesome|nice/i,
    replies: [
      "You're welcome! 😊 Feel free to ask anything else.",
      "Happy to help! 🙌 Don't hesitate to reach out anytime.",
    ],
  },
  {
    pattern: /bye|goodbye|see you|later|cya/i,
    replies: [
      "Goodbye! 👋 Feel free to come back anytime. Have a great day!",
    ],
  },
];

const FALLBACK_REPLIES = [
  "That's a great question! 🤔 For detailed info, feel free to message me on WhatsApp.",
  "I'd love to chat more about that! Reach out via email or WhatsApp for a full conversation. 💬",
  "Thanks for your message! I'll get back to you soon. You can also WhatsApp me for a faster reply. ⚡",
];

function getAutoReply(input: string): string {
  for (const { pattern, replies } of AUTO_REPLIES) {
    if (pattern.test(input)) {
      return replies[Math.floor(Math.random() * replies.length)];
    }
  }
  return FALLBACK_REPLIES[Math.floor(Math.random() * FALLBACK_REPLIES.length)];
}

/* ─────────────────────────────────────────────
   INITIAL GREETING MESSAGES
───────────────────────────────────────────── */
const INITIAL_MESSAGES: Message[] = [
  {
    id: "init-1",
    role: "bot",
    text: `Hey there! 👋 I'm ${links.ownerName.split(" ")[0]}'s portfolio assistant.`,
    time: nowTime(),
  },
  {
    id: "init-2",
    role: "bot",
    text: "Welcome to my portfolio! 🚀 Feel free to ask me anything — about my projects, skills, availability, or how to get in touch.",
    time: nowTime(),
  },
  {
    id: "init-3",
    role: "bot",
    text: "💡 Try asking: \"What projects have you built?\" or \"Are you available for hire?\"",
    time: nowTime(),
  },
];

/* ─────────────────────────────────────────────
   QUICK REPLY CHIPS
───────────────────────────────────────────── */
const QUICK_REPLIES = [
  "What projects did you build? 🚀",
  "Are you available for hire? 💼",
  "What's your tech stack? 🛠️",
  "How can I contact you? 📞",
];

/* ─────────────────────────────────────────────
   MESSAGE BUBBLE COMPONENT
───────────────────────────────────────────── */
function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Avatar */}
      {!isUser && (
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
          style={{
            background: "linear-gradient(135deg, #6366f1, #3b82f6)",
            boxShadow: "0 0 10px rgba(99,102,241,0.4)",
          }}
        >
          B
        </div>
      )}

      <div className={`flex flex-col gap-0.5 max-w-[78%] ${isUser ? "items-end" : "items-start"}`}>
        {/* Bubble */}
        <div
          className="px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line"
          style={
            isUser
              ? {
                  background: "linear-gradient(135deg, #6366f1, #3b82f6)",
                  color: "#fff",
                  borderBottomRightRadius: "4px",
                  boxShadow: "0 2px 12px rgba(99,102,241,0.35)",
                }
              : {
                  background: "rgba(30,41,59,0.9)",
                  color: "#e2e8f0",
                  border: "1px solid rgba(99,102,241,0.15)",
                  borderBottomLeftRadius: "4px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }
          }
        >
          {msg.text}
        </div>

        {/* Time + status */}
        <div className={`flex items-center gap-1 px-1 ${isUser ? "flex-row-reverse" : ""}`}>
          <span className="text-[10px]" style={{ color: "#475569" }}>{msg.time}</span>
          {isUser && (
            <span className="text-[10px]" style={{ color: "#6366f1" }}>
              {msg.status === "read" ? "✓✓" : msg.status === "delivered" ? "✓✓" : "✓"}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   TYPING INDICATOR
───────────────────────────────────────────── */
function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="flex items-end gap-2"
    >
      <div
        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
        style={{ background: "linear-gradient(135deg, #6366f1, #3b82f6)" }}
      >
        B
      </div>
      <div
        className="px-4 py-3 rounded-2xl rounded-bl-[4px] flex items-center gap-1"
        style={{
          background: "rgba(30,41,59,0.9)",
          border: "1px solid rgba(99,102,241,0.15)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block w-1.5 h-1.5 rounded-full"
            style={{ background: "#6366f1" }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   CHAT POPUP
───────────────────────────────────────────── */
function ChatPopup({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Auto-scroll to bottom on new message */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  /* Focus input on open */
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 300);
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      setShowQuickReplies(false);

      /* Add user message */
      const userMsg: Message = {
        id: uid(),
        role: "user",
        text: trimmed,
        time: nowTime(),
        status: "sent",
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");

      /* Simulate "delivered" tick after 400ms */
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) => (m.id === userMsg.id ? { ...m, status: "delivered" } : m))
        );
      }, 400);

      /* Show typing indicator */
      setIsTyping(true);

      /* Bot reply after realistic delay */
      const delay = 900 + Math.random() * 700;
      setTimeout(() => {
        setIsTyping(false);

        /* Mark user message as read */
        setMessages((prev) =>
          prev.map((m) => (m.id === userMsg.id ? { ...m, status: "read" } : m))
        );

        /* Add bot reply */
        setMessages((prev) => [
          ...prev,
          {
            id: uid(),
            role: "bot",
            text: getAutoReply(trimmed),
            time: nowTime(),
          },
        ]);
      }, delay);
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className="fixed bottom-24 right-4 sm:right-6 z-[9999] w-[calc(100vw-2rem)] sm:w-[380px] flex flex-col overflow-hidden"
      style={{
        height: "min(580px, calc(100vh - 120px))",
        borderRadius: "24px",
        background: "rgba(8, 12, 28, 0.97)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(99,102,241,0.25)",
        boxShadow:
          "0 0 0 1px rgba(99,102,241,0.1), 0 24px 80px rgba(0,0,0,0.7), 0 0 60px rgba(99,102,241,0.12)",
        fontFamily: "'Inter', 'Poppins', sans-serif",
      }}
    >
      {/* ── Header ── */}
      <div
        className="flex items-center justify-between px-4 py-3.5 flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(59,130,246,0.15))",
          borderBottom: "1px solid rgba(99,102,241,0.2)",
        }}
      >
        <div className="flex items-center gap-3">
          {/* Avatar with online ring */}
          <div className="relative">
            <div
              className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
              style={{
                border: "2px solid rgba(99,102,241,0.5)",
                boxShadow: "0 0 12px rgba(99,102,241,0.3)",
              }}
            >
              <Image
                src="/boduen-profile.jpg"
                alt="Developer"
                width={40}
                height={40}
                className="object-cover w-full h-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/profile-avatar.jpg";
                }}
              />
            </div>
            {/* Online dot */}
            <span
              className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2"
              style={{
                background: "#22c55e",
                borderColor: "rgba(8,12,28,0.97)",
                boxShadow: "0 0 6px rgba(34,197,94,0.7)",
              }}
            />
          </div>

          <div>
            <p className="text-sm font-bold leading-tight" style={{ color: "#f1f5f9" }}>
              {links.ownerName.split(" ")[0]} Boduen
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#22c55e" }}
              />
              <span className="text-[11px] font-medium" style={{ color: "#22c55e" }}>
                Online · Available for work
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* WhatsApp shortcut */}
          <a
            href={links.ownerWhatsAppLink}
            target="_blank"
            rel="noreferrer noopener"
            title="Open WhatsApp"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(37,211,102,0.15)",
                border: "1px solid rgba(37,211,102,0.3)",
                color: "#25d366",
              }}
            >
              <FaWhatsapp className="text-sm" />
            </motion.div>
          </a>

          {/* Close */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8",
            }}
          >
            <FaTimes className="text-xs" />
          </motion.button>
        </div>
      </div>

      {/* ── Messages area ── */}
      <div
        className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(99,102,241,0.3) transparent",
        }}
      >
        {messages.map((msg) => (
          <MessageBubble key={msg.id} msg={msg} />
        ))}

        {/* Typing indicator */}
        <AnimatePresence>{isTyping && <TypingIndicator />}</AnimatePresence>

        {/* Quick reply chips — shown only at start */}
        <AnimatePresence>
          {showQuickReplies && !isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex flex-wrap gap-2 mt-1"
            >
              {QUICK_REPLIES.map((qr) => (
                <motion.button
                  key={qr}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => sendMessage(qr)}
                  className="text-xs px-3 py-1.5 rounded-full transition-all"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    border: "1px solid rgba(99,102,241,0.3)",
                    color: "#818cf8",
                  }}
                >
                  {qr}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={bottomRef} />
      </div>

      {/* ── Input bar ── */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
        style={{ borderTop: "1px solid rgba(99,102,241,0.15)" }}
      >
        {/* Emoji placeholder */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full"
          style={{ color: "#475569" }}
          title="Emoji (decorative)"
        >
          <FaSmile className="text-base" />
        </motion.button>

        {/* Text input */}
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          maxLength={300}
          className="flex-1 bg-transparent outline-none text-sm placeholder:text-slate-600"
          style={{
            color: "#e2e8f0",
            fontFamily: "'Inter', 'Poppins', sans-serif",
          }}
        />

        {/* Send button */}
        <motion.button
          type="submit"
          disabled={!input.trim()}
          whileHover={input.trim() ? { scale: 1.08 } : {}}
          whileTap={input.trim() ? { scale: 0.92 } : {}}
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all"
          style={{
            background: input.trim()
              ? "linear-gradient(135deg, #6366f1, #3b82f6)"
              : "rgba(99,102,241,0.15)",
            color: input.trim() ? "#fff" : "#475569",
            boxShadow: input.trim() ? "0 0 16px rgba(99,102,241,0.4)" : "none",
            cursor: input.trim() ? "pointer" : "not-allowed",
          }}
        >
          <FaPaperPlane className="text-xs translate-x-[1px]" />
        </motion.button>
      </form>

      {/* ── Footer note ── */}
      <div
        className="text-center py-2 text-[10px] flex-shrink-0"
        style={{
          color: "#334155",
          borderTop: "1px solid rgba(255,255,255,0.03)",
        }}
      >
        Static demo · For real chat use{" "}
        <a
          href={links.ownerWhatsAppLink}
          target="_blank"
          rel="noreferrer noopener"
          className="underline"
          style={{ color: "#25d366" }}
        >
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   FLOATING CHAT BUTTON
───────────────────────────────────────────── */
function FloatingButton({
  isOpen,
  onClick,
  unread,
}: {
  isOpen: boolean;
  onClick: () => void;
  unread: number;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-5 right-4 sm:right-6 z-[9999] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      style={{
        background: isOpen
          ? "rgba(30,41,59,0.95)"
          : "linear-gradient(135deg, #6366f1, #3b82f6)",
        border: "2px solid rgba(99,102,241,0.4)",
        boxShadow: isOpen
          ? "0 4px 20px rgba(0,0,0,0.4)"
          : "0 4px 30px rgba(99,102,241,0.5), 0 0 60px rgba(99,102,241,0.2)",
      }}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.span
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaTimes className="text-white text-lg" />
          </motion.span>
        ) : (
          <motion.span
            key="open"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaCommentDots className="text-white text-xl" />
          </motion.span>
        )}
      </AnimatePresence>

      {/* Unread badge */}
      <AnimatePresence>
        {!isOpen && unread > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
            style={{ background: "#ef4444", boxShadow: "0 0 8px rgba(239,68,68,0.6)" }}
          >
            {unread}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Pulse ring — only when closed */}
      {!isOpen && (
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ border: "2px solid rgba(99,102,241,0.5)" }}
          animate={{ scale: [1, 1.5, 1.5], opacity: [0.6, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </motion.button>
  );
}

/* ─────────────────────────────────────────────
   CHAT WIDGET  (root export)
───────────────────────────────────────────── */
export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [unread, setUnread] = useState(1); // start with 1 unread to attract attention

  /* Clear unread when opened */
  const handleOpen = () => {
    setIsOpen(true);
    setUnread(0);
  };

  const handleClose = () => setIsOpen(false);

  const toggle = () => (isOpen ? handleClose() : handleOpen());

  return (
    <>
      {/* Floating button */}
      <FloatingButton isOpen={isOpen} onClick={toggle} unread={unread} />

      {/* Chat popup */}
      <AnimatePresence>{isOpen && <ChatPopup onClose={handleClose} />}</AnimatePresence>
    </>
  );
}
