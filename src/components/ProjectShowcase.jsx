import { useState } from 'react'

const PROJECTS = [
  {
    id: 'ai-agent',
    category: 'GENERATIVE AI & LLMS',
    title: 'Enterprise Autonomous Healthcare Triage Agent',
    badge: 'Flagship AI Capstone',
    accentColor: '#8257e5',
    summary:
      'A multi-agent autonomous system that ingests patient symptoms, retrieves medical literature via hybrid vector search, and outputs structured triage prioritization for emergency room staff.',
    stats: [
      { label: 'Latency', value: '< 450ms' },
      { label: 'Diagnostic Accuracy', value: '98.4%' },
      { label: 'Paper Citations', value: '1.2M+' },
    ],
    techStack: ['LangChain', 'OpenAI GPT-4', 'Pinecone Vector DB', 'FastAPI', 'Docker', 'React'],
    architectureFlow: [
      'User Query & Vitals Ingestion',
      'Hybrid Dense/Sparse Vector Search (Pinecone)',
      'LangChain Recursive Reasoning Agent',
      'Clinical Guardrails & Redaction',
      'Real-Time WebSocket Response to Doctor Portal',
    ],
    learnerQuote:
      '"Presenting this capstone project directly landed me my AI Engineer role at a US-based healthtech startup."',
    learnerAuthor: 'Arjun M., Sklassics GenAI Cohort 4',
  },
  {
    id: 'fraud-detection',
    category: 'BIG DATA & PYSPARK',
    title: 'High-Throughput Financial Fraud Detection Pipeline',
    badge: 'Distributed Systems Capstone',
    accentColor: '#0ea5e9',
    summary:
      'End-to-end distributed stream-processing architecture tracking credit card transactions in real-time, detecting suspicious spikes and anomalous geo-hops with PySpark structured streaming.',
    stats: [
      { label: 'Throughput', value: '150k evt/sec' },
      { label: 'Detection Window', value: '< 35ms' },
      { label: 'False Positive Drop', value: '-68%' },
    ],
    techStack: ['Apache Kafka', 'PySpark Streaming', 'Snowflake', 'AWS EMR', 'Airflow', 'Redis'],
    architectureFlow: [
      'Transactional Event Stream via Kafka Topics',
      'PySpark Windowed Aggregation & Stateful Streaming',
      'Pre-Trained XGBoost Anomaly Scoring',
      'Redis Low-Latency Fraud Flag Cache',
      'Snowflake Analytical Sink for Audit Compliance',
    ],
    learnerQuote:
      '"The scale of this pipeline impressed my interview panel at Walmart. The hands-on AWS EMR practice was gold."',
    learnerAuthor: 'Snehal P., Sklassics Big Data Cohort',
  },
  {
    id: 'cloud-devops',
    category: 'CLOUD & DEVOPS',
    title: 'Resilient Multi-Region Kubernetes GitOps Platform',
    badge: 'Cloud Architecture Capstone',
    accentColor: '#10b981',
    summary:
      'Fully automated, fault-tolerant infrastructure built using Terraform and AWS EKS. Features automated canary releases with ArgoCD, zero-downtime rollouts, and deep telemetry with Prometheus/Grafana.',
    stats: [
      { label: 'Service Uptime', value: '99.99%' },
      { label: 'Deploy Time', value: '4.2 Mins' },
      { label: 'Autoscale Range', value: '2 - 80 Nodes' },
    ],
    techStack: ['AWS EKS', 'Terraform', 'Kubernetes', 'ArgoCD', 'Prometheus', 'Grafana', 'GitHub Actions'],
    architectureFlow: [
      'Terraform Modular Cloud Infrastructure as Code',
      'CI via GitHub Actions with Trivy Container Scan',
      'GitOps Continuous Delivery via ArgoCD to EKS',
      'Prometheus AlertManager & Grafana Live Dashboards',
      'Karpenter Dynamic Node Autoscaling',
    ],
    learnerQuote:
      '"I went from manual server deployments to writing production-ready Terraform and Kubernetes manifests."',
    learnerAuthor: 'Deepak S., Sklassics DevOps Cohort',
  },
  {
    id: 'bi-retail',
    category: 'DATA ANALYTICS & BI',
    title: 'Omnichannel Retail Supply-Chain Intelligence Hub',
    badge: 'Business Intelligence Capstone',
    accentColor: '#f59e0b',
    summary:
      'Interactive executive decision hub modeling inventory turn rates, stockout risks, and delivery SLA deviations across 48 regional warehouses with advanced DAX and automated alerts.',
    stats: [
      { label: 'Leakage Uncovered', value: '₹2.4 Cr' },
      { label: 'ETL Automation', value: '100% Daily' },
      { label: 'Warehouses Tracked', value: '48 Hubs' },
    ],
    techStack: ['Power BI', 'DAX Advanced', 'SQL Server', 'Python Pandas', 'Azure Data Factory', 'Excel'],
    architectureFlow: [
      'Daily Automated Ingestion from ERP Database',
      'SQL Stored Procedures & Star Schema Normalization',
      'DAX Measures for Moving Averages & Safety Stock',
      'Drill-Through Executive Dashboards & Forecasts',
      'Automated Teams/Email Alert Webhooks',
    ],
    learnerQuote:
      '"My portfolio dashboard looked so polished that my manager promoted me to Senior BI Analyst within 2 months."',
    learnerAuthor: 'Meera R., Sklassics Data Analytics Cohort',
  },
]

