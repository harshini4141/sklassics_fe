import { useState, useEffect } from 'react'

const NOTIFICATIONS = [
  {
    id: 1,
    avatar: 'RV',
    color: '#8257e5',
    icon: '🚀',
    title: 'Rahul V. (Hyderabad)',
    message: 'Booked Free Demo for Generative AI Masterclass',
    time: '2 mins ago',
    type: 'demo',
  },
  {
    id: 2,
    avatar: 'PS',
    color: '#10b981',
    icon: '💼',
    title: 'Priya Sharma (Bangalore)',
    message: 'Placed at Deloitte as Data Analyst with +140% hike',
    time: 'Yesterday',
    type: 'placement',
  },
  {
    id: 3,
    avatar: '🔥',
    color: '#f59e0b',
    icon: '⚡',
    title: 'Upcoming Weekend Batch',
    message: 'Cloud Architecture & DevOps is 88% full (4 seats left)',
    time: 'Filling Fast',
    type: 'urgency',
  },
  {
    id: 4,
    avatar: 'KN',
    color: '#3b82f6',
    icon: '🎓',
    title: 'Karthik N. (Pune)',
    message: 'Earned Big Data & PySpark Certified Specialist Credential',
    time: '3 hours ago',
    type: 'cert',
  },
  {
    id: 5,
    avatar: 'SM',
    color: '#ec4899',
    icon: '⭐',
    title: 'Sneha M. (Chennai)',
    message: 'Rated 5/5: "Transitioned from non-IT to BI Analytics in 4 months!"',
    time: '5 hours ago',
    type: 'review',
  },
]

export function LiveSocialProof({ onOpenDemoModal }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    if (isDismissed) return

    // Show initial notification after 3.5 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true)
    }, 3500)

    // Interval to cycle notifications
    const cycleInterval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length)
        setIsVisible(true)
      }, 500)
    }, 9500)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(cycleInterval)
    }
  }, [isDismissed])

  if (isDismissed) return null

  const item = NOTIFICATIONS[currentIndex]

  return (
    <div
      className={`social-proof-toast ${isVisible ? 'visible' : ''}`}
      role="status"
      aria-live="polite"
    >
      <div
        className="social-proof-content"
        onClick={() => {
          if (onOpenDemoModal) onOpenDemoModal()
        }}
        title="Click to book a free demo session"
      >
        <div className="social-proof-avatar" style={{ background: item.color }}>
          {item.avatar.length <= 2 ? item.avatar : item.icon}
        </div>
        <div className="social-proof-details">
          <div className="social-proof-header">
            <span className="social-proof-title">{item.title}</span>
            <span className="social-proof-time">{item.time}</span>
          </div>
          <p className="social-proof-message">{item.message}</p>
        </div>
      </div>
      <button
        type="button"
        className="social-proof-close"
        onClick={(e) => {
          e.stopPropagation()
          setIsDismissed(true)
        }}
        aria-label="Dismiss notifications"
      >
        ✕
      </button>
    </div>
  )
}
