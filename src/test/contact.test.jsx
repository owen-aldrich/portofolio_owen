/**
 * contact.test.jsx
 *
 * Unit tests for ContactSection.
 * Task 18.5 — Requirements: 11.1–11.8
 *
 * Test runner : Vitest
 * Environment : jsdom (configured in vite.config.js)
 * Libraries   : @testing-library/react, @testing-library/user-event
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import ContactSection from '../components/ContactSection'

// ContactSection imports import.meta.env at module load time, so we need to
// control VITE_WEB3FORMS_KEY before each test via vi.stubEnv.

afterEach(() => {
  cleanup()
  vi.unstubAllEnvs()
})

function renderContact() {
  return render(
    <MemoryRouter>
      <ContactSection />
    </MemoryRouter>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section label
// ─────────────────────────────────────────────────────────────────────────────

describe('ContactSection — section label', () => {
  it('renders the section label "// 05 — CONTACT"', () => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', 'test-key-abc')
    renderContact()
    expect(screen.getByText('// 05 — CONTACT')).toBeInTheDocument()
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Email link
// ─────────────────────────────────────────────────────────────────────────────

describe('ContactSection — email link', () => {
  it('renders an email link that matches personal.email', async () => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', 'test-key-abc')
    // Import after stubbing so the component module sees the env
    const { personal } = await import('../data/content')
    renderContact()
    const emailLink = screen.getByRole('link', { name: personal.email })
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', `mailto:${personal.email}`)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Form fields
// ─────────────────────────────────────────────────────────────────────────────

describe('ContactSection — form fields', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', 'test-key-abc')
  })

  it('renders a Name text input', () => {
    renderContact()
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
  })

  it('renders an Email input', () => {
    renderContact()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('renders a Message textarea', () => {
    renderContact()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Submit button
// ─────────────────────────────────────────────────────────────────────────────

describe('ContactSection — submit button', () => {
  it('renders a "Send Message" button', () => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', 'test-key-abc')
    renderContact()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Missing API key
// ─────────────────────────────────────────────────────────────────────────────

describe('ContactSection — missing VITE_WEB3FORMS_KEY', () => {
  it('shows the misconfiguration error message when the key is empty', () => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', '')
    renderContact()
    expect(
      screen.getByText(/contact form is not configured/i)
    ).toBeInTheDocument()
  })

  it('disables the submit button when the key is empty', () => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', '')
    renderContact()
    const submitBtn = screen.getByRole('button', { name: /send message/i })
    expect(submitBtn).toBeDisabled()
  })

  it('shows the misconfiguration error message when the key is whitespace-only', () => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', '   ')
    renderContact()
    expect(
      screen.getByText(/contact form is not configured/i)
    ).toBeInTheDocument()
  })

  it('disables the submit button when the key is whitespace-only', () => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', '   ')
    renderContact()
    const submitBtn = screen.getByRole('button', { name: /send message/i })
    expect(submitBtn).toBeDisabled()
  })
})
