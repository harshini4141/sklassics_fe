# Sklassics Academy & Technologies — Interactive EdTech Web Platform

> **Learn. Build. Grow.**  
> Official interactive web platform for **Sklassics Technologies Pvt Ltd** (`sklassics.in`), delivering live mentor-led IT training programs, interactive skill assessments, career ROI calculators, technical interview cheat sheets, hands-on workshops, and real-world capstone showcases.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [End-to-End Project Journey (From Start to Finish)](#2-end-to-end-project-journey-from-start-to-finish)
3. [Key Features & Interactive Modules](#3-key-features--interactive-modules)
4. [Application Pages & Routing](#4-application-pages--routing)
5. [Project Architecture & Folder Structure](#5-project-architecture--folder-structure)
6. [Tech Stack & Performance Metrics](#6-tech-stack--performance-metrics)
7. [Getting Started (Local Development)](#7-getting-started-local-development)
8. [Available Scripts](#8-available-scripts)
9. [Contact & Ecosystem](#9-contact--ecosystem)

---

## 1. Project Overview

The **Sklassics Web Application** is a modern, fast, zero-dependency-bloat React 19 + Vite 8 application designed to transform a static training catalog into an interactive career acceleration platform.

It helps prospective learners:
- **Discover** 14+ industry-aligned programs across Artificial Intelligence, Generative AI, Data Science, Data Analytics (Power BI/SQL), Big Data (PySpark), Cloud & DevOps (AWS/Kubernetes), and Programming.
- **Evaluate** their current technical readiness through a **5-Minute Technical Skill Assessment** and a **60-Second Career Match Quiz**.
- **Prepare** for technical interviews with searchable, copyable, and downloadable **Technical Cheat Sheets** (`.md`).
- **Estimate** post-bootcamp salary growth using an interactive **Career ROI & Salary Calculator**.
- **Book** 1:1 live mentor demo sessions with instant booking reference generation (`SK-XXXXXX`), WhatsApp slot confirmation, email dispatch, and downloadable booking passes (`.txt`).

---

## 2. End-to-End Project Journey (From Start to Finish)

### Phase 1: Foundation & Multi-Page Core Architecture
- Bootstrapped the project with **React 19**, **Vite 8**, and **Oxlint** for instant HMR and sub-second builds.
- Built a custom, lightweight History API client router in `src/App.jsx` supporting clean URLs (`/`, `/about`, `/courses`, `/workshops`, `/blog`), hash-anchor smooth scrolling, and dynamic page titles.
- Structured the core course catalog (`src/data/coursesData.js`) with detailed module-by-module syllabi, tools, durations, ratings, and pricing.

### Phase 2: Official Sklassics Branding & Design System (`sklassics.in`)
- Designed the signature Sklassics palette (`#4b0055` deep royal purple, `#7a2a86` soft violet, and `#09060f` cybernetic dark accents) in `src/official-styles.css`.
- Implemented **Light & Dark Mode** (`src/components/ThemeToggle.jsx`) persisted via `localStorage` and `data-theme="dark"` root attributes.
- Built the official two-tier navigation bar (`src/components/OfficialNavbar.jsx`) featuring a top admissions contact strip (`+91 93927 32581` & `info@sklassics.com`), responsive desktop/mobile menus, and quick CTA triggers.
- Created the cybernetic AI Hero section (`src/components/OfficialHero.jsx`) with an high-definition background banner, ISO 9001:2015 accreditation badge, social proof rating bar, and an infinite scrolling skills marquee.
- Added the Benefits & Hiring Partners section (`src/components/OfficialRating.jsx`), the About Us & ISO-Verified Certificate Preview section (`src/components/OfficialUs.jsx`), and the comprehensive dark footer (`src/components/OfficialFooter.jsx`) linking all 12 Sklassics ecosystem domains.

### Phase 3: Interactive Career & Course Discovery Tools
- **Advanced Course Filter Hub (`/courses`)**: Added real-time search by skill/tool/title, difficulty level filtering (`Beginner Friendly`, `Intermediate & Advanced`), category tabs, and price sorting (`Low to High`, `High to Low`).
- **Interactive Syllabus Modal (`src/components/CourseModal.jsx`)**: Allows students to inspect module breakdowns, tools covered, and course highlights before enrolling.
- **60-Second Career Advisor Quiz (`src/components/CareerAdvisorModal.jsx`)**: Matches learners to their highest-ROI course based on background, interests, and study schedule.
- **Capstone Architecture Showcase (`src/components/ProjectShowcase.jsx`)**: Interactive walkthrough of 4 flagship production projects (Autonomous Healthcare AI Agent, Financial Fraud PySpark Pipeline, Multi-Region Kubernetes GitOps Platform, and Omnichannel Retail BI Hub) with system architecture steps and metrics.
- **Career ROI & Salary Calculator (`src/components/SalaryCalculator.jsx`)**: Interactive compensation estimator across 5 domains and 4 experience tiers with expected hike percentages and 3-year cumulative upside.
- **Career Specialization Roadmaps (`src/components/CareerTracksSection.jsx`)**: Tabbed breakdown of target job roles, core libraries, and production capstones.

### Phase 4: Free Interview Prep Hub & 5-Minute Skill Assessment
- **Technical Cheat Sheets Library (`src/components/CheatSheetsSection.jsx` & `src/data/cheatSheetsData.js`)**:
  - Curated guides for *Top 50 SQL Interview Queries*, *Data Science & GenAI Complete Roadmap*, *AWS Cloud & DevOps Commands*, and *Python for Tech Interviews*.
  - Built the interactive **Cheat Sheet Reader Modal (`src/components/CheatSheetModal.jsx`)** featuring live snippet search, 1-click **Copy Code** to clipboard, and **Download Guide (`.md`)** file generation.
- **5-Minute Technical Skill Assessment (`src/components/SkillAssessmentModal.jsx` & `src/data/assessmentData.js`)**:
  - 4 diagnostic tracks (*Python Programming*, *SQL & Database Engineering*, *Cloud & DevOps Foundations*, *Data Science & GenAI*).
  - Instant answer verification, technical explanations after each question, final percentage score report (`Advanced Ready`, `Intermediate Ready`, `Foundational Learner`), and tailored course recommendations.

### Phase 5: Lead Capture, Floating Career Desk & Performance Optimization
- **Global Floating Career Desk (`src/components/QuickAdvisorWidget.jsx`)**: Mounted across all pages above the floating admissions call button so learners can book a demo, launch the 60-sec quiz, take the 5-min assessment, or open WhatsApp in one click.
- **Enhanced Demo Booking Engine (`src/components/BookDemoModal.jsx`)**:
  - Generates a unique booking reference (`SK-XXXXXX`).
  - Persists enquiries locally in `localStorage` (`sklassics_demo_leads`).
  - Provides instant 1-click **WhatsApp slot confirmation**, **Email dispatch**, and **Downloadable Booking Pass (`.txt`)**.
- **Asset & Build Optimization**:
  - Compressed multi-megabyte PNG assets into optimized high-resolution JPEGs (`data-science-gen-ai.jpg` reduced by **94%** from 2.25 MB to 126 KB; `certificate-template.jpg` reduced by **93%** from 1.60 MB to 109 KB).
  - Achieved **0 ESLint/Oxlint warnings or errors** across all 28 source files and a **~217ms** production Vite build.

---

## 3. Key Features & Interactive Modules

| Module | Component File | Highlights |
| :--- | :--- | :--- |
| **Cybernetic Hero & Marquee** | `src/components/OfficialHero.jsx` | AI/Cloud banner, ISO 9001:2015 badge, 4.8/5 rating bar, infinite skills marquee |
| **5-Min Skill Assessment** | `src/components/SkillAssessmentModal.jsx` | 4 tracks, 20 MCQs, instant explanations, score circle & course matcher |
| **Interview Cheat Sheets** | `src/components/CheatSheetsSection.jsx` | Category filters, in-modal snippet search, 1-click code copy, `.md` download |
| **Career ROI Calculator** | `src/components/SalaryCalculator.jsx` | Interactive LPA slider, experience selector, projected hike & 3-year upside |
| **Capstone Project Showcase** | `src/components/ProjectShowcase.jsx` | 5-step architecture pipeline flows, latency/throughput metrics, alumni quotes |
| **Career Roadmaps** | `src/components/CareerTracksSection.jsx` | Target roles, tech stack chips, salary ranges, and capstone previews |
| **60-Sec Career Matcher** | `src/components/CareerAdvisorModal.jsx` | Interactive questionnaire recommending the ideal Sklassics learning path |
| **1:1 Demo Booking Modal** | `src/components/BookDemoModal.jsx` | `SK-XXXXXX` ref ID, `localStorage` lead persistence, WhatsApp/Email/Pass export |
| **Floating Career Desk** | `src/components/QuickAdvisorWidget.jsx` | Always-accessible popup connecting learners to demos, quizzes, and WhatsApp |
| **Dark / Light Theme Toggle** | `src/components/ThemeToggle.jsx` | Full dark mode support across all pages, cards, and modals |

---

## 4. Application Pages & Routing

- **`/` (Home Page)**:
  - `OfficialNavbar` → `OfficialHero` → `OfficialRating` → Featured Courses Grid → `OfficialUs` (About & Certificate Preview) → `ProjectShowcase` → `SalaryCalculator` → Campus & Workshop Gallery → `TestimonialsSection` → `CheatSheetsSection` → `FaqSection` → `OfficialFooter`.
- **`/about` (About Us Page)**:
  - Mission hero, Sklassics in Numbers (`1,000+` students, `25+` mentors, `30+` courses), Interactive Year-by-Year Journey (`2021`–`2024`), and Core Values grid.
- **`/courses` (Courses & Bootcamps Catalog)**:
  - Interactive Career Quiz teaser banner, real-time search & filter bar, difficulty & price sorting, full course cards with syllabus & demo actions, `CareerTracksSection`, `SalaryCalculator`, and `FaqSection`.
- **`/workshops` (Hands-On Workshops & Labs)**:
  - Filterable catalog of live mentor-led workshops (*Generative AI in Practice*, *Build Your First Power BI Dashboard*, *Python for Data Beginners*, *Cloud Computing Foundations*, *Machine Learning Starter Lab*, *Data Storytelling Essentials*) with direct enquiry links.
- **`/blog` (Sklassics Learning Journal)**:
  - Featured article spotlight, category filters, and expandable in-page technical reads.

---

## 5. Project Architecture & Folder Structure

```text
f:\web_app\
├── index.html                          # Root HTML entry point
├── package.json                        # Scripts & dependencies (React 19, Vite 8, Oxlint)
├── vite.config.js                      # Vite bundler configuration
├── README.md                           # End-to-end project documentation
└── src/
    ├── main.jsx                        # React DOM root mount
    ├── App.jsx                         # Main router, page layouts, and modal state orchestration
    ├── index.css                       # Base typography & reset styles
    ├── App.css                         # Core layout & page-level styling
    ├── features.css                    # Extended features, dark mode, & interactive widget styles
    ├── three-d-effects.css             # Enterprise cards, responsive breakpoints, & animations
    ├── official-styles.css             # Official sklassics.in branding, navbar, hero, footer & modals
    ├── assets/                         # Optimized WebP & JPEG images, logos, and course art
    │   ├── hero-cyber-bg.jpg
    │   ├── certificate-template.jpg
    │   ├── logo.png
    │   ├── about/
    │   └── courses/
    ├── data/
    │   ├── coursesData.js              # Complete catalog of courses, modules, tools & pricing
    │   ├── cheatSheetsData.js          # SQL, GenAI/Data Science, AWS/DevOps & Python study guides
    │   ├── assessmentData.js           # 4 tracks × 5 diagnostic technical assessment questions
    │   └── platformData.js             # Testimonials, FAQs, and platform metadata
    └── components/
        ├── OfficialNavbar.jsx          # Two-tier header with contact bar, links & theme toggle
        ├── OfficialHero.jsx            # Cybernetic hero banner with CTAs & skills marquee
        ├── OfficialRating.jsx          # 4 key learner benefits & partner logo marquee
        ├── OfficialUs.jsx              # About summary & ISO 9001:2015 certificate showcase
        ├── OfficialFooter.jsx          # Newsletter, 12 Sklassics domains, services & socials
        ├── CourseModal.jsx             # Detailed syllabus & curriculum modal
        ├── BookDemoModal.jsx           # 1:1 Demo booking form with pass download & WhatsApp sync
        ├── CareerAdvisorModal.jsx      # 60-second career path recommendation quiz
        ├── SkillAssessmentModal.jsx    # 5-minute interactive technical assessment engine
        ├── CheatSheetsSection.jsx      # Filterable interview prep & study guides section
        ├── CheatSheetModal.jsx         # Code viewer with search, copy-to-clipboard & .md export
        ├── ProjectShowcase.jsx         # Production capstone architecture & metrics viewer
        ├── SalaryCalculator.jsx        # Interactive compensation & ROI calculator
        ├── CareerTracksSection.jsx     # High-growth tech specialization roadmaps
        ├── QuickAdvisorWidget.jsx      # Floating Sklassics Career Desk assistant
        ├── TestimonialsSection.jsx     # Student placement & review stories
        ├── FaqSection.jsx              # Interactive accordion FAQ section
        └── ThemeToggle.jsx             # Light / Dark mode switcher
```

---

## 6. Tech Stack & Performance Metrics

- **Frontend Framework**: React `^19.3.1` & React DOM `^19.3.1`
- **Build Tool & Dev Server**: Vite `^8.3.4` (`@vitejs/plugin-react`)
- **Linter**: Oxlint `^1.88.0` (**0 warnings, 0 errors** across 28 files)
- **Styling**: Modular CSS3 with CSS Custom Properties, Flexbox/Grid, backdrop-filter glassmorphism, and full `[data-theme="dark"]` support
- **Production Build Time**: **~217ms**

---

## 7. Getting Started (Local Development)

### Prerequisites
- **Node.js** `v18+` (or `v20+` / `v25+`)
- **npm** `v9+`

### Installation & Startup

1. **Navigate to the project directory**:
   ```bash
   cd f:\web_app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in your browser**:
   Visit **[http://localhost:5173/](http://localhost:5173/)**

---

## 8. Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server with Hot Module Replacement (HMR) at `http://localhost:5173/` |
| `npm run build` | Bundles and optimizes the application for production into the `dist/` folder |
| `npm run preview` | Locally previews the production build from `dist/` |
| `npm run lint` | Runs `oxlint` across all source files to verify code quality |

---

## 9. Contact & Ecosystem

- **Organization**: Sklassics Technologies Pvt Ltd (Hyderabad, Telangana, India)
- **Phone / WhatsApp**: `+91 93927 32581`
- **Email**: `info@sklassics.com`
- **Ecosystem Domains**: `sklassics.com` · `sklassics-lms.com` · `sklassics-ai.com` · `sklassicstutor.com` · `sklassics-quiz.com`
