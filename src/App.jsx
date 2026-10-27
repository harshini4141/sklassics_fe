import { useEffect, useState } from 'react'
import './App.css'
import './features.css'
import './three-d-effects.css'
import './official-styles.css'
import { OfficialNavbar } from './components/OfficialNavbar.jsx'
import { OfficialHero } from './components/OfficialHero.jsx'
import { OfficialRating } from './components/OfficialRating.jsx'
import { OfficialUs } from './components/OfficialUs.jsx'
import { OfficialFooter } from './components/OfficialFooter.jsx'
import { allCoursesData } from './data/coursesData.js'
import { CourseModal } from './components/CourseModal.jsx'
import { BookDemoModal } from './components/BookDemoModal.jsx'
import { CareerAdvisorModal } from './components/CareerAdvisorModal.jsx'
import { TestimonialsSection } from './components/TestimonialsSection.jsx'
import { FaqSection } from './components/FaqSection.jsx'
import { ThemeToggle } from './components/ThemeToggle.jsx'
import { QuickAdvisorWidget } from './components/QuickAdvisorWidget.jsx'
import { SalaryCalculator } from './components/SalaryCalculator.jsx'
import { ProjectShowcase } from './components/ProjectShowcase.jsx'
import { HeroConsoleCard } from './components/HeroConsoleCard.jsx'
import { HiringPartnersBanner } from './components/HiringPartnersBanner.jsx'
import { CareerTracksSection } from './components/CareerTracksSection.jsx'
import { ProfessionalCertificate } from './components/ProfessionalCertificate.jsx'
import { SkillAssessmentModal } from './components/SkillAssessmentModal.jsx'
import { CheatSheetsSection } from './components/CheatSheetsSection.jsx'
import { CheatSheetModal } from './components/CheatSheetModal.jsx'
import aiCourseImage from './assets/courses/artificial-intelligence.webp'
import bigDataCourseImage from './assets/courses/big-data-analytics.webp'
import businessAnalyticsCourseImage from './assets/courses/business-analytics.webp'
import dataAnalyticsCourseImage from './assets/courses/data-analytics.webp'
import dataScienceCourseImage from './assets/courses/data-science.webp'
import dataScienceGenAiCourseImage from './assets/courses/data-science-gen-ai.png'
import aboutHeroImage from './assets/about/aboutus.jpg'
import journey2024Image from './assets/about/journey-2024.jpg'
import coreInnovationImage from './assets/about/core-innovation.jpg'
import coreExcellenceImage from './assets/about/core-excellence.jpg'
import coreStudentCenteredImage from './assets/about/core-student-centered.jpg'
import coreImprovementImage from './assets/about/core-improvement.jpg'

const courses = allCoursesData.slice(0, 8)
const additionalCourses = allCoursesData.slice(8)

const workshops = [
  {
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'Generative AI in Practice',
    description:
      'Explore generative AI tools and workflows, then apply them to practical tasks through guided exercises.',
    format: 'Live, mentor-led',
    image: dataScienceGenAiCourseImage,
    tone: 'violet',
  },
  {
    category: 'DATA & ANALYTICS',
    title: 'Build Your First Power BI Dashboard',
    description:
      'Turn a raw dataset into a clear, interactive dashboard using data modeling and visualization basics.',
    format: 'Hands-on workshop',
    image: dataAnalyticsCourseImage,
    tone: 'blue',
  },
  {
    category: 'PROGRAMMING',
    title: 'Python for Data Beginners',
    description:
      'Practice Python essentials for working with data, from variables and collections to simple analysis.',
    format: 'Guided lab',
    image: dataScienceCourseImage,
    tone: 'orange',
  },
  {
    category: 'CLOUD COMPUTING',
    title: 'Cloud Computing Foundations',
    description:
      'Get familiar with core cloud concepts, common services, and the building blocks of deployment.',
    format: 'Interactive session',
    image: bigDataCourseImage,
    tone: 'green',
  },
  {
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'Machine Learning Starter Lab',
    description:
      'Discover how machine learning models learn from data and walk through a beginner-friendly model workflow.',
    format: 'Project-based lab',
    image: aiCourseImage,
    tone: 'violet',
  },
  {
    category: 'DATA & ANALYTICS',
    title: 'Data Storytelling Essentials',
    description:
      'Find the signal in a dataset and practice communicating useful insights with clear visual stories.',
    format: 'Practical workshop',
    image: businessAnalyticsCourseImage,
    tone: 'orange',
  },
]

