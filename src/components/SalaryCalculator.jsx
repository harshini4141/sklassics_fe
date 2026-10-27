import { useState } from 'react'

const DOMAIN_DATA = {
  ai: {
    name: 'Generative AI & Machine Learning',
    icon: '🤖',
    multiplier: 1.75,
    minSalary: 8.5,
    maxSalary: 32.0,
    timeframe: '4 - 6 Months',
    topSkills: ['LangChain', 'PyTorch', 'Vector DBs', 'RAG Architecture', 'Fine-Tuning', 'AWS Bedrock'],
    hiringPartners: ['Microsoft', 'Amazon AWS', 'Google', 'Nvidia', 'Flipkart'],
  },
  cloud: {
    name: 'Cloud Architecture & DevOps',
    icon: '☁️',
    multiplier: 1.55,
    minSalary: 8.0,
    maxSalary: 28.0,
    timeframe: '3 - 5 Months',
    topSkills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines', 'Azure'],
    hiringPartners: ['Deloitte', 'Cognizant', 'Capgemini', 'IBM', 'Oracle'],
  },
  data: {
    name: 'Data Analytics & Power BI',
    icon: '📊',
    multiplier: 1.45,
    minSalary: 6.5,
    maxSalary: 20.0,
    timeframe: '3 - 4 Months',
    topSkills: ['SQL', 'Power BI', 'Python', 'Excel Advanced', 'Tableau', 'Data Modeling'],
    hiringPartners: ['Accenture', 'EY', 'KPMG', 'TCS', 'Infosys'],
  },
  fullstack: {
    name: 'Modern Full-Stack Engineering',
    icon: '💻',
    multiplier: 1.5,
    minSalary: 7.0,
    maxSalary: 24.0,
    timeframe: '4 - 6 Months',
    topSkills: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'GraphQL', 'Next.js'],
    hiringPartners: ['Swiggy', 'Zomato', 'Paytm', 'Razorpay', 'Jio'],
  },
  bigdata: {
    name: 'Big Data Engineering & PySpark',
    icon: '⚡',
    multiplier: 1.65,
    minSalary: 9.0,
    maxSalary: 30.0,
    timeframe: '4 - 5 Months',
    topSkills: ['Apache Spark', 'PySpark', 'Kafka', 'Snowflake', 'Hadoop', 'Databricks'],
    hiringPartners: ['Walmart Global', 'JPMorgan', 'Morgan Stanley', 'Target', 'Adobe'],
  },
}

const EXP_LEVELS = [
  { label: 'College Student / Fresher', base: 4.5, boost: 1.0 },
  { label: '1 - 3 Years (Early Career)', base: 6.0, boost: 1.25 },
  { label: '4 - 7 Years (Mid-Level)', base: 11.0, boost: 1.5 },
  { label: '8+ Years (Lead / Manager)', base: 18.0, boost: 1.85 },
]

