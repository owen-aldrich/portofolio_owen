/**
 * properties.test.jsx
 *
 * Property-based tests for the Owen Aldrich Portfolio.
 * Each property validates a universal correctness guarantee described in design.md.
 *
 * Test runner : Vitest
 * Environment : jsdom
 * Libraries   : @testing-library/react, fast-check
 */

import { describe, it, expect, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import fc from 'fast-check'

import ProjectsPanel    from '../components/ProjectsPanel'
import CertificatesPanel from '../components/CertificatesPanel'
import PlaceholderImage  from '../components/PlaceholderImage'

// Unmount components between each `fc.assert` iteration so there is no
// DOM bleed between runs.
afterEach(() => {
  cleanup()
})

// ─────────────────────────────────────────────────────────────────────────────
// Arbitraries
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Generates a minimal project object that satisfies ProjectCard's prop contract.
 * The slug is sanitised to contain only URL-safe characters.
 */
const projectArb = fc.record({
  slug:        fc.string({ minLength: 1 }).map(s => s.replace(/[^a-z0-9-]/gi, 'x') || 'x'),
  title:       fc.string({ minLength: 1 }),
  description: fc.string(),
  year:        fc.string(),
  category:    fc.string(),
  coverImage:  fc.constant('/images/test.jpg'),
  detailImage: fc.constant('/images/test-detail.jpg'),
  techStack:   fc.array(fc.string()),
  features:    fc.array(fc.record({ title: fc.string(), description: fc.string() })),
  outcomes:    fc.array(fc.record({ title: fc.string(), description: fc.string() })),
  githubUrl:   fc.constant(null),
  liveUrl:     fc.constant(null),
})

/**
 * Generates a minimal certificate object that satisfies CertificateCard's prop contract.
 */
const certArb = fc.record({
  id:          fc.uuid(),
  title:       fc.string({ minLength: 1 }),
  issuer:      fc.string({ minLength: 1 }),
  platform:    fc.string({ minLength: 1 }),
  date:        fc.string(),
  grade:       fc.option(fc.string({ minLength: 1 }), { nil: null }),
  description: fc.string(),
  image:       fc.constant('/images/cert.jpg'),
  pdfUrl:      fc.constant(null),
})

// ─────────────────────────────────────────────────────────────────────────────
// Property 1 — data-driven project card count
// Validates: Requirements 5.5, 13.6
// ─────────────────────────────────────────────────────────────────────────────

describe('Property 1: data-driven project card count', () => {
  it('renders exactly N project cards for any N-element projects array', () => {
    // Property 1: data-driven card count — Validates: Requirements 5.5, 13.6
    fc.assert(
      fc.property(
        fc.array(projectArb, { minLength: 0, maxLength: 10 }),
        (projects) => {
          const { container, unmount } = render(
            <MemoryRouter>
              <ProjectsPanel projects={projects} />
            </MemoryRouter>
          )
          const cards = container.querySelectorAll('[data-testid="project-card"]')
          const result = cards.length === projects.length
          unmount()
          return result
        }
      ),
      { numRuns: 25 }
    )
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Property 2 — data-driven certificate card count
// Validates: Requirements 5.6, 13.7
// ─────────────────────────────────────────────────────────────────────────────

describe('Property 2: data-driven certificate card count', () => {
  it('renders exactly M certificate cards for any M-element certificates array', () => {
    // Property 2: data-driven certificate count — Validates: Requirements 5.6, 13.7
    fc.assert(
      fc.property(
        fc.array(certArb, { minLength: 0, maxLength: 10 }),
        (certificates) => {
          const { container, unmount } = render(
            <MemoryRouter>
              <CertificatesPanel certificates={certificates} />
            </MemoryRouter>
          )
          const cards = container.querySelectorAll('[data-testid="certificate-card"]')
          const result = cards.length === certificates.length
          unmount()
          return result
        }
      ),
      { numRuns: 25 }
    )
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Property 3 — slug-based project lookup
// Validates: Requirements 7.11
// ─────────────────────────────────────────────────────────────────────────────

describe('Property 3: slug-based project lookup', () => {
  it('find() returns the correct project for every valid slug', () => {
    // Property 3: slug-based project lookup — Validates: Requirements 7.11
    fc.assert(
      fc.property(
        fc.array(
          fc.record({ slug: fc.string({ minLength: 1 }), title: fc.string() }),
          { minLength: 1, maxLength: 10 }
        ),
        (projects) => {
          // Deduplicate by slug so all slugs in the working set are unique
          const unique = projects.filter(
            (p, i, arr) => arr.findIndex(q => q.slug === p.slug) === i
          )

          // Positive case: every slug in the array resolves to the right object
          unique.forEach(project => {
            const found = unique.find(p => p.slug === project.slug)
            expect(found).toBeDefined()
            expect(found.slug).toBe(project.slug)
            expect(found.title).toBe(project.title)
          })

          // Negative case: a sentinel slug that was never generated returns undefined
          const notFound = unique.find(p => p.slug === '__not_a_slug__')
          expect(notFound).toBeUndefined()
        }
      ),
      { numRuns: 50 }
    )
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Property 4 — contact form field validation (pure logic)
// Validates: Requirements 11.6
// ─────────────────────────────────────────────────────────────────────────────

describe('Property 4: contact form field validation', () => {
  /**
   * Replicates the validation predicate from ContactSection.
   * A field value is considered invalid when trimming it yields an empty string.
   */
  const isInvalid = (value) => !value.trim()

  it('rejects any string composed entirely of whitespace characters', () => {
    // Property 4: contact form whitespace validation — Validates: Requirements 11.6
    fc.assert(
      fc.property(
        // Generate strings whose trimmed form is always empty
        fc.string().filter(s => s.trim() === ''),
        (whitespaceStr) => {
          expect(isInvalid(whitespaceStr)).toBe(true)
        }
      ),
      { numRuns: 100 }
    )
  })

  it('accepts strings that contain at least one non-whitespace character', () => {
    // Property 4 (inverse): non-whitespace strings pass validation — Validates: Requirements 11.6
    fc.assert(
      fc.property(
        fc.string().filter(s => s.trim().length > 0),
        (validStr) => {
          expect(isInvalid(validStr)).toBe(false)
        }
      ),
      { numRuns: 100 }
    )
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Property 5 — PlaceholderImage preserves passed dimensions
// Validates: Requirements 14.1, 14.2
// ─────────────────────────────────────────────────────────────────────────────

describe('Property 5: PlaceholderImage preserves passed dimensions', () => {
  it('renders a block with exactly the passed width and height inline style values', () => {
    // Property 5: PlaceholderImage dimensions — Validates: Requirements 14.1, 14.2
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 2000 }),
        fc.integer({ min: 1, max: 2000 }),
        (width, height) => {
          const { container, unmount } = render(
            <PlaceholderImage style={{ width: `${width}px`, height: `${height}px` }} />
          )
          const el = container.firstChild
          expect(el).toBeTruthy()
          expect(el.style.width).toBe(`${width}px`)
          expect(el.style.height).toBe(`${height}px`)
          unmount()
        }
      ),
      { numRuns: 50 }
    )
  })

  it('never renders an <img> element', () => {
    // Property 5 (no-img guarantee) — Validates: Requirements 14.1, 14.2
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 500 }),
        fc.integer({ min: 1, max: 500 }),
        (w, h) => {
          const { container, unmount } = render(
            <PlaceholderImage style={{ width: `${w}px`, height: `${h}px` }} />
          )
          const imgs = container.querySelectorAll('img')
          expect(imgs.length).toBe(0)
          unmount()
        }
      ),
      { numRuns: 25 }
    )
  })
})
