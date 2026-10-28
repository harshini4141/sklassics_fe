import { useState, useEffect } from 'react'

export function BookDemoModal({ selectedCourse, coursesList = [], onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [courseTitle, setCourseTitle] = useState(
    selectedCourse?.title || coursesList[0]?.title || 'Artificial Intelligence'
  )
  const [batchTime, setBatchTime] = useState('Weekday Evening (8:00 PM – 9:30 PM)')
  const [bookingRef, setBookingRef] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !phone.trim()) return

    const refId = `SK-${Math.floor(100000 + Math.random() * 900000)}`
    setBookingRef(refId)

    // Persist lead enquiry locally for CRM / offline reliability
    try {
      const existingLeads = JSON.parse(localStorage.getItem('sklassics_demo_leads') || '[]')
      const newLead = {
        bookingRef: refId,
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        courseTitle,
        batchTime,
        submittedAt: new Date().toISOString(),
      }
      localStorage.setItem('sklassics_demo_leads', JSON.stringify([newLead, ...existingLeads]))
    } catch {
      // Ignore storage quota errors in private browsing
    }

    setIsSubmitted(true)
  }

  const handleDownloadPass = () => {
    const passContent = [
      '==========================================================',
      '        SKLASSICS TECHNOLOGIES - DEMO BOOKING PASS        ',
      '==========================================================',
      `Booking Reference : ${bookingRef}`,
      `Student Name      : ${name}`,
      `Registered Phone  : ${phone}`,
      `Registered Email  : ${email}`,
      `Selected Program  : ${courseTitle}`,
      `Preferred Batch   : ${batchTime}`,
      '----------------------------------------------------------',
      'Next Step:',
      'Our Academic Counselor will share your Google Meet link',
      'via WhatsApp/Email within 2 business hours.',
      'Admissions Helpline: +91 93927 32581 | info@sklassics.com',
      '==========================================================',
    ].join('\n')

    const blob = new Blob([passContent], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `Sklassics-Demo-Pass-${bookingRef}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const whatsappMessage = `Hi Sklassics Admissions! I just booked a Free 1:1 Demo Session.\n\n*Booking Ref:* ${bookingRef}\n*Name:* ${name}\n*Course:* ${courseTitle}\n*Batch:* ${batchTime}\n*Email:* ${email}\n*Phone:* ${phone}`

  const mailtoUrl = `mailto:info@sklassics.com?subject=${encodeURIComponent(
    `[Demo Booking ${bookingRef}] ${courseTitle} - ${name}`
  )}&body=${encodeURIComponent(whatsappMessage.replace(/\*/g, ''))}`

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div className="modal-container demo-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <>
            <div className="demo-modal-header">
              <span className="demo-kicker">✦ FREE 1:1 MENTOR SESSION</span>
              <h2 id="demo-modal-title">Book a Free Live Demo &amp; Counseling Session</h2>
              <p>
                Experience our live interactive teaching style, talk with our curriculum mentor, and
                find the perfect learning path for your career goals.
              </p>
            </div>

            <form className="demo-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="demo-name">Full Name *</label>
                <input
                  id="demo-name"
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="demo-phone">WhatsApp / Phone Number *</label>
                  <input
                    id="demo-phone"
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="demo-email">Email Address *</label>
                  <input
                    id="demo-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="demo-course">Course of Interest</label>
                <select
                  id="demo-course"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                >
                  {coursesList.map((c) => (
                    <option key={c.title} value={c.title}>
                      {c.title} ({c.price})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="demo-batch">Preferred Batch Timing</label>
                <select
                  id="demo-batch"
                  value={batchTime}
                  onChange={(e) => setBatchTime(e.target.value)}
                >
                  <option value="Weekday Evening (8:00 PM – 9:30 PM)">
                    Weekday Evening (8:00 PM – 9:30 PM)
                  </option>
                  <option value="Weekend Morning (10:00 AM – 1:00 PM)">
                    Weekend Morning (10:00 AM – 1:00 PM)
                  </option>
                  <option value="Self-Paced with 1:1 Live Doubts">
                    Self-Paced with 1:1 Live Doubts
                  </option>
                </select>
              </div>

              <div className="demo-perks">
                <span>✓ 100% Free Session</span>
                <span>✓ Live Q&amp;A with Instructor</span>
                <span>✓ Customized Career Roadmap</span>
              </div>

              <button type="submit" className="button button-primary demo-submit-button">
                Confirm My Free Demo Session →
              </button>
            </form>
          </>
        ) : (
          <div className="demo-success-state">
            <div className="success-badge-icon">🎉</div>
            <h2>Demo Confirmed, {name}!</h2>
            <p className="success-lead">
              We have reserved your free demo session for <strong>{courseTitle}</strong>.
            </p>
            <div className="success-summary-box">
              <div>
                <span>Booking Reference:</span>
                <strong>{bookingRef}</strong>
              </div>
              <div>
                <span>Selected Course:</span>
                <strong>{courseTitle}</strong>
              </div>
              <div>
                <span>Preferred Timing:</span>
                <strong>{batchTime}</strong>
              </div>
              <div>
                <span>Registered Contact:</span>
                <strong>
                  {email} &amp; {phone}
                </strong>
              </div>
            </div>
            <p className="success-note">
              Our academic counselor will connect with you via WhatsApp/call within 2 business hours
              with your Google Meet access link.
            </p>
            <div className="success-actions" style={{ flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/919392732581?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="button button-whatsapp"
              >
                💬 Send Slot Details on WhatsApp
              </a>
              <a href={mailtoUrl} className="button button-secondary">
                ✉️ Send via Email
              </a>
              <button
                type="button"
                className="button button-secondary"
                onClick={handleDownloadPass}
              >
                ⬇ Download Booking Pass
              </button>
              <button type="button" className="button button-secondary" onClick={onClose}>
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
