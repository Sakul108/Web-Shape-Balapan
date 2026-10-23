import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/images/logo.svg"

// Routes are unchanged
const navLinks = [
  { name: "Home",     path: "/" },
  { name: "Vision",   path: "/vision" },
  { name: "Team",     path: "/team" },
  { name: "Stories",  path: "/stories" },
  { name: "Projects", path: "/projects" },
]

const scrollTop = () => window.scrollTo(0, 0)

const Navbar = () => {
  const [isOpen, setIsOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, y / max) : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = e => { if (e.key === "Escape") setIsOpen(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen])

  const close = () => setIsOpen(false)
  const closeAndScrollTop = () => { close(); scrollTop() }

  return (
    <>
      <style>{`
        .sb-nav { transition: box-shadow 0.25s ease, background 0.25s ease; }
        .sb-nav-inner { transition: height 0.25s ease; }
        .sb-logo img { transition: height 0.25s ease, transform 0.25s ease; }
        .sb-logo:hover img { transform: rotate(-3deg) scale(1.04); }

        .sb-links { gap: 4px; padding: 5px; border-radius: 100px; background: rgba(24,59,78,0.05); }
        .sb-link {
          position: relative; display: block; padding: 7px 16px; border-radius: 100px;
          font-size: 13px; letter-spacing: 0.07em; text-transform: uppercase; text-decoration: none;
          color: #183B4E; font-weight: 700; transition: background 0.2s, transform 0.2s;
        }
        .sb-link::after {
          content: ""; position: absolute; left: 50%; bottom: 3px; width: 0; height: 2px; border-radius: 2px;
          background: #DDA853; transform: translateX(-50%); transition: width 0.22s ease;
        }
        .sb-link:hover { background: rgba(221,168,83,0.16); }
        .sb-link:hover::after { width: 38%; }
        .sb-link.active { background: #183B4E; color: #DDA853; font-weight: 800; }
        .sb-link.active::after { display: none; }
        .sb-link:focus-visible, .sb-cta:focus-visible, .sb-burger:focus-visible { outline: 3px solid #27548A; outline-offset: 2px; }

        .sb-cta {
          align-items: center; gap: 8px; padding: 10px 22px; border-radius: 100px;
          background: #DDA853; color: #183B4E; font-weight: 800; font-size: 12px; letter-spacing: 0.12em;
          text-transform: uppercase; text-decoration: none; flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(221,168,83,0.35);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .sb-cta:hover { background: #183B4E; color: #DDA853; transform: translateY(-1px); box-shadow: 0 8px 18px rgba(24,59,78,0.25); }
        .sb-cta svg { transition: transform 0.2s; }
        .sb-cta:hover svg { transform: translateX(3px); }

        .sb-burger { display: flex; align-items: center; justify-content: center; width: 42px; height: 42px; border-radius: 12px; border: 1.5px solid rgba(24,59,78,0.25); background: transparent; cursor: pointer; padding: 0; transition: background 0.15s; }
        .sb-burger:hover { background: rgba(221,168,83,0.2); }

        .sb-drawer-link { transition: all 0.15s; }
        .sb-drawer-link:hover { background: rgba(221,168,83,0.08) !important; padding-left: 34px !important; }

        @media (min-width: 768px) {
          .sb-links  { display: flex !important; }
          .sb-cta    { display: inline-flex !important; }
          .sb-burger { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sb-nav, .sb-nav-inner, .sb-logo img, .sb-link, .sb-cta, .sb-cta svg, .sb-drawer-link { transition: none !important; }
        }
      `}</style>

      {/* Main bar */}
      <nav
        className="sb-nav"
        style={{
          position: "sticky", top: 0, left: 0, right: 0, zIndex: 50,
          background: scrolled ? "rgba(245,238,220,0.94)" : "#F5EEDC",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: "2px solid #DDA853",
          boxShadow: scrolled ? "0 6px 26px rgba(24,59,78,0.12)" : "none",
        }}
      >
        <div
          className="sb-nav-inner"
          style={{
            maxWidth: 1100, margin: "0 auto", padding: "0 28px",
            height: scrolled ? 58 : 70,
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
          }}
        >
          <Link to="/" onClick={closeAndScrollTop} className="sb-logo" style={{ display: "flex", alignItems: "center", flexShrink: 0 }} aria-label="Shape Balapan home">
            <img src={logo} alt="Shape Balapan" style={{ height: scrolled ? 38 : 46, width: "auto", objectFit: "contain" }} />
          </Link>

          <ul className="sb-links" style={{ display: "none", listStyle: "none", margin: 0 }}>
            {navLinks.map(link => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={scrollTop}
                  className={({ isActive }) => `sb-link${isActive ? " active" : ""}`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/contact" onClick={scrollTop} className="sb-cta" style={{ display: "none" }}>
            Join Us
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <button
            onClick={() => setIsOpen(o => !o)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            className="sb-burger"
          >
            {isOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 3l12 12M15 3L3 15" stroke="#183B4E" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                <path d="M0 1h18M0 7h12M0 13h18" stroke="#183B4E" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* scroll progress, drawn over the gold bottom border */}
        <div aria-hidden="true" style={{ position: "absolute", left: 0, bottom: -2, height: 2, width: `${progress * 100}%`, background: "#183B4E", transition: "width 0.1s linear" }} />
      </nav>

      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: "fixed", inset: 0, zIndex: 40, background: "rgba(24,59,78,0.45)",
          opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none", transition: "opacity 0.25s ease",
        }}
      />

      {/* Drawer panel */}
      <div
        aria-hidden={!isOpen}
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 48,
          width: "min(320px, 85vw)", background: "#183B4E",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.30s cubic-bezier(0.4,0,0.2,1)",
          display: "flex", flexDirection: "column", padding: "28px 0 40px", overflowY: "auto",
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px 28px", borderBottom: "1px solid rgba(221,168,83,0.20)" }}>
          <div>
            <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#DDA853" }}>Shape Balapan</p>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "rgba(245,238,220,0.65)" }}>Learning through play</p>
          </div>
          <button
            onClick={close}
            aria-label="Close menu"
            style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid rgba(221,168,83,0.35)", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="#DDA853" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile navigation" style={{ flex: 1, padding: "20px 0" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map(link => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeAndScrollTop}
                  className="sb-drawer-link"
                  style={({ isActive }) => ({
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "15px 28px", textDecoration: "none", fontSize: 16,
                    fontWeight: isActive ? 800 : 600, letterSpacing: "0.05em",
                    color: isActive ? "#DDA853" : "rgba(245,238,220,0.88)",
                    background: isActive ? "rgba(221,168,83,0.10)" : "transparent",
                    borderLeft: isActive ? "3px solid #DDA853" : "3px solid transparent",
                  })}
                >
                  <span>{link.name}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.5 }} aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ padding: "0 28px" }}>
          <Link
            to="/contact"
            onClick={closeAndScrollTop}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%",
              padding: "14px 24px", borderRadius: 100, background: "#DDA853", color: "#183B4E",
              fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase",
              textDecoration: "none", boxSizing: "border-box",
            }}
          >
            Join Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="#183B4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "rgba(245,238,220,0.5)", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} Shape Balapan
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar