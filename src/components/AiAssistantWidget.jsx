import { useState, useRef, useEffect } from 'react'

const KNOWLEDGE_BASE = [
  {
    triggers: ['beginner', 'start', 'non-it', 'zero', 'no coding', 'fresh'],
    answer:
      "If you're starting from scratch or transitioning from non-IT, our **Python for Data Beginners** and **Data Analytics Bootcamp** are ideal! They start from foundational principles with zero prerequisites and step-by-step mentor support.",
    action: { label: 'Explore Beginner Courses', type: 'navigate', href: '/courses' },
  },
  {
    triggers: ['placement', 'job', 'hire', 'career', 'interview', 'package', 'salary'],
    answer:
      'Yes! Sklassics provides end-to-end Career Assistance including 1:1 resume optimization, GitHub portfolio reviews, mock technical interviews with FAANG/Tier-1 mentors, and direct referrals to our 120+ hiring partner companies.',
    action: { label: 'Book Career Advisory Call', type: 'demo' },
  },
  {
    triggers: ['ai', 'artificial intelligence', 'gen ai', 'llm', 'machine learning'],
    answer:
      'Our **Generative AI & Data Science Masterclass** covers prompt engineering, LLM fine-tuning, RAG pipelines, LangChain, vector databases, and real deployment on AWS & Azure. You will build 4 production-grade AI applications!',
    action: { label: 'Take Career Match Quiz', type: 'advisor' },
  },
  {
    triggers: ['fee', 'cost', 'price', 'discount', 'offer', 'expensive', 'installment'],
    answer:
      'We offer flexible payment plans, zero-cost EMI options, and currently have a **Limited-Time Offer of up to 50% off** on select flagship bootcamps. You can also attend a free demo before enrolling!',
    action: { label: 'Claim 50% Off & Free Demo', type: 'demo' },
  },
  {
    triggers: ['schedule', 'timing', 'duration', 'weekend', 'live', 'flexible'],
    answer:
      'All our programs feature live mentor-led weekend batches (Saturday & Sunday) plus weekday doubt clearing sessions. Every session is recorded with lifetime access on your student dashboard.',
    action: { label: 'View Workshop Calendar', type: 'navigate', href: '/workshops' },
  },
  {
    triggers: ['certificate', 'certified', 'accredited', 'iso'],
    answer:
      'Upon graduation and capstone submission, you earn an industry-recognized, verifiable **Sklassics Certificate of Completion** shareable directly on LinkedIn and your resume.',
    action: { label: 'Learn About Us', type: 'navigate', href: '/about' },
  },
]

const QUICK_PROMPTS = [
  'Which course is best for absolute beginners?',
  'How does the 1:1 mentorship work?',
  'Do you provide job placement support?',
  'What is covered in the Generative AI course?',
  'What are the fees and discount offers?',
]

export function AiAssistantWidget({ onOpenDemoModal, onOpenAdvisorModal }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "👋 Hi there! I'm **Sklaire**, your Sklassics AI Learning Advisor. Ask me anything about our courses, career transitions, fees, or upcoming batches!",
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasUnread, setHasUnread] = useState(true)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false)
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isOpen, messages, isTyping])

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim()
    if (!query) return

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const lower = query.toLowerCase()
      let matched = KNOWLEDGE_BASE.find((item) =>
        item.triggers.some((trig) => lower.includes(trig))
      )

      let replyText = ''
      let action = null

      if (matched) {
        replyText = matched.answer
        action = matched.action
      } else {
        replyText =
          "Thanks for reaching out! Sklassics offers industry-led programs across Artificial Intelligence, Cloud Computing, Data Analytics, and Full-Stack Engineering. Would you like to speak 1:1 with an academic counselor or take our 60-second career quiz?";
        action = { label: 'Book 1:1 Demo with Mentor', type: 'demo' }
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: replyText,
          action,
        },
      ])
      setIsTyping(false)
    }, 700)
  }

  const handleActionClick = (action) => {
    if (!action) return
    if (action.type === 'demo' && onOpenDemoModal) {
      onOpenDemoModal()
      setIsOpen(false)
    } else if (action.type === 'advisor' && onOpenAdvisorModal) {
      onOpenAdvisorModal()
      setIsOpen(false)
    } else if (action.type === 'navigate' && action.href) {
      window.location.href = action.href
    }
  }

  const formatText = (content) => {
    // Basic bold parsing for **bold** text
    const parts = content.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>
      }
      return part
    })
  }

  return (
    <div className="ai-widget-container">
      {/* Floating Trigger Button */}
      <button
        type="button"
        className={`ai-widget-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close AI Advisor' : 'Open Sklaire AI Learning Advisor'}
        title="Chat with Sklaire AI Advisor"
      >
        <span className="ai-trigger-icon" aria-hidden="true">
          {isOpen ? '✕' : '✨'}
        </span>
        <span className="ai-trigger-label">Ask Sklaire AI</span>
        {hasUnread && !isOpen && <span className="ai-pulse-badge" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window" role="dialog" aria-label="Sklaire AI Learning Advisor">
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-chat-agent-info">
              <div className="ai-avatar-aura">
                <span className="ai-avatar-symbol">⚡</span>
              </div>
              <div>
                <h4>Sklaire AI Advisor</h4>
                <p className="ai-status-indicator">
                  <span className="ai-status-dot" /> Online • Ready to help
                </p>
              </div>
            </div>
            <button
              type="button"
              className="ai-chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat window"
            >
              ✕
            </button>
          </div>

          {/* Quick Prompt Chips */}
          <div className="ai-quick-prompts-bar">
            <span>Suggestions:</span>
            <div className="ai-prompts-scroll">
              {QUICK_PROMPTS.map((p, idx) => (
                <button
                  type="button"
                  key={idx}
                  className="ai-prompt-chip"
                  onClick={() => handleSend(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Message List */}
          <div className="ai-chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`ai-message-row ${msg.sender}`}>
                {msg.sender === 'bot' && (
                  <div className="ai-bot-avatar" aria-hidden="true">
                    s.
                  </div>
                )}
                <div className="ai-message-bubble">
                  <p>{formatText(msg.text)}</p>
                  {msg.action && (
                    <button
                      type="button"
                      className="ai-bubble-action-btn"
                      onClick={() => handleActionClick(msg.action)}
                    >
                      {msg.action.label} →
                    </button>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="ai-message-row bot">
                <div className="ai-bot-avatar" aria-hidden="true">
                  s.
                </div>
                <div className="ai-message-bubble typing">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form
            className="ai-chat-footer"
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
          >
            <input
              type="text"
              placeholder="Ask about courses, career paths, fees..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Your question for Sklaire AI"
            />
            <button type="submit" disabled={!input.trim()} aria-label="Send message">
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
