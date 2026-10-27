import React from 'react'
import heroImg from '../assets/hero.png'

const tags = [
  'DevOps',
  'Product Mgmt',
  'UI/UX',
  'Blockchain',
  'AR/VR',
  'Mobile',
  'Cloud',
  'AI/ML',
  'Data Engineering',
  'Cybersecurity',
]

export function OfficialHero({ onOpenDemoModal }) {
  return (
    <section id="home" className="hero-ai">
      {/* Official Hero Art on right with soft left fade */}
      <img
        src={heroImg}
        alt="AI and technology learning"
        draggable="false"
        className="hero-desktop-image hero-image-mask"
      />

      {/* Background Gradients & Ambient Glow */}
      <div className="hero-content-fade" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-glow-blob blob-1" aria-hidden="true" />
      <div className="hero-glow-blob blob-2" aria-hidden="true" />

      {/* Main Hero Copy Content */}
      <div className="hero-shell">
        <div className="hero-content-row">
          <div className="hero-copy-box">
            {/* Eyebrow Badge */}
            <div className="hero-eyebrow-pill">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Industry-Ready IT Programs</span>
              <span className="hero-pill-sep">·</span>
              <span className="hero-accredited-tag">ISO 9001:2015 Accredited</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              <span className="hero-title-main">
                Accelerate Your<br className="hero-desktop-br" />
                Career Growth
              </span>
              <span className="hero-gradient-text">
                &amp; Upskill Yourself
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-lead">
              Live, mentor-led IT programs in Cloud, AI, and Data Engineering — designed
              around real-world production projects and the practical skills top tech companies hire for.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions-row">
              <a href="/courses" className="hero-btn-primary">
                <span>Explore Courses</span>
                <svg
                  className="hero-arrow-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>

              <button
                type="button"
                className="hero-btn-demo"
                onClick={() => onOpenDemoModal && onOpenDemoModal()}
              >
                <span className="pulse-dot" />
                <span>Book Free Demo Class</span>
              </button>
            </div>

            {/* Social Trust Indicators */}
            <div className="hero-trust-bar">
              <span style={{ color: '#f59e0b', fontSize: '15px', letterSpacing: '2px' }}>★★★★★</span>
              <span className="hero-trust-text">
                <strong>4.8 / 5 Rating</strong> · Trusted by 1,000+ Alumni in Hyderabad &amp; Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Skills Marquee Strip */}
      <div className="hero-marquee-wrap">
        <div className="hero-marquee-track">
          {[...tags, ...tags, ...tags].map((tag, index) => (
            <span key={`${tag}-${index}`} className="hero-marquee-chip">
              <span className="hero-marquee-dot" />
              <span>{tag}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
