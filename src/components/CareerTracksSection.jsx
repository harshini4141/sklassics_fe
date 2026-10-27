import { useState } from 'react'

const TRACKS = [
  {
    id: 'ai',
    title: 'Generative AI & LLMs',
    tag: 'Flagship Specialization',
    salaryRange: '₹9.5 – ₹26 LPA',
    hike: 'Up to 160% Hike',
    targetRoles: ['AI Engineer', 'LLM Application Specialist', 'Prompt & RAG Engineer', 'Machine Learning Scientist'],
    tools: ['LangChain', 'Llama 3', 'Pinecone', 'OpenAI API', 'Hugging Face', 'FastAPI', 'PyTorch'],
    overview:
      'Master prompt engineering, retrieval-augmented generation (RAG) pipelines, autonomous agents, and open-source LLM fine-tuning on AWS and cloud infrastructure.',
    capstones: [
      'Multi-Agent Clinical Triage Assistant with Hybrid Vector Search',
      'Autonomous Financial Research & Document Question-Answering Agent',
    ],
    duration: '12 Weeks',
    batchType: 'Weekend & Weekday Evenings',
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps Engineering',
    tag: 'Enterprise Infrastructure',
    salaryRange: '₹8.0 – ₹24 LPA',
    hike: 'Up to 145% Hike',
    targetRoles: ['DevOps Engineer', 'Cloud Solutions Architect', 'Site Reliability Engineer (SRE)', 'Platform Engineer'],
    tools: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'ArgoCD', 'CI/CD Pipelines', 'Prometheus'],
    overview:
      'Build resilient production infrastructure using Terraform Infrastructure-as-Code (IaC), containerization, Kubernetes cluster orchestration, and automated GitOps pipelines.',
    capstones: [
      'Multi-Region Kubernetes Cluster with Automated Zero-Downtime GitOps',
      'Enterprise AWS Landing Zone with Terraform & CloudWatch Observability',
    ],
    duration: '12 Weeks',
    batchType: 'Weekend Intensive Labs',
  },
  {
    id: 'data',
    title: 'Big Data & PySpark Engineering',
    tag: 'Large-Scale Systems',
    salaryRange: '₹9.0 – ₹28 LPA',
    hike: 'Up to 150% Hike',
    targetRoles: ['Data Engineer', 'Big Data Developer', 'PySpark Specialist', 'Analytics Engineer'],
    tools: ['Apache Spark', 'PySpark', 'Kafka', 'Databricks', 'Delta Lake', 'AWS EMR', 'Snowflake'],
    overview:
      'Process high-throughput distributed streams, build lakehouse architectures with Databricks and Delta Lake, and create resilient data pipelines using PySpark.',
    capstones: [
      'Real-Time Financial Fraud Detection with Kafka & PySpark Structured Streaming',
      'End-to-End Enterprise Data Lakehouse on Databricks & Delta Lake',
    ],
    duration: '12 Weeks',
    batchType: 'Weekend & Evening Schedules',
  },
  {
    id: 'analytics',
    title: 'Data Analytics & Power BI',
    tag: 'Business Intelligence',
    salaryRange: '₹6.5 – ₹18 LPA',
    hike: 'Up to 130% Hike',
    targetRoles: ['BI Analyst', 'Data Analyst', 'Reporting Specialist', 'Business Intelligence Consultant'],
    tools: ['Power BI', 'Advanced SQL', 'Excel DAX', 'Tableau', 'Data Modeling', 'dbt'],
    overview:
      'Transform complex business data into strategic executive dashboards with advanced DAX formulas, Star schema modeling, and persuasive data storytelling.',
    capstones: [
      'Omnichannel Retail Revenue & Cohort Retention Dashboard in Power BI',
      'Supply Chain Logistics Performance & Delay Prediction System',
    ],
    duration: '8 Weeks',
    batchType: 'Weekend & Weekday Batches',
  },
  {
    id: 'fullstack',
    title: 'Full Stack & Cloud Systems',
    tag: 'Modern Web Engineering',
    salaryRange: '₹7.5 – ₹22 LPA',
    hike: 'Up to 140% Hike',
    targetRoles: ['Full Stack Developer', 'Frontend Engineer', 'Backend Specialist', 'React & Node.js Developer'],
    tools: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Docker', 'REST & GraphQL', 'Tailwind'],
    overview:
      'Develop robust, scalable web applications from responsive modern UI frontends to production REST/GraphQL APIs, SQL databases, and secure authentication.',
    capstones: [
      'High-Concurrency SaaS Management Platform with Role-Based Access',
      'Real-Time Collaborative Workspace with WebSockets & PostgreSQL',
    ],
    duration: '14 Weeks',
    batchType: 'Live Interactive Sessions',
  },
]

