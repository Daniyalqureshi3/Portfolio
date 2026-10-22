import { useState } from 'react'
import './Navbar.css'
import { IoDownloadOutline } from "react-icons/io5";

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span>{'<'}</span>portfolio<span>{'/>'}</span>
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="navbar-cta">
          Let's Talk <span><IoDownloadOutline /></span>
        </a>

        <button
          type="button"
          className={`navbar-menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <svg
            viewBox="0 0 24 24"
            width="25"
            height="25"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="5" cy="12" r="1.7" />
            <circle cx="12" cy="12" r="1.7" />
            <circle cx="19" cy="12" r="1.7" />
          </svg>
        </button>

        <div
          id="mobile-navigation"
          className={`mobile-menu ${menuOpen ? 'open' : ''}`}
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.name}
              <span>↗</span>
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-cta"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            Let's Talk <span>↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
