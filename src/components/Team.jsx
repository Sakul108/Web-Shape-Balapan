import { ArrowRight, FlaskConical, Sigma, BookOpen, Palette, HeartHandshake, Compass, Sparkles, Camera, RefreshCw } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import Aasthadi from "../assets/images/members/Aastha.webp"
import Sakul    from "../assets/images/members/Sakul.webp"
import Rahul    from "../assets/images/members/Rahul.webp"
import Rojina   from "../assets/images/members/Rojina.webp"
import Aayusha  from "../assets/images/members/Aayusha.webp"
import TR       from "../assets/images/members/TR.webp"
import Tol      from "../assets/images/members/Tolz.webp"
import Prakiti  from "../assets/images/members/Prakriti.webp"
import Rabina   from "../assets/images/members/Rabina.webp"
import Laxman   from "../assets/images/members/Laxman.webp"
import Bipin    from "../assets/images/members/Bipin.webp"
import heroImg  from "../assets/images/Team.webp"

// import iskcon     from "../assets/images/trips/iskcon.webp"
// import swayambhu  from "../assets/images/trips/swayambhunath.webp"
// import funpark    from "../assets/images/trips/funpark.webp"


const HERO_HEIGHT = "clamp(480px, 62vh, 640px)"
const HERO_FOCUS  = "center 70%"

const FOUNDER = {
  id: "aastha", name: "Aastha Ghimire", role: "Founder & Team Lead", image: Aasthadi,
  description: "The founding force behind Shape Balapan, Aastha — majoring in Educational Studies and Psychology at Colgate University — built this organisation from a deep conviction that Nepal's children deserve joyful, curiosity-driven classrooms. She sets the vision, drives the research agenda, and holds the team together.",
  tags: ["Organisation Vision", "Research Direction", "Community Leadership"],
}

const BOARD = [
  { id: "sakul",   name: "Sakul Khatri",        role: "Web & Graphics",                   image: Sakul,   description: "Sakul is the creative and technical backbone of Shape Balapan — creating its posters and social media posts, designing its visual identity, building its website, and leading project execution on the ground. His 10+ Instagram posts have passed 42K views.", tags: ["Design & Branding", "Social Media", "Web Development", "Project Leadership"] },
  { id: "tol",     name: "Tol Prasad Kafle",     role: "Science Content Designer",         image: Tol,     description: "An experienced educator and active tutor, Tol brings deep institutional knowledge to the team. His dual role on the ground and in policy circles makes him an indispensable bridge between theory and practice.", tags: ["Science Content", "Classroom Tutoring", "Education Policy"] },
  { id: "rojina",  name: "Rojina Paudel",         role: "Emotional Intelligence Researcher",image: Rojina,  description: "Currently at Soka University, Rojina brings a values-driven perspective rooted in humanistic education. She focuses on the emotional dimensions of play-based learning.", tags: ["EI Research", "Student Engagement", "Field Research"] },
  { id: "rahul",   name: "Rahul Khadkathoki",    role: "Organizer & Researcher",           image: Rahul,   description: "An engineering student whose analytical mindset contributes to designing measurable learning outcomes and evidence-based assessments within the team's research frameworks.", tags: ["Research", "Event Organization", "Outcomes Assessment"] },
  { id: "aayusha", name: "Aayusha Acharya",       role: "Math Content Designer",            image: Aayusha, description: "Aayusha designs playful, hands-on mathematics content that makes numbers feel like an adventure rather than a chore.", tags: ["Math Content", "Curriculum Design", "Play-Based Learning"] },
  { id: "tr",      name: "TR Pandit",             role: "Organizer & Researcher",           image: TR,      description: "A passionate student committed to educational equity, TR actively participates in fieldwork and community outreach, helping translate research insights into relatable narratives.", tags: ["Community Outreach", "Field Research", "Student Advocacy"] },
  { id: "prakiti", name: "Prakiti Bhetwal",       role: "English Content Designer",         image: Prakiti, description: "Driven by curiosity about child development, Prakiti crafts English language content that sparks imagination and builds literacy through storytelling and play.", tags: ["English Content", "Curriculum Design", "Child Development"] },
  { id: "rabina",  name: "Rabina Poudel",         role: "English Content Designer",         image: Rabina,  description: "Rabina supports the team's English content efforts and documentation, ensuring research findings and learning materials reach the communities that inspired them.", tags: ["English Content", "Documentation", "Knowledge Sharing"] },
]

