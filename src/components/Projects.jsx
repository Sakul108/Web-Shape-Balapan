import texture from "../assets/images/Shapes.webp"
import heroImg from "../assets/images/Projects.webp"
import Shapes from "../assets/images/Theme.webp"
import air from "../assets/images/Air.webp"
import story from "../assets/images/English.webp"
import Molecules from "../assets/images/Science.webp"
import Gyan from "../assets/images/Saraswati.webp"
import maths from "../assets/images/Maths.webp"
import { ArrowRight, BookOpen, Snowflake, Search, FileText } from "lucide-react"

const Eyebrow = ({ label, light = false }) => (
  <div className="flex items-center gap-3 mb-3">
    <div className="w-8 h-0.75 rounded-full" style={{ background: "#DDA853" }} />
    <span className="text-xs font-bold uppercase tracking-[0.2em]"
      style={{ color: light ? "#DDA853" : "#27548A" }}>
      {label}
    </span>
  </div>
)

const Tag = ({ name, light = false }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
    style={light
      ? { background: "rgba(245,238,220,0.15)", color: "#F5EEDC", border: "1px solid rgba(245,238,220,0.25)" }
      : { background: "rgba(39,84,138,0.10)",   color: "#27548A", border: "1px solid rgba(39,84,138,0.18)" }
    }>
    {name}
  </span>
)

const summerTeams = [
  {
    id: "summer-team-1", number: "01", title: "From Parliament to Classroom",
    researchQuestion: "Is there any gap between government policy on no-examination for elementary school and the lived realities? Why?",
    description: "Participants will visit schools, parents, and students to interview them on the current status of the no-examination policy set by the Nepal government. They shall document the interviews as a discourse paper to identify the possible causes of whatever the situation is — a journey to understand the real state of policy implementation once the decision is made in Parliament.",
    tags: ["Policy Research", "Field Interviews", "Discourse Paper"], icon: Search, dark: true,
  },
  {
    id: "summer-team-2", number: "02", title: "Rethinking Assessment",
    researchQuestion: "How is the credibility of non-examination assessment established?",
    description: "Students will conduct a literature review on assessment decisions and practices made across the world, centred at the elementary level in three countries. Following this, participants will choose one chapter from either English or Mathematics and design a detailed lesson plan including phases of teaching and assessment — then present their work in front of a judge panel.",
    tags: ["Literature Review", "Lesson Design", "Panel Presentation"], icon: FileText, dark: false,
  },
]

const winterTracks = [
  {
    id: "winter-english", number: "03", subject: "English", title: "Words Come Alive",
    description: "Grade 5 students at New Horizon, Butwal explored English through storytelling, creative writing, and guided reading. Sessions were built around a custom handbook — structured, illustrated, and designed to make language feel like play.",
    image: story, alt: "English Track — Winter Camp", tags: ["English", "Storytelling", "Grade 5"], lead: "Ms. Aastha", dark: false, members: "Rojina, Prakriti",
  },
  {
    id: "winter-maths", number: "04", subject: "Mathematics", title: "Numbers in the Room",
    description: "Mathematics came off the page and into the room — students went through challenges designed to show that maths is already embedded in the world around them. From fractions, to measurements, with a twist of storytelling. Handbook-guided sessions kept learning structured and joyful.",
    image: maths, alt: "Maths Track — Winter Camp", tags: ["Mathematics", "Hands-On", "Grade 5"], lead: "Sakul", members: "Aayusha, Bipin (Advisor)", dark: true,
  },
  {
    id: "winter-science", number: "05", subject: "Science", title: "Energy",
    description: "Student focused on fundamentals of molecules, matter, and physical forces. Students observed, hypothesised, and recorded — guided by handbooks that turned each session into a small scientific expedition.",
    image: Molecules, alt: "Science Track — Winter Camp", tags: ["Science", "Molecules", "Grade 5"], lead: "Tol", dark: false, members: "Rahul, TR",
  },
]

const SummerCard = ({ team }) => {
  const { number, title, researchQuestion, description, tags, icon: Icon, dark } = team
  return (
    <div className="rounded-3xl overflow-hidden mb-6 p-6 sm:p-10"
      style={{
        background: dark ? "#183B4E" : "rgba(245,238,220,0.55)",
        border: dark ? "none" : "1.5px solid rgba(39,84,138,0.15)",
      }}>
      <div className="flex items-start gap-4 mb-5">
        <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm"
          style={{ background: "#DDA853", color: "#183B4E" }}>
          {number}
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-1"
            style={{ color: dark ? "rgba(221,168,83,0.7)" : "rgba(39,84,138,0.55)" }}>
            Team {number}
          </p>
          <h3 className="font-black leading-tight"
            style={{ color: dark ? "#F5EEDC" : "#183B4E", fontSize: "clamp(18px, 2.5vw, 24px)" }}>
            {title}
          </h3>
        </div>
      </div>
      <div className="rounded-2xl px-5 py-4 mb-5 flex gap-3 items-start"
        style={{
          background: dark ? "rgba(221,168,83,0.10)" : "rgba(39,84,138,0.07)",
          border: dark ? "1px solid rgba(221,168,83,0.22)" : "1px solid rgba(39,84,138,0.14)",
        }}>
        <Icon size={16} className="shrink-0 mt-0.5" style={{ color: "#DDA853" }} />
        <p className="text-sm leading-relaxed italic"
          style={{ color: dark ? "rgba(245,238,220,0.85)" : "rgba(24,59,78,0.85)" }}>
          "{researchQuestion}"
        </p>
      </div>
      <p className="text-sm sm:text-base leading-relaxed mb-5"
        style={{ color: dark ? "rgba(245,238,220,0.75)" : "rgba(24,59,78,0.75)" }}>
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map(t => <Tag key={t} name={t} light={dark} />)}
      </div>
    </div>
  )
}