export function ProjectShowcase() {
  const [activeProjectId, setActiveProjectId] = useState('ai-agent')
  const activeProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0]

  return (
    <section className="project-showcase-section" id="capstone-projects">
      <div className="container">
        <div className="showcase-header">
          <span className="showcase-badge">🚀 REAL-WORLD PORTFOLIO PROJECTS</span>
          <h2>Build Projects That <span>Hiring Managers Love</span></h2>
          <p>
            No toy datasets or simple calculator apps. You will architect, build, and deploy production-grade solutions that prove your skills in technical interviews.
          </p>
        </div>

        {/* Project Selector Navigation Pills */}
        <div className="showcase-nav-pills" role="tablist">
          {PROJECTS.map((proj) => (
            <button
              key={proj.id}
              type="button"
              role="tab"
              aria-selected={activeProjectId === proj.id}
              className={`showcase-nav-pill ${activeProjectId === proj.id ? 'active' : ''}`}
              onClick={() => setActiveProjectId(proj.id)}
            >
              <span className="pill-dot" style={{ backgroundColor: proj.accentColor }} />
              <span className="pill-title">{proj.category}</span>
            </button>
          ))}
        </div>

        {/* Active Project Card */}
        <div className="showcase-detail-card">
          {/* Main Info Header */}
          <div className="showcase-card-header">
            <div>
              <span className="showcase-category-tag">{activeProject.category}</span>
              <h3>{activeProject.title}</h3>
              <p className="showcase-summary">{activeProject.summary}</p>
            </div>
            <span className="showcase-pill-badge">{activeProject.badge}</span>
          </div>

          {/* Key Metrics Row */}
          <div className="showcase-stats-row">
            {activeProject.stats.map((s, idx) => (
              <div key={idx} className="showcase-stat-item">
                <span className="stat-big-val" style={{ color: activeProject.accentColor }}>
                  {s.value}
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Architecture Pipeline Steps */}
          <div className="showcase-architecture-box">
            <h4>System Architecture &amp; Data Pipeline Flow:</h4>
            <div className="pipeline-steps-grid">
              {activeProject.architectureFlow.map((step, idx) => (
                <div key={idx} className="pipeline-step-item">
                  <div className="step-circle" style={{ borderColor: activeProject.accentColor }}>
                    0{idx + 1}
                  </div>
                  <span className="step-desc">{step}</span>
                  {idx < activeProject.architectureFlow.length - 1 && (
                    <span className="pipeline-connector">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips & Learner Quote */}
          <div className="showcase-footer-row">
            <div className="showcase-tech-tags">
              <span className="tech-tags-title">Technologies Mastered:</span>
              <div className="tech-badges-list">
                {activeProject.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="showcase-quote-box">
              <p>{activeProject.learnerQuote}</p>
              <small>— {activeProject.learnerAuthor}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
