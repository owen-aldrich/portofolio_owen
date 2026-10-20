import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { navLinks, personal } from "../data/content"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === "/"

  // Scroll to section anchor or navigate to home + anchor
  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    if (isHome) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    } else {
      navigate(`/#${id}`)
    }
  }

  const handleContactClick = (e) => {
    handleNavClick(e, "contact")
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-center px-6 pt-4">
      {/* ── Pill container ── */}
      <div
        className="relative flex h-16 w-full max-w-content items-center justify-between rounded-full border border-border-color bg-white/90 px-[25px] py-px shadow-nav"
        style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      >
        {/* ── Logo ── */}
        <Link
          to="/"
          className="font-jakarta text-[20px] font-bold tracking-[-0.5px] text-primary"
        >
          {personal.name}
        </Link>

        {/* ── Desktop nav pill (hidden on mobile) ── */}
        <nav aria-label="Primary navigation" className="hidden md:block rounded-full" style={{ background: "rgba(243,244,243,0.7)" }}>
          <div className="flex items-center gap-1 p-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="rounded-full px-4 py-1 font-jakarta text-sm font-medium text-[#4f4441] transition-all hover:bg-white hover:shadow-card-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* ── Desktop CTA button (hidden on mobile) ── */}
        <a
          href="#contact"
          onClick={handleContactClick}
          className="hidden md:block rounded-full bg-dark-btn px-6 py-[10px] font-jakarta text-sm font-medium text-dark-btn-text shadow-card-sm"
        >
          Get in Touch
        </a>

        {/* ── Mobile hamburger button (hidden on desktop) ── */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-primary"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            /* Close (X) icon */
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          ) : (
            /* Hamburger (three lines) icon */
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <line x1="3" y1="5"  x2="17" y2="5"  stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              <line x1="3" y1="15" x2="17" y2="15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile dropdown menu ── */}
      {menuOpen && (
        <div className="absolute top-[calc(100%-8px)] left-6 right-6 md:hidden bg-white rounded-card-sm shadow-card border border-border-color overflow-hidden">
          <nav>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="block w-full py-3 px-6 font-jakarta text-sm font-medium text-primary hover:bg-chip-bg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 py-3 border-t border-border-color">
              <a
                href="#contact"
                onClick={handleContactClick}
                className="block w-full text-center rounded-full bg-dark-btn px-6 py-[10px] font-jakarta text-sm font-medium text-dark-btn-text"
              >
                Get in Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
