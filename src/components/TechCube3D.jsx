import { useState, useRef, useEffect } from 'react'

const CUBE_FACES = [
  {
    id: 'ai',
    name: 'Generative AI & LLMs',
    tag: 'Flagship Masterclass',
    badge: 'HOT 🔥',
    color: '#8257e5',
    icon: '✦',
    desc: 'Fine-tune modern LLMs, build production RAG systems with LangChain, Pinecone & Llama 3, and deploy scalable AI agents.',
    techs: ['LangChain', 'Llama 3', 'Pinecone', 'RAG', 'HuggingFace', 'FastAPI'],
    metrics: { stat: '100%', label: 'Hands-on Code', highlight: '4 End-to-End AI Apps' },
    targetRotation: { rx: 0, ry: 0 },
    faceClass: 'cube-face-front',
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps Engineering',
    tag: 'High Demand',
    badge: 'ENTERPRISE ☁',
    color: '#3b82f6',
    icon: '☁',
    desc: 'Master multi-cloud architecture on AWS & Azure, containerization with Docker & Kubernetes, Terraform IaC, and ArgoCD pipelines.',
    techs: ['AWS EKS', 'Kubernetes', 'Docker', 'Terraform', 'ArgoCD', 'Prometheus'],
    metrics: { stat: '99.9%', label: 'Infrastructure Reliability', highlight: 'Production Clusters' },
    targetRotation: { rx: 0, ry: -90 },
    faceClass: 'cube-face-right',
  },
  {
    id: 'data',
    name: 'Big Data & PySpark',
    tag: 'Data Scale',
    badge: '10M+ EPS ⚡',
    color: '#f59e0b',
    icon: '⚡',
    desc: 'Process terabyte-scale streaming workloads using Apache Spark, Kafka real-time ingestion, Databricks pipelines, and Delta Lake.',
    techs: ['PySpark', 'Kafka', 'Databricks', 'Delta Lake', 'Hadoop', 'AWS EMR'],
    metrics: { stat: '10M+', label: 'Events/sec Streaming', highlight: 'Low Latency Pipelines' },
    targetRotation: { rx: 0, ry: -180 },
    faceClass: 'cube-face-back',
  },
  {
    id: 'analytics',
    name: 'Data Analytics & Power BI',
    tag: 'Business Impact',
    badge: 'TOP RATED ⭐',
    color: '#ec4899',
    icon: '▥',
    desc: 'Transform raw data into high-stakes executive business intelligence with advanced SQL querying, DAX modeling, and storytelling.',
    techs: ['Power BI', 'Advanced SQL', 'Tableau', 'Excel DAX', 'Snowflake', 'dbt'],
    metrics: { stat: '140%', label: 'Avg Salary Hike', highlight: 'Deloitte & Tier-1 Hires' },
    targetRotation: { rx: 0, ry: 90 },
    faceClass: 'cube-face-left',
  },
  {
    id: 'fullstack',
    name: 'Full Stack & Cloud Systems',
    tag: 'Modern Web',
    badge: 'FULL STACK 💻',
    color: '#10b981',
    icon: '💻',
    desc: 'Architect reactive web applications with React, Node.js, Next.js, PostgreSQL, REST/GraphQL APIs, and cloud deployments.',
    techs: ['React 19', 'Node.js', 'Next.js', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: { stat: '6+', label: 'Shipped Web Apps', highlight: 'Microservices & DBs' },
    targetRotation: { rx: -90, ry: 0 },
    faceClass: 'cube-face-top',
  },
  {
    id: 'career',
    name: '1:1 Career Mentorship',
    tag: 'Guaranteed Growth',
    badge: '100% SUPPORT 🚀',
    color: '#06b6d4',
    icon: '🚀',
    desc: 'Comprehensive placement acceleration with resume optimization, GitHub audits, mock technical interviews, and 120+ direct referrals.',
    techs: ['FAANG Mentors', 'Mock Interviews', 'Resume Teardowns', 'Salary Negotiation', 'Referrals'],
    metrics: { stat: '120+', label: 'Hiring Partners', highlight: 'Dedicated Career Coach' },
    targetRotation: { rx: 90, ry: 0 },
    faceClass: 'cube-face-bottom',
  },
]

export function TechCube3D({ onOpenDemoModal, onOpenAdvisorModal }) {
  const [selectedFace, setSelectedFace] = useState(CUBE_FACES[0])
  const [isAutoSpin, setIsAutoSpin] = useState(true)
  const [rot, setRot] = useState({ rx: -15, ry: 25 })
  const isDraggingRef = useRef(false)
  const startCoordRef = useRef({ x: 0, y: 0 })
  const rotRef = useRef({ rx: -15, ry: 25 })
  const animFrameRef = useRef(null)

  // Auto rotation loop
  useEffect(() => {
    let lastTime = performance.now()

    const loop = (time) => {
      const dt = (time - lastTime) / 1000
      lastTime = time

      if (isAutoSpin && !isDraggingRef.current) {
        rotRef.current.ry += 18 * dt
        setRot({ rx: rotRef.current.rx, ry: rotRef.current.ry })
      }

      animFrameRef.current = requestAnimationFrame(loop)
    }

    animFrameRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [isAutoSpin])

  const snapToFace = (face) => {
    setIsAutoSpin(false)
    setSelectedFace(face)
    rotRef.current = { rx: face.targetRotation.rx, ry: face.targetRotation.ry }
    setRot(rotRef.current)
  }

  // Pointer drag to rotate 3D cube
  const handlePointerDown = (e) => {
    isDraggingRef.current = true
    setIsAutoSpin(false)
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0
    startCoordRef.current = { x: clientX, y: clientY }
  }

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0

    const dx = clientX - startCoordRef.current.x
    const dy = clientY - startCoordRef.current.y

    rotRef.current = {
      rx: Math.max(-85, Math.min(85, rotRef.current.rx - dy * 0.4)),
      ry: rotRef.current.ry + dx * 0.4,
    }
    setRot({ ...rotRef.current })

    startCoordRef.current = { x: clientX, y: clientY }
  }

  const handlePointerUp = () => {
    isDraggingRef.current = false
  }

  return (
    <section className="tech-cube-section section-pad" id="tech-ecosystem">
      <div className="container">
        <div className="tech-cube-header">
          <p className="eyebrow">
            <span className="cube-eyebrow-dot" /> 3D INTERACTIVE TECH LAB
          </p>
          <h2>
            Explore our curriculum in <span>3D Space.</span>
          </h2>
          <p>
            Drag, tilt, and rotate the 3D cube to inspect our curriculum pillars, hands-on tool stacks,
            and production metrics.
          </p>
        </div>

        {/* Cube Face Selector Pills */}
        <div className="cube-controls-bar">
          <div className="cube-pills-row" role="tablist" aria-label="Select 3D cube perspective">
            {CUBE_FACES.map((face) => (
              <button
                key={face.id}
                type="button"
                role="tab"
                aria-selected={selectedFace.id === face.id}
                className={`cube-nav-pill ${selectedFace.id === face.id ? 'active' : ''}`}
                style={{ '--accent': face.color }}
                onClick={() => snapToFace(face)}
              >
                <span>{face.icon}</span> {face.name.split('&')[0].trim()}
              </button>
            ))}
          </div>

          <div className="cube-actions-row">
            <button
              type="button"
              className={`cube-auto-btn ${isAutoSpin ? 'active' : ''}`}
              onClick={() => setIsAutoSpin(!isAutoSpin)}
              title={isAutoSpin ? 'Pause 3D auto rotation' : 'Start 3D auto rotation'}
            >
              {isAutoSpin ? '⏸ Pause Spin' : '▶ Auto Spin 3D'}
            </button>
            <button
              type="button"
              className="cube-reset-btn"
              onClick={() => {
                rotRef.current = { rx: -15, ry: 25 }
                setRot(rotRef.current)
                setIsAutoSpin(true)
              }}
              title="Reset 3D perspective"
            >
              ↺ Reset
            </button>
          </div>
        </div>

        {/* 3D Stage & Details Grid */}
        <div className="tech-cube-stage-grid">
          {/* Left/Main: 3D Viewport with Perspective */}
          <div
            className="cube-viewport"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            title="Drag with mouse or finger to spin the 3D cube!"
          >
            <div className="cube-scene">
              <div
                className="cube-object"
                style={{
                  transform: `rotateX(${rot.rx}deg) rotateY(${rot.ry}deg)`,
                }}
              >
                {CUBE_FACES.map((face) => (
                  <div key={face.id} className={`cube-face ${face.faceClass}`}>
                    <div className="cube-face-inner" style={{ '--face-color': face.color }}>
                      <div className="cube-face-badge">{face.badge}</div>
                      <div className="cube-face-icon">{face.icon}</div>
                      <h4 className="cube-face-title">{face.name}</h4>
                      <div className="cube-face-chips">
                        {face.techs.slice(0, 3).map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                      <div className="cube-face-hint">Tap face to focus</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dynamic 3D Floor Shadow */}
              <div
                className="cube-floor-shadow"
                style={{
                  transform: `rotateX(90deg) translateZ(-165px) scale(${1 + Math.abs(rot.rx) * 0.003})`,
                }}
              />
            </div>

          </div>

          {/* Right: Focused Face Deep Dive Card */}
          <div className="cube-detail-card" style={{ '--theme-accent': selectedFace.color }}>
            <div className="cube-detail-top">
              <span className="cube-detail-badge">{selectedFace.badge}</span>
              <span className="cube-detail-tag">{selectedFace.tag}</span>
            </div>

            <div className="cube-detail-heading">
              <div className="cube-detail-icon">{selectedFace.icon}</div>
              <div>
                <h3>{selectedFace.name}</h3>
                <p className="cube-detail-desc">{selectedFace.desc}</p>
              </div>
            </div>

            {/* Metrics highlight */}
            <div className="cube-detail-metrics">
              <div className="metric-box">
                <strong>{selectedFace.metrics.stat}</strong>
                <span>{selectedFace.metrics.label}</span>
              </div>
              <div className="metric-box">
                <strong className="metric-green">Verified</strong>
                <span>{selectedFace.metrics.highlight}</span>
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div className="cube-detail-stack">
              <h5>Tools & Frameworks Covered:</h5>
              <div className="cube-stack-pills">
                {selectedFace.techs.map((tech) => (
                  <span key={tech} className="cube-tech-pill">
                    <i>✦</i> {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="cube-detail-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={onOpenDemoModal}
              >
                Book Free Trial Class 📅
              </button>
              <button
                type="button"
                className="button button-secondary"
                onClick={onOpenAdvisorModal}
              >
                Match with Mentor 🎯
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
