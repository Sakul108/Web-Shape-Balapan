import { useEffect, useRef, useState } from "react"
import img from "../assets/images/HeroImages.webp"
import play from "../assets/images/seek.webp"
import texture from "../assets/images/texture.webp"
import Shapes from "../assets/images/Shapes.webp"
import image from "../assets/images/Maths.webp"
import New from "../assets/images/New.webp"
import Smiles from "../assets/images/Smiles.webp"
import Happy from "../assets/images/Happy.webp"
import Joy from "../assets/images/Joy.webp"

import Moment from "../assets/images/Moment.webp"
import Chess from "../assets/images/Chess.webp"



import { useNavigate } from "react-router-dom"
import { Shield, Users, Search, ArrowRight, Leaf, RefreshCw } from "lucide-react"


const HERO_HEIGHT = "clamp(560px, 82vh, 760px)"
const HERO_FOCUS  = "center 35%"


const GALLERY = [
  { src: play,  alt: "Children doing crafts",      caption: "" },
  { src: image, alt: "Kids at Shape Balapan",      caption: "" },
  { src: Smiles,   alt: "Students smiling in class",  caption: "" },
  {src: New, alt: "Student with their playful smile", caption: ""},
  {src: Happy, alt: "Student with their playful smile", caption: ""},
  {src: Moment, alt: "Student with their playful smile", caption: ""},
  {src: Joy, alt: "Student with their playful smile", caption: ""},
  {src: Chess, alt: "Student with their playful smile", caption: ""},

 
]


const TIMELINE = [
  { when: "2025",        title: "Shape Balapan begins",   text: "Founded by Aastha Ghimire, inspired by game-based learning models." },
  { when: "Winter 2025", title: "Winter Camp",            text: "A camp built around Maths, Science, English and Emotional Learning." },
  { when: "Summer 2026", title: "Summer project",         text: "Two teams diving deep into the field of education" },
  { when: "Today",       title: "300+ students, 8+ projects", text: "From simple sessions into full educational materials." },
  { when: "Next",        title: "Scaling up",             text: "Research into policy alignment and a wider reach across primary schools." },
]

const PLAY_COLORS = { c: "#DDA853", s: "#F5EEDC", t: "#8DB4E2", d: "#E8A5A0" }
const PLAY_NAMES  = { c: "circle", s: "square", t: "triangle", d: "diamond" }
const LEVELS = [
  { seq: ["c", "s", "c", "s", "c"],           answer: "s", options: ["t", "s", "c", "d"], rule: "Circle, square, repeat." },
  { seq: ["c", "c", "s", "c", "c"],           answer: "s", options: ["s", "c", "d", "t"], rule: "Two circles, then a square, repeat." },
  { seq: ["c", "s", "t", "c", "s"],           answer: "t", options: ["d", "c", "s", "t"], rule: "Circle, square, triangle, repeat." },
  { seq: ["t", "d", "d", "t", "d"],           answer: "d", options: ["t", "d", "s", "c"], rule: "A triangle, then two diamonds, repeat." },
  { seq: ["c", "s", "t", "t", "c", "s", "t"], answer: "t", options: ["c", "t", "d", "s"], rule: "Circle, square, then two triangles, repeat." },
]


const MASCOTS = {
  hero: [
    // { src: mascot1, alt: "", left: "40%", width: 150 },
  ],
  coaster: null, 
  cta: null,    
}

const Eyebrow = ({ label, dark }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
    <div style={{ width: 28, height: 3, borderRadius: 2, background: "#DDA853" }} />
    <span style={{
      fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
      color: dark ? "rgba(221,168,83,0.90)" : "#27548A"
    }}>
      {label}
    </span>
  </div>
)

const TopLink = ({ to, children, className = "", style = {}, onMouseEnter, onMouseLeave }) => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "instant" })
    navigate(to)
  }
  return (
    <a href={to} onClick={handleClick} className={className} style={style}
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </a>
  )
}

const GoldBtn = ({ to, children }) => (
  <TopLink
    to={to}
    style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "15px 30px", borderRadius: 100,
      background: "#DDA853", color: "#183B4E",
      fontWeight: 700, fontSize: 15, textDecoration: "none",
      boxShadow: "0 6px 22px rgba(221,168,83,0.32)",
      transition: "all 0.2s ease",
    }}
    onMouseEnter={e => { e.currentTarget.style.background = "#e8c070"; e.currentTarget.style.transform = "translateY(-2px)" }}
    onMouseLeave={e => { e.currentTarget.style.background = "#DDA853"; e.currentTarget.style.transform = "" }}
  >
    {children}
  </TopLink>
)

