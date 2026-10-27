import React, { useState } from 'react'

const domains = [
  { name: 'sklassics.com', url: 'https://sklassics.com/' },
  { name: 'sklassics-lms.com', url: 'https://sklassicsacademy.com/lms' },
  { name: 'sklassics-ai.com', url: 'https://sklassics-ai.com/' },
  { name: 'sklassicstutor.com', url: 'https://sklassicstutor.com/' },
  { name: 'sklassics-quiz.com', url: 'https://sklassics-ai.com/' },
  { name: 'hanumancars.com', url: 'https://www.hanumancars.com/' },
  { name: 'vlrws.com', url: 'https://vlrws.com/' },
  { name: 'myleadcontrol.com', url: 'https://myleadcontrol.com/' },
  { name: 'ganeshseva.com', url: 'https://ganeshseva.com/' },
  { name: 'durgamatha.com', url: 'https://durgamatha.com/' },
  { name: 'fruveto.com', url: 'https://fruveto.com/' },
  { name: 'aharuchi.com', url: 'https://aharuchi.com/' },
]

const services = [
  { name: 'IT Training & Placement Programs', url: '/courses' },
  { name: 'Professional IT Services', url: 'https://sklassicstech.com/' },
  { name: 'Travel Application Services', url: 'https://www.hanumancars.com/' },
  { name: 'Real Estate Platform Solutions', url: 'https://vlrws.com/' },
  { name: 'Online & Offline Tutoring', url: 'https://sklassicstutor.com/' },
]

export function OfficialFooter({ onOpenDemoModal }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const year = new Date().getFullYear()

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="sk-footer-root" id="contact">
      {/* Background Subtle Grid & Ambient Glows */}
      <div className="sk-footer-bg-grid" aria-hidden="true" />
      <div className="sk-footer-blob blob-left" aria-hidden="true" />
      <div className="sk-footer-blob blob-right" aria-hidden="true" />

      <div className="sk-footer-container">
        {/* Top Headline + Newsletter */}
        <div className="sk-footer-head">
          <h2 className="sk-footer-title">
            Where talent meets <br />
            <span className="sk-footer-gradient-text">
              opportunity
              <span className="sk-footer-title-underline" aria-hidden="true" />
            </span>
          </h2>

          <div className="sk-footer-sub-card">
            <form className="sk-footer-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Subscribe for new cohorts &amp; career updates"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setSubscribed(false)
                }}
                required
                className="sk-footer-input"
              />
              <button type="submit" className="sk-footer-sub-btn">
                <span>{subscribed ? 'Subscribed!' : 'Subscribe'}</span>
                <span aria-hidden="true">→</span>
              </button>
            </form>
            <p className="sk-footer-sub-note">
              {subscribed ? 'Thank you! You are now subscribed.' : 'No spam. Unsubscribe anytime.'}
            </p>
          </div>
        </div>

        {/* Links Grid: Domains, Services, CTA Cards */}
        <div className="sk-footer-grid">
          {/* Domains Column */}
          <div className="sk-footer-col">
            <h4 className="sk-footer-col-title">OUR DOMAINS</h4>
            <ul className="sk-footer-links-list">
              {domains.map((d) => (
                <li key={d.name}>
                  <a href={d.url} target="_blank" rel="noopener noreferrer">
                    {d.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="sk-footer-col">
            <h4 className="sk-footer-col-title">OUR SERVICES</h4>
            <ul className="sk-footer-links-list">
              {services.map((s) => (
                <li key={s.name}>
                  <a href={s.url} target={s.url.startsWith('http') ? '_blank' : undefined} rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTA Cards */}
          <div className="sk-footer-ctas-col">
            <div className="sk-footer-cta-card">
              <h3>I want to enroll</h3>
              <p>Find the right career track and curriculum for your tech aspirations.</p>
              <button
                type="button"
                className="sk-footer-cta-btn"
                onClick={() => onOpenDemoModal && onOpenDemoModal()}
              >
                <span>Get Started</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="sk-footer-cta-card">
              <h3>I want to teach</h3>
              <p>Join our mentor network and guide the next generation of engineers.</p>
              <a
                href="mailto:info@sklassics.com?subject=Teaching%20Opportunity"
                className="sk-footer-cta-btn"
              >
                <span>Partner with Us</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Continuous Domain Marquee */}
        <div className="sk-footer-marquee-wrap select-none" aria-hidden="true">
          <div className="sk-footer-marquee-track">
            {[...domains, ...domains, ...domains].map((d, idx) => (
              <span key={`${d.name}-${idx}`} className="sk-footer-domain-chip">
                {d.name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Contacts Bar */}
        <div className="sk-footer-bottom">
          <div className="sk-footer-bottom-left">
            <span>© {year} Sklassics Technologies Pvt Ltd</span>
            <span className="sk-footer-sep">·</span>
            <a href="/#contact">Privacy Policy</a>
            <span className="sk-footer-sep">·</span>
            <span>Hyderabad, Telangana, India</span>
          </div>

          <div className="sk-footer-bottom-right">
            <a href="tel:+919392732581" className="sk-footer-phone-btn">
              +91 93927 32581
            </a>
            <div className="sk-footer-socials">
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="sk-social-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.5c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.25 12.5h-3v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.91v5.59h-3v-11h2.88v1.5h.04c.4-.76 1.36-1.56 2.81-1.56 3 0 3.56 1.98 3.56 4.55v6.51z" />
                </svg>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter" className="sk-social-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.87-2.35 8.51 8.51 0 0 1-2.7 1.03 4.25 4.25 0 0 0-7.24 3.87A12.07 12.07 0 0 1 3.15 4.6a4.25 4.25 0 0 0 1.32 5.66 4.2 4.2 0 0 1-1.92-.53v.05a4.25 4.25 0 0 0 3.41 4.17c-.47.13-.97.2-1.48.07a4.25 4.25 0 0 0 3.97 2.95A8.52 8.52 0 0 1 2 19.54a12.04 12.04 0 0 0 6.53 1.92c7.84 0 12.13-6.5 12.13-12.13 0-.19 0-.38-.01-.57A8.67 8.67 0 0 0 24 5.5c-.8.36-1.66.6-2.54.7z" />
                </svg>
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube" className="sk-social-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.7 3.6 12 3.6 12 3.6s-7.7 0-9.4.5A3 3 0 0 0 .5 6.2 31.1 31.1 0 0 0 0 12c0 1.9.2 3.8.5 5.8a3 3 0 0 0 2.1 2.1c1.7.5 9.4.5 9.4.5s7.7 0 9.4-.5a3 3 0 0 0 2.1-2.1c.3-2 .5-3.9.5-5.8 0-1.9-.2-3.8-.5-5.8zM9.6 15.5v-7L16 12l-6.4 3.5z" />
                </svg>
              </a>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="sk-back-to-top"
              aria-label="Scroll to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