const blogPosts = [
  {
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'A beginner-friendly way to start learning generative AI',
    excerpt:
      'You do not need to know everything about AI to begin. Start with a small problem, learn how to give clear instructions, and check the output carefully.',
    image: dataScienceGenAiCourseImage,
    tone: 'violet',
    content: [
      'Generative AI is easier to understand when you treat it as a practical tool rather than a subject you must master all at once. Begin with a task you already understand, such as summarizing notes or organizing ideas.',
      'Write specific instructions, review the result, and improve your prompt when the answer misses important context. Keep private or sensitive information out of public tools, and verify facts before using generated content.',
      'Once the basics feel familiar, try a small project that combines a few steps. Document what worked, where the tool struggled, and how you checked the final result.',
    ],
  },
  {
    category: 'DATA & ANALYTICS',
    title: 'From raw data to a useful dashboard: where to begin',
    excerpt:
      'A strong dashboard starts before the first chart. Define the question, check the data, and choose visuals that help someone decide what to do next.',
    image: dataAnalyticsCourseImage,
    tone: 'blue',
    content: [
      'Before building a dashboard, write down the decision it should support. A clear question helps you decide which data matters and which metrics are only adding noise.',
      'Check for missing values, inconsistent categories, and duplicate records before you visualize anything. Then choose a small set of charts that make comparisons and trends easy to understand.',
      'Ask someone unfamiliar with the data to read the dashboard. If they cannot explain the main takeaway quickly, simplify the layout and make labels more descriptive.',
    ],
  },
  {
    category: 'PROGRAMMING',
    title: 'How to make your first Python projects easier to finish',
    excerpt:
      'Small, complete projects teach more than ambitious unfinished ones. Choose a single useful outcome, break it into steps, and improve it one feature at a time.',
    image: dataScienceCourseImage,
    tone: 'orange',
    content: [
      'Pick a project with a clear finish line: for example, a script that cleans a file or organizes a list. Keep the first version small enough to complete in one sitting.',
      'Break the goal into tiny steps and test each one as you go. When something fails, read the error message, check the values involved, and reduce the problem to a smaller example.',
      'After the core version works, add one improvement at a time. A finished project with a clear README is a useful portfolio piece and a strong base for your next idea.',
    ],
  },
  {
    category: 'CAREER GROWTH',
    title: 'Build a tech portfolio that shows how you think',
    excerpt:
      'A portfolio is more than a collection of screenshots. Show the problem, your choices, what you learned, and how someone can explore the result.',
    image: businessAnalyticsCourseImage,
    tone: 'green',
    content: [
      'Choose projects that demonstrate different skills and explain why each project matters. A small, well-described project can communicate more than a long list of tools.',
      'For each project, describe the original problem, the approach you chose, and one challenge you worked through. Include a short demo or screenshots when they help someone understand the result.',
      'Keep links current and make it easy to find the code or project overview. Update your portfolio as your skills grow, and be honest about which parts you built and what you learned.',
    ],
  },
  {
    category: 'DATA SCIENCE',
    title: 'Why data cleaning belongs in every data science workflow',
    excerpt:
      'Reliable analysis begins with understanding the dataset. A few careful checks can prevent misleading results later in the process.',
    image: bigDataCourseImage,
    tone: 'violet',
    content: [
      'Real-world data often contains gaps, inconsistent formats, duplicates, and values that need context. These are not just cosmetic issues: they can change the conclusions an analysis appears to support.',
      'Start by inspecting the shape of the dataset, the meaning of each field, and the range of values. Record any assumptions you make when correcting or excluding data.',
      'After cleaning, compare the updated data with the original and check that the transformations did what you intended. Transparent notes make your analysis easier to review and reproduce.',
    ],
  },
  {
    category: 'LEARNING TIPS',
    title: 'A simple weekly routine for learning a new technical skill',
    excerpt:
      'Consistent practice is easier to sustain when it has a small, repeatable structure: learn a concept, use it, then reflect on what to try next.',
    image: coreInnovationImage,
    tone: 'blue',
    content: [
      'Set a realistic weekly target, such as completing one lesson and using the idea in a short exercise. A modest routine you can repeat is more useful than a plan that depends on finding a perfect free day.',
      'Reserve time to practice without following a tutorial line by line. Try to explain the concept in your own words and note where you get stuck.',
      'At the end of the week, write down what you completed and choose one next step. This makes progress visible and helps you pick up again without starting over.',
    ],
  },
]

const normalizePath = (path = '/') => {
  if (typeof path !== 'string') return '/'
  const clean = path.split('?')[0].split('#')[0]
  const normalized = clean.replace(/\/+$/, '')
  return normalized === '' ? '/' : normalized
}

const benefits = [
  {
    icon: '◷',
    title: '24 × 7 Support',
    text: 'Always available assistance for users.',
    tone: 'violet',
  },
  {
    icon: '★',
    title: '4.8/5 Learner Rating',
    text: 'Trusted and highly rated learning experience.',
    tone: 'orange',
  },
  {
    icon: '↗',
    title: 'Learn on the Go',
    text: 'Access learning materials anytime, anywhere.',
    tone: 'blue',
  },
  {
    icon: '✓',
    title: 'Career Assistance',
    text: 'Guidance and support for career growth.',
    tone: 'green',
  },
]

const galleryMoments = [
  { number: '01', title: 'Learning in Action', detail: 'Hands-on learning, guided by industry mentors', image: courses[0].image },
  { number: '02', title: 'Campus Moments', detail: 'Big ideas begin with great conversations', image: courses[1].image },
  { number: '03', title: 'Workshop Highlights', detail: 'Real skills, practiced together', image: courses[2].image },
  { number: '04', title: 'Sklassics on Campus', detail: 'Connecting learners with industry-focused learning', image: courses[3].image },
  { number: '05', title: 'Student Engagement', detail: 'A community that learns by doing', image: courses[4].image },
  { number: '06', title: 'Campus Connections', detail: 'Learning paths built around real opportunities', image: courses[5].image },
  { number: '07', title: 'Training Highlights', detail: 'Practical skills for a changing tech world', image: courses[6].image },
  { number: '08', title: 'Our Journey', detail: 'Learn, build, and grow with Sklassics', image: courses[7].image },
]

const journeyItems = [
  {
    year: '2021',
    title: 'The Beginning of Sklassics Academy',
    description:
      'Founded with the vision to make quality education accessible to all, Sklassics Academy started its journey by offering workshops and foundational courses in various disciplines.',
    image: aboutHeroImage,
    imageAlt: 'A learner exploring technology and education',
  },
  {
    year: '2022',
    title: 'Course Expansion & Community Growth',
    description:
      'Sklassics expanded its offerings to include full-fledged programs in Web Development, Data Science, and more. The community began to grow rapidly with learners nationwide.',
    image: dataScienceCourseImage,
    imageAlt: 'Data science and technology learning',
  },
  {
    year: '2023',
    title: 'LMS Launch & CMS Integration',
    description:
      'A major milestone: Sklassics launched its Learning Management System with a custom CMS, enabling teams to manage courses, batches, and content seamlessly.',
    image: bigDataCourseImage,
    imageAlt: 'Digital systems and data technology',
  },
  {
    year: '2024',
    title: 'AI Integration & Future Vision',
    description:
      'With AI-powered chatbots and personalized recommendations, Sklassics offers tailored learning experiences and continues to innovate in education delivery.',
    image: journey2024Image,
    imageAlt: 'AI integration and the future of learning',
  },
]