export function SalaryCalculator({ onOpenDemoModal, onOpenAdvisorModal }) {
  const [selectedDomain, setSelectedDomain] = useState('ai')
  const [selectedExpIndex, setSelectedExpIndex] = useState(1)
  const [currentSalary, setCurrentSalary] = useState(6.0)

  const domain = DOMAIN_DATA[selectedDomain]
  const exp = EXP_LEVELS[selectedExpIndex]

  // Calculate projected package
  const calculatedProjected = Math.min(
    domain.maxSalary,
    Math.max(domain.minSalary, currentSalary * domain.multiplier * (exp.boost / 1.15))
  )
  const projectedSalary = Number(calculatedProjected.toFixed(1))
  const hikePercentage = Math.round(((projectedSalary - currentSalary) / currentSalary) * 100)
  const addedAnnualIncome = Number((projectedSalary - currentSalary).toFixed(1))
  const threeYearUpside = Number((addedAnnualIncome * 3.4).toFixed(1))

  return (
    <section className="salary-calculator-section" id="career-roi">
      <div className="container">
        <div className="salary-calc-header">
          <span className="calc-badge">📊 INTERACTIVE CAREER GROWTH ESTIMATOR</span>
          <h2>Calculate Your Tech Career &amp; <span>Salary Upside</span></h2>
          <p>
            See realistic salary benchmarks, projected hike percentage, and recruiter demand tailored to your target tech specialization.
          </p>
        </div>

        <div className="salary-calc-card">
          {/* Left Column: Interactive Inputs */}
          <div className="salary-calc-inputs">
            {/* 1. Target Tech Specialization */}
            <div className="calc-group">
              <label className="calc-label">
                <span className="step-num">1</span> Choose Target Tech Domain:
              </label>
              <div className="domain-pill-grid">
                {Object.entries(DOMAIN_DATA).map(([key, data]) => (
                  <button
                    key={key}
                    type="button"
                    className={`domain-pill-btn ${selectedDomain === key ? 'active' : ''}`}
                    onClick={() => setSelectedDomain(key)}
                  >
                    <span className="domain-icon">{data.icon}</span>
                    <span className="domain-text">{data.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Experience Level */}
            <div className="calc-group">
              <label className="calc-label">
                <span className="step-num">2</span> Your Current Experience:
              </label>
              <div className="exp-tabs-row">
                {EXP_LEVELS.map((level, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`exp-tab-btn ${selectedExpIndex === idx ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedExpIndex(idx)
                      setCurrentSalary(level.base)
                    }}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Current Salary Slider */}
            <div className="calc-group">
              <div className="slider-header-row">
                <label className="calc-label" htmlFor="salary-slider">
                  <span className="step-num">3</span> Current Annual Package (LPA):
                </label>
                <span className="current-salary-tag">₹{currentSalary.toFixed(1)} LPA</span>
              </div>
              <input
                id="salary-slider"
                type="range"
                min="2.5"
                max="30"
                step="0.5"
                value={currentSalary}
                onChange={(e) => setCurrentSalary(parseFloat(e.target.value))}
                className="salary-range-slider"
              />
              <div className="slider-ticks">
                <span>₹2.5 LPA</span>
                <span>₹10 LPA</span>
                <span>₹20 LPA</span>
                <span>₹30 LPA</span>
              </div>
            </div>

            {/* Skills & Tools Mastered Preview */}
            <div className="calc-skills-box">
              <span className="skills-box-title">High-Demand Skills You Will Master:</span>
              <div className="calc-skill-chips">
                {domain.topSkills.map((skill, idx) => (
                  <span key={idx} className="calc-skill-chip">
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Result Projection Dashboard */}
          <div className="salary-calc-results">
            <div className="results-top-banner">
              <span className="results-tag">PROJECTED 2026 BENCHMARK</span>
              <p>Estimated Post-Bootcamp Transition Result</p>
            </div>

            <div className="main-metric-hero">
              <div className="metric-box">
                <span className="metric-label">Projected Package</span>
                <div className="metric-value-row">
                  <span className="currency-symbol">₹</span>
                  <span className="number-big">{projectedSalary}</span>
                  <span className="currency-unit">LPA</span>
                </div>
              </div>

              <div className="hike-badge-pill">
                <span className="arrow-up">▲</span>
                <span>+{Math.max(hikePercentage, 45)}% Expected Hike</span>
              </div>
            </div>

            {/* Secondary Visual Metrics */}
            <div className="secondary-metrics-grid">
              <div className="sec-metric-card">
                <span className="sec-icon">📈</span>
                <div>
                  <strong>+₹{addedAnnualIncome} LPA</strong>
                  <small>Added Yearly Earnings</small>
                </div>
              </div>

              <div className="sec-metric-card">
                <span className="sec-icon">⏱️</span>
                <div>
                  <strong>{domain.timeframe}</strong>
                  <small>Average Placement Window</small>
                </div>
              </div>

              <div className="sec-metric-card highlight">
                <span className="sec-icon">💰</span>
                <div>
                  <strong>₹{threeYearUpside} Lakhs+</strong>
                  <small>3-Year Compounded Upside</small>
                </div>
              </div>
            </div>

            {/* Hiring Partners Match */}
            <div className="results-hiring-partners">
              <span className="hiring-caption">Actively Hiring Sklassics Graduates:</span>
              <div className="partner-badges">
                {domain.hiringPartners.map((partner, i) => (
                  <span key={i} className="partner-badge">
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Actions */}
            <div className="calc-actions-row">
              <button
                type="button"
                className="button button-primary calc-cta-btn"
                onClick={() => onOpenDemoModal && onOpenDemoModal()}
              >
                Book Free 1:1 Career Strategy Call →
              </button>

              <button
                type="button"
                className="button calc-secondary-btn"
                onClick={() => onOpenAdvisorModal && onOpenAdvisorModal()}
              >
                Take 60s Career Path Quiz 🎯
              </button>
            </div>

            <p className="calc-disclaimer">
              *Projections based on Sklassics alumni placements &amp; Glassdoor/AmbitionBox industry data across metro tech hubs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
