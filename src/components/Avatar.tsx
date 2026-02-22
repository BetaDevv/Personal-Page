"use client";

import { motion } from "framer-motion";

export default function Avatar({ size = 200 }: { size?: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 rounded-full border border-purple-500/20"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border border-indigo-500/15"
        animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Glow behind avatar */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-600/20 blur-2xl" />

      {/* Avatar container */}
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-500/30"
        whileHover={{ scale: 1.05, borderColor: "rgba(139, 92, 246, 0.6)" }}
        transition={{ duration: 0.3 }}
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background gradient */}
          <defs>
            <linearGradient id="bgGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1a1040" />
              <stop offset="50%" stopColor="#0f1a35" />
              <stop offset="100%" stopColor="#0a1228" />
            </linearGradient>
            <linearGradient id="suitGrad" x1="60" y1="130" x2="140" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#0f0f1a" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="80" y1="50" x2="120" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d4a574" />
              <stop offset="100%" stopColor="#c4915a" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="70" y1="30" x2="130" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#2d2d2d" />
            </linearGradient>
            <linearGradient id="tieGrad" x1="95" y1="130" x2="105" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
            <radialGradient id="shirtGrad" cx="100" cy="150" r="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </radialGradient>
          </defs>

          {/* Background circle */}
          <circle cx="100" cy="100" r="100" fill="url(#bgGrad)" />

          {/* Subtle pattern overlay */}
          <circle cx="100" cy="100" r="100" fill="url(#bgGrad)" opacity="0.8" />
          <circle cx="160" cy="40" r="50" fill="#8b5cf6" opacity="0.03" />
          <circle cx="40" cy="160" r="40" fill="#6366f1" opacity="0.03" />

          {/* Body / Suit jacket */}
          <path
            d="M55 200 C55 155, 65 140, 80 132 L100 145 L120 132 C135 140, 145 155, 145 200 Z"
            fill="url(#suitGrad)"
          />
          {/* Suit lapel left */}
          <path
            d="M80 132 L92 155 L100 145 Z"
            fill="#252540"
          />
          {/* Suit lapel right */}
          <path
            d="M120 132 L108 155 L100 145 Z"
            fill="#252540"
          />

          {/* Shirt collar */}
          <path
            d="M88 132 L100 150 L112 132 L108 128 L100 140 L92 128 Z"
            fill="url(#shirtGrad)"
          />

          {/* Tie */}
          <path
            d="M97 140 L100 148 L103 140 L102 175 L100 180 L98 175 Z"
            fill="url(#tieGrad)"
          />

          {/* Neck */}
          <rect x="90" y="115" width="20" height="22" rx="4" fill="url(#skinGrad)" />

          {/* Head / Face */}
          <ellipse cx="100" cy="85" rx="35" ry="40" fill="url(#skinGrad)" />

          {/* Ears */}
          <ellipse cx="65" cy="88" rx="6" ry="9" fill="#cda068" />
          <ellipse cx="135" cy="88" rx="6" ry="9" fill="#cda068" />
          <ellipse cx="65" cy="88" rx="3.5" ry="5.5" fill="#b8895a" />
          <ellipse cx="135" cy="88" rx="3.5" ry="5.5" fill="#b8895a" />

          {/* Hair */}
          <path
            d="M65 78 C65 52, 78 38, 100 38 C122 38, 135 52, 135 78 C135 68, 128 55, 100 55 C72 55, 65 68, 65 78 Z"
            fill="url(#hairGrad)"
          />
          {/* Hair volume top */}
          <path
            d="M68 75 C68 48, 80 35, 100 35 C120 35, 132 48, 132 75 C132 60, 122 48, 100 48 C78 48, 68 60, 68 75 Z"
            fill="#1a1a1a"
          />
          {/* Side hair */}
          <path d="M65 78 C63 70, 65 60, 70 55 C67 62, 65 70, 65 78 Z" fill="#1a1a1a" />
          <path d="M135 78 C137 70, 135 60, 130 55 C133 62, 135 70, 135 78 Z" fill="#1a1a1a" />

          {/* Eyebrows */}
          <path d="M80 74 Q87 70, 93 73" stroke="#2d2d2d" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M107 73 Q113 70, 120 74" stroke="#2d2d2d" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Eyes */}
          <ellipse cx="87" cy="82" rx="6" ry="5" fill="white" />
          <ellipse cx="113" cy="82" rx="6" ry="5" fill="white" />
          <ellipse cx="88" cy="82" rx="3" ry="3.5" fill="#3d2b1a" />
          <ellipse cx="114" cy="82" rx="3" ry="3.5" fill="#3d2b1a" />
          <ellipse cx="88.5" cy="81.5" rx="1.2" ry="1.2" fill="#000" />
          <ellipse cx="114.5" cy="81.5" rx="1.2" ry="1.2" fill="#000" />
          {/* Eye shine */}
          <circle cx="89.5" cy="80.5" r="0.8" fill="white" opacity="0.8" />
          <circle cx="115.5" cy="80.5" r="0.8" fill="white" opacity="0.8" />

          {/* Nose */}
          <path d="M98 86 Q100 94, 102 86" stroke="#b8895a" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Smile */}
          <path d="M89 100 Q100 109, 111 100" stroke="#a68060" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Lips subtle */}
          <path d="M92 100 Q100 105, 108 100" fill="#c08868" opacity="0.5" />

          {/* Suit buttons */}
          <circle cx="100" cy="162" r="2" fill="#4a4a6a" />
          <circle cx="100" cy="172" r="2" fill="#4a4a6a" />

          {/* Suit pocket square (purple accent) */}
          <path
            d="M123 148 L128 145 L130 150 L126 152 Z"
            fill="#8b5cf6"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      {/* Status indicator */}
      <motion.div
        className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-400 border-[3px] border-[#070b14]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
}
