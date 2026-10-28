import React from 'react'

const metrics = [
  {
    title: '24 × 7 Support',
    blurb: 'Real humans. Real time. Any timezone.',
    metricVal: 24,
    suffix: '/7',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <path d="M18 19c0 1.1-.9 2-2 2h-2" />
        <path d="M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Z" />
        <path d="M20 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z" />
      </svg>
    ),
  },
  {
    title: '4.8/5 Rating',
    blurb: 'Consistently loved by 50k+ learners.',
    metricVal: 4.8,
    suffix: '/5',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.5l2.9 5.88 6.49.94-4.69 4.57 1.11 6.46L12 17.3l-5.81 3.05 1.11-6.46-4.69-4.57 6.49-.94L12 2.5Z" />
      </svg>
    ),
  },
  {
    title: 'Access On The Go',
    blurb: 'Responsive, mobile-first learning experience.',
    metricVal: 100,
    suffix: '%',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="11" rx="1.5" />
        <path d="M2 19h20" />
        <path d="M8 19l1-2h6l1 2" />
      </svg>
    ),
  },
  {
    title: 'Job Assistance',
    blurb: 'Interview prep, referrals & career coaching.',
    metricVal: 1000,
    suffix: '+',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </svg>
    ),
  },
]

const partnerLogos = [
  'AWS',
  'Google Cloud',
  'Microsoft Azure',
  'Atlassian',
  'Adobe',
  'Uber',
  'Meta',
  'Stripe',
]

export function OfficialRating() {
  return (
    <section className="sk-rating-section">
      <div className="sk-rating-glow" aria-hidden="true" />

      <div className="sk-rating-container">
        {/* Section Heading */}
        <div className="sk-rating-head">
          <span className="sk-rating-pill">WHY LEARNERS CHOOSE US</span>
          <h2>Benefits Designed for Career Outcomes</h2>
          <p>
            Mentorship, practical engineering rigor, flexible cohort access, and dedicated placement support.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="sk-rating-grid">
          {metrics.map((item) => (
            <div key={item.title} className="sk-rating-card">
              <div className="sk-rating-icon-box">
                {item.icon}
              </div>
              <h3 className="sk-rating-card-title">{item.title}</h3>
              <div className="sk-rating-metric">
                <span>{item.metricVal}</span>
                <span className="sk-metric-suffix">{item.suffix}</span>
              </div>
              <p className="sk-rating-card-blurb">{item.blurb}</p>
              <div className="sk-rating-card-line" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Company Logos Infinite Track */}
        <div className="sk-logos-track-wrap">
          <div className="sk-logos-track">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((name, i) => (
              <span key={`${name}-${i}`} className="sk-logo-item">
                <span className="sk-logo-dot" />
                <span>{name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