const WinterCard = ({ track }) => {
  const { number, subject, title, description, image, alt, tags, lead, members, dark } = track
  return (
    <div className="rounded-3xl overflow-hidden mb-6"
      style={{
        background: dark ? "#183B4E" : "rgba(39,84,138,0.06)",
        border: dark ? "none" : "1.5px solid rgba(39,84,138,0.14)",
      }}>
      <div className="flex flex-col sm:grid sm:grid-cols-2">
        <div className="relative overflow-hidden" style={{ minHeight: 220 }}>
          <img src={image} alt={alt} className="w-full h-full object-cover"
            style={{ minHeight: 220, display: "block" }} />
          <div className="absolute inset-0" style={{
            background: dark
              ? "linear-gradient(135deg, rgba(24,59,78,0.4) 0%, transparent 60%)"
              : "linear-gradient(135deg, rgba(39,84,138,0.28) 0%, transparent 60%)",
          }} />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full font-black text-xs uppercase tracking-widest"
            style={{ background: "#DDA853", color: "#183B4E" }}>
            {subject}
          </div>
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center font-black text-xs"
            style={{ background: "rgba(24,59,78,0.65)", color: "#F5EEDC" }}>
            {number}
          </div>
        </div>
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-black leading-tight mb-3"
              style={{ color: dark ? "#F5EEDC" : "#183B4E", fontSize: "clamp(18px, 2.5vw, 24px)" }}>
              {title}
            </h3>
            <p className="text-sm leading-relaxed mb-5"
              style={{ color: dark ? "rgba(245,238,220,0.75)" : "rgba(24,59,78,0.75)" }}>
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map(t => <Tag key={t} name={t} light={dark} />)}
            </div>
          </div>
          <div className="mt-5 pt-4 flex flex-wrap items-center gap-x-3 gap-y-1"
            style={{ borderTop: dark ? "1px solid rgba(245,238,220,0.12)" : "1px solid rgba(39,84,138,0.14)" }}>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#DDA853" }}>Content Lead</span>
            <span className="text-xs" style={{ color: dark ? "rgba(245,238,220,0.65)" : "rgba(24,59,78,0.65)" }}>{lead}</span>
            {members && (
              <>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#DDA853" }}>Team</span>
                <span className="text-xs" style={{ color: dark ? "rgba(245,238,220,0.65)" : "rgba(24,59,78,0.65)" }}>{members}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <main className="w-full" style={{ background: "#F5EEDC" }}>

      {/* HERO */}
      <section style={{
        position: "relative", overflow: "hidden",
        minHeight: "clamp(320px, 55vh, 620px)",
        display: "flex", alignItems: "center",
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
        <div className="relative z-10 max-w-5xl mx-auto w-full"
          style={{ padding: "clamp(48px, 10vw, 88px) clamp(20px, 4vw, 40px)" }}>
          <Eyebrow label="Shape Balapan · IRD" light />
          <h1 className="font-black tracking-tight leading-[0.90] mb-6"
            style={{ color: "#F5EEDC", fontSize: "clamp(48px, 9vw, 100px)" }}>
            Our<br /><span style={{ color: "#DDA853" }}>Projects</span>
          </h1>
          <svg style={{ display: "block", margin: "0 0 28px" }} width="120" height="11" viewBox="0 0 120 11" fill="none">
            <path d="M2 8 Q15 3 30 8 Q45 13 60 8 Q75 3 90 8 Q105 13 118 8"
              stroke="#DDA853" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
          <p className="leading-relaxed max-w-xl"
            style={{ color: "rgba(245,238,220,0.80)", fontSize: "clamp(14px, 1.8vw, 17px)" }}>
            Every initiative at Shape Balapan is a small experiment in what school can feel like —
            joyful, curious, and grounded in the lives of Nepal's children.
          </p>
        </div>
      </section>

      {/* SUMMER 2026 */}
      <section className="relative py-16 sm:py-20 px-6 sm:px-10 overflow-hidden" style={{ background: "#27548A" }}>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: `url(${Shapes})`, backgroundSize: "cover" }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#DDA853", opacity: 0.12 }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Eyebrow label="Current Program" light />
          <h2 className="font-black uppercase tracking-tight leading-tight mb-2"
            style={{ color: "#F5EEDC", fontSize: "clamp(32px, 4.5vw, 52px)" }}>
            Summer<br />2026
          </h2>
          <p className="mb-4 text-sm" style={{ color: "rgba(245,238,220,0.55)" }}>
            An 8-week research program — two teams, two questions, one shared goal.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
            {[
              { label: "Team 1 Lead", name: "Ms. Aastha" },
              { label: "Team 2 Lead", name: "Sakul" },
              { label: "Outreach",    name: "Mr. Laxman" },
              { label: "Peer Mentors",name: "Prakriti & Tol" },
            ].map(({ label, name }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#DDA853" }}>{label}</span>
                <span className="text-xs" style={{ color: "rgba(245,238,220,0.60)" }}>{name}</span>
              </div>
            ))}
          </div>
          {summerTeams.map(t => <SummerCard key={t.id} team={t} />)}
        </div>
      </section>

      {/* WINTER CAMP 2025 */}
      <section className="relative py-16 sm:py-20 px-6 sm:px-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#27548A", opacity: 0.10 }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Eyebrow label="Past Program" />
          <h2 className="font-black uppercase tracking-tight leading-tight mb-2"
            style={{ color: "#183B4E", fontSize: "clamp(32px, 4.5vw, 52px)" }}>
            Winter<br />Camp 2025
          </h2>
          <p className="mb-4 text-sm" style={{ color: "rgba(24,59,78,0.50)" }}>
            Three subject tracks delivered to Grade 5 students at New Horizon School, Butwal.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            <div className="rounded-2xl p-5 sm:p-6 flex gap-4 items-start" style={{ background: "#183B4E" }}>
              <div className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: "#DDA853" }}>
                <BookOpen size={17} color="#183B4E" />
              </div>
              <div>
                <p className="font-black text-sm mb-1" style={{ color: "#DDA853" }}>STEAM Experience</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,238,220,0.72)" }}>
                  Mathematics, English and Science (STEM) in a playful learning style.
                </p>
              </div>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 flex gap-4 items-start"
              style={{ background: "rgba(39,84,138,0.08)", border: "1.5px solid rgba(39,84,138,0.15)" }}>
              <div className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: "#DDA853" }}>
                <Snowflake size={17} color="#183B4E" />
              </div>
              <div>
                <p className="font-black text-sm mb-1" style={{ color: "#183B4E" }}>EI & Camp Support</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(24,59,78,0.72)" }}>
                  Rojina led Emotional Intelligence sessions across the camp.
                  Mr. Bipin provided essential support throughout.
                </p>
              </div>
            </div>
          </div>
          {winterTracks.map(t => <WinterCard key={t.id} track={t} />)}
        </div>
      </section>

      {/* OUTREACH */}
      <section className="relative py-16 sm:py-20 px-6 sm:px-10 overflow-hidden" style={{ background: "#27548A" }}>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: `url(${texture})`, backgroundSize: "cover" }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Eyebrow label="Outreach" light />
          <h2 className="font-black uppercase tracking-tight leading-tight mb-10"
            style={{ color: "#F5EEDC", fontSize: "clamp(32px, 4.5vw, 52px)" }}>
            Beyond<br />The Classroom
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                image: Gyan, alt: "Festive Stories", title: "Festive Stories",
                description: "Social media posts that bring festivals, cultural values, and heritage to young audiences — turning scrolling into storytelling.",
                tags: ["Culture", "Values", "Social Media"],
              },
              {
                image: air, alt: "Air Pressure Experiment", title: "Air Pressure Experiment",
                description: "Teaching students the fundamentals of air pressure and molecular behaviour through simple demonstrations they can replicate at home.",
                tags: ["Science", "Demonstration", "Curiosity"],
              },
            ].map(p => (
              <div key={p.title} className="rounded-2xl overflow-hidden flex flex-col"
                style={{ background: "rgba(245,238,220,0.08)", border: "1px solid rgba(245,238,220,0.14)" }}>
                <div className="relative overflow-hidden" style={{ height: 200 }}>
                  <img src={p.image} alt={p.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(24,59,78,0.55), transparent)" }} />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-black mb-2" style={{ color: "#F5EEDC", fontSize: 18 }}>{p.title}</h4>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "rgba(245,238,220,0.72)" }}>{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => <Tag key={t} name={t} light />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 px-6 text-center" style={{ background: "#F5EEDC" }}>
        <p className="font-black mb-6" style={{ color: "#183B4E", fontSize: "clamp(22px, 3vw, 34px)" }}>
          Check out the team, behind the projects
        </p>
        <a href="/team"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          style={{ background: "#DDA853", color: "#183B4E" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#e8c070")}
          onMouseLeave={e => (e.currentTarget.style.background = "#DDA853")}>
          Meet The Team <ArrowRight size={16} />
        </a>
      </section>

    </main>
  )
}

export default Projects