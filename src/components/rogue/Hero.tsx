import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import banner from "@/assets/hero.png";
import logo from "@/assets/roguehood.png";
import { Send, Coins } from "lucide-react";
import { Fireflies, FloatingLeaves, Fog } from "./Ambience";
import { SpeechBubble } from "./SpeechBubble";

// Dialogue messages (20+)
const dialogues = [
  "👋 Hey, Rogue!\nWelcome to my hideout.\nThe gang has been waiting for you.",
  "😏 Looking for treasure?\nThe real treasure is the community.",
  "🦊 Heroes chase glory.\nRogues build legends.",
  "🏹 Don't tell the guards...\nYou're safe here.",
  "💚 One Hood.\nOne Community.\nOne Mission.",
  "🚀 Ready for the next legendary meme?\nYou're in the right place.",
  "😄 Stay a while.\nExplore the Hood.",
  "💰 I don't steal from friends...\nOnly from boring websites.",
  "🔥 This isn't just another meme.\nIt's a movement.",
  "🌙 The moon is up...\nPerfect time for Rogues.",
  "🎉 Welcome, friend!\nThe forest feels brighter with you here.",
  "🤫 Shhh... the whales are sleeping.\nPerfect time to explore.",
  "✨ Ready to make history?\nYou're in the right place.",
  "🏰 The castle is waiting.\nLet's go exploring.",
  "🍃 The leaves are falling...\nJust like the prices of boring coins.",
  "🌟 You're special.\nDon't let anyone tell you otherwise.",
  "🎭 Normal is boring.\nBe a Rogue.",
  "💎 The best treasure is friendship...\nAnd memes, of course.",
  "⚡ Quick, click BUY!\nJust kidding... or am I?",
  "🌲 The forest is alive...\nAnd so is our community.",
  "🎯 My arrows never miss...\nMostly.",
  "👑 No kings, no bosses.\nJust Rogues.",
  "📜 Today's story is yours to write.",
  "🎨 Let's create something legendary together."
];

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  // Background parallax (3px)
  const bx = useTransform(mx, (v) => v * -3);
  const by = useTransform(my, (v) => v * -3);
  // Mascot parallax (15px)
  const fx = useTransform(mx, (v) => v * 15);
  const fy = useTransform(my, (v) => v * 15);
  const [wink, setWink] = useState(false);
  const [taunt, setTaunt] = useState(false);
  const [currentDialogue, setCurrentDialogue] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [lastIndex, setLastIndex] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const [bounceKey, setBounceKey] = useState(0);

  // Function to get random dialogue (not repeating previous)
  const getRandomDialogue = () => {
    let index;
    do {
      index = Math.floor(Math.random() * dialogues.length);
    } while (index === lastIndex);
    setLastIndex(index);
    return dialogues[index];
  };

  // Function to type dialogue with 35ms speed, pause 1s after typing
  const typeDialogue = (text: string) => {
    setIsTyping(true);
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }
    }, 35);
  };

  // Change dialogue every 10-12 seconds
  useEffect(() => {
    const changeDialogue = () => {
      const newDialogue = getRandomDialogue();
      setCurrentDialogue(newDialogue);
      typeDialogue(newDialogue);
      // Trigger mascot reaction
      setWink(true);
      setTimeout(() => setWink(false), 200);
    };

    // Initial dialogue
    changeDialogue();

    // Interval for changing dialogue (10-12 seconds total, including typing time)
    const dialogueInterval = setInterval(changeDialogue, 10000 + Math.random() * 2000);

    const h = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", h);
    
    // Auto-blink every 5-8 seconds
    const blinkInterval = setInterval(() => {
      setWink(true);
      setTimeout(() => setWink(false), 200);
    }, 5000 + Math.random() * 3000);
    
    return () => {
      window.removeEventListener("mousemove", h);
      clearInterval(blinkInterval);
      clearInterval(dialogueInterval);
    };
  }, [mx, my, lastIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[920px] max-h-[1100px] w-full overflow-hidden pt-24 pb-16"
    >
      <motion.div
        style={{ x: bx, y: by }}
        className="absolute inset-0 z-0"
      >
        <img
          src={banner}
          alt=""
          className="w-full h-full object-contain object-center opacity-100 pointer-events-none user-select-none"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,.25) 100%)",
          }}
        />
      </motion.div>

      <Fog />
      <Fireflies count={50} />
      <FloatingLeaves />

      {/* Moon glow */}
      <div
        className="pointer-events-none absolute -right-40 top-10 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, var(--lime), transparent 60%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid md:grid-cols-[55%_45%] gap-10 items-center min-h-[80svh]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-lime animate-twinkle" />
            <span className="font-display text-[11px] tracking-widest text-lime">
              LIVE ON ROBINHOOD CHAIN
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1, duration: 0.7 }}
            onClick={() => {
              setTaunt(true);
              setTimeout(() => setTaunt(false), 2200);
            }}
            className="font-display text-6xl md:text-8xl leading-[0.9] cursor-pointer select-none"
          >
            <span className="block text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.6)]">
              ROGUE
            </span>
            <span className="block text-lime-glow -mt-2">HOOD</span>
          </motion.h1>

          {taunt && (
            <motion.div
              initial={{ opacity: 0, y: 10, rotate: -3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-3 inline-block glass px-3 py-1 rounded-lg font-display text-xs text-gold"
            >
              "Catch me if you can." 🦊
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.3, duration: 0.6 }}
            className="mt-6 font-display text-sm md:text-base tracking-widest text-white/90"
          >
            <span className="text-lime">→</span> NOT A HERO. NOT A VILLAIN. JUST A ROGUE.{" "}
            <span className="text-lime">←</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4, duration: 0.6 }}
            className="mt-5 max-w-md text-white/70 text-base leading-relaxed"
          >
            The smartest outlaw on Robinhood Chain. Join the funniest gang.
            Own the Hood.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#tokenomics" className="btn-rogue hover:scale-105">
              <Coins size={16} /> BUY $ROGUE
            </a>
            <a
              href="https://t.me/roguehood"
              target="_blank"
              rel="noreferrer"
              className="btn-rogue-outline hover:scale-105"
            >
              <Send size={16} /> JOIN TELEGRAM
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.7 }}
            className="mt-8 flex items-center gap-3 glass rounded-xl px-4 py-2 w-fit"
          >
            <span className="font-display text-xs text-gold tracking-widest">CA:</span>
            <span className="font-mono text-xs text-white/70">
              coming soon on robinhood chain
            </span>
          </motion.div>
        </div>

        <motion.div
          style={{ x: fx, y: fy }}
          className="relative flex justify-center md:justify-end"
        >
          <SpeechBubble
            text={displayedText}
            isTyping={isTyping}
            isHovered={isHovered}
          />

          <motion.div
            key={bounceKey}
            initial={{ scale: 1 }}
            animate={{ 
              y: [0, -3, 0], // 3px floating
              scale: [1, 1.02, 1], // breathing
              rotate: isHovered ? -2 : [0, -1, 0] // slight head tilt, more on hover
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: isHovered ? 0.3 : 5, repeat: isHovered ? 0 : Infinity, ease: "easeInOut" },
              // Bounce on click
              type: "spring",
              stiffness: 300,
              damping: 15
            }}
            className="relative cursor-pointer"
            onMouseEnter={() => {
              setIsHovered(true);
              // Change dialogue on hover
              const newDialogue = getRandomDialogue();
              setCurrentDialogue(newDialogue);
              typeDialogue(newDialogue);
            }}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              // Change dialogue on click
              const newDialogue = getRandomDialogue();
              setCurrentDialogue(newDialogue);
              typeDialogue(newDialogue);
              // Trigger reaction
              setWink(true);
              setTimeout(() => setWink(false), 200);
              // Trigger bounce (handled by key change)
            }}
          >
            <div
              className="absolute inset-0 blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle, var(--lime), transparent 60%)" }}
            />
            <motion.img
              src={logo}
              alt="Roguehood mascot"
              onClick={() => {
                setWink(true);
                setTimeout(() => setWink(false), 900);
              }}
              whileTap={{ scale: 0.95, rotate: -3 }}
              className="relative w-[min(620px,90vw)] cursor-pointer drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            />
            {wink && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-6 right-6 glass px-3 py-1 rounded-lg font-display text-xs text-lime"
              >
                😉 wink
              </motion.div>
            )}
          </motion.div>

          {/* Floating coins */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 2) * 60}%`,
              }}
              animate={{ y: [0, -20, 0], rotate: [0, 360] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut",
              }}
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, oklch(0.95 0.18 95), var(--gold))",
                  boxShadow: "0 0 12px var(--gold)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-[10px] tracking-[0.4em] text-lime/70"
      >
        SCROLL ↓ TO THE HIDEOUT
      </motion.div>
    </section>
  );
}
