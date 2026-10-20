import { useState } from 'react';
import { personal } from '../data/content';
import IconBox from './IconBox';

/**
 * ContactSection
 *
 * Section 05 — Contact. 12-column grid card with contact info on the left
 * and a Web3Forms-backed contact form on the right.
 *
 * Tasks: 12.1–12.5
 * Requirements: 11.1–11.8
 */
export default function ContactSection() {
  // ── API key check (task 12.3) ───────────────────────────────
  const apiKey = import.meta.env.VITE_WEB3FORMS_KEY;
  const keyMissing = !apiKey || apiKey.trim() === '';

  // ── Form state (task 12.4) ──────────────────────────────────
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    // Clear per-field error as soon as the user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }

  function validate() {
    const newErrors = {};
    if (!formState.name.trim())    newErrors.name    = 'Name is required.';
    if (!formState.email.trim())   newErrors.email   = 'Email is required.';
    if (!formState.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  }

  // ── Submit handler (task 12.5) ──────────────────────────────
  async function handleSubmit(e) {
    e.preventDefault();

    if (keyMissing) return;

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitStatus('submitting');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: apiKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (res.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  }

  return (
    <section id="contact" aria-label="Contact" className="py-20 bg-page-bg">
      <div className="max-w-content mx-auto px-6">

        {/* White card */}
        <div className="bg-white rounded-card-lg shadow-card border border-border-color p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-9">

            {/* ── Left column — contact info (task 12.1) ─────── */}
            <div className="md:col-span-5 flex flex-col gap-6 mb-8 md:mb-0">
              <div>
                <p className="font-mono text-muted text-sm mb-3">// 05 — CONTACT</p>
                <h2 className="font-jakarta font-bold text-primary text-[32px] leading-tight mb-2">
                  Get in touch.
                </h2>
                <p className="font-jakarta text-secondary text-sm leading-relaxed">
                  Have a project in mind or just want to say hello? Drop me a message and I&apos;ll get back to you.
                </p>
              </div>

              {/* Email */}
              <div>
                <p className="font-mono text-muted text-xs mb-1">Email</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-jakarta text-sm text-primary hover:text-secondary transition-colors break-all"
                >
                  {personal.email}
                </a>
              </div>

              {/* Social links */}
              {personal.socials.length > 0 && (
                <div>
                  <p className="font-mono text-muted text-xs mb-2">Socials</p>
                  <div className="flex flex-col gap-2">
                    {personal.socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('mailto') ? undefined : '_blank'}
                        rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                        className="flex items-center gap-2 font-jakarta text-sm text-primary hover:text-secondary transition-colors w-fit"
                      >
                        <IconBox icon={social.icon} name={social.label} />
                        <span>{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Right column — form (tasks 12.2–12.5) ─────────── */}
            <div className="md:col-span-7">

              {/* Missing API key warning (task 12.3) */}
              {keyMissing && (
                <div className="mb-4 rounded-card-sm border border-red-200 bg-red-50 px-4 py-3">
                  <p className="font-jakarta text-sm text-red-700">
                    Contact form is not configured. Please set the{' '}
                    <code className="font-mono text-xs">VITE_WEB3FORMS_KEY</code>{' '}
                    environment variable.
                  </p>
                </div>
              )}

              {/* ── Success state (task 12.5) ─────────────────── */}
              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <div className="w-12 h-12 rounded-full bg-chip-bg flex items-center justify-center">
                    {/* Checkmark icon */}
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                      <path
                        d="M4.5 11.5L9 16L17.5 7"
                        stroke="#1a1c1c"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-jakarta font-semibold text-primary text-base mb-1">
                      Message sent successfully!
                    </p>
                    <p className="font-jakarta text-secondary text-sm">
                      Thanks for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitStatus('idle');
                      setFormState({ name: '', email: '', message: '' });
                    }}
                    className="font-jakarta text-sm text-secondary hover:text-primary transition-colors underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                /* ── Form ──────────────────────────────────────── */
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-jakarta text-sm font-medium text-primary mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      aria-invalid={!!errors.name}
                      className={`w-full border rounded-card-sm px-4 py-3 font-jakarta text-sm text-primary bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors ${
                        errors.name ? 'border-red-400' : 'border-border-color'
                      }`}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1 font-jakarta text-xs text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-jakarta text-sm font-medium text-primary mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      aria-invalid={!!errors.email}
                      className={`w-full border rounded-card-sm px-4 py-3 font-jakarta text-sm text-primary bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors ${
                        errors.email ? 'border-red-400' : 'border-border-color'
                      }`}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1 font-jakarta text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-jakarta text-sm font-medium text-primary mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello…"
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      aria-invalid={!!errors.message}
                      className={`w-full border rounded-card-sm px-4 py-3 font-jakarta text-sm text-primary bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none ${
                        errors.message ? 'border-red-400' : 'border-border-color'
                      }`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1 font-jakarta text-xs text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* API error banner */}
                  {submitStatus === 'error' && (
                    <p className="font-jakarta text-sm text-red-600">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}

                  {/* Submit button */}
                  <div>
                    <button
                      type="submit"
                      disabled={keyMissing || submitStatus === 'submitting'}
                      className={`bg-dark-btn text-dark-btn-text rounded-full px-6 py-3 font-jakarta text-sm font-medium w-full md:w-auto transition-opacity ${
                        keyMissing || submitStatus === 'submitting'
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:opacity-90'
                      }`}
                    >
                      {submitStatus === 'submitting' ? 'Sending…' : 'Send Message'}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
