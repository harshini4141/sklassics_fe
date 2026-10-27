export function ProfessionalCertificate({ onOpenDemoModal }) {
  return (
    <div className="certificate-showcase-container">
      {/* Official Certificate Card */}
      <div className="official-certificate-card" aria-label="Official Sklassics Certificate of Completion">
        <div className="certificate-inner-border">
          {/* Header */}
          <div className="cert-header">
            <div className="cert-brand">
              <span className="cert-brand-symbol">s<span>.</span></span>
              <div>
                <strong className="cert-brand-name">sklassics</strong>
                <small className="cert-brand-sub">INSTITUTE OF ADVANCED TECHNOLOGIES</small>
              </div>
            </div>
            <div className="cert-badge-iso">
              <span>ISO 9001:2015</span>
              <small>ACCREDITED</small>
            </div>
          </div>

          <div className="cert-title-block">
            <span className="cert-kicker">CERTIFICATE OF COMPLETION</span>
            <h4 className="cert-awardee-title">This is to certify that</h4>
            <div className="cert-recipient-name">Pooja Sharma</div>
            <p className="cert-declaration">
              has successfully completed all lecture modules, laboratory assessments, and capstone project requirements for the
            </p>
            <div className="cert-program-name">
              Executive Specialization in Data Science &amp; Generative AI
            </div>
          </div>

          {/* Footer Details */}
          <div className="cert-footer-grid">
            <div className="cert-col">
              <span className="cert-meta-label">Credential ID:</span>
              <span className="cert-meta-val">SKL-2026-DS-8842</span>
              <span className="cert-meta-date">Issued: October 2026</span>
            </div>

            <div className="cert-seal-col">
              <div className="cert-official-seal">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>VERIFIED</span>
              </div>
            </div>

            <div className="cert-sign-col">
              <div className="cert-signature-line" />
              <span className="cert-meta-label">Director of Academic Programs</span>
              <span className="cert-meta-val">Sklassics Technologies</span>
            </div>
          </div>
        </div>

        {/* Security watermark bar */}
        <div className="cert-verification-strip">
          <span>🔒 Cryptographically Verifiable Credential</span>
          <span className="cert-status-tag">Status: Active &amp; Verified</span>
        </div>
      </div>

      {/* Certificate Value Points */}
      <div className="certificate-benefits-box">
        <span className="section-pill">INDUSTRY ACCREDITATION</span>
        <h3>A Credential That Unlocks Real Opportunities</h3>
        <p>
          Our certificates aren’t just attendance slips. Each credential represents verified hands-on
          code evaluations, live mentor assessments, and production capstone projects.
        </p>

        <ul className="cert-points-list">
          <li>
            <div className="cert-point-icon">✓</div>
            <div>
              <strong>Shareable on LinkedIn with 1-Click</strong>
              <p>Add your verified credential directly to your LinkedIn profile and resume with a permanent verification link.</p>
            </div>
          </li>
          <li>
            <div className="cert-point-icon">✓</div>
            <div>
              <strong>Recognized by 40+ Hiring Partners</strong>
              <p>Our partner network includes top IT service firms, startups, and product companies who value our project-backed alumni.</p>
            </div>
          </li>
          <li>
            <div className="cert-point-icon">✓</div>
            <div>
              <strong>Backed by Real GitHub Repositories</strong>
              <p>Employers can inspect the actual architecture and code you built during your capstone assignments.</p>
            </div>
          </li>
        </ul>

        {onOpenDemoModal && (
          <button
            type="button"
            className="button button-primary"
            onClick={onOpenDemoModal}
            style={{ marginTop: '20px' }}
          >
            Ask About Certification &amp; Syllabus →
          </button>
        )}
      </div>
    </div>
  )
}
