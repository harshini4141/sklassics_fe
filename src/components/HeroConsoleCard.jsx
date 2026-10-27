import { useState } from 'react'

const CONSOLE_PROGRAMS = [
  {
    id: 'gen-ai',
    courseId: 'data-science-gen-ai',
    title: 'Data Science & Generative AI',
    badge: 'FLAGSHIP PROGRAM',
    badgeClass: 'badge-purple',
    duration: '12 Weeks',
    timing: 'Weekend & Evening Batches',
    nextBatch: 'Upcoming Monday',
    format: '100% Live Mentor-Led',
    salaryPotential: '₹8.5 – ₹24 LPA',
    description: 'Master Python, LangChain, RAG architecture, LLM fine-tuning, and production deployment on AWS.',
    tools: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'Docker', 'FastAPI'],
    mentor: 'Ex-AI Lead & Principal Architect',
    rating: '4.9/5 (420+ reviews)',
  },
  {
    id: 'big-data',
    courseId: 'big-data-analytics',
    title: 'Big Data & PySpark Engineering',
    badge: 'HIGH DEMAND',
    badgeClass: 'badge-blue',
    duration: '12 Weeks',
    timing: 'Weekend Batches Available',
    nextBatch: 'Next Saturday',
    format: 'Hands-on Distributed Labs',
    salaryPotential: '₹9.0 – ₹28 LPA',
    description: 'Process multi-terabyte data streams with Apache Spark, Kafka real-time ingestion, Databricks, and AWS EMR.',
    tools: ['PySpark', 'Apache Kafka', 'Databricks', 'AWS EMR', 'Airflow', 'Snowflake'],
    mentor: 'Senior Big Data Architect, Tier-1 MNC',
    rating: '4.8/5 (245+ reviews)',
  },
  {
    id: 'analytics',
    courseId: 'data-analytics',
    title: 'Data Analytics & Power BI',
    badge: 'CAREER SWITCH READY',
    badgeClass: 'badge-emerald',
    duration: '8 Weeks',
    timing: 'Flexible Evening Batches',
    nextBatch: 'Immediate Enrollment',
    format: 'Business Case Studies',
    salaryPotential: '₹6.5 – ₹16 LPA',
    description: 'Master advanced SQL querying, Power BI DAX modeling, executive storytelling, and automated ETL workflows.',
    tools: ['Power BI', 'Advanced SQL', 'Excel DAX', 'Tableau', 'Python', 'ETL'],
    mentor: 'Lead BI Consultant, Deloitte Alumni',
    rating: '4.9/5 (380+ reviews)',
  },
  {
    id: 'ai-core',
    courseId: 'artificial-intelligence',
    title: 'Artificial Intelligence & Neural Nets',
    badge: 'CORE ENGINEERING',
    badgeClass: 'badge-indigo',
    duration: '10 Weeks',
    timing: 'Live Mentor Classroom',
    nextBatch: 'Upcoming Monday',
    format: 'Math & Architecture Labs',
    salaryPotential: '₹10 – ₹26 LPA',
    description: 'Deep dive into computer vision, NLP transformers, neural network backpropagation, and agentic workflows.',
    tools: ['TensorFlow', 'PyTorch', 'Hugging Face', 'NumPy', 'Scikit-learn', 'OpenCV'],
    mentor: 'AI Research Scientist & Author',
    rating: '4.9/5 (310+ reviews)',
  },
]

export function HeroConsoleCard({ onOpenCourseModal, onOpenDemoModal, allCourses = [] }) {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const current = CONSOLE_PROGRAMS[selectedIdx]

  const handleOpenSyllabus = () => {
    const courseObj = allCourses.find((c) => c.id === current.courseId) || {
      id: current.courseId,
      title: current.title,
      duration: current.duration,
      tools: current.tools,
      description: current.description,
      price: '₹30,000',
    }
    if (onOpenCourseModal) onOpenCourseModal(courseObj)
  }

  const handleOpenDemo = () => {
    const courseObj = allCourses.find((c) => c.id === current.courseId) || null
    if (onOpenDemoModal) onOpenDemoModal(courseObj)
  }

  return (
    <div className="hero-console-wrapper">
      <div className="hero-console-card">
        {/* Top Status Bar */}
        <div className="console-header">
          <div className="console-live-indicator">
            <span className="live-pulsing-dot" />
            <span className="live-status-text">ADMISSIONS OPEN FOR NEXT COHORT</span>
          </div>
          <span className="console-cohort-badge">Limited 25 Seats / Batch</span>
        </div>

        {/* Program Selector Tabs */}
        <div className="console-tabs" role="tablist" aria-label="Flagship Programs">
          {CONSOLE_PROGRAMS.map((prog, idx) => (
            <button
              key={prog.id}
              type="button"
              role="tab"
              aria-selected={selectedIdx === idx}
              className={`console-tab-btn ${selectedIdx === idx ? 'active' : ''}`}
              onClick={() => setSelectedIdx(idx)}
            >
              {prog.title.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Console Body */}
        <div className="console-body">
          <div className="console-program-head">
            <div>
              <span className={`program-badge ${current.badgeClass}`}>{current.badge}</span>
              <h3 className="console-program-title">{current.title}</h3>
            </div>
            <div className="console-rating">
              <span className="rating-star">★</span>
              <span className="rating-score">4.9</span>
              <span className="rating-label">Verified</span>
            </div>
          </div>

          <p className="console-program-desc">{current.description}</p>

          {/* Key Program Highlights Grid */}
          <div className="console-metrics-grid">
            <div className="console-metric-item">
              <span className="metric-label">Duration</span>
              <strong className="metric-value">{current.duration}</strong>
              <span className="metric-sub">{current.timing}</span>
            </div>
            <div className="console-metric-item">
              <span className="metric-label">Learning Format</span>
              <strong className="metric-value">{current.format}</strong>
              <span className="metric-sub">1:1 Doubt Solving</span>
            </div>
            <div className="console-metric-item">
              <span className="metric-label">Target Salary</span>
              <strong className="metric-value metric-salary">{current.salaryPotential}</strong>
              <span className="metric-sub">Placement Support</span>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="console-tools-section">
            <span className="console-tools-label">Technologies & Frameworks Mastered:</span>
            <div className="console-tool-chips">
              {current.tools.map((tool) => (
                <span key={tool} className="console-tool-chip">{tool}</span>
              ))}
            </div>
          </div>

          {/* Mentor & Verification Row */}
          <div className="console-mentor-row">
            <div className="console-mentor-info">
              <div className="console-mentor-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <span className="mentor-role">Lead Faculty</span>
                <strong className="mentor-name">{current.mentor}</strong>
              </div>
            </div>
            <div className="console-start-info">
              <span className="start-label">Next Batch Starts:</span>
              <strong className="start-date">{current.nextBatch}</strong>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="console-actions">
            <button
              type="button"
              className="console-btn-primary"
              onClick={handleOpenDemo}
            >
              <span>Book Free Demo Class</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button
              type="button"
              className="console-btn-secondary"
              onClick={handleOpenSyllabus}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span>Download Syllabus</span>
            </button>
          </div>
        </div>

        {/* Footer verification strip */}
        <div className="console-footer-strip">
          <span>✓ ISO 9001 Certified Training</span>
          <span>✓ Dedicated Placement Assistance</span>
          <span>✓ Lifetime LMS & Code Access</span>
        </div>
      </div>
    </div>
  )
}
