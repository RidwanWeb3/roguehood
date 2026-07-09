import { motion } from "framer-motion";

interface SpeechBubbleProps {
  text: string;
  isTyping: boolean;
  isHovered: boolean;
}

export function SpeechBubble({ text, isTyping, isHovered }: SpeechBubbleProps) {
  return (
    <motion.div
      className="absolute -top-28 -left-20 md:-left-32 z-20 pointer-events-none"
      animate={{
        y: [0, -4, 0],
        opacity: [0.98, 1, 0.98],
        scale: isHovered ? 1.02 : [1, 1.01, 1]
      }}
      transition={{
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 0.3 }
      }}
    >
      <div
        className="relative w-[300px] md:w-[340px] max-w-[380px] p-6 rounded-[24px] border-3 border-lime-400 shadow-2xl"
        style={{
          backgroundColor: "#0B0F0A",
          boxShadow: isHovered
            ? "0 0 40px rgba(0, 255, 0, 0.4)"
            : "0 0 20px rgba(0, 255, 0, 0.2)"
        }}
      >
        {/* Curved tail pointing to mascot's mouth */}
        <div
          className="absolute -bottom-6 left-16 w-14 h-14 border-b-3 border-r-3 border-lime-400 rounded-br-full"
          style={{
            backgroundColor: "#0B0F0A",
            transform: "rotate(45deg)"
          }}
        ></div>

        <div className="whitespace-pre-line">
          <p className="text-lime-400 font-bold text-xl md:text-2xl mb-2">
            {text.split("\n")[0]}
          </p>
          <p className="text-white text-lg md:text-xl leading-relaxed">
            {text.split("\n").slice(1).join("\n")}
            {isTyping && <span className="animate-pulse ml-1">...</span>}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