const ADVISORS = [
  { id: "laxman", name: "Laxman Bista",  role: "Advisor & Outreach", image: Laxman, description: "Having completed his undergraduate studies at Dartmouth College, Laxman is now a Tsinghua Scholar. His international academic experience makes him an invaluable advisor for outreach and comparative education.", tags: ["Comparative Education", "International Outreach", "Policy Analysis"] },
  { id: "bipin",  name: "Bipin Pandey",  role: "Advisor & Outreach", image: Bipin,  description: "Currently based in Germany pursuing advanced STEM studies, Bipin advises on integrating science and technology into play-based learning frameworks, offering a global perspective on STEM pedagogy.", tags: ["STEM Education", "Global Perspective", "Outreach"] },
]



const ADVENTURES = [
  { src: null, place: "ISKCON Temple",  note: "" },   // src: iskcon
  { src: null, place: "Swayambhunath",  note: "" },   // src: swayambhu
  { src: null, place: "Fun park",       note: "" },   // src: funpark
]

const SQUADS = [
  { title: "Content Studio",    Icon: BookOpen, blurb: "Turns ideas into play-based lessons in science, math and English.", people: ["Tol Prasad Kafle", "Aayusha Acharya", "Prakiti Bhetwal", "Rabina Poudel"] },
  { title: "Research & Field",  Icon: Compass,  blurb: "Takes the questions into classrooms and measures what works.",        people: ["Rojina Paudel", "Rahul Khadkathoki", "TR Pandit"] },
  { title: "Design & Digital",  Icon: Palette,  blurb: "Gives Shape Balapan its look: posters, social posts and its home on the web.",              people: ["Sakul Khatri"] },
  { title: "Vision & Guidance", Icon: Sparkles, blurb: "Sets the direction and brings in outside perspective.",              people: ["Aastha Ghimire", "Laxman Bista", "Bipin Pandey"] },
]


const HINTS = {
  aastha:  "Sets the vision and drives the research agenda.",
  sakul:   "Creates our posters and posts, and built our website.",
  tol:     "An educator who bridges the classroom and policy.",
  rojina:  "Studies the emotional side of play-based learning.",
  rahul:   "Designs measurable, evidence-based learning outcomes.",
  aayusha: "Makes numbers feel like an adventure.",
  tr:      "Takes research into the field and the community.",
  prakiti: "Builds literacy through story and play.",
  rabina:  "Makes sure learning reaches the communities behind it.",
  laxman:  "Advises on outreach and comparative education.",
  bipin:   "Advises on bringing STEM into play-based learning.",
}
const PEOPLE = [FOUNDER, ...BOARD, ...ADVISORS].map(m => ({ id: m.id, name: m.name, role: m.role, src: m.image, hint: HINTS[m.id] }))

const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
const ROUNDS = 6
const newGame = () =>
  shuffle(PEOPLE).slice(0, ROUNDS).map(p => ({
    p,
    opts: shuffle([p, ...shuffle(PEOPLE.filter(x => x.id !== p.id)).slice(0, 3)]),
  }))

const jumpTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" })
}

