import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  Link as LinkIcon,
  HeartHandshake,
  Palette,
  Laugh,
  Infinity as InfinityIcon,
  Send,
  Twitter,
  ChevronDown,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import banner from "@/assets/banneer.png";
import logo from "@/assets/roguehood.png";

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center mb-14">
      <Reveal>
        <p className="font-display text-xs tracking-[0.4em] text-lime mb-3">
          <span className="text-gold">←</span> {eyebrow}{" "}
          <span className="text-gold">→</span>
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">
          {title.split(" ").map((w, i) => (
            <span key={i} className={i % 2 === 1 ? "text-lime-glow" : ""}>
              {w}{" "}
            </span>
          ))}
        </h2>
      </Reveal>
    </div>
  );
}

export function Story() {
  const lines = [
    "Long before Robinhood Chain became home to countless projects…",
    "One fox refused to follow the rules.",
    "He never wanted a crown. He never wanted a throne.",
    "He only wanted one thing… Freedom.",
    "While everyone chased riches, Roguehood chased adventure.",
    "He stole nothing from the innocent.",
    "He stole laughter. He stole attention. He stole memes.",
    "Soon more rogues appeared. Builders. Dreamers. Degens. Artists.",
    "Together they created the funniest outlaw community on Robinhood Chain.",
    "No kings. No masters. No limits. Only Rogues.",
    "Welcome to Roguehood.",
  ];
  return (
    <section id="story" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="CHAPTER 01" title="THE LEGEND OF ROGUEHOOD" />
        <div className="space-y-5">
          {lines.map((l, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p
                className={`${
                  i === lines.length - 1
                    ? "font-display text-2xl md:text-4xl text-lime-glow text-center pt-4"
                    : "text-lg md:text-xl text-white/80 text-center"
                }`}
              >
                {l}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-3xl blur-2xl opacity-40"
              style={{ background: "radial-gradient(circle, var(--lime), transparent 70%)" }}
            />
            <motion.img
              src={logo}
              alt="Roguehood"
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-md mx-auto"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="font-display text-xs tracking-[0.4em] text-lime mb-3">
              <span className="text-gold">←</span> WHO IS HE{" "}
              <span className="text-gold">→</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">
              ABOUT <span className="text-lime-glow">ROGUEHOOD</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 space-y-4 text-white/75 leading-relaxed">
              <p>
                ROGUEHOOD is a community-driven meme project built exclusively on
                Robinhood Chain. Inspired by the legendary spirit of clever outlaws,
                Roguehood is more than another meme token — it's a brand built around
                humor, creativity, and community.
              </p>
              <p>
                Our mission is simple: create the funniest, most recognizable fox on
                Robinhood Chain while building a loyal community that grows together.
              </p>
              <p className="text-lime font-display text-sm tracking-widest">
                NO PROMISES. NO ROADMAP THEATER. NO FAKE UTILITY.
              </p>
              <p>
                Every holder becomes a Rogue. Every Rogue becomes part of the story.
                <span className="text-lime"> The Hood belongs to everyone.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { icon: Laugh, title: "Funny Brand", desc: "A mascot that steals smiles." },
  { icon: Users, title: "Strong Community", desc: "Rogues, dreamers, degens." },
  { icon: LinkIcon, title: "Robinhood Chain", desc: "Built exclusively on RBH." },
  { icon: HeartHandshake, title: "100% Community", desc: "No team wallet. No VC." },
  { icon: Palette, title: "Premium Artwork", desc: "AAA cartoon universe." },
  { icon: Sparkles, title: "Meme First", desc: "Culture before candles." },
  { icon: InfinityIcon, title: "Forever Rogue", desc: "Once a Rogue, always." },
];

export function Why() {
  return (
    <section id="why" className="relative py-28 px-6">
      <SectionTitle eyebrow="THE HIDEOUT" title="WHY ROGUEHOOD" />
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -6, rotate: -0.5 }}
              className="group relative overflow-hidden rounded-2xl p-6 h-full glass border-lime/20"
            >
              <div
                className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity"
                style={{ background: "radial-gradient(circle, var(--lime), transparent)" }}
              />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-lime/10 border border-lime/30">
                  <w.icon className="text-lime" size={22} />
                </div>
                <h3 className="mt-4 font-display text-lg text-white tracking-wide">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">{w.desc}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Tokenomics() {
  const stats = [
    "No Team Allocation",
    "No VC",
    "No Private Sale",
    "No Presale",
    "No Hidden Wallets",
    "Fair Launch",
  ];
  return (
    <section id="tokenomics" className="relative py-28 px-6 overflow-hidden">
      {/* falling coins */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full"
            style={{
              left: `${(i * 7 + 5) % 100}%`,
              background:
                "radial-gradient(circle at 30% 30%, oklch(0.95 0.18 95), var(--gold))",
              boxShadow: "0 0 10px var(--gold)",
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: 360 }}
            transition={{
              duration: 6 + (i % 5),
              delay: i * 0.4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <SectionTitle eyebrow="THE TREASURY" title="100% COMMUNITY DRIVEN" />

      <div className="max-w-5xl mx-auto grid md:grid-cols-[auto_1fr] gap-12 items-center">
        <Reveal>
          <div className="relative mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border-2 border-dashed border-lime/40"
            />
            <div
              className="relative w-64 h-64 rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, var(--lime-glow), var(--lime) 60%, oklch(0.4 0.2 130))",
                boxShadow: "0 0 60px var(--lime)",
              }}
            >
              <div className="text-center text-ink">
                <div className="font-display text-6xl leading-none">100%</div>
                <div className="font-display text-xs tracking-[0.3em] mt-2">
                  COMMUNITY OWNED
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-3">
          {stats.map((s, i) => (
            <Reveal key={s} delay={i * 0.06}>
              <div className="glass rounded-xl px-5 py-4 flex items-center gap-3 border-lime/20">
                <span className="text-lime font-display">✓</span>
                <span className="font-display text-sm tracking-widest text-white/90">
                  {s.toUpperCase()}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const GANG = [
  { title: "Become a Rogue", desc: "Grab a bag. Join the hood." },
  { title: "Create Memes", desc: "Weapons of mass distraction." },
  { title: "Raid Together", desc: "Hunt timelines, not treasure." },
  { title: "Build Together", desc: "Devs, artists, shitposters welcome." },
  { title: "Grow Together", desc: "The Hood scales with you." },
  { title: "Celebrate Together", desc: "Every candle deserves a cheer." },
];

export function Community() {
  return (
    <section id="community" className="relative py-28 px-6">
      <SectionTitle eyebrow="THE GANG" title="JOIN THE HOOD" />
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {GANG.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass rounded-2xl p-6 border-lime/20 h-full"
            >
              <div className="font-display text-lime text-3xl">0{i + 1}</div>
              <h3 className="mt-2 font-display text-xl text-white">{g.title}</h3>
              <p className="mt-2 text-sm text-white/60">{g.desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Social() {
  return (
    <section id="social" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.08 0.02 145 / 60%), oklch(0.08 0.02 145 / 95%))",
        }}
      />
      <div className="relative">
        <SectionTitle eyebrow="TRANSMISSIONS" title="FIND THE GANG" />
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
          <Reveal>
            <a
              href="https://x.com/Roguehood_"
              target="_blank"
              rel="noreferrer"
              className="group relative block glass rounded-2xl p-8 hover:border-lime transition-colors overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"
                style={{ background: "radial-gradient(circle at center, var(--lime), transparent 70%)" }}
              />
              <Twitter className="text-lime" size={36} />
              <div className="mt-4 font-display text-2xl text-white">Follow on X</div>
              <div className="mt-1 text-white/60 text-sm">@Roguehood_</div>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="https://t.me/roguehood"
              target="_blank"
              rel="noreferrer"
              className="group relative block glass rounded-2xl p-8 hover:border-lime transition-colors overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"
                style={{ background: "radial-gradient(circle at center, var(--lime), transparent 70%)" }}
              />
              <Send className="text-lime" size={36} />
              <div className="mt-4 font-display text-2xl text-white">Join Telegram</div>
              <div className="mt-1 text-white/60 text-sm">Coming soon</div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "What is $ROGUE?",
    a: "The token of the Roguehood gang on Robinhood Chain. A brand, a meme, a movement.",
  },
  {
    q: "Is there a team allocation?",
    a: "Zero. 100% community driven. No VC, no presale, no hidden wallets.",
  },
  {
    q: "What chain is it on?",
    a: "Robinhood Chain — exclusively. The Hood lives here.",
  },
  {
    q: "How do I become a Rogue?",
    a: "Grab a bag of $ROGUE, join the Telegram, and start stealing memes.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28 px-6">
      <SectionTitle eyebrow="THE INTERROGATION" title="ROGUE QUESTIONS" />
      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.05}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full glass rounded-xl p-5 text-left"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-display text-white tracking-wide">{f.q}</span>
                <ChevronDown
                  className={`text-lime transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </div>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                className="overflow-hidden text-white/70 text-sm"
              >
                <p className="pt-3">{f.a}</p>
              </motion.div>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  const [year, setYear] = useState<string | number>("");
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative pt-24 pb-10 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent, oklch(0.06 0.02 145) 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Roguehood" className="w-12 h-12" />
            <span className="font-display text-xl text-lime-glow">ROGUEHOOD</span>
          </div>
          <p className="mt-4 text-white/60 text-sm max-w-xs">
            The smartest outlaw on Robinhood Chain. Not a hero. Not a villain. Just a Rogue.
          </p>
        </div>
        <div>
          <div className="font-display text-xs tracking-[0.3em] text-lime mb-3">
            HIDEOUT
          </div>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="#story" className="hover:text-lime">Story</a></li>
            <li><a href="#about" className="hover:text-lime">About</a></li>
            <li><a href="#tokenomics" className="hover:text-lime">Tokenomics</a></li>
            <li><a href="#community" className="hover:text-lime">Community</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-xs tracking-[0.3em] text-lime mb-3">
            SIGNALS
          </div>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="https://x.com/Roguehood_" target="_blank" rel="noreferrer" className="hover:text-lime">X / Twitter</a></li>
            <li><a href="https://t.me/roguehood" target="_blank" rel="noreferrer" className="hover:text-lime">Telegram</a></li>
            <li><a href="https://www.roguehood.fun" className="hover:text-lime">www.roguehood.fun</a></li>
          </ul>
        </div>
      </div>
      <div className="relative mt-14 pt-6 border-t border-lime/10 text-center text-white/40 text-xs font-display tracking-widest">
        © {year} ROGUEHOOD — BUILT BY OUTLAWS, FOR THE COMMUNITY.
      </div>
    </footer>
  );
}
