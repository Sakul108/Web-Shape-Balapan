import Shapes from "../assets/images/Theme.webp"
import heroImg from "../assets/images/Vision.webp" 
import { useNavigate } from "react-router-dom"
import { Shield, Users, Search, Globe, Lock, ArrowRight } from "lucide-react"

const values = [
  { Icon: Shield, title: "Emotional Safety as a Foundation for Learning",   body: "We believe children learn best in classrooms where they feel emotionally safe, and we are committed to supporting educators in creating those spaces." },
  { Icon: Users,  title: "Collaborative Inquiry",                           body: "We enter schools and communities as learners first and collaborators second, honoring educators' lived experience as essential knowledge rather than data to be extracted." },
  { Icon: Search, title: "Curiosity over Criticism",                        body: "We approach the gap between policy and practice not with judgment but with genuine inquiry, seeking to understand the systemic and contextual factors that shape what happens inside classrooms." },
  { Icon: Globe,  title: "Contextual Relevance",                            body: "We believe that local knowledge is not supplementary to academic research but central to it. Culturally and contextually grounded curricula lead to stronger retention and more meaningful learning." },
  { Icon: Lock,   title: "Ethical Engagement with Children and Communities", body: "We protect the identities of all research participants, and we are committed to returning our findings to the schools and communities that made the research possible, ensuring that knowledge flows both ways." },
]

const Eyebrow = ({ label, light = false }) => (
  <div className="flex items-center gap-3 mb-3">
    <div className="w-8 h-0.75 rounded-full" style={{ background: "#DDA853" }} />
    <span className="text-xs font-bold uppercase tracking-[0.2em]"
      style={{ color: light ? "#DDA853" : "#27548A" }}>
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

const Vision = () => {
  return (
    <main className="w-full" style={{ background: "#F5EEDC" }}>

      {/* HERO — matches Team hero style */}
      <section style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "clamp(320px, 55vh, 620px)",
        display: "flex",
        alignItems: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(105deg, rgba(15,37,55,0.93) 0%, rgba(15,37,55,0.72) 50%, rgba(15,37,55,0.25) 100%)",
        }} />
        <div style={{
          position: "relative", zIndex: 1,
          maxWidth: 1060, margin: "0 auto", width: "100%",
          padding: "clamp(48px, 10vw, 88px) clamp(20px, 4vw, 40px)",
        }}>
          <Eyebrow label="Shape Balapan" light />
          <h1 style={{
            margin: "0 0 24px", fontWeight: 900,
            fontSize: "clamp(48px, 9vw, 100px)",
            lineHeight: 0.92, letterSpacing: "-0.02em", color: "#F5EEDC",
          }}>
            Our<br /><span style={{ color: "#DDA853" }}>Vision</span>
          </h1>
          <svg style={{ display: "block", margin: "0 0 28px" }} width="120" height="11" viewBox="0 0 120 11" fill="none">
            <path d="M2 8 Q15 3 30 8 Q45 13 60 8 Q75 3 90 8 Q105 13 118 8"
              stroke="#DDA853" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
          <p style={{
            color: "rgba(245,238,220,0.80)",
            fontSize: "clamp(14px, 1.8vw, 17px)",
            lineHeight: 1.8, maxWidth: 440, margin: 0,
          }}>
            A Nepal where every child's curiosity is met with joy — and every classroom is a space
            where learning through play is not the exception but the norm.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative py-16 sm:py-20 px-6 sm:px-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#27548A", opacity: 0.10 }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Eyebrow label="Mission Statement" />
          <h2 className="font-black uppercase tracking-tight leading-tight mb-8"
            style={{ color: "#183B4E", fontSize: "clamp(32px, 4.5vw, 52px)" }}>
            What We're<br />Here to Do
          </h2>
          <div className="rounded-3xl p-7 sm:p-12 mb-10" style={{ background: "#183B4E" }}>
            <p className="leading-relaxed font-bold"
              style={{ color: "#F5EEDC", fontSize: "clamp(15px, 2vw, 20px)" }}>
              To bridge the gap between policymakers and educators by working toward the integration
              of play-based pedagogy into Nepal's elementary schools to aid conventional instructional
              methods. We do this by conducting both primary and secondary research on educational
              policies and working with primary school students to evaluate the outcomes of
              experiential learning.
            </p>
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "#27548A" }}>
            The scope of our research
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { tag: "Pedagogy", body: "Evaluating the cognitive impact on learning through play-based pedagogy at primary schools in Nepal and the assessment methods used by teachers across the world." },
              { tag: "Policy",   body: "Examining the alignment between national education directives and street-level practice through mechanisms of policy transmission and the lived realities of educators and students." },
            ].map(({ tag, body }) => (
              <div key={tag} className="rounded-2xl p-6 sm:p-7"
                style={{ background: "rgba(39,84,138,0.08)", border: "1.5px solid rgba(39,84,138,0.15)" }}>
                <div className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ background: "#DDA853", color: "#183B4E" }}>
                  {tag}
                </div>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#183B4E", opacity: 0.82 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-16 sm:py-20 px-6 sm:px-10 overflow-hidden" style={{ background: "#27548A" }}>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: `url(${Shapes})`, backgroundSize: "cover" }} />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#DDA853", opacity: 0.15 }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Eyebrow label="What We Stand For" light />
          <h2 className="font-black uppercase tracking-tight leading-tight mb-10 sm:mb-12"
            style={{ color: "#F5EEDC", fontSize: "clamp(32px, 4.5vw, 52px)" }}>
            Our<br />Values
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {values.map(({ Icon, title, body }, i) => (
              <div key={title} className="rounded-2xl p-5 sm:p-7 flex gap-5 sm:gap-6 items-start"
                style={{
                  background: i % 2 === 0 ? "rgba(245,238,220,0.09)" : "rgba(24,59,78,0.35)",
                  border: "1px solid rgba(245,238,220,0.12)",
                }}>
                <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                  style={{ background: "#DDA853" }}>
                  <Icon size={18} color="#183B4E" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="font-black text-sm sm:text-lg mb-2 leading-snug" style={{ color: "#DDA853" }}>{title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(245,238,220,0.78)" }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 px-6 text-center" style={{ background: "#F5EEDC" }}>
        <p className="font-black mb-6" style={{ color: "#183B4E", fontSize: "clamp(22px, 3vw, 34px)" }}>
          Want to see our work in action?
        </p>
        <TopLink to="/projects"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          style={{ background: "#DDA853", color: "#183B4E" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#e8c070")}
          onMouseLeave={e => (e.currentTarget.style.background = "#DDA853")}>
          Check out our projects <ArrowRight size={16} />
        </TopLink>
      </section>

    </main>
  )
}

export default Vision