const Mascot = ({ slot, style = {} }) =>
  slot ? <img src={slot.src} alt={slot.alt || ""} style={{ position: "absolute", width: slot.width || 110, height: "auto", ...style }} /> : null

const Hung = ({ src, alt, caption, tilt = 0, drop = 0 }) => (
  <figure style={{ position: "relative", margin: 0, paddingTop: 40 + drop, transform: `rotate(${tilt}deg)`, transformOrigin: "50% 0" }}>
    <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", top: 6, left: 0, width: "100%", height: 34 + drop }}>
      <path d="M50 0L5 100M50 0L95 100" stroke="#183B4E" strokeOpacity="0.65" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
    </svg>
    <span aria-hidden="true" style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 15, height: 15, borderRadius: "50%", background: "#DDA853", border: "2px solid #183B4E", boxSizing: "border-box", boxShadow: "0 2px 3px rgba(24,59,78,0.3)" }} />
    <div style={{ background: "#FFFFFF", padding: "8px 8px 12px", borderRadius: 3, boxShadow: "0 10px 22px rgba(24,59,78,0.18)" }}>
      <img src={src} alt={alt} style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover" }} />
      {caption ? <figcaption style={{ marginTop: 8, fontSize: 14, color: "#183B4E", textAlign: "center" }}>{caption}</figcaption> : null}
    </div>
  </figure>
)

