import img from "../assets/images/HeroImages.webp"
import play from "../assets/images/seek.webp"
import texture from "../assets/images/texture.webp"
import Shapes from "../assets/images/Shapes.webp"
import image from "../assets/images/Maths.webp"
import { useNavigate } from "react-router-dom"
import { Shield, Users, Search, ArrowRight, Leaf } from "lucide-react"

const Eyebrow = ({ label, dark }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
    <div style={{ width: 28, height: 2.5, borderRadius: 2, background: "#DDA853" }} />
    <span style={{
      fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
      color: dark ? "rgba(221,168,83,0.80)" : "#27548A"
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
      padding: "14px 28px", borderRadius: 100,
      background: "#DDA853", color: "#183B4E",
      fontWeight: 700, fontSize: 14, textDecoration: "none",
      boxShadow: "0 4px 20px rgba(221,168,83,0.30)",
      transition: "all 0.2s ease",
    }}
    onMouseEnter={e => { e.currentTarget.style.background = "#e8c070"; e.currentTarget.style.transform = "translateY(-2px)" }}
    onMouseLeave={e => { e.currentTarget.style.background = "#DDA853"; e.currentTarget.style.transform = "" }}
  >
    {children}
  </TopLink>
)

const Home = () => {
  return (
    <main style={{ width: "100%", background: "#F5EEDC" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "clamp(320px, 55vh, 620px)", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(15,37,55,0.95) 0%, rgba(15,37,55,0.75) 55%, rgba(15,37,55,0.30) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1060, margin: "0 auto", width: "100%", padding: "clamp(48px, 10vw, 88px) clamp(20px, 4vw, 40px)" }}>
          <Eyebrow label="Game-Based Learning · Nepal" dark />
          <h1 style={{
            margin: "0 0 20px", fontWeight: 900,
            fontSize: "clamp(52px, 9vw, 104px)",
            lineHeight: 0.92, letterSpacing: "-0.02em",
            color: "#F5EEDC"
          }}>
            Learning<br />Through<br /><span style={{ color: "#DDA853" }}>Play</span>
          </h1>
          <svg style={{ display: "block", margin: "0 0 28px" }} width="150" height="12" viewBox="0 0 150 12" fill="none">
            <path d="M2 9 Q18 3 37 9 Q56 15 74 9 Q92 3 111 9 Q130 15 148 9"
              stroke="#DDA853" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
          <GoldBtn to="/projects">Check out our projects <ArrowRight size={16} /></GoldBtn>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: "#183B4E", padding: "20px 16px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", textAlign: "center" }}>
          {[
            { num: "2025", label: "Founded" },
            { num: "100+", label: "Students Reached" },
            { num: "5+",    label: "Innovative Projects" },
          ].map(({ num, label }, i) => (
            <div key={label} style={{ padding: "0 clamp(8px, 3vw, 40px)", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
              <div style={{ fontSize: "clamp(20px, 4vw, 32px)", fontWeight: 900, color: "#DDA853" }}>{num}</div>
              <div style={{ fontSize: "clamp(10px, 2vw, 13px)", fontWeight: 500, marginTop: 2, color: "rgba(255,255,255,0.60)" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* OUR GROWTH */}
      <section style={{ position: "relative", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)", background: "#F5EEDC", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${texture})`, backgroundSize: "cover", opacity: 0.06, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -80, right: -80, width: 360, height: 360, borderRadius: "50%", background: "#DDA853", opacity: 0.14, filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1060, margin: "0 auto" }}>
          <Eyebrow label="Our Story" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(32px, 6vw, 80px)", alignItems: "center" }}>
            <div>
              <h2 style={{ margin: "0 0 28px", fontWeight: 900, fontSize: "clamp(36px, 5vw, 62px)", color: "#183B4E", lineHeight: 0.9, textTransform: "uppercase" }}>
                Our<br />Growth
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
                {[
                  { year: "2025", text: "Shape Balapan founded — inspired by game-based learning models." },
                  { year: "Now",  text: "From simple sessions to full educational materials and Nepal's first play-based Winter Camp." },
                  { year: "Next", text: "Expanding our research into policy alignment and scaling our reach across primary schools." },
                ].map(({ year, text }) => (
                  <div key={year} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ flexShrink: 0, minWidth: 44, height: 24, borderRadius: 100, display: "flex", alignItems: "center", justifyContent: "center", background: "#DDA853", color: "#183B4E", fontSize: 11, fontWeight: 900 }}>
                      {year}
                    </div>
                    <p style={{ margin: 0, fontSize: "clamp(13px, 1.8vw, 15px)", lineHeight: 1.7, color: "rgba(24,59,78,0.80)" }}>{text}</p>
                  </div>
                ))}
              </div>
              <TopLink to="/vision"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: "#27548A", borderBottom: "2px solid #DDA853", paddingBottom: 2, textDecoration: "none", transition: "gap 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.gap = "12px"}
                onMouseLeave={e => e.currentTarget.style.gap = "8px"}>
                Read our full vision <ArrowRight size={14} />
              </TopLink>
            </div>

            {/* Collage */}
            <div style={{ position: "relative", height: "clamp(280px, 40vw, 420px)" }}>
              <div style={{ position: "absolute", right: 0, top: 0, width: "57%", height: "72%", borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 50px rgba(24,59,78,0.18)", transform: "rotate(3deg)", border: "5px solid #F5EEDC", transition: "transform 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "rotate(1deg)"}
                onMouseLeave={e => e.currentTarget.style.transform = "rotate(3deg)"}>
                <img src={play} alt="Children doing crafts" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", left: 0, bottom: 0, width: "60%", height: "74%", borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 50px rgba(24,59,78,0.18)", transform: "rotate(-2deg)", border: "5px solid #F5EEDC", transition: "transform 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "rotate(0deg)"}
                onMouseLeave={e => e.currentTarget.style.transform = "rotate(-2deg)"}>
                <img src={image} alt="Kids at Shape Balapan" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ position: "absolute", right: "22%", bottom: "22%", width: 52, height: 52, borderRadius: "50%", background: "#DDA853", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, transform: "rotate(12deg)", boxShadow: "0 8px 24px rgba(221,168,83,0.40)" }}>
                <span style={{ fontSize: 20, color: "#183B4E" }}>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{ position: "relative", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)", background: "#27548A", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${Shapes})`, backgroundSize: "cover", opacity: 0.05, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "#DDA853", opacity: 0.12, filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1060, margin: "0 auto" }}>
          <Eyebrow label="Our Mission" dark />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(32px, 6vw, 80px)", alignItems: "start" }}>
            <div>
              <h2 style={{ margin: "0 0 20px", fontWeight: 900, fontSize: "clamp(36px, 5vw, 58px)", color: "#F5EEDC", lineHeight: 0.9, textTransform: "uppercase" }}>
                What<br />We Do
              </h2>
              <p style={{ margin: "0 0 28px", fontSize: "clamp(13px, 1.8vw, 15px)", lineHeight: 1.8, color: "rgba(245,238,220,0.78)" }}>
                We bridge the gap between policymakers and educators — working toward the integration
                of play-based pedagogy into Nepal's elementary schools through primary and secondary
                research, and direct work with children.
              </p>
              <p style={{ margin: "0 0 10px", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,238,220,0.45)" }}>
                Research scope
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                {["Pedagogy", "Policy"].map(tag => (
                  <span key={tag} style={{ padding: "6px 16px", borderRadius: 100, fontSize: 13, fontWeight: 700, background: "rgba(245,238,220,0.10)", color: "#F5EEDC", border: "1.5px solid rgba(245,238,220,0.22)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <GoldBtn to="/vision">Read our full vision <ArrowRight size={16} /></GoldBtn>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 4 }}>
              {[
                { tag: "Pedagogy", body: "Evaluating the cognitive impact of play-based learning at primary schools in Nepal and the assessment methods used by teachers across the world." },
                { tag: "Policy",   body: "Examining the alignment between national education directives and street-level practice — through policy transmission and the lived realities of educators and students." },
              ].map(({ tag, body }) => (
                <div key={tag} style={{ borderRadius: 16, padding: "clamp(20px, 4%, 28px)", background: "rgba(245,238,220,0.08)", border: "1px solid rgba(245,238,220,0.14)" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", padding: "4px 12px", borderRadius: 100, fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em", background: "#DDA853", color: "#183B4E", marginBottom: 12 }}>
                    {tag}
                  </div>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.75, color: "rgba(245,238,220,0.75)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IRD */}
      <section style={{ position: "relative", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)", background: "#183B4E", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "#DDA853", opacity: 0.10, filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1060, margin: "0 auto" }}>
          <Eyebrow label="Our Parent Organisation" dark />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(32px, 6vw, 60px)", alignItems: "center" }}>
            <div>
              <h2 style={{ margin: "0 0 20px", fontWeight: 900, fontSize: "clamp(28px, 4vw, 46px)", color: "#F5EEDC", lineHeight: 1.05 }}>
                Institute for<br />Rural Development
              </h2>
              <svg style={{ display: "block", marginBottom: 24 }} width="100" height="10" viewBox="0 0 100 10" fill="none">
                <path d="M2 7 Q13 2 25 7 Q37 12 49 7 Q61 2 73 7 Q85 12 98 7" stroke="#DDA853" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
              <p style={{ margin: "0 0 16px", fontSize: "clamp(13px, 1.8vw, 15px)", lineHeight: 1.8, color: "rgba(245,238,220,0.78)" }}>
                IRD is empowering and guiding local leadership and communities to build the foundation
                for sustainable rural development — rooted in Nepal's ethos.
              </p>
              <p style={{ margin: "0 0 32px", fontSize: "clamp(13px, 1.8vw, 15px)", lineHeight: 1.8, color: "rgba(245,238,220,0.55)" }}>
                Shape Balapan is an IRD initiative, bringing that same commitment to grassroots change
                into Nepal's primary classrooms — one curious child at a time.
              </p>
              <a href="https://ird.com.np/" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 100, background: "#DDA853", color: "#183B4E", fontWeight: 700, fontSize: 13, textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#e8c070"; e.currentTarget.style.transform = "translateY(-2px)" }}
                onMouseLeave={e => { e.currentTarget.style.background = "#DDA853"; e.currentTarget.style.transform = "" }}>
                Visit IRD <ArrowRight size={14} />
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "Sustainable Development", body: "Building systems and capacities that communities can own and grow long after any programme ends." },
                { title: "Local Leadership",         body: "Rooting every initiative in the knowledge, agency, and lived experience of Nepal's local communities." },
                { title: "Nepal's Ethos",            body: "Drawing on cultural values and contextual wisdom as the bedrock — not the backdrop — of development work." },
              ].map(({ title, body }) => (
                <div key={title} style={{ borderRadius: 16, padding: "clamp(16px, 4%, 22px)", display: "flex", gap: 16, alignItems: "flex-start", background: "rgba(245,238,220,0.07)", border: "1px solid rgba(245,238,220,0.12)" }}>
                  <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "50%", background: "#DDA853", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Leaf size={15} color="#183B4E" />
                  </div>
                  <div>
                    <p style={{ margin: "0 0 4px", fontWeight: 900, fontSize: 13, color: "#DDA853" }}>{title}</p>
                    <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: "rgba(245,238,220,0.68)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section style={{ position: "relative", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)", background: "#27548A", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${Shapes})`, backgroundSize: "cover", opacity: 0.05, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "#183B4E", opacity: 0.40, filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1060, margin: "0 auto" }}>
          <Eyebrow label="What We Stand For" dark />
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: "clamp(28px, 5vw, 48px)" }}>
            <h2 style={{ margin: 0, fontWeight: 900, fontSize: "clamp(36px, 5vw, 58px)", color: "#F5EEDC", lineHeight: 0.9, textTransform: "uppercase" }}>
              Our<br />Values
            </h2>
            <TopLink to="/vision"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: "#DDA853", borderBottom: "2px solid #DDA853", paddingBottom: 2, textDecoration: "none", transition: "gap 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.gap = "12px"}
              onMouseLeave={e => e.currentTarget.style.gap = "8px"}>
              See all five values <ArrowRight size={14} />
            </TopLink>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { Icon: Shield, title: "Emotional Safety",         blurb: "Children learn best in classrooms where they feel emotionally safe.", highlight: false },
              { Icon: Users,  title: "Collaborative Inquiry",    blurb: "We enter schools as learners first, honoring educators' lived experience.", highlight: true },
              { Icon: Search, title: "Curiosity over Criticism", blurb: "Inquiry — not judgment — guides how we approach policy and practice.", highlight: false },
            ].map(({ Icon, title, blurb, highlight }) => (
              <div key={title} style={{ borderRadius: 16, padding: "clamp(20px, 4%, 28px)", display: "flex", flexDirection: "column", gap: 14, background: highlight ? "rgba(245,238,220,0.10)" : "rgba(24,59,78,0.35)", border: "1px solid rgba(245,238,220,0.12)" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#DDA853", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={18} color="#183B4E" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 style={{ margin: "0 0 6px", fontWeight: 900, fontSize: "clamp(13px, 1.8vw, 15px)", color: "#DDA853", lineHeight: 1.3 }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: "rgba(245,238,220,0.70)" }}>{blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", padding: "clamp(40px, 8vw, 80px) 20px", textAlign: "center", background: "#F5EEDC", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${texture})`, backgroundSize: "cover", opacity: 0.05, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 360, height: 360, borderRadius: "50%", background: "#DDA853", opacity: 0.10, filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ margin: "0 0 24px", fontWeight: 900, fontSize: "clamp(22px, 3vw, 34px)", color: "#183B4E" }}>
            Meet the innovative minds!
          </p>
          <TopLink to="/team"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", borderRadius: 100, background: "#DDA853", color: "#183B4E", fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(221,168,83,0.30)", transition: "all 0.2s" }}
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