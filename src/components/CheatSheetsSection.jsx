import { useState } from 'react'
import { cheatSheetsData } from '../data/cheatSheetsData.js'

export function CheatSheetsSection({ onOpenSheet, onOpenAssessment, onOpenDemo }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    'All',
    'Database & Analytics',
    'Artificial Intelligence',
    'Cloud Infrastructure',
    'Programming',
  ]

  const filteredSheets = activeCategory === 'All'
    ? cheatSheetsData
    : cheatSheetsData.filter((s) => s.category === activeCategory)

  return (
    <section className="sk-cheatsheets-section section-pad" id="interview-prep">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center">
          <span className="section-pill">FREE INTERVIEW PREPARATION &amp; CHEAT SHEETS</span>
          <h2>Ace Your Technical Rounds with Curated Study Guides</h2>
          <p>
            Master high-frequency interview queries, complete AI/ML learning roadmaps, and cloud deployment commands.
            100% free to read, copy, and download.
          </p>
        </div>

        {/* Diagnostic Assessment Banner Callout */}
        <div className="assessment-callout-banner">
          <div className="assessment-callout-left">
            <span className="assessment-callout-badge">
              <span className="assessment-callout-dot" />
              <span>TEST YOUR READINESS</span>
            </span>
            <h3>Take the 5-Minute Technical Skill Assessment</h3>
            <p>
              Answer 5 rapid multiple-choice questions in Python, SQL, Cloud, or GenAI.
              Receive instant score breakdown, question explanations, and mentor guidance.
            </p>
          </div>
          <button
            type="button"
            className="assessment-callout-btn"
            onClick={onOpenAssessment}
          >
            <span>Start 5-Min Assessment</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="cheatsheets-filter-tabs" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`cheatsheet-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cheat Sheets Grid */}
        <div className="cheatsheets-grid">
          {filteredSheets.map((sheet) => (
            <article key={sheet.id} className="cheatsheet-card">
              <div className="cheatsheet-card-top">
                <div className="cheatsheet-icon-box">
                  <span>{sheet.icon}</span>
                </div>
                <div className="cheatsheet-badges-row">
                  <span className="cheatsheet-tag-badge">{sheet.tag}</span>
                  <span className="cheatsheet-downloads-badge">{sheet.downloads}</span>
                </div>
              </div>

              <div className="cheatsheet-card-content">
                <span className="cheatsheet-cat-name">{sheet.category}</span>
                <h3 className="cheatsheet-card-title">{sheet.title}</h3>
                <p className="cheatsheet-card-desc">{sheet.description}</p>

                <div className="cheatsheet-topics-list">
                  {sheet.topics.map((t) => (
                    <span key={t} className="cheatsheet-topic-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cheatsheet-card-footer">
                <button
                  type="button"
                  className="cheatsheet-read-btn"
                  onClick={() => onOpenSheet(sheet)}
                >
                  <span>Read &amp; Copy Code</span>
                  <span aria-hidden="true">→</span>
                </button>
                <button
                  type="button"
                  className="cheatsheet-preview-btn"
                  onClick={() => onOpenSheet(sheet)}
                  aria-label={`Download ${sheet.title}`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
