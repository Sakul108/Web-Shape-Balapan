import { Link } from "react-router-dom"
import { Mail } from "lucide-react"

const NAV_LINKS = [
  { label: "Home",     to: "/"         },
  { label: "Vision",   to: "/vision"   },
  { label: "Stories",  to: "/stories"  },
  { label: "Projects", to: "/projects" },
  { label: "Team",     to: "/team"     },
]

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="#DDA853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="#DDA853" stroke="none" />
  </svg>
)

const Footer = () => {
  return (
    <footer style={{ background: "#183B4E", color: "#F5EEDC", position: "sticky", bottom: 0 }}>

      {/* ── MAIN BODY ── */}
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "60px 32px 40px",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "48px 40px",
      }}>

        {/* Brand */}
        <div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#F5EEDC", letterSpacing: "-0.02em", lineHeight: 1 }}>
              S·H·A·P·E
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#DDA853", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 2 }}>
              Balapan
            </div>
          </div>
          <svg style={{ display: "block", marginBottom: 16 }} width="80" height="8" viewBox="0 0 80 8" fill="none">
            <path d="M1 5 Q10 1 20 5 Q30 9 40 5 Q50 1 60 5 Q70 9 79 5"
              stroke="#DDA853" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.8, color: "rgba(245,238,220,0.65)", maxWidth: 220 }}>
            Game-based learning for Nepal's primary schools — bridging policy, pedagogy, and play.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p style={{ margin: "0 0 16px", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#DDA853" }}>
            Explore
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {NAV_LINKS.map(({ label, to }) => (
              <Link key={label} to={to} style={{
                color: "rgba(245,238,220,0.72)", textDecoration: "none",
                fontSize: 14, fontWeight: 600, transition: "color 0.15s",
                display: "inline-flex", alignItems: "center", gap: 6,
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "#DDA853" }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(245,238,220,0.72)" }}
              >
                <span style={{ color: "#DDA853", fontSize: 10 }}>✦</span> {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Connect */}
        <div>
          <p style={{ margin: "0 0 16px", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#DDA853" }}>
            Connect
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Instagram */}
            <a href="https://www.instagram.com/shape_balapan" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", color: "rgba(245,238,220,0.72)", fontSize: 14, fontWeight: 600, transition: "color 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#DDA853" }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(245,238,220,0.72)" }}
            >
              <span style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "rgba(221,168,83,0.12)", border: "1px solid rgba(221,168,83,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <InstagramIcon />
              </span>
              @shape_balapan
            </a>

            {/* Email */}
            <a href="mailto:shapebalapan@gmail.com"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", color: "rgba(245,238,220,0.72)", fontSize: 14, fontWeight: 600, transition: "color 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#DDA853" }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(245,238,220,0.72)" }}
            >
              <span style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "rgba(221,168,83,0.12)", border: "1px solid rgba(221,168,83,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Mail size={15} color="#DDA853" />
              </span>
              shapebalapan@gmail.com
            </a>

          </div>
        </div>

        {/* Values */}
        <div>
          <p style={{ margin: "0 0 16px", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#DDA853" }}>
            We Believe In
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "Emotional safety in learning",
              "Collaborative inquiry",
              "Curiosity over criticism",
              "Contextual relevance",
              "Ethical engagement",
            ].map(val => (
              <div key={val} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "rgba(245,238,220,0.60)", lineHeight: 1.5 }}>
                <span style={{ color: "#DDA853", flexShrink: 0, marginTop: 2, fontSize: 9 }}>●</span>
                {val}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{
        borderTop: "1px solid rgba(245,238,220,0.08)",
        maxWidth: 1100, margin: "0 auto", padding: "20px 32px",
        display: "flex", flexWrap: "wrap", alignItems: "center",
        justifyContent: "space-between", gap: 10,
      }}>
        <p style={{ margin: 0, fontSize: 12, color: "rgba(245,238,220,0.38)", letterSpacing: "0.04em" }}>
          © {new Date().getFullYear()} Shape Balapan · Kathmandu, Nepal
        </p>
      </div>

    </footer>
  )
}

export default Footer