const MemberGame = () => {
  const [game, setGame] = useState(newGame)
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [results, setResults] = useState([])

  const score = results.filter(Boolean).length
  const done = i >= ROUNDS
  const round = done ? null : game[i]
  const revealed = picked !== null
  const right = revealed && picked === round.p.id

  const pick = (id) => {
    if (revealed) return
    setPicked(id)
    setResults(r => [...r, id === round.p.id])
  }
  const next = () => { setPicked(null); setI(n => n + 1) }
  const again = () => { setGame(newGame()); setI(0); setPicked(null); setResults([]) }

  const verdict = score === ROUNDS ? "You know us by heart!" : score >= 4 ? "You know us well!" : score >= 2 ? "Getting to know us." : "Scroll down and meet the team."

  return (
    <section style={{ background: "#F5EEDC", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)" }}>
      <style>{`@media (prefers-reduced-motion: reduce){.game-photo,.game-q{transition:none !important}}`}</style>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <Eyebrow label="Warm-up round" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(28px, 5vw, 56px)", alignItems: "center" }}>
          <div>
            <h2 style={{ margin: "0 0 16px", fontWeight: 900, fontSize: "clamp(36px, 5vw, 58px)", color: "#183B4E", lineHeight: 1, textTransform: "uppercase" }}>
              Who's that<br />member?
            </h2>
            <p style={{ margin: "0 0 22px", maxWidth: 420, fontSize: "clamp(15px, 1.8vw, 17px)", lineHeight: 1.7, color: "rgba(24,59,78,0.85)" }}>
              A hidden face, four names, one guess. Play a quick round, then meet everyone properly below.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }} aria-label={`Round ${Math.min(i + 1, ROUNDS)} of ${ROUNDS}, score ${score}`}>
              {Array.from({ length: ROUNDS }).map((_, n) => {
                const r = results[n]
                const has = r !== undefined
                return (
                  <span key={n} aria-hidden="true"
                    style={{
                      width: 28, height: 28, borderRadius: "50%", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 14, fontWeight: 900,
                      border: `2px solid ${has ? (r ? "#183B4E" : "#C0584E") : n === i && !done ? "#DDA853" : "rgba(24,59,78,0.3)"}`,
                      background: has && r ? "#DDA853" : "transparent",
                      color: has ? (r ? "#183B4E" : "#C0584E") : "transparent",
                    }}>
                    {has ? (r ? "✓" : "✗") : ""}
                  </span>
                )
              })}
            </div>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#27548A" }}>
              {done ? "Round complete" : `Round ${i + 1} of ${ROUNDS}`} · Score {score}
            </p>
          </div>

          <div aria-live="polite" style={{ background: "#183B4E", borderRadius: 26, border: "2px solid #DDA853", overflow: "hidden", boxShadow: "0 14px 40px rgba(24,59,78,0.2)" }}>
            {!done ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                <div style={{ position: "relative", overflow: "hidden", background: "#0e2537", minHeight: 300 }}>
                  <img className="game-photo" src={round.p.src} alt={revealed ? round.p.name : "A hidden team member"}
                    style={{
                      position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block",
                      filter: revealed ? "none" : "blur(18px) brightness(0.45) saturate(0.4)",
                      transform: revealed ? "scale(1)" : "scale(1.2)",
                      transition: "filter 0.6s ease, transform 0.6s ease",
                    }} />
                  <div className="game-q" aria-hidden="true"
                    style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 120, fontWeight: 900, color: "#DDA853", textShadow: "0 4px 0 #0B2030", opacity: revealed ? 0 : 1, transition: "opacity 0.3s ease", pointerEvents: "none" }}>?</div>
                </div>

                <div style={{ padding: "clamp(18px, 4vw, 26px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 10 }}>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#DDA853" }}>
                    {revealed ? (right ? "Correct!" : "Not quite") : "Who's that member?"}
                  </p>
                  {round.opts.map(o => {
                    const isRight = o.id === round.p.id
                    const isPicked = o.id === picked
                    const mark = revealed ? (isRight ? "✓ " : isPicked ? "✗ " : "") : ""
                    return (
                      <button key={o.id} type="button" onClick={() => pick(o.id)} disabled={revealed}
                        style={{
                          textAlign: "left", minHeight: 46, padding: "10px 16px", borderRadius: 14, fontFamily: "inherit", fontSize: 15, fontWeight: 700,
                          cursor: revealed ? "default" : "pointer",
                          border: `2px solid ${revealed && isRight ? "#DDA853" : revealed && isPicked ? "#E8837A" : "rgba(245,238,220,0.28)"}`,
                          background: revealed && isRight ? "#DDA853" : "rgba(245,238,220,0.07)",
                          color: revealed && isRight ? "#183B4E" : revealed && !isPicked ? "rgba(245,238,220,0.5)" : "#F5EEDC",
                          transition: "all 0.18s ease",
                        }}>
                        {mark}{o.name}
                      </button>
                    )
                  })}
                  {revealed && (
                    <div style={{ marginTop: 6 }}>
                      <p style={{ margin: "0 0 4px", fontSize: 14, fontWeight: 700, color: "#DDA853" }}>{round.p.role}</p>
                      <p style={{ margin: "0 0 12px", fontSize: 14, lineHeight: 1.6, color: "rgba(245,238,220,0.86)" }}>{round.p.hint}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
                        <button type="button" onClick={next}
                          style={{ minHeight: 44, padding: "10px 22px", borderRadius: 100, border: "none", background: "#DDA853", color: "#183B4E", fontWeight: 800, fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}>
                          {i === ROUNDS - 1 ? "See my score" : "Next face"}
                        </button>
                        <button type="button" onClick={() => jumpTo(round.p.id)}
                          style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "none", border: "none", borderBottom: "2px solid #DDA853", padding: "0 0 2px", fontSize: 14, fontWeight: 700, color: "#DDA853", cursor: "pointer", fontFamily: "inherit" }}>
                          Jump to profile <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div style={{ padding: "clamp(28px, 5vw, 48px)", textAlign: "center" }}>
                <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#DDA853" }}>Your score</p>
                <p style={{ margin: "0 0 8px", fontWeight: 900, fontSize: "clamp(48px, 8vw, 80px)", lineHeight: 1, color: "#F5EEDC" }}>{score} / {ROUNDS}</p>
                <p style={{ margin: "0 0 24px", fontSize: 18, fontWeight: 700, color: "#DDA853" }}>{verdict}</p>
                <button type="button" onClick={again}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 48, padding: "12px 24px", borderRadius: 100, border: "2px solid rgba(245,238,220,0.6)", background: "transparent", color: "#F5EEDC", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>
                  <RefreshCw size={15} /> Play again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


const HashScroll = () => {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (!el) return
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const id = setTimeout(() => el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" }), 60)
    return () => clearTimeout(id)
  }, [hash])
  return null
}


