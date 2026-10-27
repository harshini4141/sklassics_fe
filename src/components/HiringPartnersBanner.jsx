export function HiringPartnersBanner() {
  const PARTNERS = [
    { name: 'Google', label: 'Google Cloud' },
    { name: 'Amazon', label: 'AWS' },
    { name: 'Microsoft', label: 'Azure' },
    { name: 'Deloitte', label: 'Deloitte' },
    { name: 'Infosys', label: 'Infosys' },
    { name: 'TCS', label: 'Tata Consultancy' },
    { name: 'Cognizant', label: 'Cognizant' },
    { name: 'Accenture', label: 'Accenture' },
    { name: 'Wipro', label: 'Wipro' },
    { name: 'Capgemini', label: 'Capgemini' },
  ]

  return (
    <section className="hiring-partners-strip" aria-label="Alumni hiring partners">
      <div className="container">
        <div className="hiring-strip-layout">
          <div className="hiring-strip-label">
            <span className="hiring-pill">CAREER PLACEMENTS</span>
            <p>Our alumni work at top technology leaders &amp; global enterprises</p>
          </div>
          <div className="hiring-logos-track">
            {PARTNERS.map((partner) => (
              <div key={partner.name} className="partner-logo-item">
                <span className="partner-name">{partner.name}</span>
                {partner.label && partner.label !== partner.name && (
                  <span className="partner-sub">{partner.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Placement Statistics Bar */}
        <div className="placement-metrics-bar">
          <div className="placement-metric">
            <strong>1,200+</strong>
            <span>Graduates Upskilled</span>
          </div>
          <div className="metric-divider" />
          <div className="placement-metric">
            <strong>92%</strong>
            <span>Placement Support Rate</span>
          </div>
          <div className="metric-divider" />
          <div className="placement-metric">
            <strong>140%</strong>
            <span>Average Salary Increase</span>
          </div>
          <div className="metric-divider" />
          <div className="placement-metric">
            <strong>40+</strong>
            <span>Hiring Partner Networks</span>
          </div>
        </div>
      </div>
    </section>
  )
}