export function CareerTracksSection({ onOpenDemoModal, onOpenAdvisorModal }) {
  const [activeTab, setActiveTab] = useState('ai')
  const current = TRACKS.find((t) => t.id === activeTab) || TRACKS[0]

  return (
    <section className="career-tracks-section section-pad" id="tech-pathways">
      <div className="container">
        <div className="section-head-center">
          <span className="section-pill">CAREER ROADMAPS</span>
          <h2>Explore High-Growth Tech Specializations</h2>
          <p>
            Choose your learning pathway designed with industry leaders. Every curriculum is structured
            around hands-on projects and the competencies top companies actively hire for.
          </p>
        </div>

        {/* Track Selection Tabs */}
        <div className="track-tab-nav" role="tablist" aria-label="Career Tracks">
          {TRACKS.map((track) => (
            <button
              key={track.id}
              type="button"
              role="tab"
              aria-selected={activeTab === track.id}
              className={`track-tab-item ${activeTab === track.id ? 'active' : ''}`}
              onClick={() => setActiveTab(track.id)}
            >
              <span className="track-tab-title">{track.title}</span>
              <span className="track-tab-tag">{track.tag}</span>
            </button>
          ))}
        </div>

        {/* Track Content Card */}
        <div className="track-card-container">
          <div className="track-card-header">
            <div>
              <div className="track-badge-row">
                <span className="track-pill-primary">{current.tag}</span>
                <span className="track-pill-duration">⏱ {current.duration}</span>
                <span className="track-pill-format">{current.batchType}</span>
              </div>
              <h3 className="track-headline">{current.title}</h3>
              <p className="track-overview">{current.overview}</p>
            </div>

            <div className="track-salary-box">
              <span className="salary-box-label">Average Compensation</span>
              <strong className="salary-box-number">{current.salaryRange}</strong>
              <span className="salary-box-hike">{current.hike} for Career Switchers</span>
              <button
                type="button"
                className="track-salary-calc-btn"
                onClick={onOpenAdvisorModal}
              >
                Check Your Eligibility →
              </button>
            </div>
          </div>

          <div className="track-card-body-grid">
            {/* Left: Target Roles & Tools */}
            <div className="track-col">
              <h4 className="track-col-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Target Career Roles
              </h4>
              <ul className="track-roles-list">
                {current.targetRoles.map((role) => (
                  <li key={role}>
                    <span className="role-check">✓</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>

              <h4 className="track-col-title" style={{ marginTop: '24px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                Core Tech Stack &amp; Libraries
              </h4>
              <div className="track-tools-chips">
                {current.tools.map((t) => (
                  <span key={t} className="track-tool-badge">{t}</span>
                ))}
              </div>
            </div>

            {/* Right: Capstone Projects & CTA */}
            <div className="track-col">
              <h4 className="track-col-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                Featured Production Capstones
              </h4>
              <div className="track-capstones-list">
                {current.capstones.map((cap, i) => (
                  <div key={cap} className="capstone-item">
                    <span className="capstone-num">0{i + 1}</span>
                    <p className="capstone-desc">{cap}</p>
                  </div>
                ))}
              </div>

              <div className="track-action-box">
                <div className="action-box-copy">
                  <strong>Ready to begin your journey?</strong>
                  <span>Reserve a seat in the upcoming cohort or talk to a mentor.</span>
                </div>
                <div className="action-box-buttons">
                  <button
                    type="button"
                    className="button button-primary"
                    onClick={onOpenDemoModal}
                  >
                    Book Free Demo Class →
                  </button>
                  <a href="/courses" className="button button-secondary">
                    View Complete Catalog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
