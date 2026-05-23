import { useNavigate } from "react-router-dom"
import { ArrowRight, Star } from "lucide-react"

import heroImg    from "../assets/images/Stories.webp"
import Tika      from "../assets/images/artwork/Tika.webp"
import TV        from "../assets/images/artwork/TV.webp"
import Village   from "../assets/images/artwork/Village.webp"
import Env       from "../assets/images/artwork/Env.webp"
import Holi      from "../assets/images/artwork/Holi.webp"
import Child     from "../assets/images/artwork/Child.webp"
import Saraswati from "../assets/images/artwork/Saraswati.webp"
import Fish      from "../assets/images/artwork/Fish.webp"
import Festivals from "../assets/images/artwork/Festivals.webp"
import Art       from "../assets/images/artwork/Art.webp"

const THEMES = {
  "Culture":       { color: "#E8927A", bg: "#E8927A22", label: "Culture"       },
  "Education":     { color: "#7EB5D6", bg: "#7EB5D622", label: "Education"     },
  "Nature & Play": { color: "#9AC48C", bg: "#9AC48C22", label: "Nature & Play" },
}

const ARTWORKS = [
  {
    id: "dashain",
    image: Tika,
    title: "Tika Day",
    theme: "Culture",
    medium: "Crayon on paper",
    caption: "A student reflecting the moment of receiving tika from their elders — red forehead, kites, swings and comfort.",
    featured: true,
  },
  {
    id: "village",
    image: Village,
    title: "The Village",
    theme: "Nature & Play",
    medium: "Watercolour",
    caption: "Washed in watercolors and memories; a glimpse of the village where the air is pure, the hills stand as old guardians, and every stone house has a story to tell.",
    featured: true,
  },
  {
    id: "saraswati-puja",
    image: Saraswati,
    title: "The Melody of Wisdom",
    theme: "Culture",
    medium: "Watercolor on paper",
    caption: "A young learner reflecting on the blessings of the goddess of knowledge — a wooden veena, flowing white robes, musical notes, and deep focus.",
    featured: true,
  },
  {
    id: "bal-krishna",
    image: Festivals,
    title: "Little Krishna",
    theme: "Culture",
    medium: "Colored pencil and marker on paper",
    caption: "A primary student reflecting on the playful legends of Janmashtami — yellow robes, peacock feathers, butter pots, and mischievous eyes.",
    featured: true,
  },
  {
    id: "TV",
    image: TV,
    title: "Digital World",
    theme: "Education",
    medium: "Markers",
    caption: "A primary student reflecting on the joy of weekend mornings — favorite cartoons, bright screens, imaginary friends, and pure excitement.",
    featured: true,
  },
  {
    id: "pencil-portrait",
    image: Art,
    title: "Serenity",
    theme: "Culture",
    medium: "Pencil shading on paper",
    caption: "A young learner reflecting on the calmness of maternal traditions — closed eyes, gentle features, traditional bindi, and silent devotion.",
    featured: true,
  },
  {
    id: "planting-trees",
    image: Env,
    title: "Nurturing the Roots",
    theme: "Nature & Play",
    medium: "Sketch pen and marker on paper",
    caption: "A primary student reflecting on a school environmental day — young saplings, watering cans, loose soil, and shared teamwork.",
    featured: false,
  },
  {
    id: "holi-celebration",
    image: Holi,
    title: "Colors of Joy",
    theme: "Culture",
    medium: "Crayon and marker on paper",
    caption: "A primary student reflecting on the madness of a spring festival — flying water balloons, colored powder, wet clothes, and pure laughter.",
    featured: false,
  },
  {
    id: "childrens-day",
    image: Child,
    title: "Hand in Hand",
    theme: "Education",
    medium: "Colored pencil and crayon on paper",
    caption: "A primary student celebrating the spirit of togetherness — smiling faces, linked hands, playground unity, and inclusive friendships.",
    featured: false,
  },
  {
    id: "colorful-fishes",
    image: Fish,
    title: "Friends in the Deep",
    theme: "Nature & Play",
    medium: "Sketch pen and marker on paper",
    caption: "A primary student exploring the mysteries of underwater life — vibrant fish scales, rolling ocean waves, deep currents, and silent companionship.",
    featured: false,
  },
]

const FEATURED    = ARTWORKS.filter(a => a.featured)
const GALLERY     = ARTWORKS.filter(a => !a.featured)
const THEMES_LIST = Object.keys(THEMES)


const TopLink = ({ to, children, style = {}, onMouseEnter, onMouseLeave }) => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "instant" })
    navigate(to)
  }
  return (
    <a href={to} onClick={handleClick} style={style}
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </a>
  )
}

const Eyebrow = ({ label, dark = false }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
    <div style={{ width: 28, height: 2.5, borderRadius: 2, background: "#DDA853" }} />
    <span style={{
      fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
      color: dark ? "rgba(221,168,83,0.80)" : "#27548A",
    }}>
      {label}
    </span>
  </div>
)