/* ───────── HERO ───────── */
const Hero = () => (
  <section className="home-hero" style={{ position: "relative", overflow: "hidden", minHeight: HERO_HEIGHT, display: "flex", alignItems: "center", background: "#0F2537", borderBottom: "4px solid #DDA853" }}>
    <style>{`
      @keyframes heroZoom { from { transform: scale(1.04) } to { transform: scale(1.14) } }
      @keyframes heroUp   { from { opacity: 0; transform: translateY(26px) } to { opacity: 1; transform: translateY(0) } }
      @keyframes heroBob  { 0%,100% { transform: translateY(0) rotate(var(--r, 0deg)) } 50% { transform: translateY(-12px) rotate(var(--r, 0deg)) } }
      @keyframes heroSpin { to { transform: rotate(360deg) } }
      .hero-bg  { animation: heroZoom 18s ease-in-out infinite alternate; }
      .hero-up  { animation: heroUp 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
      .hero-bob { animation: heroBob 5s ease-in-out infinite; }
      .hero-spin{ animation: heroSpin 40s linear infinite; }
      @media (max-width: 760px) { .hero-float { display: none !important; } }
      @media (prefers-reduced-motion: reduce) {
        .hero-bg, .hero-up, .hero-bob, .hero-spin { animation: none !important; }
      }
    `}</style>

    
    <div className="hero-bg" aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: HERO_FOCUS }} />
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(15,37,55,0.95) 0%, rgba(15,37,55,0.78) 48%, rgba(15,37,55,0.35) 100%)" }} />
    <div aria-hidden="true" style={{ position: "absolute", top: -140, left: -120, width: 420, height: 420, borderRadius: "50%", background: "#27548A", opacity: 0.45, filter: "blur(100px)" }} />
    <div aria-hidden="true" style={{ position: "absolute", bottom: -160, right: -100, width: 440, height: 440, borderRadius: "50%", background: "#DDA853", opacity: 0.18, filter: "blur(110px)" }} />

    {/* floating doodles */}
    <svg className="hero-float hero-bob" aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" style={{ position: "absolute", top: 54, left: "46%", "--r": "0deg", opacity: 0.7 }}><path d="M12 1L14.5 9.5 23 12 14.5 14.5 12 23 9.5 14.5 1 12 9.5 9.5Z" fill="none" stroke="#F5EEDC" strokeWidth="1.5" strokeLinejoin="round" /></svg>
    <svg className="hero-float hero-bob" aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" style={{ position: "absolute", bottom: 120, left: "4%", "--r": "0deg", opacity: 0.55, animationDelay: "1.2s" }}><path d="M12 1L14.5 9.5 23 12 14.5 14.5 12 23 9.5 14.5 1 12 9.5 9.5Z" fill="none" stroke="#DDA853" strokeWidth="1.7" strokeLinejoin="round" /></svg>
    <svg className="hero-float hero-spin" aria-hidden="true" width="110" height="110" viewBox="0 0 100 100" style={{ position: "absolute", top: 40, right: "4%", opacity: 0.35 }}><circle cx="50" cy="50" r="44" fill="none" stroke="#DDA853" strokeWidth="2" strokeDasharray="3 9" strokeLinecap="round" /></svg>

    <div style={{ position: "relative", zIndex: 2, maxWidth: 1060, margin: "0 auto", width: "100%", padding: "clamp(48px, 8vw, 80px) clamp(20px, 4vw, 40px) clamp(96px, 12vw, 130px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(32px, 6vw, 64px)", alignItems: "center" }}>
      <div>
        <div className="hero-up" style={{ animationDelay: "0.05s" }}><Eyebrow label="Game-Based Learning · Nepal" dark /></div>
        <h1 className="hero-up" style={{ animationDelay: "0.15s", margin: "0 0 20px", fontWeight: 900, fontSize: "clamp(54px, 10vw, 112px)", lineHeight: 0.95, letterSpacing: "-0.02em", color: "#F5EEDC" }}>
          Learning<br />Through<br />
          <span style={{ color: "#DDA853", textShadow: "2px 2px 0 #0B2030, 4px 4px 0 #0B2030, 6px 6px 0 #0B2030" }}>Play</span>
        </h1>
        <svg className="hero-up" style={{ animationDelay: "0.25s", display: "block", margin: "0 0 24px" }} width="150" height="12" viewBox="0 0 150 12" fill="none" aria-hidden="true">
          <path d="M2 9 Q18 3 37 9 Q56 15 74 9 Q92 3 111 9 Q130 15 148 9" stroke="#DDA853" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
        <p className="hero-up" style={{ animationDelay: "0.35s", margin: "0 0 30px", maxWidth: 460, fontSize: "clamp(16px, 1.9vw, 19px)", lineHeight: 1.75, color: "rgba(245,238,220,0.9)" }}>
          We bring play-based, game-led learning into Nepal's primary classrooms, and research how it can shape policy.
        </p>
        <div className="hero-up" style={{ animationDelay: "0.45s", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
          <GoldBtn to="/projects">Check out our projects <ArrowRight size={16} /></GoldBtn>
          <TopLink to="/vision"
            style={{ display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 24px", borderRadius: 100, border: "2px solid rgba(245,238,220,0.7)", color: "#F5EEDC", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
            Our vision
          </TopLink>
        </div>
      </div>
    </div>

    {MASCOTS.hero.map((m, i) => (
      <img key={i} src={m.src} alt={m.alt || ""} style={{ position: "absolute", bottom: 0, left: m.left, width: m.width || 150, height: "auto", zIndex: 3 }} />
    ))}

    {/* wavy edge into the next section */}
    <svg aria-hidden="true" viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ position: "absolute", left: 0, right: 0, bottom: -1, width: "100%", height: 56, zIndex: 2, display: "block" }}>
      <path d="M0 40 Q 90 8 180 40 T 360 40 T 540 40 T 720 40 T 900 40 T 1080 40 T 1260 40 T 1440 40 V70 H0 Z" fill="#0F2537" />
    </svg>
  </section>
)

/* ───────── "Spot the pattern" play break ───────── */
const Shape = ({ k, size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" style={{ display: "block", flexShrink: 0 }}>
    {k === "c" && <circle cx="24" cy="24" r="20" fill={PLAY_COLORS.c} />}
    {k === "s" && <rect x="6" y="6" width="36" height="36" rx="6" fill={PLAY_COLORS.s} />}
    {k === "t" && <path d="M24 5L44 41H4Z" fill={PLAY_COLORS.t} stroke={PLAY_COLORS.t} strokeWidth="3" strokeLinejoin="round" />}
    {k === "d" && <path d="M24 3L45 24 24 45 3 24Z" fill={PLAY_COLORS.d} />}
  </svg>
)

const PatternPlay = () => {
  const [lvl, setLvl] = useState(0)
  const [picked, setPicked] = useState(null)
  const [results, setResults] = useState([])

  const done = lvl >= LEVELS.length
  const level = done ? null : LEVELS[lvl]
  const revealed = picked !== null
  const right = revealed && picked === level.answer
  const score = results.filter(Boolean).length

  const pick = (k) => {
    if (revealed) return
    setPicked(k)
    setResults(r => [...r, k === level.answer])
  }
  const next = () => { setPicked(null); setLvl(n => n + 1) }
  const again = () => { setLvl(0); setPicked(null); setResults([]) }

  const verdict = score === LEVELS.length ? "Pattern master!" : score >= 3 ? "Sharp eyes!" : "Every plot twist teaches something."

  return (
    <section style={{ position: "relative", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)", background: "#F5EEDC", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${texture})`, backgroundSize: "cover", opacity: 0.06, pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1060, margin: "0 auto" }}>
        <Eyebrow label="Try a play break" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(28px, 5vw, 56px)", alignItems: "center" }}>
          <div>
            <h2 style={{ margin: "0 0 16px", fontWeight: 900, fontSize: "clamp(36px, 5vw, 58px)", color: "#183B4E", lineHeight: 1, textTransform: "uppercase" }}>
              Spot the<br />pattern
            </h2>
            <p style={{ margin: "0 0 22px", maxWidth: 420, fontSize: "clamp(15px, 1.8vw, 17px)", lineHeight: 1.7, color: "rgba(24,59,78,0.85)" }}>
              Five quick levels, no pressure. A wrong answer is just a plot twist, and the rule is always revealed. This is the kind of play we bring into classrooms.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }} aria-label={`Level ${Math.min(lvl + 1, LEVELS.length)} of ${LEVELS.length}, score ${score}`}>
              {LEVELS.map((_, n) => {
                const r = results[n]
                const has = r !== undefined
                return (
                  <span key={n} aria-hidden="true"
                    style={{
                      width: 28, height: 28, borderRadius: "50%", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 14, fontWeight: 900,
                      border: `2px solid ${has ? (r ? "#183B4E" : "#C0584E") : n === lvl && !done ? "#DDA853" : "rgba(24,59,78,0.3)"}`,
                      background: has && r ? "#DDA853" : "transparent",
                      color: has ? (r ? "#183B4E" : "#C0584E") : "transparent",
                    }}>
                    {has ? (r ? "✓" : "✗") : ""}
                  </span>
                )
              })}
            </div>
          </div>

          <div aria-live="polite" style={{ background: "#183B4E", borderRadius: 26, border: "2px solid #DDA853", padding: "clamp(20px, 4vw, 32px)", boxShadow: "0 14px 40px rgba(24,59,78,0.2)" }}>
            {!done ? (
              <>
                <p style={{ margin: "0 0 14px", fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#DDA853" }}>
                  Level {lvl + 1} · What comes next?
                </p>
                <div role="img" aria-label={`The pattern so far: ${level.seq.map(k => PLAY_NAMES[k]).join(", ")}, then a missing shape`}
                  style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, padding: "16px 14px", borderRadius: 18, background: "rgba(245,238,220,0.06)", marginBottom: 18 }}>
                  {level.seq.map((k, n) => <Shape key={n} k={k} />)}
                  <div style={{ width: 52, height: 52, borderRadius: 12, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", border: `2px dashed ${revealed ? "transparent" : "#DDA853"}`, color: "#DDA853", fontWeight: 900, fontSize: 24 }}>
                    {revealed ? <Shape k={level.answer} /> : "?"}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
                  {level.options.map(k => {
                    const isRight = k === level.answer
                    const isPicked = k === picked
                    return (
                      <button key={k} type="button" onClick={() => pick(k)} disabled={revealed}
                        aria-label={`${PLAY_NAMES[k]}${revealed ? (isRight ? ", correct answer" : isPicked ? ", your choice" : "") : ""}`}
                        style={{
                          minHeight: 64, padding: 8, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center",
                          cursor: revealed ? "default" : "pointer", fontFamily: "inherit",
                          border: `2px solid ${revealed && isRight ? "#DDA853" : revealed && isPicked ? "#E8837A" : "rgba(245,238,220,0.28)"}`,
                          background: revealed && isRight ? "rgba(221,168,83,0.22)" : "rgba(245,238,220,0.07)",
                          opacity: revealed && !isRight && !isPicked ? 0.45 : 1,
                          transition: "all 0.18s ease",
                        }}>
                        <Shape k={k} size={40} />
                      </button>
                    )
                  })}
                </div>

                {revealed && (
                  <div style={{ marginTop: 18 }}>
                    <p style={{ margin: "0 0 4px", fontWeight: 900, fontSize: 17, color: right ? "#DDA853" : "#F5EEDC" }}>
                      {right ? "Nice spotting!" : "A plot twist!"}
                    </p>
                    <p style={{ margin: "0 0 14px", fontSize: 15, lineHeight: 1.6, color: "rgba(245,238,220,0.86)" }}>{level.rule}</p>
                    <button type="button" onClick={next}
                      style={{ minHeight: 44, padding: "10px 22px", borderRadius: 100, border: "none", background: "#DDA853", color: "#183B4E", fontWeight: 800, fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}>
                      {lvl === LEVELS.length - 1 ? "See my score" : "Next level"}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div style={{ padding: "clamp(12px, 3vw, 24px)", textAlign: "center" }}>
                <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#DDA853" }}>You spotted</p>
                <p style={{ margin: "0 0 8px", fontWeight: 900, fontSize: "clamp(48px, 8vw, 80px)", lineHeight: 1, color: "#F5EEDC" }}>{score} / {LEVELS.length}</p>
                <p style={{ margin: "0 0 24px", fontSize: 18, fontWeight: 700, color: "#DDA853" }}>{verdict}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                  <button type="button" onClick={again}
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 48, padding: "12px 24px", borderRadius: 100, border: "2px solid rgba(245,238,220,0.6)", background: "transparent", color: "#F5EEDC", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>
                    <RefreshCw size={15} /> Play again
                  </button>
                  <TopLink to="/projects"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 48, padding: "0 24px", borderRadius: 100, background: "#F5EEDC", color: "#183B4E", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
                    See our projects <ArrowRight size={14} />
                  </TopLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const TRACK = "M60 280L110 280C200 280 230 90 330 90C430 90 440 250 520 250C600 250 610 170 680 170C750 170 760 250 820 250C880 250 900 130 980 110"
const STOPS = [[110, 280], [330, 90], [520, 250], [680, 170], [938, 132]]

const Cart = () => (
  <g>
    {MASCOTS.coaster && <image href={MASCOTS.coaster.src} x="-30" y="-78" width="60" height="52" />}
    <rect x="-34" y="-30" width="68" height="24" rx="8" fill="#DDA853" />
    <rect x="-34" y="-30" width="68" height="8" rx="4" fill="#183B4E" />
    <circle cx="-20" cy="-4" r="7" fill="#F5EEDC" stroke="#183B4E" strokeWidth="3" />
    <circle cx="20" cy="-4" r="7" fill="#F5EEDC" stroke="#183B4E" strokeWidth="3" />
  </g>
)

const Coaster = () => {
  const [ride, setRide] = useState(0)
  const [shown, setShown] = useState(0)
  const [reduce] = useState(
    () => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
  const motion = useRef(null)
  const rail = useRef(null)
  const fractions = useRef([])
  const timers = useRef([])

  useEffect(() => {
    const el = rail.current
    if (el && el.getTotalLength) {
      const total = el.getTotalLength()
      fractions.current = STOPS.map(([sx, sy]) => {
        let best = 0, bd = Infinity
        for (let k = 0; k <= 600; k++) {
          const pt = el.getPointAtLength((total * k) / 600)
          const d = (pt.x - sx) ** 2 + (pt.y - sy) ** 2
          if (d < bd) { bd = d; best = k / 600 }
        }
        return best
      })
    }
    return () => timers.current.forEach(clearTimeout)
  }, [])

  useEffect(() => { if (ride && motion.current && motion.current.beginElement) motion.current.beginElement() }, [ride])

  const start = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    const DUR = 7000
    setShown(0)
    setRide(r => r + 1)
    STOPS.forEach((_, i) => {
      timers.current.push(setTimeout(() => setShown(i + 1), (fractions.current[i] || (i + 1) / 5) * DUR))
    })
  }

  const visible = reduce ? STOPS.length : shown
  const pop = reduce ? "none" : "stopPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)"

  return (
    <div>
      <style>{`
        @keyframes stopPop{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}
        @keyframes itemIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @media (prefers-reduced-motion: reduce){.coaster-item{animation:none !important}}
      `}</style>
      <svg viewBox="0 20 1040 300" role="img" aria-label="A roller-coaster track climbing through five numbered milestones" style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}>
        {STOPS.map(([x, y], i) => i < visible && (
          <line key={`l${i}`} x1={x} y1={y} x2={x} y2={318} stroke="#183B4E" strokeOpacity="0.22" strokeWidth="3" strokeDasharray="4 8" />
        ))}
        <path d={TRACK} stroke="#DDA853" strokeOpacity="0.7" strokeWidth="16" strokeDasharray="3 12" fill="none" />
        <path ref={rail} d={TRACK} stroke="#183B4E" strokeWidth="6" strokeLinecap="round" fill="none" />
        <line x1="980" y1="110" x2="980" y2="44" stroke="#183B4E" strokeWidth="4" strokeLinecap="round" />
        <path d="M980 44L1022 58L980 72z" fill="#DDA853" />
        {STOPS.map(([x, y], i) => i < visible && (
          <g key={`s${i}`} style={{ animation: pop, transformBox: "fill-box", transformOrigin: "center" }}>
            <circle cx={x} cy={y} r="21" fill="#DDA853" stroke="#183B4E" strokeWidth="4" />
            <text x={x} y={y + 8} textAnchor="middle" fontSize="22" fontWeight="900" fill="#183B4E">{i + 1}</text>
          </g>
        ))}
        {ride === 0
          ? <g transform="translate(60 280)"><Cart /></g>
          : <g key={ride}><Cart /><animateMotion ref={motion} dur="7s" begin="indefinite" fill="freeze" rotate="auto" path={TRACK} /></g>}
      </svg>

      {!reduce && (
        <div style={{ textAlign: "center", margin: "8px 0 36px" }}>
          <button type="button" onClick={start}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 48, padding: "12px 26px", borderRadius: 100, border: "none", background: "#183B4E", color: "#DDA853", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>
            <RefreshCw size={15} /> {ride ? "Ride again" : "Send the cart"}
          </button>
          {ride === 0 && (
            <p style={{ margin: "14px 0 0", fontSize: 15, color: "rgba(24,59,78,0.8)" }}>Ride the track to see how we got here.</p>
          )}
        </div>
      )}

      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 24 }}>
        {TIMELINE.map((m, i) => i < visible && (
          <li key={m.when} className="coaster-item" style={{ display: "flex", gap: 12, alignItems: "flex-start", animation: "itemIn 0.4s ease-out" }}>
            <span aria-hidden="true" style={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", background: "#DDA853", color: "#183B4E", fontWeight: 900, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
            <div>
              <p style={{ margin: "0 0 4px", fontSize: 14, fontWeight: 900, color: "#27548A" }}>{m.when}</p>
              <h3 style={{ margin: "0 0 6px", fontSize: 17, fontWeight: 900, lineHeight: 1.3, color: "#183B4E" }}>{m.title}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "rgba(24,59,78,0.82)" }}>{m.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

const Home = () => {
  const tilts = [-2, 1.5, -1, 2, -1.5, 1]
  return (
    <main style={{ width: "100%", background: "#F5EEDC" }}>
      <Hero />

      {/* STATS */}
      <div style={{ background: "#0F2537", padding: "24px 16px", borderTop: "1px solid rgba(221,168,83,0.25)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", textAlign: "center" }}>
          {[
            { num: "300+", label: "Students Reached" },
            { num: "8+",   label: "Innovative Projects" },
            { num: "2025", label: "Founded" },
          ].map(({ num, label }, i) => (
            <div key={label} style={{ padding: "0 clamp(8px, 3vw, 40px)", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
              <div style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900, color: "#DDA853" }}>{num}</div>
              <div style={{ fontSize: "clamp(12px, 2vw, 15px)", fontWeight: 500, marginTop: 2, color: "rgba(255,255,255,0.78)" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      

      

      {/* MOMENTS */}
      <section style={{ padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)", background: "#EDE6D0" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <Eyebrow label="On the classroom wall" />
          <h2 style={{ margin: "0 0 clamp(8px, 2vw, 16px)", fontWeight: 900, fontSize: "clamp(36px, 5vw, 58px)", color: "#183B4E", lineHeight: 1, textTransform: "uppercase" }}>
            Moments
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "clamp(20px, 4vw, 36px)" }}>
            {GALLERY.map((p, i) => (
              <Hung key={i} src={p.src} alt={p.alt} caption={p.caption} tilt={tilts[i % tilts.length]} drop={[0, 18, 6, 24, 10, 2][i % 6]} />
            ))}
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section style={{ position: "relative", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)", background: "#F5EEDC", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${texture})`, backgroundSize: "cover", opacity: 0.06, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1060, margin: "0 auto" }}>
          <Eyebrow label="How we got here" />
          <h2 style={{ margin: "0 0 clamp(20px, 4vw, 32px)", fontWeight: 900, fontSize: "clamp(36px, 5vw, 58px)", color: "#183B4E", lineHeight: 1, textTransform: "uppercase" }}>
            Our Journey
          </h2>
          <Coaster />
        </div>
      </section>

     

      {/* WHAT WE DO */}
      <section style={{ position: "relative", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)", background: "#183B4E", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${Shapes})`, backgroundSize: "cover", opacity: 0.05, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "#DDA853", opacity: 0.12, filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1060, margin: "0 auto" }}>
          <Eyebrow label="Our Mission" dark />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(32px, 6vw, 80px)", alignItems: "start" }}>
            <div>
              <h2 style={{ margin: "0 0 20px", fontWeight: 900, fontSize: "clamp(36px, 5vw, 58px)", color: "#F5EEDC", lineHeight: 1, textTransform: "uppercase" }}>
                What<br />We Do
              </h2>
              <p style={{ margin: "0 0 28px", fontSize: "clamp(15px, 1.8vw, 17px)", lineHeight: 1.8, color: "rgba(245,238,220,0.85)" }}>
                We bridge the gap between policymakers and educators, working toward the integration
                of play-based pedagogy into Nepal's elementary schools through primary and secondary
                research, and direct work with children.
              </p>
              <p style={{ margin: "0 0 10px", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(245,238,220,0.70)" }}>
                Research scope
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                {["Pedagogy", "Policy"].map(tag => (
                  <span key={tag} style={{ padding: "7px 18px", borderRadius: 100, fontSize: 14, fontWeight: 700, background: "rgba(245,238,220,0.10)", color: "#F5EEDC", border: "1.5px solid rgba(245,238,220,0.22)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <GoldBtn to="/vision">Read our full vision <ArrowRight size={16} /></GoldBtn>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 4 }}>
              {[
                { tag: "Pedagogy", body: "Evaluating the cognitive impact of play-based learning at primary schools in Nepal and the assessment methods used by teachers across the world." },
                { tag: "Policy",   body: "Examining the alignment between national education directives and street-level practice, through policy transmission and the lived realities of educators and students." },
              ].map(({ tag, body }) => (
                <div key={tag} style={{ borderRadius: 20, padding: "clamp(20px, 4%, 28px)", background: "rgba(245,238,220,0.08)", border: "1px solid rgba(245,238,220,0.14)" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em", background: "#DDA853", color: "#183B4E", marginBottom: 12 }}>
                    {tag}
                  </div>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: "rgba(245,238,220,0.86)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       {/* PLAY BREAK */}
      <div style={{ background: "#EDE6D0" }}><PatternPlay /></div>

      {/* IRD */}
      <section style={{ position: "relative", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)", background: "#EDE5D0", overflow: "hidden" }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1060, margin: "0 auto" }}>
          <Eyebrow label="Our Parent Organisation" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(32px, 6vw, 60px)", alignItems: "center" }}>
            <div>
              <h2 style={{ margin: "0 0 20px", fontWeight: 900, fontSize: "clamp(28px, 4vw, 46px)", color: "#183B4E", lineHeight: 1.1 }}>
                Institute for<br />Rural Development
              </h2>
              <svg style={{ display: "block", marginBottom: 24 }} width="100" height="10" viewBox="0 0 100 10" fill="none" aria-hidden="true">
                <path d="M2 7 Q13 2 25 7 Q37 12 49 7 Q61 2 73 7 Q85 12 98 7" stroke="#DDA853" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
              <p style={{ margin: "0 0 16px", fontSize: "clamp(15px, 1.8vw, 17px)", lineHeight: 1.8, color: "rgba(24,59,78,0.88)" }}>
                IRD is empowering and guiding local leadership and communities to build the foundation
                for sustainable rural development, rooted in Nepal's ethos.
              </p>
              <p style={{ margin: "0 0 32px", fontSize: "clamp(15px, 1.8vw, 17px)", lineHeight: 1.8, color: "rgba(24,59,78,0.78)" }}>
                Shape Balapan is an IRD initiative, bringing that same commitment to grassroots change
                into Nepal's primary classrooms, one curious child at a time.
              </p>
              <a href="https://ird.com.np/" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", borderRadius: 100, background: "#27548A", color: "#F5EEDC", fontWeight: 700, fontSize: 15, textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#183B4E"; e.currentTarget.style.transform = "translateY(-2px)" }}
                onMouseLeave={e => { e.currentTarget.style.background = "#27548A"; e.currentTarget.style.transform = "" }}>
                Visit IRD <ArrowRight size={14} />
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "Sustainable Development", body: "Building systems and capacities that communities can own and grow long after any programme ends." },
                { title: "Local Leadership",         body: "Rooting every initiative in the knowledge, agency, and lived experience of Nepal's local communities." },
                { title: "Nepal's Ethos",            body: "Drawing on cultural values and contextual wisdom as the bedrock, not the backdrop, of development work." },
              ].map(({ title, body }) => (
                <div key={title} style={{ borderRadius: 20, padding: "clamp(16px, 4%, 22px)", display: "flex", gap: 16, alignItems: "flex-start", background: "#F5EEDC", border: "1px solid rgba(24,59,78,0.14)" }}>
                  <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: "50%", background: "#DDA853", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Leaf size={16} color="#183B4E" />
                  </div>
                  <div>
                    <p style={{ margin: "0 0 4px", fontWeight: 900, fontSize: 16, color: "#27548A" }}>{title}</p>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "rgba(24,59,78,0.82)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section style={{ position: "relative", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)", background: "#183B4E", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${Shapes})`, backgroundSize: "cover", opacity: 0.05, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "#27548A", opacity: 0.45, filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1060, margin: "0 auto" }}>
          <Eyebrow label="What We Stand For" dark />
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: "clamp(28px, 5vw, 48px)" }}>
            <h2 style={{ margin: 0, fontWeight: 900, fontSize: "clamp(36px, 5vw, 58px)", color: "#F5EEDC", lineHeight: 1, textTransform: "uppercase" }}>
              Our<br />Values
            </h2>
            <TopLink to="/vision"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 700, color: "#DDA853", borderBottom: "2px solid #DDA853", paddingBottom: 2, textDecoration: "none", transition: "gap 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.gap = "12px"}
              onMouseLeave={e => e.currentTarget.style.gap = "8px"}>
              See all five values <ArrowRight size={14} />
            </TopLink>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 18 }}>
            {[
              { Icon: Shield, title: "Emotional Safety",         blurb: "Children learn best in classrooms where they feel emotionally safe.", highlight: false },
              { Icon: Users,  title: "Collaborative Inquiry",    blurb: "We enter schools as learners first, honoring educators' lived experience.", highlight: true },
              { Icon: Search, title: "Curiosity over Criticism", blurb: "Inquiry, not judgment, guides how we approach policy and practice.", highlight: false },
            ].map(({ Icon, title, blurb, highlight }) => (
              <div key={title} style={{ borderRadius: 20, padding: "clamp(20px, 4%, 28px)", display: "flex", flexDirection: "column", gap: 14, background: highlight ? "rgba(245,238,220,0.12)" : "rgba(245,238,220,0.06)", border: "1px solid rgba(245,238,220,0.14)" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#DDA853", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={18} color="#183B4E" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 style={{ margin: "0 0 6px", fontWeight: 900, fontSize: "clamp(16px, 1.8vw, 18px)", color: "#DDA853", lineHeight: 1.3 }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "rgba(245,238,220,0.82)" }}>{blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", padding: "clamp(56px, 9vw, 96px) 20px", textAlign: "center", background: "#F5EEDC", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${texture})`, backgroundSize: "cover", opacity: 0.05, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, display: "inline-block" }}>
          <Mascot slot={MASCOTS.cta} style={{ top: -70, right: -48 }} />
          <p style={{ margin: "0 0 24px", fontWeight: 900, fontSize: "clamp(22px, 3vw, 34px)", color: "#183B4E" }}>
            Meet the innovative minds!
          </p>
          <TopLink to="/team"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", borderRadius: 100, background: "#DDA853", color: "#183B4E", fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 22px rgba(221,168,83,0.32)", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#e8c070"; e.currentTarget.style.transform = "translateY(-2px)" }}
            onMouseLeave={e => { e.currentTarget.style.background = "#DDA853"; e.currentTarget.style.transform = "" }}>
            Check out the Team <ArrowRight size={16} />
          </TopLink>
        </div>
      </section>

    </main>
  )
}

export default Home