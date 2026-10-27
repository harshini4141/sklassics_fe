import { useEffect, useState } from 'react'

export function CourseModal({ course, onClose, onBookDemo }) {
  const [activeModule, setActiveModule] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!course) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-course-title">
      <div className="modal-container course-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="course-modal-header">
          <div className="course-modal-badge-group">
            <span className={`course-category-pill course-${course.tone}`}>{course.category}</span>
            <span className="course-level-pill">✦ {course.level || 'All Levels'}</span>
            <span className="course-duration-pill">⏱ {course.duration || '8-12 Weeks'}</span>
          </div>

          <h2 id="modal-course-title">{course.title}</h2>
          <p className="course-modal-desc">{course.description}</p>

          <div className="course-modal-meta-bar">
            <div className="meta-stat">
              <span className="meta-label">Rating</span>
              <strong>★ {course.rating || '4.9'} <small>({course.reviewCount || '250+'} reviews)</small></strong>
            </div>
            <div className="meta-stat">
              <span className="meta-label">Total Learners</span>
              <strong>{course.students || '1,000+'}</strong>
            </div>
            <div className="meta-stat">
              <span className="meta-label">Program Fee</span>
              <strong className="course-fee-price">{course.price}</strong>
            </div>
          </div>
        </div>

        <div className="course-modal-body">
          {course.tools && course.tools.length > 0 && (
            <div className="course-tools-section">
              <h3>Tools & Technologies Covered</h3>
              <div className="course-tool-chips">
                {course.tools.map((tool) => (
                  <span key={tool} className="tool-chip">{tool}</span>
                ))}
              </div>
            </div>
          )}

          {course.highlights && course.highlights.length > 0 && (
            <div className="course-highlights-section">
              <h3>What You Will Gain</h3>
              <ul className="course-highlights-list">
                {course.highlights.map((item) => (
                  <li key={item}>
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {course.modules && course.modules.length > 0 && (
            <div className="course-syllabus-section">
              <div className="syllabus-header">
                <h3>Detailed Curriculum & Modules</h3>
                <span>{course.modules.length} Comprehensive Modules</span>
              </div>

              <div className="syllabus-accordion">
                {course.modules.map((mod, idx) => {
                  const isOpen = activeModule === idx
                  return (
                    <div
                      key={mod.title}
                      className={`syllabus-module-item ${isOpen ? 'is-open' : ''}`}
                    >
                      <button
                        type="button"
                        className="syllabus-module-trigger"
                        onClick={() => setActiveModule(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span className="module-index">0{idx + 1}</span>
                        <strong className="module-title">{mod.title}</strong>
                        <span className="accordion-arrow">{isOpen ? '−' : '+'}</span>
                      </button>

                      {isOpen && (
                        <div className="syllabus-module-content">
                          <ul>
                            {mod.topics.map((topic) => (
                              <li key={topic}>
                                <span className="bullet">✦</span>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          <div className="course-guarantee-box">
            <div className="guarantee-icon">🛡️</div>
            <div>
              <strong>100% Practical & Placement-Focused</strong>
              <p>Live interactive mentor sessions, personal code reviews, mock technical interviews, and Sklassics verified certificate.</p>
            </div>
          </div>
        </div>

        <div className="course-modal-footer">
          <button
            type="button"
            className="button button-secondary"
            onClick={() => {
              onClose()
              if (onBookDemo) onBookDemo(course)
            }}
          >
            Book Free Demo Class 📅
          </button>
          <a
            className="button button-primary"
            href={`mailto:info@sklassics.com?subject=${encodeURIComponent(`Enquiry for ${course.title} Program`)}`}
          >
            Enquire & Enroll Now →
          </a>
        </div>
      </div>
    </div>
  )
}
