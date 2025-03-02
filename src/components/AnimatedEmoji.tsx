"use client";
import { motion } from "framer-motion";

interface AnimatedEmojiProps {
  emoji: "👋" | "💬" | "⚡" | "✉️";
  className?: string;
}

const animations = {
  "👋": {
    animate: { rotate: [0, 20, -20, 20, 0] },
    transition: { duration: 1.5, repeat: Infinity, repeatDelay: 1 }
  },
  "💬": {
    animate: { scale: [1, 1.1, 1], y: [0, -5, 0] },
    transition: { duration: 1, repeat: Infinity, repeatDelay: 0.5 }
  },
  "⚡": {
    animate: { 
      opacity: [0, 1, 0.5, 1],
      scale: [0.8, 1.2, 0.9, 1]
    },
    transition: { duration: 0.8, repeat: Infinity, repeatDelay: 1.5 }
  },
  "✉️": {
    animate: { 
      
      y: [0, -3, 3, -3, 0]
    },
    transition: { duration: 2, repeat: Infinity, repeatDelay: 2 }
  }
};

export function AnimatedEmoji({ emoji, className = "text-4xl" }: AnimatedEmojiProps) {
  return (
    <motion.span 
      className={`inline-block ${className}`}
      animate={animations[emoji].animate}
      transition={animations[emoji].transition}
    >
      {emoji}
    </motion.span>
  );
} 