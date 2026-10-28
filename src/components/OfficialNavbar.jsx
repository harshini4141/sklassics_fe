import React, { useState } from 'react'
import logo from '../assets/logo.png'
import logoDark from '../assets/logo-dark.png'
import { ThemeToggle } from './ThemeToggle.jsx'

export function OfficialNavbar({ currentPath = '/', onOpenDemoModal, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/courses', label: 'Courses' },
    { href: '/workshops', label: 'Workshops' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact Us' },
  ]

  const handleLinkClick = (e, href) => {
    setIsMenuOpen(false)
    if (onNavigate) {
      onNavigate(href)
    }
  }

  return (
    <>
      <header className="sklassics-navbar">
        {/* Top Contact Bar */}
        <div className="sklassics-topbar">
          <div className="sklassics-topbar-inner">
            <a
              href="tel:+919392732581"
              className="sklassics-contact-link"
              aria-label="Call Sklassics"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 93927 32581</span>
            </a>

            <a
              href="mailto:info@sklassics.com"
              className="sklassics-contact-link email"
              aria-label="Email Sklassics"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>info@sklassics.com</span>
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="sklassics-mainnav">
          <div className="sklassics-mainnav-inner">
            <a
              href="/"
              className="sklassics-logo"
              onClick={(e) => handleLinkClick(e, '/')}
              aria-label="Sklassics Home"
            >
              <img src={logo} alt="Sklassics Logo" className="sk-logo-light" />
              <img src={logoDark} alt="Sklassics Logo" className="sk-logo-dark" />
            </a>

            {/* Desktop Navigation Links */}
            <ul className="sklassics-desktop-menu">
              {links.map(({ href, label }) => {
                const isActive =
                  href === '/'
                    ? currentPath === '/'
                    : currentPath === href || currentPath.startsWith(href + '/')

                return (
                  <li key={href}>
                    <a
                      href={href}
                      className={`sklassics-navlink ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleLinkClick(e, href)}
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* Header Right Actions */}
            <div className="sklassics-nav-actions">
              <ThemeToggle />
              <button
                type="button"
                className="sklassics-demo-btn"
                onClick={() => {
                  if (onOpenDemoModal) onOpenDemoModal()
                  setIsMenuOpen(false)
                }}
              >
                <span className="pulse-dot" />
                <span>Book Free Demo</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                className="sklassics-mobile-trigger"
              >
                {isMenuOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 6l12 12" />
                    <path d="M18 6 6 18" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Panel */}
          {isMenuOpen && (
            <div className="sklassics-mobile-panel">
              <ul className="sklassics-mobile-menu">
                {links.map(({ href, label }) => {
                  const isActive =
                    href === '/'
                      ? currentPath === '/'
                      : currentPath === href || currentPath.startsWith(href + '/')

                  return (
                    <li key={href}>
                      <a
                        href={href}
                        className={`sklassics-mobile-link ${isActive ? 'active' : ''}`}
                        onClick={(e) => handleLinkClick(e, href)}
                      >
                        <span>{label}</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </li>
                  )
                })}
                <li style={{ paddingTop: '8px' }}>
                  <button
                    type="button"
                    className="sklassics-mobile-demo-btn"
                    onClick={() => {
                      if (onOpenDemoModal) onOpenDemoModal()
                      setIsMenuOpen(false)
                    }}
                  >
                    <span className="pulse-dot" /> Book Free Demo
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
      <div className="sklassics-navbar-spacer" />
    </>
  )
}
