import { useState } from 'react'
import { personal } from '../data/content'
import IconBox from './IconBox'
import PlaceholderImage from './PlaceholderImage'

/**
 * HeroSection
 *
 * Top section of HomePage. Desktop: 12-column grid, text left (7 cols),
 * portrait card right (5 cols). Mobile: stacked column layout.
 *
 * Requirements: 3.1–3.8, 14.1, 14.6, 15.3
 * Design: HeroSection
 */
export default function HeroSection() {
  const [imgError, setImgError] = useState(false)

  // Smooth-scroll to anchor — same pattern used in Navbar
  const handleAnchorClick = (e, href) => {
    // href values are like '#work' or '#about'
    if (href.startsWith('#')) {
      e.preventDefault()
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-[120px] pb-20 bg-page-bg">
      <div className="max-w-content mx-auto px-6">
        {/* ── Outer wrapper: stacked on mobile, 12-col grid on desktop ── */}
        <div className="flex flex-col gap-10 md:grid md:grid-cols-12 md:gap-9 md:items-center">

          {/* ── Left column — text content (7 cols on desktop) ── */}
          <div className="md:col-span-7 flex flex-col gap-6">

            {/* Task 7.2 — Hero name */}
            <h1 className="font-newsreader font-bold text-[44px] md:text-[62px] leading-[1.05] tracking-[-1px] text-primary">
              {personal.heroName}
            </h1>

            {/* Task 7.3 — Tagline */}
            <p className="font-jakarta text-base md:text-lg text-secondary leading-relaxed max-w-[520px]">
              {personal.tagline}
            </p>

            {/* Task 7.4 — CTA buttons */}
            <div className="flex flex-row flex-wrap gap-3">
              {personal.heroBtns.map((btn) =>
                btn.dark ? (
                  <a
                    key={btn.label}
                    href={btn.href}
                    onClick={(e) => !btn.download && handleAnchorClick(e, btn.href)}
                    target={btn.download ? '_blank' : undefined}
                    rel={btn.download ? 'noopener noreferrer' : undefined}
                    download={btn.download || undefined}
                    className="bg-dark-btn text-dark-btn-text rounded-full px-6 py-3 font-jakarta text-sm font-medium transition-opacity hover:opacity-90"
                  >
                    {btn.label}
                  </a>
                ) : (
                  <a
                    key={btn.label}
                    href={btn.href}
                    onClick={(e) => !btn.download && handleAnchorClick(e, btn.href)}
                    target={btn.download ? '_blank' : undefined}
                    rel={btn.download ? 'noopener noreferrer' : undefined}
                    download={btn.download || undefined}
                    className="border border-primary text-primary bg-transparent rounded-full px-6 py-3 font-jakarta text-sm font-medium transition-colors hover:bg-chip-bg"
                  >
                    {btn.label}
                  </a>
                )
              )}
            </div>

            {/* Task 7.5 — Social link cards: 2 on top row, 1 centered below */}
            <div className="flex flex-col gap-3">
              {/* Top row — GitHub & Email */}
              <div className="grid grid-cols-2 gap-3">
                {personal.heroLinks.slice(0, 2).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="border border-border-color rounded-card-sm bg-white px-4 py-3 flex items-center gap-3 shadow-card hover:shadow-card-sm transition-shadow no-underline min-w-0"
                  >
                    <IconBox icon={link.icon} name={link.label} className="shrink-0" />
                    <div className="flex flex-col min-w-0">
                      <span className="font-mono text-[10px] text-muted leading-none mb-0.5">
                        {link.label}
                      </span>
                      <span className="font-jakarta text-xs font-medium text-primary leading-none truncate">
                        {link.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              {/* Bottom row — LinkedIn, same width as one top card */}
              <div className="grid grid-cols-2 gap-3">
                {personal.heroLinks.slice(2, 3).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="border border-border-color rounded-card-sm bg-white px-4 py-3 flex items-center gap-3 shadow-card hover:shadow-card-sm transition-shadow no-underline min-w-0"
                  >
                    <IconBox icon={link.icon} name={link.label} className="shrink-0" />
                    <div className="flex flex-col min-w-0">
                      <span className="font-mono text-[10px] text-muted leading-none mb-0.5">
                        {link.label}
                      </span>
                      <span className="font-jakarta text-xs font-medium text-primary leading-none truncate">
                        {link.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column — portrait card (5 cols on desktop) ── */}
          {/* Task 7.6 & 7.7 — Portrait card, image/placeholder, mobile sizing */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div
              className="
                w-full md:w-[460px]
                h-[360px] md:h-[540px]
                rounded-[24px] md:rounded-card-lg
                shadow-card overflow-hidden bg-image-bg
              "
            >
              {imgError ? (
                <PlaceholderImage className="w-full h-full" />
              ) : (
                <img
                  src="/images/profile/hero.jpg"
                  alt={personal.fullName}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
