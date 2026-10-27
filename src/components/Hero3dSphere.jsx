import { useEffect, useRef, useState, useCallback } from 'react'

const TECH_NODES = [
  { label: 'Generative AI', icon: '✦', color: '#8257e5', bg: 'rgba(130, 87, 229, 0.22)' },
  { label: 'AWS & Cloud', icon: '☁', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.22)' },
  { label: 'PySpark & Data', icon: '⚡', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.22)' },
  { label: 'Docker & K8s', icon: '⎈', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.22)' },
  { label: 'Python & ML', icon: '🐍', color: '#10b981', bg: 'rgba(16, 185, 129, 0.22)' },
  { label: 'Power BI & SQL', icon: '▥', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.22)' },
]

export function Hero3dSphere({ onNodeClick }) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const activeMode = 'neural'
  const [isDragging, setIsDragging] = useState(false)
  const [activeNode, setActiveNode] = useState(null)

  // 3D rotation state
  const rotRef = useRef({
    rx: 0.2,
    ry: 0.3,
    vx: 0.003,
    vy: 0.005,
    lastX: 0,
    lastY: 0,
    targetRx: 0.2,
    targetRy: 0.3,
  })

  // Sphere geometry data
  const sphereDataRef = useRef({
    points: [],
    ringPoints: [],
    techNodes: [],
  })

  // Initialize 3D points
  useEffect(() => {
    const points = []
    const numPoints = 85
    const radius = 170

    // Fibonacci sphere distribution for uniform 3D sphere points
    const phi = Math.PI * (3 - Math.sqrt(5)) // Golden angle
    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2 // -1 to 1
      const radiusAtY = Math.sqrt(1 - y * y)
      const theta = phi * i

      const x = Math.cos(theta) * radiusAtY
      const z = Math.sin(theta) * radiusAtY

      points.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        origX: x * radius,
        origY: y * radius,
        origZ: z * radius,
        size: Math.random() * 2.2 + 1.2,
        pulseOffset: Math.random() * Math.PI * 2,
      })
    }

    // 3D tech badge nodes in a wider equatorial orbit
    const techNodes = TECH_NODES.map((node, i) => {
      const angle = (i / TECH_NODES.length) * Math.PI * 2
      const orbitR = 210
      return {
        ...node,
        x: Math.cos(angle) * orbitR,
        y: Math.sin(angle * 2) * 45, // slight harmonic wave
        z: Math.sin(angle) * orbitR,
        angle,
        orbitR,
      }
    })

    // Orbit ring points
    const ringPoints = []
    const ringCount = 3
    for (let r = 0; r < ringCount; r++) {
      const ringRadius = 150 + r * 35
      const tilt = (r - 1) * 0.45
      const pts = []
      for (let j = 0; j < 36; j++) {
        const theta = (j / 36) * Math.PI * 2
        const rawX = Math.cos(theta) * ringRadius
        const rawY = 0
        const rawZ = Math.sin(theta) * ringRadius

        // Apply ring tilt
        const x = rawX
        const y = rawY * Math.cos(tilt) - rawZ * Math.sin(tilt)
        const z = rawY * Math.sin(tilt) + rawZ * Math.cos(tilt)
        pts.push({ x, y, z })
      }
      ringPoints.push(pts)
    }

    sphereDataRef.current = { points, ringPoints, techNodes }
  }, [])

  // Canvas render loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let time = 0

    const render = () => {
      time += 0.02
      const rot = rotRef.current

      // Handle continuous rotation & inertia
      if (!isDragging) {
        rot.ry += rot.vy
        rot.rx += rot.vx * 0.3
        // Damping towards natural gentle float
        rot.vx += (0.0015 - rot.vx) * 0.04
        rot.vy += (0.0035 - rot.vy) * 0.04
      }

      // Resize canvas if needed
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      const width = rect.width
      const height = rect.height

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr
        canvas.height = height * dpr
      }

      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2
      const focalLength = 380

      // Matrix rotation math
      const cosX = Math.cos(rot.rx)
      const sinX = Math.sin(rot.rx)
      const cosY = Math.cos(rot.ry)
      const sinY = Math.sin(rot.ry)

      const project = (x, y, z) => {
        // Rotate around Y axis
        const x1 = x * cosY - z * sinY
        const z1 = z * cosY + x * sinY

        // Rotate around X axis
        const y2 = y * cosX - z1 * sinX
        const z2 = z1 * cosX + y * sinX

        // 3D Perspective Projection
        const scale = focalLength / (focalLength + z2)
        const projX = cx + x1 * scale
        const projY = cy + y2 * scale
        return { x: projX, y: projY, z: z2, scale, origX: x, origY: y }
      }

      const { points, ringPoints, techNodes } = sphereDataRef.current

      // Project all sphere points
      const projectedPoints = points.map((p) => {
        const pulse = Math.sin(time * 2 + p.pulseOffset) * 4
        const proj = project(p.origX + pulse, p.origY + pulse, p.origZ)
        return { ...p, ...proj }
      })

      // Sort points by Z (depth-sorting for 3D realism)
      projectedPoints.sort((a, b) => a.z - b.z)

      // Draw central energy core glow
      const coreGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 140)
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
      if (isDark) {
        coreGrad.addColorStop(0, 'rgba(130, 87, 229, 0.35)')
        coreGrad.addColorStop(0.5, 'rgba(59, 130, 246, 0.15)')
        coreGrad.addColorStop(1, 'transparent')
      } else {
        coreGrad.addColorStop(0, 'rgba(130, 87, 229, 0.22)')
        coreGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.08)')
        coreGrad.addColorStop(1, 'transparent')
      }
      ctx.fillStyle = coreGrad
      ctx.beginPath()
      ctx.arc(cx, cy, 140, 0, Math.PI * 2)
      ctx.fill()

      // Mode 1: Rings
      if (activeMode === 'rings' || activeMode === 'neural') {
        ringPoints.forEach((ring, rIdx) => {
          ctx.beginPath()
          const ringColor = isDark
            ? rIdx === 0
              ? 'rgba(130, 87, 229, 0.45)'
              : rIdx === 1
                ? 'rgba(59, 130, 246, 0.35)'
                : 'rgba(16, 185, 129, 0.35)'
            : rIdx === 0
              ? 'rgba(130, 87, 229, 0.35)'
              : rIdx === 1
                ? 'rgba(59, 130, 246, 0.25)'
                : 'rgba(16, 185, 129, 0.25)'

          ctx.strokeStyle = ringColor
          ctx.lineWidth = 1.3

          ring.forEach((p, idx) => {
            const proj = project(p.x, p.y, p.z)
            if (idx === 0) ctx.moveTo(proj.x, proj.y)
            else ctx.lineTo(proj.x, proj.y)
          })
          ctx.closePath()
          ctx.stroke()
        })
      }

      // Mode: Neural connections between neighboring points
      if (activeMode === 'neural') {
        const maxDist = 58
        ctx.lineWidth = 0.8
        for (let i = 0; i < projectedPoints.length; i++) {
          const p1 = projectedPoints[i]
          if (p1.z < -40) continue // only draw front & mid connections for performance & depth
          for (let j = i + 1; j < Math.min(i + 8, projectedPoints.length); j++) {
            const p2 = projectedPoints[j]
            const dx = p1.x - p2.x
            const dy = p1.y - p2.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.45 * Math.max(0.2, (p1.z + 180) / 360)
              ctx.strokeStyle = isDark
                ? `rgba(168, 138, 255, ${alpha})`
                : `rgba(99, 102, 241, ${alpha * 0.8})`
              ctx.beginPath()
              ctx.moveTo(p1.x, p1.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          }
        }
      }

      // Draw 3D particle nodes
      projectedPoints.forEach((p) => {
        const depthAlpha = Math.max(0.15, Math.min(1, (p.z + 180) / 360))
        const radius = Math.max(0.8, p.size * p.scale)

        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)

        if (p.z > 30) {
          // Foreground particles glow
          ctx.fillStyle = isDark
            ? `rgba(255, 255, 255, ${depthAlpha * 0.95})`
            : `rgba(130, 87, 229, ${depthAlpha})`
          ctx.shadowColor = '#8257e5'
          ctx.shadowBlur = 6 * p.scale
        } else {
          ctx.fillStyle = isDark
            ? `rgba(147, 130, 220, ${depthAlpha * 0.6})`
            : `rgba(90, 80, 150, ${depthAlpha * 0.5})`
          ctx.shadowBlur = 0
        }
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // Draw Orbiting Tech Badges in 3D
      const projectedNodes = techNodes.map((node) => {
        // Orbit motion
        const currAngle = node.angle + time * 0.35
        const ox = Math.cos(currAngle) * node.orbitR
        const oz = Math.sin(currAngle) * node.orbitR
        const oy = Math.sin(currAngle * 2) * 35

        const proj = project(ox, oy, oz)
        return { ...node, ...proj }
      })

      // Sort tech badges by Z so background badges are behind foreground ones
      projectedNodes.sort((a, b) => a.z - b.z)

      projectedNodes.forEach((node) => {
        const isBehind = node.z < -20
        const scale = Math.max(0.72, Math.min(1.2, node.scale))
        const alpha = Math.max(0.4, Math.min(1, (node.z + 220) / 400))

        ctx.save()
        ctx.translate(node.x, node.y)
        ctx.scale(scale, scale)
        ctx.globalAlpha = alpha

        // Card background badge
        const badgeW = 124
        const badgeH = 34
        const bx = -badgeW / 2
        const by = -badgeH / 2

        ctx.beginPath()
        ctx.roundRect(bx, by, badgeW, badgeH, 17)

        if (isDark) {
          ctx.fillStyle = isBehind ? 'rgba(23, 20, 48, 0.75)' : 'rgba(30, 26, 62, 0.92)'
          ctx.strokeStyle = isBehind ? 'rgba(255, 255, 255, 0.12)' : node.color
        } else {
          ctx.fillStyle = isBehind ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.97)'
          ctx.strokeStyle = isBehind ? 'rgba(130, 87, 229, 0.2)' : node.color
        }

        ctx.lineWidth = isBehind ? 1 : 1.8
        if (!isBehind) {
          ctx.shadowColor = node.color
          ctx.shadowBlur = 10
        }
        ctx.fill()
        ctx.stroke()
        ctx.shadowBlur = 0

        // Icon circle
        ctx.beginPath()
        ctx.arc(bx + 17, 0, 10, 0, Math.PI * 2)
        ctx.fillStyle = node.bg
        ctx.fill()

        // Icon text
        ctx.fillStyle = node.color
        ctx.font = 'bold 11px sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(node.icon, bx + 17, 0)

        // Label text
        ctx.fillStyle = isDark ? '#ffffff' : '#1f2937'
        ctx.font = 'bold 10px Inter, system-ui, sans-serif'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'middle'
        ctx.fillText(node.label, bx + 33, 0)

        ctx.restore()
      })

      ctx.restore()
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDragging])

  // Mouse / Touch Drag Controls
  const handlePointerDown = (e) => {
    setIsDragging(true)
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0
    rotRef.current.lastX = clientX
    rotRef.current.lastY = clientY
  }

  const handlePointerMove = (e) => {
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0

    if (isDragging) {
      const dx = clientX - rotRef.current.lastX
      const dy = clientY - rotRef.current.lastY

      rotRef.current.vy = dx * 0.005
      rotRef.current.vx = -dy * 0.005
      rotRef.current.ry += dx * 0.007
      rotRef.current.rx += -dy * 0.007

      rotRef.current.lastX = clientX
      rotRef.current.lastY = clientY
    } else {
      // Subtle mouse tracking tilt
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        const normX = (clientX - rect.left) / rect.width - 0.5
        const normY = (clientY - rect.top) / rect.height - 0.5
        rotRef.current.targetRx = normY * 0.6
        rotRef.current.targetRy = normX * 0.8
        rotRef.current.rx += (rotRef.current.targetRx - rotRef.current.rx) * 0.05
      }
    }
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  return (
    <div
      ref={containerRef}
      className="hero-3d-container"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      aria-label="Interactive 3D Technology Sphere"
    >
      {/* 3D Canvas Rendering */}
      <canvas ref={canvasRef} className="hero-3d-canvas" />
    </div>
  )
}
