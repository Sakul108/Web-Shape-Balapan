import { useState } from "react"
import { ArrowRight, Mail, MapPin } from "lucide-react"

const EMAIL = "shapebalapan@gmail.com"
const INSTAGRAM_URL = "https://www.instagram.com/shape_balapan"

const Eyebrow = ({ label, dark }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
    <div style={{ width: 28, height: 2.5, borderRadius: 2, background: "#DDA853" }} />
    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: dark ? "rgba(221,168,83,0.80)" : "#27548A" }}>
      {label}
    </span>
  </div>
)

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [touched, setTouched] = useState({})

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const touch = (k) => setTouched(t => ({ ...t, [k]: true }))

  const errors = {
    name:    !form.name.trim()    ? "Name is required" : "",
    email:   !form.email.trim()   ? "Email is required" : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "Enter a valid email" : "",
    message: !form.message.trim() ? "Message is required" : "",
  }
  const valid = !errors.name && !errors.email && !errors.message

  const gmailUrl = () =>
    `https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=${encodeURIComponent(form.subject || "Message from " + form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`

  const handleMailto = () => {
    setTouched({ name: true, email: true, subject: true, message: true })
    if (!valid) return
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject || "—"}%0A%0A${encodeURIComponent(form.message)}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject || "Message from " + form.name)}&body=${body}`
  }

  const handleGmail = () => {
    setTouched({ name: true, email: true, subject: true, message: true })
    if (!valid) return
    window.open(gmailUrl(), "_blank")
  }

  const inputStyle = (key) => ({
    width: "100%",
    padding: "13px 16px",
    borderRadius: 10,
    border: `1.5px solid ${touched[key] && errors[key] ? "#e05c5c" : "rgba(24,59,78,0.18)"}`,
    background: "#fff",
    fontSize: 14,
    color: "#183B4E",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.18s, box-shadow 0.18s",
    fontFamily: "inherit",
  })

  return (
    <main style={{ width: "100%", background: "#F5EEDC" }}>

      {/* HERO */}
      <section style={{ background: "#183B4E", padding: "clamp(56px, 10vw, 96px) clamp(20px, 4vw, 40px) clamp(40px, 7vw, 72px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "#DDA853", opacity: 0.08, filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 260, height: 260, borderRadius: "50%", background: "#27548A", opacity: 0.30, filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Eyebrow label="Shape Balapan" dark />
          <h1 style={{ margin: "0 0 20px", fontWeight: 900, fontSize: "clamp(48px, 9vw, 96px)", lineHeight: 0.92, letterSpacing: "-0.02em", color: "#F5EEDC" }}>
            Get In<br /><span style={{ color: "#DDA853" }}>Touch</span>
          </h1>
          <svg style={{ display: "block", margin: "0 0 24px" }} width="120" height="11" viewBox="0 0 120 11" fill="none">
            <path d="M2 8 Q15 3 30 8 Q45 13 60 8 Q75 3 90 8 Q105 13 118 8" stroke="#DDA853" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
          <p style={{ color: "rgba(245,238,220,0.75)", fontSize: "clamp(14px, 1.8vw, 17px)", lineHeight: 1.8, maxWidth: 420, margin: 0 }}>
            Whether you're a school, researcher, parent, or just curious — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ maxWidth: 1060, margin: "0 auto", padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)" }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 64px)", alignItems: "start" }}>

          {/* LEFT — info */}
          <div>
            <Eyebrow label="Contact" />
            <h2 style={{ margin: "0 0 16px", fontWeight: 900, fontSize: "clamp(28px, 4vw, 42px)", color: "#183B4E", lineHeight: 1.05 }}>
              Let's start a<br />conversation
            </h2>
            <p style={{ margin: "0 0 36px", fontSize: 15, lineHeight: 1.8, color: "rgba(24,59,78,0.70)" }}>
              Fill in the form and send via Gmail or your email app — or reach us directly through any of the channels below.
            </p>

            {/* Contact cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                {
                  icon: <Mail size={18} color="#183B4E" />,
                  label: "Email us",
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#183B4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="#183B4E" stroke="none" />
                    </svg>
                  ),
                  label: "Follow us",
                  value: "@shape_balapan",
                  href: INSTAGRAM_URL,
                  external: true,
                },
                {
                  icon: <MapPin size={18} color="#183B4E" />,
                  label: "Based in",
                  value: "Kathmandu, Nepal",
                  href: null,
                },
              ].map(({ icon, label, value, href, external }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", borderRadius: 14, background: "#fff", border: "1px solid rgba(24,59,78,0.10)" }}>
                  <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: "50%", background: "#DDA853", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ margin: 0, fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#27548A" }}>{label}</p>
                    {href ? (
                      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                        style={{ margin: "2px 0 0", fontSize: 14, fontWeight: 700, color: "#183B4E", textDecoration: "none", display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#27548A")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#183B4E")}>
                        {value}
                      </a>
                    ) : (
                      <p style={{ margin: "2px 0 0", fontSize: 14, fontWeight: 700, color: "#183B4E" }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* IRD note */}
            <div style={{ marginTop: 28, padding: "16px 20px", borderRadius: 14, background: "#183B4E", border: "1px solid rgba(221,168,83,0.20)" }}>
              <p style={{ margin: 0, fontSize: 12, lineHeight: 1.7, color: "rgba(245,238,220,0.65)" }}>
                Shape Balapan is an initiative of the{" "}
                <a href="https://ird.com.np/" target="_blank" rel="noopener noreferrer"
                  style={{ color: "#DDA853", fontWeight: 700, textDecoration: "none" }}>
                  Institute for Rural Development (IRD)
                </a>
                , Kathmandu.
              </p>
            </div>
          </div>

          {/* RIGHT — form */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "clamp(24px, 4vw, 40px)", border: "1px solid rgba(24,59,78,0.10)", boxShadow: "0 8px 40px rgba(24,59,78,0.07)" }}>
            <div style={{ marginBottom: 28 }}>
              <p style={{ margin: "0 0 4px", fontWeight: 900, fontSize: 22, color: "#183B4E" }}>Send a message</p>
              <p style={{ margin: 0, fontSize: 13, color: "rgba(24,59,78,0.55)" }}>We'll get back to you as soon as we can.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

              {/* Name + Email row */}
              <div className="contact-name-email" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#27548A", marginBottom: 6 }}>
                    Name <span style={{ color: "#e05c5c" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Aastha Ghimire"
                    value={form.name}
                    onChange={e => set("name", e.target.value)}
                    onBlur={() => touch("name")}
                    style={inputStyle("name")}
                    onFocus={e => (e.target.style.borderColor = "#DDA853", e.target.style.boxShadow = "0 0 0 3px rgba(221,168,83,0.15)")}
                    onBlurCapture={e => (e.target.style.boxShadow = "")}
                  />
                  {touched.name && errors.name && <p style={{ margin: "4px 0 0", fontSize: 11, color: "#e05c5c" }}>{errors.name}</p>}
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#27548A", marginBottom: 6 }}>
                    Email <span style={{ color: "#e05c5c" }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => set("email", e.target.value)}
                    onBlur={() => touch("email")}
                    style={inputStyle("email")}
                    onFocus={e => (e.target.style.borderColor = "#DDA853", e.target.style.boxShadow = "0 0 0 3px rgba(221,168,83,0.15)")}
                    onBlurCapture={e => (e.target.style.boxShadow = "")}
                  />
                  {touched.email && errors.email && <p style={{ margin: "4px 0 0", fontSize: 11, color: "#e05c5c" }}>{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#27548A", marginBottom: 6 }}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Collaboration, research, schools…"
                  value={form.subject}
                  onChange={e => set("subject", e.target.value)}
                  style={inputStyle("subject")}
                  onFocus={e => (e.target.style.borderColor = "#DDA853", e.target.style.boxShadow = "0 0 0 3px rgba(221,168,83,0.15)")}
                  onBlur={e => (e.target.style.boxShadow = "", e.target.style.borderColor = "rgba(24,59,78,0.18)")}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#27548A", marginBottom: 6 }}>
                  Message <span style={{ color: "#e05c5c" }}>*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about yourself or what you'd like to discuss…"
                  value={form.message}
                  onChange={e => set("message", e.target.value)}
                  onBlur={() => touch("message")}
                  style={{ ...inputStyle("message"), resize: "vertical", minHeight: 120 }}
                  onFocus={e => (e.target.style.borderColor = "#DDA853", e.target.style.boxShadow = "0 0 0 3px rgba(221,168,83,0.15)")}
                  onBlurCapture={e => (e.target.style.boxShadow = "")}
                />
                {touched.message && errors.message && <p style={{ margin: "4px 0 0", fontSize: 11, color: "#e05c5c" }}>{errors.message}</p>}
              </div>

              {/* Two send buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                {/* Gmail */}
                <button
                  onClick={handleGmail}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    width: "100%", padding: "14px 24px", borderRadius: 100,
                    background: "#DDA853", color: "#183B4E",
                    fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase",
                    border: "none", cursor: "pointer",
                    transition: "background 0.18s, transform 0.15s",
                    opacity: valid ? 1 : 0.7,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#e8c070"; e.currentTarget.style.transform = "translateY(-2px)" }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#DDA853"; e.currentTarget.style.transform = "" }}
                >
                  {/* Gmail icon */}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M2 6l10 7L22 6" stroke="#183B4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#183B4E" strokeWidth="2"/>
                  </svg>
                  Send via Gmail
                  <ArrowRight size={14} color="#183B4E" />
                </button>

                {/* Email app fallback */}
                <button
                  onClick={handleMailto}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    width: "100%", padding: "14px 24px", borderRadius: 100,
                    background: "transparent", color: "#183B4E",
                    fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase",
                    border: "2px solid rgba(24,59,78,0.20)", cursor: "pointer",
                    transition: "border-color 0.18s, transform 0.15s",
                    opacity: valid ? 1 : 0.7,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#183B4E"; e.currentTarget.style.transform = "translateY(-2px)" }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(24,59,78,0.20)"; e.currentTarget.style.transform = "" }}
                >
                  <Mail size={14} />
                  Open in Email App
                </button>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background: "#EDE6D0", padding: "clamp(40px, 6vw, 64px) 20px", textAlign: "center" }}>
        <p style={{ margin: "0 0 6px", fontWeight: 900, fontSize: "clamp(18px, 2.5vw, 26px)", color: "#183B4E" }}>
          Follow our journey on Instagram
        </p>
        <p style={{ margin: "0 0 24px", fontSize: 14, color: "rgba(24,59,78,0.55)" }}>Stay updated on our research, stories, and impact.</p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 28px", borderRadius: 100,
            background: "#DDA853", color: "#183B4E",
            fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase",
            textDecoration: "none", transition: "background 0.18s, transform 0.15s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#e8c070"; e.currentTarget.style.transform = "translateY(-2px)" }}
          onMouseLeave={e => { e.currentTarget.style.background = "#DDA853"; e.currentTarget.style.transform = "" }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#183B4E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="#183B4E" stroke="none" />
          </svg>
          @shape_balapan
        </a>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-name-email { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </main>
  )
}

export default Contact