import { useState, useEffect } from 'react'
import { assessmentTracks } from '../data/assessmentData.js'

export function SkillAssessmentModal({ onClose, onBookDemo }) {
  const [selectedTrackId, setSelectedTrackId] = useState(assessmentTracks[0].id)
  const [currentStep, setCurrentStep] = useState('choose_track') // 'choose_track' | 'in_quiz' | 'results'
  const [questionIndex, setQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [showExplanation, setShowExplanation] = useState(false)

  const activeTrack = assessmentTracks.find((t) => t.id === selectedTrackId) || assessmentTracks[0]
  const currentQuestion = activeTrack.questions[questionIndex]

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

  const handleStartQuiz = (trackId) => {
    setSelectedTrackId(trackId)
    setUserAnswers({})
    setQuestionIndex(0)
    setShowExplanation(false)
    setCurrentStep('in_quiz')
  }

  const handleSelectAnswer = (optionIdx) => {
    if (userAnswers[questionIndex] !== undefined) return // already answered
    setUserAnswers({ ...userAnswers, [questionIndex]: optionIdx })
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    setShowExplanation(false)
    if (questionIndex < activeTrack.questions.length - 1) {
      setQuestionIndex(questionIndex + 1)
    } else {
      setCurrentStep('results')
    }
  }

  // Calculate score
  const correctCount = activeTrack.questions.reduce((acc, q, idx) => {
    return userAnswers[idx] === q.correctAnswer ? acc + 1 : acc
  }, 0)
  const percentage = Math.round((correctCount / activeTrack.questions.length) * 100)

  let badgeLabel = 'Foundational Learner'
  let badgeTone = '#f59e0b'
  if (percentage >= 80) {
    badgeLabel = 'Advanced Ready'
    badgeTone = '#10b981'
  } else if (percentage >= 60) {
    badgeLabel = 'Intermediate Ready'
    badgeTone = '#4b0055'
  }

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="assessment-modal-title"
    >
      <div
        className="modal-container assessment-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="assessment-modal-header">
          <div className="assessment-modal-header-info">
            <span className="assessment-tag">
              <span className="assessment-dot" />
              <span>5-MIN TECHNICAL ASSESSMENT</span>
            </span>
            <h2 id="assessment-modal-title">
              {currentStep === 'choose_track' && 'Choose Your Technical Track'}
              {currentStep === 'in_quiz' && `${activeTrack.title} Assessment`}
              {currentStep === 'results' && 'Your Skill Assessment Report'}
            </h2>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Assessment"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="assessment-modal-body">
          {/* STEP 1: CHOOSE TRACK */}
          {currentStep === 'choose_track' && (
            <div className="assessment-track-grid">
              <p className="assessment-intro-text">
                Select your focus area to start a rapid 5-question multiple-choice diagnostic.
                Evaluate your syntax, logic, and systems knowledge with instant answer explanations.
              </p>
              <div className="tracks-list">
                {assessmentTracks.map((track) => (
                  <div
                    key={track.id}
                    className="track-card"
                    onClick={() => handleStartQuiz(track.id)}
                  >
                    <div className="track-card-top">
                      <span className="track-icon">{track.icon}</span>
                      <span className="track-badge">{track.badge}</span>
                    </div>
                    <h3>{track.title}</h3>
                    <p>{track.description}</p>
                    <div className="track-card-bottom">
                      <span>5 Questions · 5 Mins</span>
                      <button type="button" className="track-start-btn">
                        <span>Start Test</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: IN QUIZ */}
          {currentStep === 'in_quiz' && (
            <div className="assessment-quiz-flow">
              {/* Progress Bar */}
              <div className="quiz-progress-row">
                <div className="quiz-progress-text">
                  <span>Question {questionIndex + 1} of {activeTrack.questions.length}</span>
                  <span>{Math.round(((questionIndex + 1) / activeTrack.questions.length) * 100)}% Complete</span>
                </div>
                <div className="quiz-progress-track">
                  <div
                    className="quiz-progress-fill"
                    style={{ width: `${((questionIndex + 1) / activeTrack.questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Box */}
              <div className="quiz-question-card">
                <h3 className="quiz-question-title">{currentQuestion.question}</h3>

                <div className="quiz-options-list">
                  {currentQuestion.options.map((opt, oIdx) => {
                    const isSelected = userAnswers[questionIndex] === oIdx
                    const isAnswered = userAnswers[questionIndex] !== undefined
                    const isCorrect = oIdx === currentQuestion.correctAnswer

                    let optClass = 'quiz-option'
                    if (isAnswered) {
                      if (isCorrect) optClass += ' option-correct'
                      else if (isSelected) optClass += ' option-wrong'
                    }

                    return (
                      <button
                        key={opt}
                        type="button"
                        className={optClass}
                        disabled={isAnswered}
                        onClick={() => handleSelectAnswer(oIdx)}
                      >
                        <span className="opt-letter">{String.fromCharCode(65 + oIdx)}</span>
                        <span className="opt-text">{opt}</span>
                        {isAnswered && isCorrect && <span className="opt-status-icon">✓</span>}
                        {isAnswered && isSelected && !isCorrect && <span className="opt-status-icon">✕</span>}
                      </button>
                    )
                  })}
                </div>

                {/* Explanation Card */}
                {showExplanation && (
                  <div className="quiz-explanation-box">
                    <strong>
                      {userAnswers[questionIndex] === currentQuestion.correctAnswer
                        ? '✅ Correct!'
                        : '❌ Incorrect'}
                    </strong>
                    <p>{currentQuestion.explanation}</p>
                    <button
                      type="button"
                      className="quiz-next-btn"
                      onClick={handleNextQuestion}
                    >
                      <span>{questionIndex < activeTrack.questions.length - 1 ? 'Next Question →' : 'View Results →'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: RESULTS */}
          {currentStep === 'results' && (
            <div className="assessment-results-card">
              <div className="results-header">
                <div className="results-score-circle" style={{ borderColor: badgeTone }}>
                  <strong>{correctCount}/{activeTrack.questions.length}</strong>
                  <small>{percentage}% Score</small>
                </div>
                <div className="results-meta">
                  <span className="results-badge" style={{ backgroundColor: badgeTone, color: '#fff' }}>
                    {badgeLabel}
                  </span>
                  <h3>You scored {percentage}% in {activeTrack.title}</h3>
                  <p>
                    {percentage >= 80
                      ? 'Exceptional grasp of core concepts! You are well-positioned for advanced industrial projects and leadership tracks.'
                      : percentage >= 60
                      ? 'Solid foundation! With mentor-guided production practice, you can quickly advance to enterprise-ready competencies.'
                      : 'Good starting effort! A structured mentor-led learning track will help you master these concepts with hands-on labs.'}
                  </p>
                </div>
              </div>

              {/* Course Recommendation Box */}
              <div className="results-rec-box">
                <div className="rec-copy">
                  <span className="rec-eyebrow">RECOMMENDED NEXT STEP</span>
                  <h4>{activeTrack.recommendedCourse}</h4>
                  <p>
                    Master these skills with real-world capstone projects, 1:1 mentor code reviews, and placement assistance.
                  </p>
                </div>
                <button
                  type="button"
                  className="rec-action-btn"
                  onClick={() => {
                    onClose()
                    if (onBookDemo) {
                      onBookDemo({
                        title: activeTrack.recommendedCourse,
                        id: activeTrack.courseId,
                      })
                    }
                  }}
                >
                  <span>Book Free 1:1 Mentor Review</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="results-actions">
                <button
                  type="button"
                  className="btn-restart-quiz"
                  onClick={() => handleStartQuiz(selectedTrackId)}
                >
                  🔄 Retake Assessment
                </button>
                <button
                  type="button"
                  className="btn-switch-track"
                  onClick={() => setCurrentStep('choose_track')}
                >
                  Explore Other Tracks
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
