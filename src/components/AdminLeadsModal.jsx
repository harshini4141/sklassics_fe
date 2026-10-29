import { useState, useEffect } from 'react'

export function AdminLeadsModal({ onClose }) {
  const [leads, setLeads] = useState([])
  const [subscribers, setSubscribers] = useState([])
  const [activeTab, setActiveTab] = useState('demos')
  const [search, setSearch] = useState('')

  const loadStoredData = () => {
    try {
      const savedLeads = JSON.parse(localStorage.getItem('sklassics_demo_leads') || '[]')
      const savedSubs = JSON.parse(localStorage.getItem('sklassics_newsletter_subs') || '[]')
      setLeads(savedLeads)
      setSubscribers(savedSubs)
    } catch {
      setLeads([])
      setSubscribers([])
    }
  }

  useEffect(() => {
    loadStoredData()
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

  const filteredLeads = leads.filter((item) => {
    const q = search.toLowerCase().trim()
    if (!q) return true
    return (
      item.name?.toLowerCase().includes(q) ||
      item.email?.toLowerCase().includes(q) ||
      item.phone?.toLowerCase().includes(q) ||
      item.courseTitle?.toLowerCase().includes(q) ||
      item.bookingRef?.toLowerCase().includes(q)
    )
  })

  const handleExportCsv = () => {
    if (activeTab === 'demos') {
      const headers = ['Booking Ref', 'Full Name', 'Phone', 'Email', 'Course', 'Preferred Batch', 'Submitted At']
      const rows = leads.map((l) => [
        l.bookingRef || '',
        `"${(l.name || '').replace(/"/g, '""')}"`,
        `"${(l.phone || '').replace(/"/g, '""')}"`,
        l.email || '',
        `"${(l.courseTitle || '').replace(/"/g, '""')}"`,
        `"${(l.batchTime || '').replace(/"/g, '""')}"`,
        l.submittedAt || '',
      ])
      const csv = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'sklassics-demo-leads.csv'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } else {
      const headers = ['Subscriber Email', 'Subscribed At']
      const rows = subscribers.map((s) => [s.email || '', s.subscribedAt || ''])
      const csv = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'sklassics-newsletter-subscribers.csv'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="leads-portal-title"
    >
      <div
        className="modal-container cheatsheet-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cheatsheet-modal-header">
          <div className="cheatsheet-header-left">
            <span className="cheatsheet-modal-tag">📊 SKLASSICS ADMISSIONS CRM</span>
            <h2 id="leads-portal-title">Admissions Leads &amp; Enquiries Dashboard</h2>
            <p>
              View, search, and export student demo bookings and newsletter signups captured on this browser.
            </p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Leads Portal"
          >
            ✕
          </button>
        </div>

        <div className="cheatsheet-controls-bar">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className={`cheatsheet-tab-btn ${activeTab === 'demos' ? 'active' : ''}`}
              onClick={() => setActiveTab('demos')}
            >
              Demo Bookings ({leads.length})
            </button>
            <button
              type="button"
              className={`cheatsheet-tab-btn ${activeTab === 'subs' ? 'active' : ''}`}
              onClick={() => setActiveTab('subs')}
            >
              Newsletter Subscribers ({subscribers.length})
            </button>
          </div>

          <div className="cheatsheet-btn-group">
            {activeTab === 'demos' && (
              <input
                type="text"
                placeholder="Search name, phone, ref..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="sk-cert-input"
                style={{ maxWidth: '210px', padding: '7px 12px' }}
              />
            )}
            <button
              type="button"
              className="cheatsheet-download-btn"
              onClick={handleExportCsv}
              disabled={(activeTab === 'demos' ? leads.length : subscribers.length) === 0}
            >
              ⬇ Export CSV (Excel)
            </button>
          </div>
        </div>

        <div className="cheatsheet-modal-body">
          {activeTab === 'demos' ? (
            filteredLeads.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '36px 16px', color: '#64748b' }}>
                <p style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>
                  No Demo Bookings Recorded Yet
                </p>
                <p style={{ fontSize: '0.86rem', margin: 0 }}>
                  When a student submits the &ldquo;Book Free Demo&rdquo; form, their enquiry and{' '}
                  <code>SK-XXXXXX</code> reference appear here automatically.
                </p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table className="sk-leads-table">
                  <thead>
                    <tr>
                      <th>Booking Ref</th>
                      <th>Student Name</th>
                      <th>Phone / WhatsApp</th>
                      <th>Email</th>
                      <th>Course</th>
                      <th>Batch Timing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead, idx) => (
                      <tr key={lead.bookingRef || idx}>
                        <td>
                          <strong>{lead.bookingRef}</strong>
                        </td>
                        <td>{lead.name}</td>
                        <td>
                          <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                        </td>
                        <td>{lead.email}</td>
                        <td>{lead.courseTitle}</td>
                        <td>{lead.batchTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          ) : subscribers.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '36px 16px', color: '#64748b' }}>
              <p style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>
                No Newsletter Subscribers Yet
              </p>
              <p style={{ fontSize: '0.86rem', margin: 0 }}>
                Emails entered in the footer newsletter bar are saved here for cohort updates.
              </p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table className="sk-leads-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Subscriber Email</th>
                    <th>Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((sub, idx) => (
                    <tr key={`${sub.email}-${idx}`}>
                      <td>{idx + 1}</td>
                      <td>
                        <strong>{sub.email}</strong>
                      </td>
                      <td>{new Date(sub.subscribedAt).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="cheatsheet-modal-footer">
          <span>All leads are stored locally &amp; can be exported to Excel/CSV anytime</span>
          <a href="tel:+919392732581" className="cheatsheet-footer-link">
            Admissions Desk: +91 93927 32581
          </a>
        </div>
      </div>
    </div>
  )
}
