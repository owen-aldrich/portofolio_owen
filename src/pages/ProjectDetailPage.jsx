import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PlaceholderImage from '../components/PlaceholderImage'
import { projects } from '../data/content'

// ── Back link ────────────────────────────────────────────────
function BackLink() {
  return (
    <a
      href="/#work"
      className="font-jakarta text-sm text-secondary hover:text-primary flex items-center gap-2 mb-6 transition-colors w-fit"
    >
      {/* Left arrow SVG */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 12L6 8L10 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back to projects
    </a>
  )
}

// ── Title block ──────────────────────────────────────────────
function ProjectTitleBlock({ project }) {
  return (
    <div className="mb-6 flex flex-col gap-3">
      {/* Category badge */}
      <div>
        <span className="bg-badge-bg text-badge-text rounded-full text-xs px-3 py-1 font-jakarta">
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="font-jakarta font-bold text-[40px] text-primary leading-tight">
        {project.title}
      </h1>

      {/* Year */}
      <span className="font-mono text-sm text-muted">
        {project.year}
      </span>
    </div>
  )
}

// ── Detail image ─────────────────────────────────────────────
function DetailImage({ project }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="w-full h-[520px] rounded-card-lg overflow-hidden bg-image-bg my-8">
      {imgError ? (
        <PlaceholderImage className="w-full h-full" />
      ) : (
        <img
          src={project.detailImage}
          alt={project.title}
          className="w-full h-full object-cover rounded-card-lg"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  )
}

// ── Info card ────────────────────────────────────────────────
function InfoCard({ project }) {
  return (
    <div className="bg-white rounded-card-lg shadow-card border border-border-color p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ── Left column: description + tech stack ── */}
        <div className="flex flex-col gap-6">
          <p className="font-jakarta text-base text-secondary leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-chip-bg text-tech-pill-text rounded-full px-4 py-1.5 font-jakarta text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right column: features + outcomes ── */}
        <div className="flex flex-col gap-8">

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="font-jakarta font-semibold text-sm text-muted uppercase tracking-wide">
                Features
              </h2>
              <ol className="flex flex-col gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="font-mono text-muted text-sm shrink-0 mt-0.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="font-jakarta font-semibold text-primary text-sm">
                        {feature.title}
                      </span>
                      <span className="font-jakarta text-sm text-secondary">
                        {' — '}
                        {feature.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="font-jakarta font-semibold text-sm text-muted uppercase tracking-wide">
                Outcomes
              </h2>
              <ol className="flex flex-col gap-3">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="font-mono text-muted text-sm shrink-0 mt-0.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="font-jakarta font-semibold text-primary text-sm">
                        {outcome.title}
                      </span>
                      <span className="font-jakarta text-sm text-secondary">
                        {' — '}
                        {outcome.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

// ── CTA buttons ──────────────────────────────────────────────
function CTAButtons({ project }) {
  const hasGithub = project.githubUrl !== null
  const hasLive   = project.liveUrl !== null

  if (!hasGithub && !hasLive) return null

  return (
    <div className="flex items-center gap-4 mt-6 flex-wrap">
      {hasGithub && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dark-btn text-dark-btn-text rounded-full px-6 py-3 font-jakarta text-sm font-medium transition-opacity hover:opacity-90"
        >
          GitHub
        </a>
      )}
      {hasLive && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-primary text-primary bg-transparent rounded-full px-6 py-3 font-jakarta text-sm font-medium transition-colors hover:bg-primary hover:text-dark-btn-text"
        >
          Live Demo
        </a>
      )}
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────
export default function ProjectDetailPage() {
  // Task 13.1 — slug lookup; redirect if not found (Requirements: 7.11)
  const { slug } = useParams()
  const project  = projects.find(p => p.slug === slug)

  if (!project) return <Navigate to="/" replace />

  return (
    <>
      <Navbar />
      <main className="pt-[120px] pb-20 bg-page-bg min-h-screen">
        <div className="max-w-content mx-auto px-6">
          {/* Task 13.2 — Back link (Requirements: 7.2) */}
          <BackLink />

          {/* Task 13.3 — Title block (Requirements: 7.3) */}
          <ProjectTitleBlock project={project} />

          {/* Task 13.4 — Detail image (Requirements: 7.4, 7.5, 14.1, 14.9) */}
          <DetailImage project={project} />

          {/* Task 13.5 — Info card (Requirements: 7.6, 7.7, 7.8) */}
          <InfoCard project={project} />

          {/* Task 13.6 — GitHub / Live Demo buttons (Requirements: 7.9, 7.10) */}
          <CTAButtons project={project} />
        </div>
      </main>
      <Footer />
    </>
  )
}