const Snap = ({ src, place, note, tilt = 0 }) => (
  <figure style={{ position: "relative", margin: 0, background: "#fff", padding: "10px 10px 14px", borderRadius: 6, boxShadow: "0 12px 26px rgba(24,59,78,0.16)", transform: `rotate(${tilt}deg)` }}>
    <span aria-hidden="true" style={{ position: "absolute", top: -12, left: "50%", width: 84, height: 24, transform: "translateX(-50%) rotate(-3deg)", background: "rgba(221,168,83,0.85)", borderRadius: 4, boxShadow: "0 2px 6px rgba(24,59,78,0.12)", zIndex: 2 }} />
    {src ? (
      <img src={src} alt={`The team at ${place}`} style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }} />
    ) : (
      <div style={{ aspectRatio: "4 / 3", background: "#183B4E", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, color: "rgba(221,168,83,0.75)" }}>
        <Camera size={30} strokeWidth={1.8} aria-hidden="true" />
        <span style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>Photo coming</span>
      </div>
    )}
    <figcaption style={{ padding: "12px 6px 0" }}>
      <p style={{ margin: 0, fontWeight: 900, fontSize: 18, color: "#183B4E" }}>{place}</p>
      {note ? <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.6, color: "rgba(24,59,78,0.75)" }}>{note}</p> : null}
    </figcaption>
  </figure>
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

const Tag = ({ label, onDark }) => (
  <span style={{
    display: "inline-block", padding: "5px 12px", borderRadius: 100,
    fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
    background: onDark ? "rgba(221,168,83,0.18)" : "rgba(39,84,138,0.10)",
    color: onDark ? "#DDA853" : "#27548A",
    border: `1px solid ${onDark ? "rgba(221,168,83,0.35)" : "rgba(39,84,138,0.20)"}`,
  }}>
    {label}
  </span>
)

