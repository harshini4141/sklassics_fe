import React from 'react'
import certificateTemplate from '../assets/certificate-template.png'

export function OfficialUs({ onOpenDemoModal }) {
  return (
    <section className="sk-us-section" id="about-us">
      <div className="sk-us-container">
        <div className="sk-us-grid">
          {/* Left Text Column */}
          <div className="sk-us-copy">
            <span className="sk-us-pill">
              <span className="sk-us-pill-dot" />
              <span>About Us</span>
            </span>

            <h2 className="sk-us-title">
              We help learners level-up with{' '}
              <span className="sk-us-highlight">expert-led IT training</span>
            </h2>

            <p className="sk-us-lead">
              We are a team of seasoned practitioners across modern IT engineering stacks.
              Our mission is making industry-standard education accessible worldwide and preparing learners
              with hands-on portfolio projects that hiring managers value.
            </p>

            <p className="sk-us-subtext">
              At Sklassics, our curricula span core fundamentals to state-of-the-art architectures — carefully designed
              with tech leaders to build genuine confidence and long-term career growth.
            </p>

            {/* Stats Row */}
            <div className="sk-us-stats-row">
              <div className="sk-us-stat-box">
                <strong>1,000+</strong>
                <span>Learners</span>
              </div>
              <div className="sk-us-stat-box">
                <strong>25+</strong>
                <span>Industry Mentors</span>
              </div>
              <div className="sk-us-stat-box">
                <strong>30+</strong>
                <span>Tech Programs</span>
              </div>
            </div>

            {/* Action Link */}
            <div className="sk-us-actions">
              <a href="/courses" className="hero-btn-primary">
                <span>Explore Courses</span>
                <span aria-hidden="true">→</span>
              </a>
              <button
                type="button"
                className="hero-btn-demo"
                onClick={() => onOpenDemoModal && onOpenDemoModal()}
              >
                <span>Talk to Admissions</span>
              </button>
            </div>
          </div>

          {/* Right Certificate Showcase */}
          <div className="sk-us-cert-col">
            <div className="sk-us-cert-wrapper">
              {/* Glowing Background Blob */}
              <div className="sk-us-cert-glow" aria-hidden="true" />

              {/* Certificate Container */}
              <div className="sk-us-cert-card">
                <img
                  src={certificateTemplate}
                  alt="Sklassics course completion certificate template"
                  className="sk-us-cert-img"
                  draggable="false"
                />

                {/* Overlaid verified student details */}
                <div className="sk-us-cert-overlay" aria-hidden="true">
                  <p className="sk-cert-line-1">This is to certify that</p>
                  <p className="sk-cert-name">[Your Full Name]</p>
                  <p className="sk-cert-line-2">has successfully completed the industry program in</p>
                  <p className="sk-cert-course">[Specialized IT Program]</p>
                  <p className="sk-cert-line-3">conducted by</p>
                  <p className="sk-cert-issuer">SKLASSICS TECHNOLOGIES PVT LTD</p>
                </div>

                {/* Badge tags */}
                <div className="sk-cert-tag-bottom">Course Completion Certificate</div>
                <div className="sk-cert-tag-top">ISO 9001:2015 Verified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