const ThemePill = ({ theme, small = false }) => {
  const t = THEMES[theme] || THEMES["Culture"]
  return (
    <span style={{
      display: "inline-block",
      padding: small ? "3px 9px" : "4px 12px",
      borderRadius: 100,
      fontSize: small ? 9 : 10,
      fontWeight: 700,
      letterSpacing: "0.10em",
      textTransform: "uppercase",
      background: t.bg,
      color: t.color,
      border: `1px solid ${t.color}55`,
    }}>
      {t.label}
    </span>
  )
}

const ArtworkPlaceholder = ({ theme, height }) => {
  const t = THEMES[theme] || THEMES["Culture"]
  return <div style={{ width: "100%", height, background: t.bg }} />
}

const FeaturedCard = ({ artwork }) => {
  const t = THEMES[artwork.theme] || THEMES["Culture"]
  return (
    <div style={{
      background: "#fff", borderRadius: 20, overflow: "hidden",
      border: "1px solid rgba(24,59,78,0.10)",
      display: "flex", flexDirection: "column", position: "relative",
      transition: "transform 0.22s ease, box-shadow 0.22s ease",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(24,59,78,0.14)" }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "" }}
    >
      <div style={{
        position: "absolute", top: 14, right: 14, zIndex: 2,
        width: 30, height: 30, borderRadius: "50%", background: "#DDA853",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 12px rgba(221,168,83,0.45)",
      }}>
        <Star size={13} color="#183B4E" fill="#183B4E" strokeWidth={0} />
      </div>
      <div style={{ position: "relative", height: 260 }}>
        {artwork.image
          ? <img src={artwork.image} alt={artwork.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          : <ArtworkPlaceholder theme={artwork.theme} height={260} />
        }
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: t.color }} />
      </div>
      <div style={{ padding: "20px 22px 26px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: 10 }}>
          <ThemePill theme={artwork.theme} />
        </div>
        <h3 style={{ margin: "0 0 4px", fontWeight: 900, fontSize: 19, color: "#183B4E", lineHeight: 1.2 }}>
          "{artwork.title}"
        </h3>
        <p style={{ margin: "0 0 12px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#27548A" }}>
          {artwork.medium}
        </p>
        <div style={{ width: 28, height: 2, background: "#DDA853", borderRadius: 2, marginBottom: 12 }} />
        <p style={{ margin: 0, fontSize: 13, lineHeight: 1.75, color: "rgba(24,59,78,0.72)", flex: 1 }}>
          {artwork.caption}
        </p>
      </div>
    </div>
  )
}

const GalleryCard = ({ artwork }) => {
  const t = THEMES[artwork.theme] || THEMES["Culture"]
  return (
    <div style={{
      background: "#fff", borderRadius: 16, overflow: "hidden",
      border: "1px solid rgba(24,59,78,0.08)",
      display: "flex", flexDirection: "column",
      transition: "transform 0.22s ease, box-shadow 0.22s ease",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(24,59,78,0.12)" }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "" }}
    >
      <div style={{ position: "relative", height: 200 }}>
        {artwork.image
          ? <img src={artwork.image} alt={artwork.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          : <ArtworkPlaceholder theme={artwork.theme} height={200} />
        }
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: t.color }} />
      </div>
      <div style={{ padding: "16px 18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: 8 }}>
          <ThemePill theme={artwork.theme} small />
        </div>
        <p style={{ margin: "0 0 3px", fontWeight: 900, fontSize: 15, color: "#183B4E", lineHeight: 1.25 }}>
          "{artwork.title}"
        </p>
        <p style={{ margin: "0 0 10px", fontSize: 10, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#27548A" }}>
          {artwork.medium}
        </p>
        <div style={{ width: 24, height: 2, background: "#DDA853", borderRadius: 2, marginBottom: 10 }} />
        <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.7, color: "rgba(24,59,78,0.70)", flex: 1 }}>
          {artwork.caption}
        </p>
      </div>
    </div>
  )
}

const Stat = ({ value, label }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontWeight: 900, fontSize: "clamp(28px, 4vw, 44px)", color: "#DDA853", lineHeight: 1 }}>{value}</div>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,238,220,0.60)", marginTop: 6 }}>{label}</div>
  </div>
)


const Stories = () => (
  <main style={{ width: "100%", background: "#F5EEDC" }}>

    <style>{`
      .stories-spotlight-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 28px;
      }
      .stories-gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        gap: 22px;
      }
      .stories-stats-row {
        display: flex;
        gap: clamp(20px, 5vw, 56px);
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
      }
      .stories-stat-divider {
        width: 1px; height: 48px;
        background: rgba(245,238,220,0.18);
      }
      .stories-intro-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
        align-items: center;
      }
      .stories-theme-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
      }
      @media (max-width: 560px) {
        .stories-spotlight-grid { grid-template-columns: 1fr; }
        .stories-gallery-grid   { grid-template-columns: 1fr; }
        .stories-stat-divider   { display: none; }
      }
    `}</style>

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
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 1060, margin: "0 auto", width: "100%",
        padding: "clamp(48px, 10vw, 88px) clamp(20px, 4vw, 40px)",
      }}>
        <Eyebrow label="Shape Balapan" dark />
        <h1 style={{
          margin: "0 0 24px", fontWeight: 900,
          fontSize: "clamp(48px, 9vw, 100px)",
          lineHeight: 0.92, letterSpacing: "-0.02em", color: "#F5EEDC",
        }}>
          Their<br /><span style={{ color: "#DDA853" }}>Stories</span><br />in Colour
        </h1>
        <svg style={{ display: "block", margin: "0 0 28px" }} width="120" height="11" viewBox="0 0 120 11" fill="none">
          <path d="M2 8 Q15 3 30 8 Q45 13 60 8 Q75 3 90 8 Q105 13 118 8" stroke="#DDA853" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
        <p style={{
          color: "rgba(245,238,220,0.80)",
          fontSize: "clamp(14px, 1.8vw, 17px)",
          lineHeight: 1.8, maxWidth: 480, margin: 0,
        }}>
          Every brushstroke here belongs to a child who was given space to imagine.
          These artworks are the living proof of what play-based learning unlocks.
        </p>
      </div>
    </section>

    {/* STATS BAND */}
    <section style={{ background: "#27548A", padding: "clamp(28px, 5vw, 48px) clamp(20px, 4vw, 40px)" }}>
      <div className="stories-stats-row" style={{ maxWidth: 1060, margin: "0 auto" }}>
        <Stat value={`${ARTWORKS.length}+`} label="Artworks" />
        <div className="stories-stat-divider" />
        <Stat value="8+"                      label="Students"  />
        <div className="stories-stat-divider" />
        <Stat value={`${THEMES_LIST.length}`} label="Themes"  />
        <div className="stories-stat-divider" />
        <Stat value="4+"                      label="Mediums"  />
      </div>
    </section>

    {/* INTRO */}
    <section style={{ padding: "clamp(40px, 7vw, 72px) clamp(20px, 4vw, 40px)" }}>
      <div className="stories-intro-grid" style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div>
          <Eyebrow label="About This Gallery" />
          <h2 style={{ margin: "0 0 20px", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", color: "#183B4E", lineHeight: 1.1 }}>
            Art as evidence of learning
          </h2>
          <p style={{ margin: "0 0 16px", fontSize: "clamp(14px, 1.6vw, 16px)", lineHeight: 1.85, color: "rgba(24,59,78,0.72)" }}>
            After each Shape Balapan session, children are offered unstructured time to draw, paint, or create with whatever materials are available. We don't give them a prompt — we give them freedom. What they choose to make tells us more about what they absorbed than any test could.
          </p>
          <p style={{ margin: "0 0 24px", fontSize: "clamp(14px, 1.6vw, 16px)", lineHeight: 1.85, color: "rgba(24,59,78,0.72)" }}>
            Artworks are organised into three themes that reflect what children returned to most naturally:
          </p>
          <div className="stories-theme-row">
            {THEMES_LIST.map(t => (
              <span key={t} style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "7px 16px", borderRadius: 100,
                background: THEMES[t].bg,
                border: `1.5px solid ${THEMES[t].color}55`,
                fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color: THEMES[t].color,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: THEMES[t].color, display: "inline-block", flexShrink: 0 }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* SPOTLIGHT */}
    <section style={{ background: "#EDE6D0", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <Eyebrow label="Spotlight Art" />
          <h2 style={{ margin: 0, fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", color: "#183B4E", lineHeight: 1.05 }}>
            Spotlight
          </h2>
        </div>
        <div className="stories-spotlight-grid">
          {FEATURED.map(a => <FeaturedCard key={a.id} artwork={a} />)}
        </div>
      </div>
    </section>

    {/* FULL GALLERY */}
    <section style={{ padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <Eyebrow label="The Collection" />
          <h2 style={{ margin: 0, fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", color: "#183B4E", lineHeight: 1.05 }}>
            All Artworks
          </h2>
        </div>
        <div className="stories-gallery-grid">
          {GALLERY.map(a => <GalleryCard key={a.id} artwork={a} />)}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ padding: "clamp(40px, 8vw, 80px) 20px", textAlign: "center", background: "#F5EEDC" }}>
      <h3 style={{ margin: "0 0 8px", fontWeight: 900, fontSize: "clamp(22px, 3vw, 34px)", color: "#183B4E" }}>
        Meet the people
      </h3>
      <p style={{ margin: "0 0 32px", fontSize: 15, color: "rgba(24,59,78,0.60)", lineHeight: 1.6 }}>
        Every artwork collected by the Team
      </p>
      <TopLink to="/team"
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "14px 32px", borderRadius: 100,
          background: "#DDA853", color: "#183B4E",
          fontWeight: 700, fontSize: 15, textDecoration: "none",
          boxShadow: "0 8px 24px rgba(221,168,83,0.20)",
          transition: "background 0.18s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "#e8c070")}
        onMouseLeave={e => (e.currentTarget.style.background = "#DDA853")}>
        Meet our team <ArrowRight size={16} />
      </TopLink>
    </section>

  </main>
)

export default Stories