const coreValues = [
  { title: 'Innovation in Learning', image: coreInnovationImage },
  { title: 'Commitment to Excellence', image: coreExcellenceImage },
  { title: 'Student-Centered Approach', image: coreStudentCenteredImage },
  { title: 'Continuous Improvement', image: coreImprovementImage },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      <path d="M4 10h11M10 5l5 5-5 5" />
    </svg>
  )
}

function AboutPage({ onOpenDemoModal }) {
  const [activeJourney, setActiveJourney] = useState(0)
  const journey = journeyItems[activeJourney]

  return (
    <div className="site-shell about-page-shell">
      <OfficialNavbar currentPath="/about" onOpenDemoModal={onOpenDemoModal} />

      <main className="about-page">
        <section className="about-page-hero">
          <div className="container about-hero-layout">
            <div className="about-hero-copy">
              <p className="eyebrow">ABOUT US</p>
              <h1>Empowering learners to achieve excellence through <span>quality education.</span></h1>
              <p>Sklassics Academy delivers top-quality education through innovative courses, personalized learning paths, and expert mentorship. We make learning accessible, engaging, and impactful.</p>
              <a className="button button-primary" href="/courses">Explore Courses <ArrowIcon /></a>
            </div>
            <div className="about-hero-image-wrap">
              <img src={aboutHeroImage} alt="Learners exploring technology and education" />
              <span className="about-image-badge"><b>Learn.</b> Build. Grow.</span>
            </div>
          </div>
        </section>

        <section className="about-story-section">
          <div className="container">
            <div className="about-story-heading">
              <p className="eyebrow">OUR PURPOSE</p>
              <h2>Built for passionate learners,<br /><span>guided by experts.</span></h2>
            </div>
            <div className="about-story-content">
              <div className="about-story-copy">
                <p>We transform education with expert-led training, practical skills, and real-world application.</p>
                <p>Our programs span fundamentals to advanced topics—co-designed with industry to build confidence through practice.</p>
                <p>With hands-on projects, mentorship, and community learning, we help you grow your career.</p>
              </div>
              <div className="about-page-stats" aria-label="Sklassics in numbers">
                <article><strong>1,000<span>+</span></strong><p>Students trained in IT and software development.</p></article>
                <article><strong>25<span>+</span></strong><p>Expert instructors with real-world experience.</p></article>
                <article><strong>30<span>+</span></strong><p>Career-focused courses for skills and certification.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section className="about-journey-section">
          <div className="container">
            <div className="about-section-heading">
              <p className="eyebrow">OUR JOURNEY</p>
              <h2>The story of Sklassics Academy</h2>
              <p>From a small idea to a thriving platform—grown by innovation, community, and a passion for learning.</p>
            </div>
            <div className="journey-card">
              <div className="journey-years" role="tablist" aria-label="Sklassics journey by year">
                {journeyItems.map((item, index) => (
                  <button
                    key={item.year}
                    id={`journey-tab-${item.year}`}
                    type="button"
                    role="tab"
                    aria-selected={activeJourney === index}
                    aria-controls="journey-panel"
                    className={activeJourney === index ? 'active' : ''}
                    onClick={() => setActiveJourney(index)}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
              <article className="journey-panel" id="journey-panel" role="tabpanel" aria-labelledby={`journey-tab-${journey.year}`}>
                <div className="journey-image">
                  <img key={journey.year} src={journey.image} alt={journey.imageAlt} />
                  <span>{journey.year}</span>
                </div>
                <div className="journey-copy">
                  <p className="eyebrow">A MILESTONE IN OUR STORY</p>
                  <h3>{journey.title}</h3>
                  <p>{journey.description}</p>
                  <div className="journey-progress" aria-hidden="true">
                    {journeyItems.map((item, index) => <span key={item.year} className={index <= activeJourney ? 'complete' : ''} />)}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about-values-section">
          <div className="container">
            <div className="about-section-heading">
              <p className="eyebrow">WHAT GUIDES US</p>
              <h2>Our core values</h2>
              <p>The principles behind every course, conversation, and learner success story.</p>
            </div>
            <div className="about-values-grid">
              {coreValues.map((value, index) => (
                <article className="about-value-card" key={value.title}>
                  <img src={value.image} alt="" />
                  <div><span>0{index + 1}</span><h3>{value.title}</h3></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <OfficialFooter onOpenDemoModal={onOpenDemoModal} />
    </div>
  )
}

function CoursesPage({ onOpenCourseModal, onOpenDemoModal, onOpenAdvisorModal }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All courses')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const closeMenu = () => setMenuOpen(false)

  const catalog = allCoursesData
  const categories = ['All courses', ...new Set(catalog.map((course) => course.category))]

  const filteredCourses = catalog.filter((course) => {
    const matchesCategory = activeCategory === 'All courses' || course.category === activeCategory
    const q = searchQuery.toLowerCase().trim()
    const matchesSearch =
      !q ||
      course.title.toLowerCase().includes(q) ||
      course.category.toLowerCase().includes(q) ||
      course.description.toLowerCase().includes(q) ||
      (course.tools && course.tools.some((t) => t.toLowerCase().includes(q)))

    const matchesLevel =
      selectedLevel === 'all' ||
      (selectedLevel === 'beginner' && (course.level?.toLowerCase().includes('beginner') || course.level?.toLowerCase().includes('zero'))) ||
      (selectedLevel === 'intermediate' && course.level?.toLowerCase().includes('intermediate'))

    return matchesCategory && matchesSearch && matchesLevel
  })

  const visibleCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'price-asc') {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ''), 10) || 0
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ''), 10) || 0
      return priceA - priceB
    }
    if (sortBy === 'price-desc') {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ''), 10) || 0
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ''), 10) || 0
      return priceB - priceA
    }
    return 0
  })

  return (
    <div className="site-shell courses-page-shell">
      <OfficialNavbar currentPath="/courses" onOpenDemoModal={onOpenDemoModal} />

      <main className="courses-page">
        <section className="courses-page-hero">
          <div className="container courses-page-hero-layout">
            <div className="courses-page-copy">
              <p className="eyebrow">LEARN. BUILD. GROW.</p>
              <h1>Find the skills to <span>move your career forward.</span></h1>
              <p>Explore practical, mentor-led programs in AI, data, analytics, and programming. Choose a learning path and start building skills you can use.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
                <a className="button button-primary" href="#course-catalog">Explore our courses <ArrowIcon /></a>
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => onOpenAdvisorModal && onOpenAdvisorModal()}
                >
                  Find My Path Quiz 🎯
                </button>
              </div>
              <div className="courses-page-proof" aria-label="Course catalog facts">
                <span><strong>{catalog.length}+</strong> learning paths</span>
                <i aria-hidden="true" />
                <span><strong>Project-led</strong> learning</span>
                <i aria-hidden="true" />
                <span><strong>Expert</strong> mentorship</span>
              </div>
            </div>
            <div className="courses-page-art" aria-hidden="true">
              <div className="courses-art-orbit courses-art-orbit-one" />
              <div className="courses-art-orbit courses-art-orbit-two" />
              <div className="courses-art-center"><span>SK</span><b>LEARN<br />BY DOING</b></div>
              <span className="courses-art-chip courses-art-chip-ai">✦ Artificial Intelligence</span>
              <span className="courses-art-chip courses-art-chip-data">▥ Data & Analytics</span>
              <span className="courses-art-chip courses-art-chip-code">{'{ }'} Programming</span>
              <span className="courses-art-spark courses-art-spark-one">✦</span>
              <span className="courses-art-spark courses-art-spark-two">✧</span>
            </div>
          </div>
        </section>

        <section className="courses-catalog-section" id="course-catalog">
          <div className="container">
            <div className="quiz-teaser-banner">
              <div className="quiz-teaser-copy">
                <span className="quiz-teaser-tag">✦ NOT SURE WHICH PATH FITS YOU?</span>
                <h3>Take the 60-Second Career Match Quiz</h3>
                <p>Tell us your background and goals, and we&apos;ll recommend the curriculum with the highest hiring potential for you.</p>
              </div>
              <button
                type="button"
                className="quiz-teaser-btn"
                onClick={() => onOpenAdvisorModal && onOpenAdvisorModal()}
              >
                Start Career Matcher 🎯
              </button>
            </div>

            <div className="courses-catalog-heading">
              <div>
                <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
                <h2>Explore our courses</h2>
                <p>Choose a subject, search by skill, or filter by your current experience level.</p>
              </div>
              <span className="courses-result-count" aria-live="polite">{visibleCourses.length} courses</span>
            </div>

            <div className="courses-filter-hub">
              <div className="search-input-wrap">
                <span className="search-icon" aria-hidden="true">🔍</span>
                <input
                  type="text"
                  className="courses-search-input"
                  placeholder="Search by topic, skill, or tool (e.g. Python, AI, SQL, AWS)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search courses"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="search-clear-btn"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="filter-selects-group">
                <select
                  className="filter-select"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  aria-label="Filter by difficulty level"
                >
                  <option value="all">All Difficulty Levels</option>
                  <option value="beginner">Beginner Friendly</option>
                  <option value="intermediate">Intermediate &amp; Advanced</option>
                </select>

                <select
                  className="filter-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Sort courses by"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>

                {(searchQuery || selectedLevel !== 'all' || activeCategory !== 'All courses' || sortBy !== 'featured') && (
                  <button
                    type="button"
                    className="reset-filters-btn"
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedLevel('all')
                      setActiveCategory('All courses')
                      setSortBy('featured')
                    }}
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            <div className="courses-category-list" aria-label="Filter courses by category">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={activeCategory === category ? 'active' : ''}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {visibleCourses.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-card, #f8f7fc)', borderRadius: '16px', margin: '20px 0' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '12px' }}>🔍</span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>No courses match your search</h3>
                <p style={{ color: '#686584', maxWidth: '450px', margin: '0 auto 16px' }}>
                  Try adjusting your search terms or clearing your filters to see all available learning paths.
                </p>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedLevel('all')
                    setActiveCategory('All courses')
                  }}
                >
                  Show All Courses
                </button>
              </div>
            ) : (
              <div className="course-grid courses-page-grid">
                {visibleCourses.map((course) => (
                  <article
                    className="course-card"
                    id={`course-${course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    key={course.title}
                  >
                    <div className={`course-art course-${course.tone}`}>
                      <img className="course-image" src={course.image} alt={`${course.title} course`} />
                      <span className="courses-card-category">{course.category}</span>
                    </div>
                    <div className="course-card-content">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span className="card-duration-badge">⏱ {course.duration || '8-12 Weeks'}</span>
                        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f59e0b' }}>★ {course.rating || '4.9'}</span>
                      </div>
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>
                      {course.tools && course.tools.length > 0 && (
                        <div className="card-tool-chips">
                          {course.tools.slice(0, 3).map((t) => (
                            <span key={t} className="mini-tool-chip">{t}</span>
                          ))}
                          {course.tools.length > 3 && (
                            <span className="mini-tool-chip">+{course.tools.length - 3}</span>
                          )}
                        </div>
                      )}
                      <div className="courses-card-meta">
                        <span className="course-price">{course.price}</span>
                        <span>Mentor-led learning</span>
                      </div>
                      <div className="course-card-actions">
                        <button
                          type="button"
                          className="btn-syllabus"
                          onClick={() => onOpenCourseModal && onOpenCourseModal(course)}
                        >
                          📖 Syllabus
                        </button>
                        <button
                          type="button"
                          className="btn-enquire"
                          onClick={() => onOpenDemoModal && onOpenDemoModal(course)}
                        >
                          Book Demo →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="courses-page-cta">
          <div className="container courses-page-cta-inner">
            <div>
              <p className="eyebrow">NOT SURE WHERE TO START?</p>
              <h2>Let’s find the right path for you.</h2>
              <p>Tell us what you want to learn, and our team can help you choose a course.</p>
            </div>
            <button
              type="button"
              className="button button-primary"
              onClick={() => onOpenDemoModal && onOpenDemoModal()}
            >
              Talk to our team <ArrowIcon />
            </button>
          </div>
        </section>

        <FaqSection onOpenDemoModal={onOpenDemoModal} />
      </main>

      <OfficialFooter onOpenDemoModal={onOpenDemoModal} />
    </div>
  )
}

function WorkshopsPage({ onOpenDemoModal }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All workshops')
  const closeMenu = () => setMenuOpen(false)
  const categories = ['All workshops', ...new Set(workshops.map((workshop) => workshop.category))]
  const visibleWorkshops = activeCategory === 'All workshops'
    ? workshops
    : workshops.filter((workshop) => workshop.category === activeCategory)

  return (
    <div className="site-shell workshops-page-shell">
      <OfficialNavbar currentPath="/workshops" onOpenDemoModal={onOpenDemoModal} />

      <main className="workshops-page">
        <section className="workshops-page-hero">
          <div className="container workshops-page-hero-layout">
            <div className="workshops-page-copy">
              <p className="eyebrow">MAKE TIME TO MAKE SOMETHING</p>
              <h1>Learn by doing. <span>Leave with more.</span></h1>
              <p>Join focused, mentor-led workshops to try new tools, practice real skills, and turn ideas into something you can share.</p>
              <a className="button button-primary" href="#workshop-catalog">Explore workshops <ArrowIcon /></a>
              <div className="workshops-page-proof" aria-label="Workshop benefits">
                <span><b>Small steps</b> focused sessions</span>
                <i aria-hidden="true" />
                <span><b>Real practice</b> hands-on learning</span>
                <i aria-hidden="true" />
                <span><b>Expert guidance</b> mentor-led</span>
              </div>
            </div>
            <div className="workshops-hero-art" aria-hidden="true">
              <div className="workshops-hero-glow" />
              <div className="workshops-hero-board">
                <div className="workshops-board-top"><i /><i /><i /><span>YOUR NEXT BIG IDEA</span></div>
                <div className="workshops-board-content">
                  <span className="workshops-board-kicker">LEARN BY MAKING</span>
                  <strong>Ideas<br /><em>in action.</em></strong>
                  <div className="workshops-board-progress"><i /><i /><i /><i /><i /></div>
                </div>
              </div>
              <span className="workshops-hero-bubble workshops-bubble-one">✦ Practice</span>
              <span className="workshops-hero-bubble workshops-bubble-two">Build ↗</span>
              <span className="workshops-hero-star">✧</span>
            </div>
          </div>
        </section>

        <section className="workshops-intro-section">
          <div className="container workshops-intro-grid">
            <div>
              <p className="eyebrow">MORE THAN A DEMO</p>
              <h2>Come curious.<br /><span>Leave more confident.</span></h2>
            </div>
            <p>Each workshop focuses on a practical topic, with time to follow along, ask questions, and try the tools yourself. Pick a subject below and contact us for the next available session.</p>
          </div>
        </section>

        <section className="workshops-catalog-section" id="workshop-catalog">
          <div className="container">
            <div className="workshops-catalog-heading">
              <div>
                <p className="eyebrow">PICK A SKILL TO PRACTICE</p>
                <h2>Explore workshops</h2>
                <p>Focused learning experiences for curious minds and busy schedules.</p>
              </div>
              <span className="courses-result-count" aria-live="polite">{visibleWorkshops.length} workshops</span>
            </div>
            <div className="courses-category-list" aria-label="Filter workshops by category">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={activeCategory === category ? 'active' : ''}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="workshops-grid">
              {visibleWorkshops.map((workshop) => (
                <article className="workshop-card" key={workshop.title}>
                  <div className={`workshop-card-art course-${workshop.tone}`}>
                    <img src={workshop.image} alt="" />
                    <span className="workshop-category">{workshop.category}</span>
                    <span className="workshop-session-mark" aria-hidden="true">✦</span>
                  </div>
                  <div className="workshop-card-content">
                    <span className="workshop-format">{workshop.format}</span>
                    <h3>{workshop.title}</h3>
                    <p>{workshop.description}</p>
                    <a
                      className="workshop-card-cta"
                      href={`mailto:info@sklassics.com?subject=${encodeURIComponent(`Workshop enquiry: ${workshop.title}`)}`}
                      aria-label={`Ask about the next ${workshop.title} workshop`}
                    >
                      Ask about next session <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="workshops-schedule-note">Workshop dates and availability are shared by our team when you enquire.</p>
          </div>
        </section>

        <section className="workshops-page-cta">
          <div className="container workshops-page-cta-inner">
            <div>
              <p className="eyebrow">BRING YOUR QUESTIONS</p>
              <h2>Not sure which workshop fits?</h2>
              <p>Tell us what you want to explore and we’ll help you find a session.</p>
            </div>
            <a className="button button-primary" href="mailto:info@sklassics.com?subject=Workshop%20enquiry">Ask our team <ArrowIcon /></a>
          </div>
        </section>
      </main>

      <OfficialFooter onOpenDemoModal={onOpenDemoModal} />
    </div>
  )
}

function BlogPage({ onOpenDemoModal }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All articles')
  const [openArticle, setOpenArticle] = useState(null)
  const closeMenu = () => setMenuOpen(false)
  const categories = ['All articles', ...new Set(blogPosts.map((post) => post.category))]
  const articlePosts = blogPosts.slice(1)
  const visiblePosts = activeCategory === 'All articles'
    ? articlePosts
    : articlePosts.filter((post) => post.category === activeCategory)
  const featuredPost = blogPosts[0]

  return (
    <div className="site-shell blog-page-shell">
      <OfficialNavbar currentPath="/blog" onOpenDemoModal={onOpenDemoModal} />

      <main className="blog-page">
        <section className="blog-page-hero">
          <div className="container blog-page-hero-layout">
            <div className="blog-page-copy">
              <p className="eyebrow">IDEAS FOR YOUR NEXT STEP</p>
              <h1>Learn something.<br /><span>Build what’s next.</span></h1>
              <p>Practical thoughts on technology, learning, and growing a career—made for curious minds at every stage.</p>
              <a className="button button-primary" href="#blog-articles">Explore the blog <ArrowIcon /></a>
            </div>
            <div className="blog-hero-art" aria-hidden="true">
              <div className="blog-hero-orbit blog-hero-orbit-one" />
              <div className="blog-hero-orbit blog-hero-orbit-two" />
              <div className="blog-hero-note">
                <span>SKLASSICS JOURNAL</span>
                <strong>Curiosity<br /><em>in practice.</em></strong>
                <i><b /><b /><b /></i>
              </div>
              <span className="blog-hero-tag blog-tag-one">Ideas ✦</span>
              <span className="blog-hero-tag blog-tag-two">Keep learning ↗</span>
              <span className="blog-hero-spark">✧</span>
            </div>
          </div>
        </section>

        <section className="blog-featured-section">
          <div className="container">
            <p className="eyebrow">START HERE</p>
            <article className="blog-featured-card">
              <div className="blog-featured-image">
                <img src={featuredPost.image} alt="Generative AI learning concepts" />
                <span>{featuredPost.category}</span>
              </div>
              <div className="blog-featured-copy">
                <p className="eyebrow">FEATURED ARTICLE</p>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <button
                  className="blog-read-link"
                  type="button"
                  aria-expanded={openArticle === featuredPost.title}
                  onClick={() => setOpenArticle(openArticle === featuredPost.title ? null : featuredPost.title)}
                >
                  {openArticle === featuredPost.title ? 'Close article' : 'Read article'}
                  <span aria-hidden="true">{openArticle === featuredPost.title ? '↑' : '→'}</span>
                </button>
              </div>
            </article>
            {openArticle === featuredPost.title && (
              <article className="blog-expanded-article" aria-label={featuredPost.title}>
                {featuredPost.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </article>
            )}
          </div>
        </section>

        <section className="blog-articles-section" id="blog-articles">
          <div className="container">
            <div className="blog-articles-heading">
              <div>
                <p className="eyebrow">THE LEARNING JOURNAL</p>
                <h2>Ideas worth exploring</h2>
                <p>Browse practical reads across technology, projects, and career growth.</p>
              </div>
              <span className="courses-result-count" aria-live="polite">{visiblePosts.length} articles</span>
            </div>
            <div className="courses-category-list" aria-label="Filter articles by category">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={activeCategory === category ? 'active' : ''}
                  aria-pressed={activeCategory === category}
                  onClick={() => {
                    setActiveCategory(category)
                    setOpenArticle(null)
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="blog-article-grid">
              {visiblePosts.map((post) => (
                <article className="blog-article-card" key={post.title}>
                  <div className={`blog-article-image course-${post.tone}`}>
                    <img src={post.image} alt="" />
                    <span>{post.category}</span>
                  </div>
                  <div className="blog-article-copy">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <button
                      className="blog-read-link"
                      type="button"
                      aria-expanded={openArticle === post.title}
                      onClick={() => setOpenArticle(openArticle === post.title ? null : post.title)}
                    >
                      {openArticle === post.title ? 'Close article' : 'Read article'}
                      <span aria-hidden="true">{openArticle === post.title ? '↑' : '→'}</span>
                    </button>
                  </div>
                  {openArticle === post.title && (
                    <div className="blog-expanded-article" aria-label={post.title}>
                      {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="blog-page-cta">
          <div className="container blog-page-cta-inner">
            <div>
              <p className="eyebrow">TURN READING INTO DOING</p>
              <h2>Ready to practice a new skill?</h2>
              <p>Explore hands-on workshops and mentor-led courses.</p>
            </div>
            <div>
              <a className="button button-primary" href="/workshops">Explore workshops <ArrowIcon /></a>
              <a className="blog-course-link" href="/courses">Browse courses</a>
            </div>
          </div>
        </section>
      </main>

      <OfficialFooter onOpenDemoModal={onOpenDemoModal} />
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showMoreCourses, setShowMoreCourses] = useState(false)
  const [activeMoment, setActiveMoment] = useState(0)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  // Feature Modals State
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null)
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [demoCourse, setDemoCourse] = useState(null)
  const [showAdvisorModal, setShowAdvisorModal] = useState(false)
  const [showAssessmentModal, setShowAssessmentModal] = useState(false)
  const [selectedCheatSheet, setSelectedCheatSheet] = useState(null)

  const openCourse = (course) => setSelectedCourseForModal(course)
  const openDemo = (course = null) => {
    setDemoCourse(course)
    setShowDemoModal(true)
  }
  const openAdvisor = () => setShowAdvisorModal(true)
  const openAssessment = () => setShowAssessmentModal(true)
  const openCheatSheet = (sheet) => setSelectedCheatSheet(sheet)

  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window === 'undefined') return '/'
    return normalizePath(window.location.pathname)
  })

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const titles = {
      '/': 'Sklassics | Learn. Build. Grow.',
      '/about': 'About Us | Sklassics',
      '/courses': 'Courses & Bootcamps | Sklassics',
      '/workshops': 'Workshops & Labs | Sklassics',
      '/blog': 'Blog & Learning Journal | Sklassics',
    }
    document.title = titles[currentPath] || 'Sklassics | Learn. Build. Grow.'
  }, [currentPath])

  useEffect(() => {
    const scrollToHashOrTop = () => {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }, 120)
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    }

    const syncPath = () => {
      setCurrentPath(normalizePath(window.location.pathname))
      scrollToHashOrTop()
    }

    const handleAnchorClick = (event) => {
      const anchor = event.target.closest?.('a[href]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('tel:') ||
        href.startsWith('mailto:') ||
        href.startsWith('//')
      ) {
        return
      }

      if (href.startsWith('#')) {
        return
      }

      if (href.startsWith('/')) {
        const [pathPart, hashPart] = href.split('#')
        const targetPath = normalizePath(pathPart || '/')
        const currentNormPath = normalizePath(window.location.pathname)

        event.preventDefault()

        if (targetPath !== currentNormPath) {
          window.history.pushState({}, '', href)
          setCurrentPath(targetPath)
          if (hashPart) {
            setTimeout(() => {
              const el = document.getElementById(hashPart)
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }, 120)
          } else {
            window.scrollTo({ top: 0, behavior: 'instant' })
          }
        } else if (hashPart) {
          window.history.pushState({}, '', href)
          const el = document.getElementById(hashPart)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    }

    // Scroll to initial hash if present on mount
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    }

    window.addEventListener('popstate', syncPath)
    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.removeEventListener('popstate', syncPath)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  function handleSubscribe(event) {
    event.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
  }

  function changeMoment(direction) {
    setActiveMoment((current) => (current + direction + galleryMoments.length) % galleryMoments.length)
  }

  let pageContent = null

  if (currentPath === '/about') {
    pageContent = <AboutPage onOpenDemoModal={openDemo} />
  } else if (currentPath === '/courses') {
    pageContent = (
      <CoursesPage
        onOpenCourseModal={openCourse}
        onOpenDemoModal={openDemo}
        onOpenAdvisorModal={openAdvisor}
      />
    )
  } else if (currentPath === '/workshops') {
    pageContent = <WorkshopsPage onOpenDemoModal={openDemo} />
  } else if (currentPath === '/blog') {
    pageContent = <BlogPage onOpenDemoModal={openDemo} />
  } else {
    pageContent = (
      <div className="site-shell">
        <OfficialNavbar currentPath="/" onOpenDemoModal={() => openDemo()} />

        <main>
          <OfficialHero onOpenDemoModal={() => openDemo()} />
          <OfficialRating />

          {/* Enterprise Hiring Partners & Career Metrics */}
          <HiringPartnersBanner />

          <div className="container" style={{ margin: '36px auto' }}>
            <div className="quiz-teaser-banner">
              <div className="quiz-teaser-copy">
                <span className="quiz-teaser-tag">PERSONALIZED CAREER ADVISORY</span>
                <h3>Not sure which tech domain fits your background?</h3>
                <p>Take our 60-second interactive assessment to get a personalized learning roadmap based on your goals and current experience.</p>
              </div>
              <button
                type="button"
                className="quiz-teaser-btn"
                onClick={openAdvisor}
              >
                <span>Take 60-Sec Career Quiz</span>
                <ArrowIcon />
              </button>
            </div>
          </div>

          <section className="offers-section section-pad" id="workshops">
            <div className="container">
              <div className="offer-card">
                <div className="offer-copy">
                  <span className="offer-kicker"><span /> LIMITED-TIME OFFER</span>
                  <h2>Your next big skill,<br /><em>at a better price.</em></h2>
                  <p>Get up to 50% off select bootcamps. Learn with expert mentors and take the next step in your career.</p>
                  <a href="/courses" className="offer-link">Explore discounted courses <ArrowIcon /></a>
                </div>
                <div className="offer-art" aria-label="Up to 50 percent off">
                  <span className="offer-spark spark-a">✳</span><span className="offer-spark spark-b">✦</span>
                  <div className="offer-ticket"><small>UP TO</small><strong>50<span>%</span></strong><b>OFF</b><span className="offer-ticket-shine" /></div>
                  <span className="offer-stamp">LEARN<br />MORE</span>
                </div>
              </div>
            </div>
          </section>

          <section className="courses-section section-pad" id="courses">
            <div className="container">
              <div className="courses-heading">
                <h2>Featured Courses</h2>
                <span aria-hidden="true" />
              </div>
              <div className="course-grid" id="additional-courses">
                {[...courses, ...(showMoreCourses ? additionalCourses : [])].map((course) => (
                  <article className="course-card" key={course.title}>
                    <div className={`course-art course-${course.tone}`}>
                      <img className="course-image" src={course.image} alt={`${course.title} course`} />
                    </div>
                    <div className="course-card-content">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span className="card-duration-badge">⏱ {course.duration || '8-12 Weeks'}</span>
                        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f59e0b' }}>★ {course.rating || '4.9'}</span>
                      </div>
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>
                      {course.tools && course.tools.length > 0 && (
                        <div className="card-tool-chips">
                          {course.tools.slice(0, 3).map((t) => (
                            <span key={t} className="mini-tool-chip">{t}</span>
                          ))}
                          {course.tools.length > 3 && (
                            <span className="mini-tool-chip">+{course.tools.length - 3}</span>
                          )}
                        </div>
                      )}
                      <div className="course-card-bottom">
                        <span className="course-price">{course.price}</span>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <button
                            type="button"
                            className="btn-syllabus"
                            style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                            onClick={() => openCourse(course)}
                          >
                            View Syllabus
                          </button>
                          <a href="#contact" aria-label={`Preview ${course.title} course`}>Preview</a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <button
                className="courses-more-button"
                type="button"
                aria-expanded={showMoreCourses}
                aria-controls="additional-courses"
                onClick={() => setShowMoreCourses((visible) => !visible)}
              >
                {showMoreCourses ? 'View Less' : 'View More'}
                <span aria-hidden="true">{showMoreCourses ? '↑' : '→'}</span>
              </button>
            </div>
          </section>

          <SalaryCalculator
            onOpenDemoModal={() => openDemo()}
            onOpenAdvisorModal={() => openAdvisor()}
          />

          <ProjectShowcase
            onOpenCourseModal={(course) => openCourse(course)}
          />

          {/* Executive Career Tracks & Specializations Roadmap */}
          <CareerTracksSection
            onOpenDemoModal={() => openDemo()}
            onOpenAdvisorModal={() => openAdvisor()}
          />

          <OfficialUs onOpenDemoModal={() => openDemo()} />


          <section className="gallery-section section-pad">
            <div className="container">
              <div className="gallery-heading">
                <p className="eyebrow">OUR GALLERY</p>
                <h2>Moments that tell<br />our story<span>.</span></h2>
                <p>Explore the energy of our workshops, campus sessions, student interactions and memorable learning experiences.</p>
              </div>
              <div className="gallery-feature">
                <div className="gallery-photo-wall">
                  <div className="gallery-brand-mark">Sklassics</div>
                  {[-1, 0, 1, 2, 3, 4].map((offset, index) => {
                    const moment = galleryMoments[(activeMoment + offset + galleryMoments.length) % galleryMoments.length]
                    return (
                      <img
                        key={`${moment.number}-${index}`}
                        className={`gallery-photo gallery-photo-${index + 1}`}
                        src={moment.image}
                        alt={index === 1 ? moment.title : ''}
                        aria-hidden={index !== 1}
                      />
                    )
                  })}
                </div>
                <div className="gallery-caption">
                  <span>{galleryMoments[activeMoment].number} <i>/ 08</i></span>
                  <div><h3>{galleryMoments[activeMoment].title}</h3><p>{galleryMoments[activeMoment].detail}</p></div>
                  <div className="gallery-controls">
                    <button type="button" onClick={() => changeMoment(-1)} aria-label="Previous gallery moment">←</button>
                    <button type="button" onClick={() => changeMoment(1)} aria-label="Next gallery moment">→</button>
                  </div>
                </div>
              </div>
              <div className="gallery-thumbnails" aria-label="Gallery moments">
                {galleryMoments.map((moment, index) => (
                  <button
                    type="button"
                    key={moment.title}
                    className={`gallery-thumb thumb-${index + 1}${activeMoment === index ? ' selected' : ''}`}
                    aria-pressed={activeMoment === index}
                    aria-label={`Show ${moment.title}`}
                    onClick={() => setActiveMoment(index)}
                  >
                    <img src={moment.image} alt="" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          </section>

          <TestimonialsSection />

          {/* Free Interview Preparation & Technical Cheat Sheets Library */}
          <CheatSheetsSection
            onOpenSheet={(sheet) => openCheatSheet(sheet)}
            onOpenAssessment={() => openAssessment()}
            onOpenDemo={(c) => openDemo(c)}
          />

          <section className="insights-section section-pad" id="insights">
            <div className="container insights-row">
              <div><p className="eyebrow">A GOOD PLACE TO START</p><h2>Small steps.<br /><span>Big possibilities.</span></h2></div>
              <p>Get fresh learning tips, new course announcements, and opportunities to help you keep growing.</p>
              <button
                type="button"
                className="button button-primary"
                onClick={() => openDemo()}
              >
                Talk to our team <ArrowIcon />
              </button>
            </div>
          </section>

          {/* Upcoming Batches & Program Navigator (Moved to the end) */}
          <section className="cohort-planner-section section-pad" id="cohort-navigator">
            <div className="container">
              <div className="section-head-center">
                <span className="section-pill">UPCOMING BATCHES &amp; SYLLABUS</span>
                <h2>Explore Programs &amp; Admission Details</h2>
                <p>
                  Review course curriculum, technical frameworks, lead mentors, and upcoming batch timings for our flagship programs.
                </p>
              </div>
              <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                <HeroConsoleCard
                  onOpenCourseModal={openCourse}
                  onOpenDemoModal={openDemo}
                  allCourses={allCoursesData}
                />
              </div>
            </div>
          </section>

          <FaqSection onOpenDemoModal={() => openDemo()} />
        </main>

        <OfficialFooter onOpenDemoModal={() => openDemo()} />
      </div>
    )
  }

  return (
    <>
      {pageContent}

      {selectedCourseForModal && (
        <CourseModal
          course={selectedCourseForModal}
          onClose={() => setSelectedCourseForModal(null)}
          onBookDemo={(c) => openDemo(c)}
        />
      )}

      {showDemoModal && (
        <BookDemoModal
          selectedCourse={demoCourse}
          coursesList={allCoursesData}
          onClose={() => {
            setShowDemoModal(false)
            setDemoCourse(null)
          }}
        />
      )}

      {showAdvisorModal && (
        <CareerAdvisorModal
          coursesList={allCoursesData}
          onClose={() => setShowAdvisorModal(false)}
          onSelectCourse={(c) => openCourse(c)}
        />
      )}

      {showAssessmentModal && (
        <SkillAssessmentModal
          onClose={() => setShowAssessmentModal(false)}
          onBookDemo={(c) => openDemo(c)}
        />
      )}

      {selectedCheatSheet && (
        <CheatSheetModal
          sheet={selectedCheatSheet}
          onClose={() => setSelectedCheatSheet(null)}
          onBookDemo={(c) => openDemo(c)}
        />
      )}

      {/* Professional Career Advisor Quick Connect */}
      <QuickAdvisorWidget
        onOpenDemoModal={() => openDemo()}
        onOpenAdvisorModal={() => openAdvisor()}
        onOpenAssessmentModal={() => openAssessment()}
      />

      {/* Floating Direct Call Button (matching sklassics.in) */}
      <a
        href="tel:+919392732581"
        className="sk-floating-call-btn"
        aria-label="Call Sklassics Admissions"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </>
  )
}

export default App