const Eyebrow = ({ label, dark }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
    <div style={{ width: 28, height: 3, borderRadius: 2, background: "#DDA853" }} />
    <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: dark ? "rgba(221,168,83,0.90)" : "#27548A" }}>
      {label}
    </span>
  </div>
)

const PhotoBox = ({ image, name, height = 240, bg = "#183B4E" }) => {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()
  return (
    <div style={{ width: "100%", height, background: bg, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {image ? (
        <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 0.5s ease" }} />
      ) : (
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(221,168,83,0.15)", border: "2px dashed rgba(221,168,83,0.40)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
            <span style={{ fontSize: 26, fontWeight: 900, color: "#DDA853" }}>{initials}</span>
          </div>
          <span style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(221,168,83,0.65)" }}>Photo coming</span>
        </div>
      )}
    </div>
  )
}

const zoomIn  = e => { const i = e.currentTarget.querySelector("img"); if (i) i.style.transform = "scale(1.05)" }
const zoomOut = e => { const i = e.currentTarget.querySelector("img"); if (i) i.style.transform = "" }

const FounderCard = ({ member }) => (
  <div className="founder-card" id={member.id} style={{ scrollMarginTop: 100 }}>
    <style>{`
      .founder-card {
        position: relative;
        display: grid;
        grid-template-columns: clamp(240px, 36%, 400px) 1fr;
        align-items: center;
        background: #183B4E;
        border-radius: 28px;
        overflow: hidden;
        border: 1.5px solid rgba(221,168,83,0.25);
        box-shadow: 0 14px 44px rgba(24,59,78,0.18);
      }
      .founder-photo-wrap {
        position: relative;
        padding: 44px 32px 44px 44px;
      }
      .founder-frame {
        position: relative;
        transform: rotate(-3deg);
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .founder-card:hover .founder-frame { transform: rotate(0deg) scale(1.03); }
      .founder-frame::before {
        content: "";
        position: absolute; inset: 0;
        background: #DDA853;
        border-radius: 22px;
        transform: rotate(6deg) translate(10px, 6px);
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .founder-card:hover .founder-frame::before { transform: rotate(3deg) translate(8px, 6px); }
      .founder-photo {
        position: relative;
        border-radius: 22px;
        overflow: hidden;
        border: 5px solid #F5EEDC;
        box-shadow: 0 12px 30px rgba(0,0,0,0.30);
      }
      .founder-card:hover .founder-photo img { transform: scale(1.06); }
      .founder-tape {
        position: absolute; top: -14px; left: 50%;
        width: 96px; height: 28px;
        transform: translateX(-50%) rotate(3deg);
        background: rgba(245,238,220,0.85);
        border-radius: 4px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.20);
        z-index: 3;
      }
      .founder-sticker {
        position: absolute; right: -14px; bottom: -14px;
        width: 56px; height: 56px; border-radius: 50%;
        background: #DDA853;
        border: 4px solid #F5EEDC;
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 8px 18px rgba(0,0,0,0.30);
        transform: rotate(-8deg);
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        z-index: 4;
      }
      .founder-card:hover .founder-sticker { transform: rotate(14deg) scale(1.15); }
      @media (max-width: 700px) {
        .founder-card { grid-template-columns: 1fr; }
        .founder-photo-wrap { padding: 36px 36px 12px; }
      }
      @media (prefers-reduced-motion: reduce) {
        .founder-frame, .founder-frame::before, .founder-sticker { transition: none; transform: none; }
      }
    `}</style>

    <div className="founder-photo-wrap">
      <div className="founder-frame">
        <span className="founder-tape" aria-hidden="true" />
        <div className="founder-photo">
          <PhotoBox image={member.image} name={member.name} height={380} bg="#0e2537" />
        </div>
        <span className="founder-sticker" aria-hidden="true"><RoleIcon role={member.role} size={26} /></span>
      </div>
    </div>

    <div style={{ padding: "clamp(20px, 5%, 44px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ marginBottom: 20 }}>
        <span style={{ display: "inline-block", padding: "6px 16px", borderRadius: 100, background: "#DDA853", color: "#183B4E", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          {member.role}
        </span>
      </div>
      <h3 style={{ margin: "0 0 6px", fontWeight: 900, fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.1, color: "#F5EEDC" }}>
        {member.name}
      </h3>
      <svg style={{ display: "block", margin: "14px 0 20px" }} width="56" height="6" viewBox="0 0 56 6">
        <path d="M1 4 Q7 1 14 4 Q21 7 28 4 Q35 1 42 4 Q49 7 55 4" stroke="#DDA853" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
      <p style={{ margin: "0 0 28px", fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.85, color: "rgba(245,238,220,0.82)", maxWidth: 540 }}>
        {member.description}
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {member.tags.map(t => <Tag key={t} label={t} onDark />)}
      </div>
    </div>
  </div>
)


const RoleIcon = ({ role, size = 22 }) => {
  const r = role.toLowerCase()
  const props = { size, color: "#183B4E", strokeWidth: 2.2 }
  if (r.includes("founder"))   return <Sparkles {...props} />
  if (r.includes("science"))   return <FlaskConical {...props} />
  if (r.includes("math"))      return <Sigma {...props} />
  if (r.includes("english"))   return <BookOpen {...props} />
  if (r.includes("web"))       return <Palette {...props} />
  if (r.includes("emotional")) return <HeartHandshake {...props} />
  return <Compass {...props} />
}

const TILTS = [-1.6, 1.2, -0.9, 1.6]

const BoardCard = ({ member, index = 0 }) => (
  <div className="member-card" id={member.id} style={{ "--tilt": `${TILTS[index % TILTS.length]}deg`, scrollMarginTop: 100 }}>
    {/* tape strip */}
    <span className="member-tape" aria-hidden="true" />

    {/* photo "polaroid" */}
    <div className="member-photo">
      <PhotoBox image={member.image} name={member.name} height={300} bg="#183B4E" />
      <span className="member-sticker" aria-hidden="true"><RoleIcon role={member.role} /></span>
    </div>

    <div style={{ padding: "20px 10px 10px", display: "flex", flexDirection: "column", flex: 1 }}>
      <p style={{ margin: "0 0 8px", fontWeight: 900, fontSize: 23, color: "#183B4E", lineHeight: 1.15 }}>{member.name}</p>
      <div style={{ marginBottom: 14 }}>
        <span style={{ display: "inline-block", padding: "5px 13px", borderRadius: 100, background: "#DDA853", color: "#183B4E", fontSize: 12, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {member.role}
        </span>
      </div>
      <p style={{ margin: "0 0 18px", fontSize: 15, lineHeight: 1.7, color: "rgba(24,59,78,0.80)", flex: 1 }}>{member.description}</p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", paddingTop: 14, borderTop: "2px dotted rgba(24,59,78,0.18)" }}>
        {member.tags.map(t => <Tag key={t} label={t} />)}
      </div>
    </div>
  </div>
)

const AdvisorCard = ({ member }) => (
  <div id={member.id} style={{ scrollMarginTop: 100, background: "rgba(255,255,255,0.06)", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(221,168,83,0.18)", display: "flex", flexDirection: "column", transition: "transform 0.22s ease, box-shadow 0.22s ease" }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.20)"; zoomIn(e) }}
    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; zoomOut(e) }}>
    <div style={{ position: "relative", overflow: "hidden" }}>
      <PhotoBox image={member.image} name={member.name} height={250} bg="#152e3e" />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "#DDA853" }} />
    </div>
    <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
      <p style={{ margin: "0 0 3px", fontWeight: 900, fontSize: 21, color: "#F5EEDC", lineHeight: 1.2 }}>{member.name}</p>
      <p style={{ margin: "0 0 12px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#DDA853" }}>{member.role}</p>
      <div style={{ width: 32, height: 2, background: "#DDA853", borderRadius: 2, marginBottom: 14 }} />
      <p style={{ margin: "0 0 18px", fontSize: 15, lineHeight: 1.7, color: "rgba(245,238,220,0.78)", flex: 1 }}>{member.description}</p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {member.tags.map(t => <Tag key={t} label={t} onDark />)}
      </div>
    </div>
  </div>
)

const Team = () => (
  <main style={{ width: "100%", background: "#F5EEDC" }}>
    <HashScroll />

    <style>{`
      .member-card {
        position: relative;
        display: flex; flex-direction: column;
        background: #fff;
        border-radius: 26px;
        padding: 14px 14px 18px;
        border: 1px solid rgba(24,59,78,0.10);
        box-shadow: 0 10px 28px rgba(24,59,78,0.10);
        transform: rotate(var(--tilt, 0deg));
        transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
      }
      .member-card:hover {
        transform: rotate(0deg) translateY(-8px) scale(1.02);
        box-shadow: 0 24px 52px rgba(24,59,78,0.18);
      }
      .member-tape {
        position: absolute; top: -12px; left: 50%;
        width: 92px; height: 26px;
        transform: translateX(-50%) rotate(-3deg);
        background: rgba(221,168,83,0.85);
        border-radius: 4px;
        box-shadow: 0 2px 6px rgba(24,59,78,0.12);
        z-index: 3;
      }
      .member-photo {
        position: relative;
        border-radius: 18px;
        overflow: hidden;
        border: 3px solid #F5EEDC;
        box-shadow: inset 0 0 0 1px rgba(24,59,78,0.08);
      }
      .member-card:hover .member-photo img { transform: scale(1.06); }
      .member-sticker {
        position: absolute; right: 12px; bottom: 12px;
        width: 46px; height: 46px; border-radius: 50%;
        background: #DDA853;
        border: 3px solid #fff;
        display: flex; align-items: center; justify-content: center;
        font-size: 22px;
        box-shadow: 0 6px 16px rgba(24,59,78,0.25);
        transform: rotate(-8deg);
        transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .member-card:hover .member-sticker { transform: rotate(14deg) scale(1.18); }
      .member-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
        gap: 40px 28px;
        padding-top: 8px;
      }
      @media (max-width: 600px) {
        .member-card, .member-card:hover { transform: none; }
      }
      @media (prefers-reduced-motion: reduce) {
        .member-card, .member-card:hover, .member-sticker { transition: none; transform: none; }
      }
    `}</style>

    {/* HERO — same min-height as Vision hero */}
    <section style={{ position: "relative", overflow: "hidden", height: HERO_HEIGHT, display: "flex", alignItems: "center", borderBottom: "4px solid #DDA853" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: HERO_FOCUS }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(15,37,55,0.93) 0%, rgba(15,37,55,0.72) 50%, rgba(15,37,55,0.25) 100%)" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1060, margin: "0 auto", width: "100%", padding: "clamp(32px, 6vw, 56px) clamp(20px, 4vw, 40px)" }}>
        <Eyebrow label="Shape Balapan" dark />
        <h1 style={{ margin: "0 0 24px", fontWeight: 900, fontSize: "clamp(48px, 9vw, 100px)", lineHeight: 0.95, letterSpacing: "-0.02em", color: "#F5EEDC" }}>
          Meet<br /><span style={{ color: "#DDA853" }}>Our Team</span>
        </h1>
        <svg style={{ display: "block", margin: "0 0 28px" }} width="120" height="11" viewBox="0 0 120 11" fill="none">
          <path d="M2 8 Q15 3 30 8 Q45 13 60 8 Q75 3 90 8 Q105 13 118 8" stroke="#DDA853" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
        <p style={{ color: "rgba(245,238,220,0.85)", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.8, maxWidth: 460, margin: 0 }}>
          Researchers, educators, and passionate students united by one belief — every child in Nepal
          deserves a classroom where curiosity is celebrated.
        </p>
      </div>
    </section>

    {/* FOUNDER */}
    <section style={{ padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)", maxWidth: 1060, margin: "0 auto" }}>
      <div style={{ marginBottom: 40 }}>
        <Eyebrow label="Founding" />
        <h2 style={{ margin: 0, fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", color: "#183B4E", lineHeight: 1.1 }}>Founder</h2>
      </div>
      <FounderCard member={FOUNDER} />
    </section>

    <section style={{ background: "#183B4E", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", top: -90, left: -90, width: 320, height: 320, borderRadius: "50%", background: "#DDA853", opacity: 0.1, filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 40 }}>
          <Eyebrow label="How we work together" dark />
          <h2 style={{ margin: 0, fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", color: "#F5EEDC", lineHeight: 1.1 }}>Four squads, one mission</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 18 }}>
          {SQUADS.map(({ title, Icon, blurb, people }) => (
            <div key={title} style={{ borderRadius: 20, padding: "clamp(18px, 4%, 24px)", background: "rgba(245,238,220,0.07)", border: "1px solid rgba(245,238,220,0.14)", display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#DDA853", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={18} color="#183B4E" strokeWidth={2.2} aria-hidden="true" />
              </div>
              <h3 style={{ margin: 0, fontWeight: 900, fontSize: 19, color: "#DDA853", lineHeight: 1.25 }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "rgba(245,238,220,0.84)" }}>{blurb}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                {people.map(n => (
                  <span key={n} style={{ padding: "4px 11px", borderRadius: 100, fontSize: 12, fontWeight: 700, background: "rgba(221,168,83,0.16)", color: "#F5EEDC", border: "1px solid rgba(221,168,83,0.32)" }}>{n}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    
    <MemberGame />

    {/* CORE MEMBERS */}
    <section style={{ background: "#EDE6D0", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <Eyebrow label="The Core Group" />
          <h2 style={{ margin: 0, fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", color: "#183B4E", lineHeight: 1.1 }}>Core Members</h2>
        </div>
        <div className="member-grid">
          {BOARD.map((m, i) => <BoardCard key={m.id} member={m} index={i} />)}
        </div>
      </div>
    </section>

   
    <section style={{ background: "#F5EEDC", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <Eyebrow label="Beyond the classroom" />
          <h2 style={{ margin: "0 0 12px", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", color: "#183B4E", lineHeight: 1.1 }}>Team Adventures</h2>
          <p style={{ margin: 0, maxWidth: 520, fontSize: "clamp(15px, 1.8vw, 17px)", lineHeight: 1.7, color: "rgba(24,59,78,0.82)" }}>
            Good research starts with good company. A few of the places we have explored together.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px 28px", paddingTop: 8 }}>
          {ADVENTURES.map((a, i) => <Snap key={a.place} {...a} tilt={[-1.6, 1.2, -0.9, 1.5][i % 4]} />)}
        </div>
      </div>
    </section>

    
    <section style={{ background: "#27548A", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: -100, right: -100, width: 360, height: 360, borderRadius: "50%", background: "#DDA853", opacity: 0.08, filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 40 }}>
          <Eyebrow label="Outreach & Guidance" dark />
          <h2 style={{ margin: 0, fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", color: "#F5EEDC", lineHeight: 1.1 }}>Advisors</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
          {ADVISORS.map(m => <AdvisorCard key={m.id} member={m} />)}
        </div>
      </div>
    </section>

   
    <section style={{ padding: "clamp(40px, 8vw, 80px) 20px", textAlign: "center", background: "#F5EEDC" }}>
      <h3 style={{ margin: "0 0 8px", fontWeight: 900, fontSize: "clamp(22px, 3vw, 34px)", color: "#183B4E" }}>Why do we do this?</h3>
      <p style={{ margin: "0 0 32px", fontSize: 16, color: "rgba(24,59,78,0.68)", lineHeight: 1.6 }}>Read the full vision.</p>
      <TopLink to="/vision"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
        style={{ background: "#DDA853", color: "#183B4E", textDecoration: "none" }}
        onMouseEnter={e => (e.currentTarget.style.background = "#e8c070")}
        onMouseLeave={e => (e.currentTarget.style.background = "#DDA853")}>
        Check our vision <ArrowRight size={16} />
      </TopLink>
    </section>

  </main>
)

export default Team