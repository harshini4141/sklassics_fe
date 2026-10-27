import { useState, useRef } from 'react'

export function HolographicCertificate3D() {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, glareX: 50, glareY: 50, isHovered: false })

  const handlePointerMove = (e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0

    const x = clientX - rect.left
    const y = clientY - rect.top

    const normX = (x / rect.width - 0.5) * 2 // -1 to 1
    const normY = (y / rect.height - 0.5) * 2 // -1 to 1

    const rx = -normY * 16 // tilt up/down up to 16deg
    const ry = normX * 18 // tilt left/right up to 18deg

    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100

    setTilt({ rx, ry, glareX, glareY, isHovered: true })
  }

  const handlePointerLeave = () => {
    setTilt({ rx: 0, ry: 0, glareX: 50, glareY: 50, isHovered: false })
  }

  return (
    <div className="certificate-3d-wrapper">
      <div className="certificate-glow" />

      <div
        ref={cardRef}
        className={`certificate-card certificate-3d-card ${tilt.isHovered ? 'hovered' : ''}`}
        style={{
          transform: tilt.isHovered
            ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(12px) scale3d(1.03, 1.03, 1.03)`
            : 'perspective(1000px) rotateX(2deg) rotateY(-3deg) rotate(1.2deg)',
          transition: tilt.isHovered ? 'transform 0.08s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerLeave}
        aria-label="3D Interactive Holographic Certificate"
      >
        {/* Holographic Rainbow Foil Overlay */}
        <div
          className="certificate-holo-glare"
          style={{
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 215, 0, 0.18) 25%, rgba(0, 255, 255, 0.15) 50%, rgba(255, 0, 255, 0.1) 75%, transparent 100%)`,
            opacity: tilt.isHovered ? 0.9 : 0.2,
          }}
        />

        {/* 3D Floating Header Layer */}
        <div className="certificate-head certificate-3d-layer" style={{ transform: 'translateZ(30px)' }}>
          <span className="mini-brand">s.</span>
          <span>SKLASSICS TECHNOLOGIES</span>
        </div>

        {/* 3D Floating Ribbon */}
        <div
          className="certificate-ribbon certificate-3d-layer"
          style={{ transform: 'translateZ(40px)' }}
        >
          CERTIFICATE OF COMPLETION
        </div>

        <p className="certificate-intro certificate-3d-layer" style={{ transform: 'translateZ(20px)' }}>
          This certificate is awarded to
        </p>

        <strong className="certificate-learner certificate-3d-layer" style={{ transform: 'translateZ(45px)' }}>
          Learner Name
        </strong>

        <span className="certificate-description certificate-3d-layer" style={{ transform: 'translateZ(20px)' }}>
          for successfully completing
        </span>

        <strong className="certificate-course certificate-3d-layer" style={{ transform: 'translateZ(42px)' }}>
          Generative AI & Cloud Architecture
        </strong>

        <span className="certificate-conducted certificate-3d-layer" style={{ transform: 'translateZ(20px)' }}>
          conducted by
        </span>

        <b className="certificate-issuer certificate-3d-layer" style={{ transform: 'translateZ(35px)' }}>
          SKLASSICS TECHNOLOGIES PVT LTD
        </b>

        {/* 3D High-Gloss Embossed Seal */}
        <div
          className="certificate-seal certificate-3d-seal"
          style={{ transform: 'translateZ(60px)' }}
          aria-hidden="true"
        >
          <span className="seal-sparkle">✦</span>
        </div>

        <div className="certificate-3d-hint">
          <span>✦ Move cursor to inspect 3D foil depth</span>
        </div>
      </div>

      <span className="certificate-badge">Verified 3D Credential</span>
    </div>
  )
}
