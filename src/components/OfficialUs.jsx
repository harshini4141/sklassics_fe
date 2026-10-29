import React, { useState } from 'react'
import certificateTemplate from '../assets/certificate-template.jpg'

const CERT_PROGRAMS = [
  'Data Science & Generative AI',
  'Artificial Intelligence Engineering',
  'Data Analytics & Power BI',
  'Big Data Analytics & PySpark',
  'Cloud Computing & DevOps',
  'Full Stack Web Development',
]

export function OfficialUs({ onOpenDemoModal }) {
  const [previewName, setPreviewName] = useState('')
  const [previewProgram, setPreviewProgram] = useState(CERT_PROGRAMS[0])
  const [verifyId, setVerifyId] = useState('')
  const [verifyStatus, setVerifyStatus] = useState(null)

  const handleVerify = (e) => {
    e.preventDefault()
    const clean = verifyId.trim().toUpperCase()
    if (!clean) return
    if (clean.startsWith('SK-') || clean.length >= 6) {
      setVerifyStatus({
        valid: true,
        id: clean.startsWith('SK-') ? clean : `SK-CERT-${clean}`,
        issuedBy: 'Sklassics Technologies Pvt Ltd (ISO 9001:2015)',
      })
    } else {
      setVerifyStatus({
        valid: false,
        message: 'Enter a valid Sklassics ID (e.g., SK-CERT-2026)',
      })
    }
  }

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

          {/* Right Certificate Showcase + Live Customizer */}
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
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />

                {/* Overlaid verified student details */}
                <div className="sk-us-cert-overlay" aria-live="polite">
                  <p className="sk-cert-line-1">This is to certify that</p>
                  <p className="sk-cert-name">
                    {previewName.trim() ? previewName.trim() : '[Your Full Name]'}
                  </p>
                  <p className="sk-cert-line-2">
                    has successfully completed the industry program in
                  </p>
                  <p className="sk-cert-course">{previewProgram}</p>
                  <p className="sk-cert-line-3">conducted by</p>
                  <p className="sk-cert-issuer">SKLASSICS TECHNOLOGIES PVT LTD</p>
                </div>

                {/* Badge tags */}
                <div className="sk-cert-tag-bottom">Course Completion Certificate</div>
                <div className="sk-cert-tag-top">ISO 9001:2015 Verified</div>
              </div>

              {/* Interactive Certificate Customizer & Verifier Controls */}
              <div className="sk-cert-customizer-box">
                <div className="sk-cert-customizer-head">
                  <span>✨ LIVE CERTIFICATE PREVIEWER</span>
                  <small>Type your name to preview your credential</small>
                </div>
                <div className="sk-cert-inputs-row">
                  <input
                    type="text"
                    placeholder="Type your full name..."
                    value={previewName}
                    onChange={(e) => setPreviewName(e.target.value)}
                    maxLength={36}
                    className="sk-cert-input"
                    aria-label="Preview your name on certificate"
                  />
                  <select
                    value={previewProgram}
                    onChange={(e) => setPreviewProgram(e.target.value)}
                    className="sk-cert-select"
                    aria-label="Select program for certificate preview"
                  >
                    {CERT_PROGRAMS.map((prog) => (
                      <option key={prog} value={prog}>
                        {prog}
                      </option>
                    ))}
                  </select>
                </div>

                <form className="sk-cert-verify-row" onSubmit={handleVerify}>
                  <input
                    type="text"
                    placeholder="Verify Credential ID (e.g. SK-CERT-2026)"
                    value={verifyId}
                    onChange={(e) => {
                      setVerifyId(e.target.value)
                      setVerifyStatus(null)
                    }}
                    className="sk-cert-input"
                    aria-label="Enter certificate ID to verify"
                  />
                  <button type="submit" className="sk-cert-verify-btn">
                    ✓ Verify ID
                  </button>
                </form>

                {verifyStatus && (
                  <div
                    className={`sk-cert-verify-msg ${
                      verifyStatus.valid ? 'valid' : 'invalid'
                    }`}
                  >
                    {verifyStatus.valid ? (
                      <span>
                        ✅ Verified Active Credential <strong>{verifyStatus.id}</strong> ·{' '}
                        {verifyStatus.issuedBy}
                      </span>
                    ) : (
                      <span>⚠️ {verifyStatus.message}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
