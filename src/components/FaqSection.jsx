import { useState } from 'react'
import { faqsData } from '../data/platformData.js'

export function FaqSection({ onOpenDemoModal }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="faq-section section-pad" id="faq">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-intro">
            <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
            <h2>Everything you need to know about our programs</h2>
            <p>
              Got questions about prerequisites, schedules, mentoring, or certificates? We’ve got clear answers for you.
            </p>
            <div className="faq-help-card">
              <h4>Still have a question?</h4>
              <p>Speak directly with an instructor or schedule a 1:1 consultation call.</p>
              {onOpenDemoModal ? (
                <button
                  type="button"
                  className="button button-primary"
                  onClick={onOpenDemoModal}
                >
                  Book Free 1:1 Consultation ↗
                </button>
              ) : (
                <a
                  href="tel:+919392732581"
                  className="button button-primary"
                >
                  Call +91 93927 32581 ↗
                </a>
              )}
            </div>
          </div>

          <div className="faq-accordion-list" role="region" aria-label="Frequently Asked Questions">
            {faqsData.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div key={faq.question} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-btn-${index}`}
                  >
                    <span className="faq-q-text">{faq.question}</span>
                    <span className="faq-icon-circle" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      className="faq-answer-panel"
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-btn-${index}`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
