import { ArrowRight, FlaskConical, Sigma, BookOpen, Palette, HeartHandshake, Compass, Sparkles } from "lucide-react"
import { useNavigate } from "react-router-dom"
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

const FOUNDER = {
  id: "aastha", name: "Aastha Ghimire", role: "Founder & Team Lead", image: Aasthadi,
  description: "The founding force behind Shape Balapan, Aastha — majoring in Educational Studies and Psychology at Colgate University — built this organisation from a deep conviction that Nepal's children deserve joyful, curiosity-driven classrooms. She sets the vision, drives the research agenda, and holds the team together.",
  tags: ["Organisation Vision", "Research Direction", "Community Leadership"],
}

const BOARD = [
  { id: "sakul",   name: "Sakul Khatri",        role: "Web & Graphics",                   image: Sakul,   description: "Sakul is the creative and technical backbone of Shape Balapan — designing the organisation's visual identity, building its digital presence, and leading project execution on the ground.", tags: ["Design & Branding", "Project Leadership", "Web Development"] },
  { id: "tol",     name: "Tol Prasad Kafle",     role: "Science Content Designer",         image: Tol,     description: "An experienced educator and active tutor, Tol brings deep institutional knowledge to the team. His dual role on the ground and in policy circles makes him an indispensable bridge between theory and practice.", tags: ["Science Content", "Classroom Tutoring", "Education Policy"] },
  { id: "rahul",   name: "Rahul Khadkathoki",    role: "Organizer & Researcher",           image: Rahul,   description: "An engineering student whose analytical mindset contributes to designing measurable learning outcomes and evidence-based assessments within the team's research frameworks.", tags: ["Research", "Event Organization", "Outcomes Assessment"] },
  { id: "rojina",  name: "Rojina Paudel",         role: "Emotional Intelligence Researcher",image: Rojina,  description: "Heading to Soka University, Rojina brings a values-driven perspective rooted in humanistic education. She focuses on the emotional dimensions of play-based learning.", tags: ["EI Research", "Student Engagement", "Field Research"] },
  { id: "aayusha", name: "Aayusha Acharya",       role: "Math Content Designer",            image: Aayusha, description: "Aayusha designs playful, hands-on mathematics content that makes numbers feel like an adventure rather than a chore.", tags: ["Math Content", "Curriculum Design", "Play-Based Learning"] },
  { id: "tr",      name: "TR Pandit",             role: "Organizer & Researcher",           image: TR,      description: "A passionate student committed to educational equity, TR actively participates in fieldwork and community outreach, helping translate research insights into relatable narratives.", tags: ["Community Outreach", "Field Research", "Student Advocacy"] },
  { id: "prakiti", name: "Prakiti Bhetwal",       role: "English Content Designer",         image: Prakiti, description: "Driven by curiosity about child development, Prakiti crafts English language content that sparks imagination and builds literacy through storytelling and play.", tags: ["English Content", "Curriculum Design", "Child Development"] },
  { id: "rabina",  name: "Rabina Poudel",         role: "English Content Designer",         image: Rabina,  description: "Rabina supports the team's English content efforts and documentation, ensuring research findings and learning materials reach the communities that inspired them.", tags: ["English Content", "Documentation", "Knowledge Sharing"] },
]

const ADVISORS = [
  { id: "laxman", name: "Laxman Bista",  role: "Advisor & Outreach", image: Laxman, description: "Having completed his undergraduate studies at Dartmouth College, Laxman is now a Tsinghua Scholar. His international academic experience makes him an invaluable advisor for outreach and comparative education.", tags: ["Comparative Education", "International Outreach", "Policy Analysis"] },
  { id: "bipin",  name: "Bipin Pandey",  role: "Advisor & Outreach", image: Bipin,  description: "Currently based in Germany pursuing advanced STEM studies, Bipin advises on integrating science and technology into play-based learning frameworks, offering a global perspective on STEM pedagogy.", tags: ["STEM Education", "Global Perspective", "Outreach"] },
]


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
  <div className="founder-card">
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
  <div className="member-card" style={{ "--tilt": `${TILTS[index % TILTS.length]}deg` }}>
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
  <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(221,168,83,0.18)", display: "flex", flexDirection: "column", transition: "transform 0.22s ease, box-shadow 0.22s ease" }}
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
    <section style={{ position: "relative", overflow: "hidden", minHeight: "clamp(320px, 55vh, 620px)", display: "flex", alignItems: "center", borderBottom: "4px solid #DDA853" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(15,37,55,0.93) 0%, rgba(15,37,55,0.72) 50%, rgba(15,37,55,0.25) 100%)" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1060, margin: "0 auto", width: "100%", padding: "clamp(48px, 10vw, 88px) clamp(20px, 4vw, 40px)" }}>
        <Eyebrow label="Shape Balapan" dark />
        <h1 style={{ margin: "0 0 24px", fontWeight: 900, fontSize: "clamp(48px, 9vw, 100px)", lineHeight: 0.95, letterSpacing: "-0.02em", color: "#F5EEDC" }}>
          Meet<br /><span style={{ color: "#DDA853" }}>Our</span><br />Team
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

    {/* ADVISORS */}
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

    {/* CTA — now scrolls to top of Vision */}
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