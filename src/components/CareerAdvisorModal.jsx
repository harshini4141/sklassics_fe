import { useState, useEffect } from 'react'
import { quizQuestions } from '../data/platformData.js'

export function CareerAdvisorModal({ coursesList = [], onClose, onSelectCourse }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [resultCourse, setResultCourse] = useState(null)
  const [matchPercentage, setMatchPercentage] = useState(96)

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

  const handleSelectOption = (stepIndex, option) => {
    const nextAnswers = { ...answers, [stepIndex]: option }
    setAnswers(nextAnswers)

    if (stepIndex < quizQuestions.length - 1) {
      setCurrentStep(stepIndex + 1)
    } else {
      // Calculate best course match
      const field = nextAnswers[1]?.field || 'ai'
      let matched = null

      if (field === 'ai') {
        matched = coursesList.find((c) => c.id === 'data-science-gen-ai') || coursesList[0]
      } else if (field === 'analytics') {
        matched = coursesList.find((c) => c.id === 'data-analytics') || coursesList[4]
      } else if (field === 'cloud') {
        matched = coursesList.find((c) => c.id === 'cloud-computing') || coursesList[1]
      } else {
        matched = coursesList.find((c) => c.id === 'python-programming') || coursesList[3]
      }

      const score = field === 'ai' ? 98 : field === 'analytics' ? 96 : field === 'cloud' ? 97 : 95
      setResultCourse(matched)
      setMatchPercentage(score)
      setCurrentStep(quizQuestions.length)
    }
  }

  const handleRestart = () => {
    setAnswers({})
    setCurrentStep(0)
    setResultCourse(null)
  }

  const activeQuestion = quizQuestions[currentStep]

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="advisor-modal-title">
      <div className="modal-container advisor-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {currentStep < quizQuestions.length ? (
          <div className="quiz-container">
            <div className="quiz-header">
              <span className="quiz-kicker">✦ CAREER PATH FINDER QUIZ</span>
              <h2 id="advisor-modal-title">Discover Your Ideal Tech Learning Path</h2>
              <div className="quiz-progress-bar">
                {quizQuestions.map((_, i) => (
                  <span
                    key={i}
                    className={`quiz-step-pill ${i === currentStep ? 'active' : ''} ${i < currentStep ? 'completed' : ''}`}
                  />
                ))}
              </div>
              <span className="quiz-step-label">Step {currentStep + 1} of {quizQuestions.length}</span>
            </div>

            <div className="quiz-body">
              <h3 className="quiz-question-title">{activeQuestion.title}</h3>
              <div className="quiz-options-grid">
                {activeQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="quiz-option-button"
                    onClick={() => handleSelectOption(currentStep, option)}
                  >
                    <span className="quiz-option-indicator">✦</span>
                    <span className="quiz-option-text">{option.label}</span>
                    <span className="quiz-option-arrow">→</span>
                  </button>
                ))}
              </div>
            </div>

            {currentStep > 0 && (
              <div className="quiz-footer">
                <button
                  type="button"
                  className="quiz-back-btn"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  ← Back to previous question
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="quiz-result-container">
            <div className="quiz-result-badge">🎯 {matchPercentage}% Match Found!</div>
            <h2>We recommend: <span>{resultCourse?.title}</span></h2>
            <p className="quiz-result-lead">
              Based on your background and goals, this program offers the highest ROI, hands-on portfolio projects, and direct industry relevance for your career.
            </p>

            {resultCourse && (
              <div className="matched-course-card">
                <div className={`matched-course-art course-${resultCourse.tone}`}>
                  <img src={resultCourse.image} alt={resultCourse.title} />
                  <span className="matched-category">{resultCourse.category}</span>
                </div>
                <div className="matched-course-info">
                  <h3>{resultCourse.title}</h3>
                  <p>{resultCourse.description}</p>
                  <div className="matched-specs">
                    <span>⏱ {resultCourse.duration || '10-12 Weeks'}</span>
                    <span>★ {resultCourse.rating || '4.9'} rating</span>
                    <strong>{resultCourse.price}</strong>
                  </div>
                  <div className="matched-actions">
                    <button
                      type="button"
                      className="button button-primary"
                      onClick={() => {
                        onClose()
                        if (onSelectCourse) onSelectCourse(resultCourse)
                      }}
                    >
                      View Full Syllabus &amp; Enroll →
                    </button>
                    <button
                      type="button"
                      className="button button-secondary"
                      onClick={handleRestart}
                    >
                      ↺ Retake Quiz
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
