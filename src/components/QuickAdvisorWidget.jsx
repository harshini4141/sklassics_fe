import { useState } from 'react'

export function QuickAdvisorWidget({ onOpenDemoModal, onOpenAdvisorModal, onOpenAssessmentModal }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="quick-advisor-root">
      {isOpen && (
        <div className="advisor-popup-card" role="dialog" aria-label="Connect with a Career Mentor">
          <div className="advisor-popup-header">
            <div className="advisor-popup-author">
              <div className="advisor-avatar-circle">
                <span>SK</span>
                <span className="advisor-online-badge" />
              </div>
              <div>
                <strong>Sklassics Career Desk</strong>
                <small>Online • Typically replies in 5 mins</small>
              </div>
            </div>
            <button
              type="button"
              className="advisor-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close mentor support"
            >
              ✕
            </button>
          </div>

          <div className="advisor-popup-body">
            <p className="advisor-greeting">
              Hello! Looking to upskill or transition into tech? Our academic advisors can help you choose the right course, evaluate your background, or share syllabus details.
            </p>

            <div className="advisor-actions-list">
              <button
                type="button"
                className="advisor-action-btn primary-action"
                onClick={() => {
                  setIsOpen(false)
                  if (onOpenDemoModal) onOpenDemoModal()
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Book Free 1:1 Demo Class</span>
              </button>

              <button
                type="button"
                className="advisor-action-btn"
                onClick={() => {
                  setIsOpen(false)
                  if (onOpenAdvisorModal) onOpenAdvisorModal()
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 14 14" />
                </svg>
                <span>Take 60-Sec Career Quiz</span>
              </button>

              <button
                type="button"
                className="advisor-action-btn"
                onClick={() => {
                  setIsOpen(false)
                  if (onOpenAssessmentModal) onOpenAssessmentModal()
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <span>5-Min Technical Assessment</span>
              </button>

              <a
                href="https://wa.me/919392732581?text=Hi%20Sklassics,%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20upcoming%20batches."
                target="_blank"
                rel="noreferrer"
                className="advisor-action-btn whatsapp-action"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919392732581"
                className="advisor-action-btn phone-action"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call +91 93927 32581</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        type="button"
        className="advisor-trigger-pill"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open career mentor guidance"
      >
        <span className="advisor-trigger-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>
        <span className="advisor-trigger-text">Talk to Advisor</span>
        <span className="advisor-online-dot" />
      </button>
    </div>
  )
}
