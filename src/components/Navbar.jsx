import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/images/logo.svg"

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const close = () => setIsOpen(false)

  const closeAndScrollTop = () => {
    close()
    scrollTop()
  }

  return (
    <>
      {/*  Main bar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#F5EEDC",
          borderBottom: "2px solid #DDA853",
          transition: "box-shadow 0.25s ease",
          boxShadow: scrolled
            ? "0 4px 24px rgba(24,59,78,0.10)"
            : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 28px",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={closeAndScrollTop}
            style={{
              display: "flex",
              alignItems: "center",
              transition: "opacity 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <img
              src={logo}
              alt="Shape Balapan"
              style={{ height: 44, width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop links */}
          <ul
            style={{
              display: "none",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: 4,
            }}
            className="nav-desktop-links"
          >
            {navLinks.map(link => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={scrollTop}
                  style={({ isActive }) => ({
                    display: "block",
                    padding: "6px 14px",
                    borderRadius: 100,
                    fontSize: 13,
                    fontWeight: isActive ? 800 : 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: isActive ? "#183B4E" : "#183B4E",
                    background: isActive ? "#DDA853" : "transparent",
                    transition: "background 0.18s, color 0.18s",
                  })}
                  onMouseEnter={e => {
                    if (e.currentTarget.style.background === "transparent")
                      e.currentTarget.style.background = "rgba(221,168,83,0.18)"
                  }}
                  onMouseLeave={e => {
                    if (e.currentTarget.getAttribute("aria-current") !== "page")
                      e.currentTarget.style.background = "transparent"
                  }}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            onClick={scrollTop}
            className="nav-cta-desktop"
            style={{
              display: "none",
              alignItems: "center",
              gap: 6,
              padding: "8px 20px",
              borderRadius: 100,
              background: "#183B4E",
              color: "#DDA853",
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.18s",
              flexShrink: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#27548A")}
            onMouseLeave={e => (e.currentTarget.style.background = "#183B4E")}
          >
            Join Us
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="#DDA853" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(o => !o)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            className="nav-mobile-toggle"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 8,
              border: "1.5px solid rgba(221,168,83,0.40)",
              background: "transparent",
              cursor: "pointer",
              transition: "background 0.15s",
              padding: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(221,168,83,0.15)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            {isOpen ? (
             
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 3l12 12M15 3L3 15" stroke="#183B4E" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              /* Hamburger */
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path d="M0 1h18M0 7h12M0 13h18" stroke="#183B4E" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "rgba(24,59,78,0.45)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.25s ease",
        }}
      />

      {/* Drawer panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 48,
          width: "min(320px, 85vw)",
          background: "#183B4E",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.30s cubic-bezier(0.4,0,0.2,1)",
          display: "flex",
          flexDirection: "column",
          padding: "28px 0 40px",
          overflowY: "auto",
        }}
      >
        {/* Drawer header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px 28px",
            borderBottom: "1px solid rgba(221,168,83,0.20)",
          }}
        >
          <div>
            <p style={{ margin: 0, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#DDA853" }}>
              Shape Balapan
            </p>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "rgba(245,238,220,0.55)" }}>
              Navigation
            </p>
          </div>
          <button
            onClick={close}
            aria-label="Close menu"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1.5px solid rgba(221,168,83,0.35)",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="#DDA853" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Drawer nav links */}
        <nav aria-label="Mobile navigation" style={{ flex: 1, padding: "20px 0" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeAndScrollTop}
                  style={({ isActive }) => ({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "15px 28px",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: isActive ? 800 : 600,
                    letterSpacing: "0.05em",
                    color: isActive ? "#DDA853" : "rgba(245,238,220,0.80)",
                    background: isActive ? "rgba(221,168,83,0.10)" : "transparent",
                    borderLeft: isActive ? "3px solid #DDA853" : "3px solid transparent",
                    transition: "all 0.15s",
                  })}
                >
                  <span>{link.name}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.45 }}>
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer CTA */}
        <div style={{ padding: "0 28px" }}>
          <Link
            to="/contact"
            onClick={closeAndScrollTop}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              padding: "14px 24px",
              borderRadius: 100,
              background: "#DDA853",
              color: "#183B4E",
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.18s",
              boxSizing: "border-box",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#e8c070")}
            onMouseLeave={e => (e.currentTarget.style.background = "#DDA853")}
          >
            Join Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="#183B4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p style={{ textAlign: "center", marginTop: 16, fontSize: 11, color: "rgba(245,238,220,0.35)", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} Shape Balapan
          </p>
        </div>
      </div>

      {/*Responsive CSS*/}
      <style>{`
        @media (min-width: 768px) {
          .nav-desktop-links  { display: flex !important; }
          .nav-cta-desktop    { display: flex !important; }
          .nav-mobile-toggle  { display: none  !important; }
        }
      `}</style>
    </>
  )
}

export default Navbar