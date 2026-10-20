import { useState } from 'react'
import { personal } from '../data/content'
import PlaceholderImage from './PlaceholderImage'

/**
 * AboutSection  — Section "// 01 — ABOUT"
 *
 * Desktop: 12-column grid — left 7 cols (label, heading, subtitle, bio,
 * chips, info bar) / right 5 cols (yellow offset card with about photo).
 * Mobile: stacked column layout, photo below text.
 *
 * Requirements: 4.1–4.8, 14.1, 14.7
 * Design: AboutSection, PlaceholderImage
 */
export default function AboutSection() {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="py-20 bg-page-bg">
      <div className="max-w-content mx-auto px-6">
        <div className="flex flex-col gap-10 md:grid md:grid-cols-12 md:gap-9 md:items-start">

          {/* ── Left column (7 cols on desktop) ─────────────────────────── */}
          <div className="md:col-span-7 flex flex-col gap-8">

            {/* Task 8.1 — Section label */}
            <span className="font-mono text-sm text-muted tracking-wide">
              // 01 — ABOUT
            </span>

            {/* Task 8.2 — Heading + subtitle */}
            <div className="flex flex-col gap-1">
              <h2 className="font-jakarta font-bold text-[48px] leading-[1.1] tracking-[-1px] text-primary">
                AI Engineer
              </h2>
              <p className="font-jakarta font-normal text-[36px] leading-[1.2] tracking-[-0.5px] text-primary">
                turning models into real products
              </p>
            </div>

            {/* Task 8.3 — Bio paragraphs */}
            <div className="flex flex-col gap-4">
              {personal.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-jakarta text-base text-secondary leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Task 8.4 — Focus chips */}
            <div className="flex flex-wrap gap-2">
              {personal.focusChips.map((chip) => (
                <span
                  key={chip}
                  className="bg-chip-bg rounded-full px-4 py-1.5 font-jakarta text-sm text-secondary"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right column — yellow offset photo card + info bar (5 cols on desktop) ── */}
          <div className="md:col-span-5 flex flex-col gap-4 items-center md:items-end">
            {/* Task 8.5 — Outer yellow offset card */}
            <div className="bg-accent-yellow border border-accent-yellow-border rounded-card-lg p-3 w-full max-w-[400px] md:max-w-none">
              {/* Inner photo slot — 1:1 aspect ratio */}
              <div className="w-full aspect-square rounded-[16px] overflow-hidden bg-image-bg">
                {imgError ? (
                  <PlaceholderImage
                    variant="about"
                    className="w-full h-full"
                  />
                ) : (
                  <img
                    src={personal.aboutPhoto}
                    alt={`${personal.fullName} — about photo`}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
            </div>

            {/* Task 8.6 — Info bar below photo */}
            <div className="flex flex-row items-start gap-0 border border-border-color rounded-card-sm overflow-hidden w-full max-w-[400px] md:max-w-none">
              {[
                { label: 'Location', value: personal.location },
                { label: 'Status',   value: personal.status   },
                { label: 'Focus',    value: personal.focus    },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  className={`flex-1 flex flex-col gap-1 px-3 py-3 ${
                    i < arr.length - 1 ? 'border-r border-border-color' : ''
                  }`}
                >
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wide">
                    {item.label}
                  </span>
                  <span className="font-jakarta text-xs font-medium text-primary leading-snug">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
