/**
 * CertificateModal
 *
 * Full-viewport overlay that shows detailed certificate information.
 * Rendered via ReactDOM.createPortal into document.body.
 * Locks body scroll while open.
 *
 * Props:
 *   certificate — full certificate object from Content_Store
 *   onClose     — () => void
 *
 * Requirements: 8.2–8.12, 14.1, 15.6
 */
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PlaceholderImage from './PlaceholderImage';

function ModalContent({ certificate, onClose }) {
  const { title, issuer, platform, grade, description, image, pdfUrl } = certificate;
  const [imgError, setImgError] = useState(false);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  return (
    /* Backdrop — clicking the backdrop closes the modal */
    <div
      className="fixed inset-0 z-50 bg-[rgba(26,28,28,0.55)] flex items-center justify-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={title}
    >
      {/* Modal panel — stop propagation so clicks inside don't close the modal */}
      <div
        className="w-full max-w-[760px] bg-white rounded-card-lg shadow-modal max-h-[90vh] overflow-y-auto"
        style={{ width: 'min(760px, 100%)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-color">
          <h2 className="font-jakarta font-semibold text-base text-primary leading-snug pr-4">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-secondary hover:bg-chip-bg transition-colors"
          >
            {/* × SVG */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <line x1="3" y1="3" x2="13" y2="13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              <line x1="13" y1="3" x2="3" y2="13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ── Certificate image ── */}
        <div className="w-full h-[440px] bg-image-bg overflow-hidden">
          {imgError ? (
            <PlaceholderImage className="w-full h-[440px]" />
          ) : (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        {/* ── Body ── */}
        <div className="px-6 py-5 flex flex-col gap-3">
          {/* Issuer · Platform */}
          <p className="font-jakarta text-sm text-secondary">
            {issuer} · {platform}
          </p>

          {/* Grade pill — only when grade is non-null */}
          {grade !== null && grade !== undefined && (
            <span className="inline-block bg-chip-bg text-secondary rounded-full px-3 py-1 text-xs font-jakarta w-fit">
              Grade: {grade}
            </span>
          )}

          {/* Description */}
          <p className="font-jakarta text-sm text-primary leading-relaxed">
            {description}
          </p>

          {/* ── Action buttons ── */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Open original PDF — only when pdfUrl is non-null */}
            {pdfUrl !== null && pdfUrl !== undefined && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-dark-btn text-dark-btn-text font-jakarta text-sm font-medium rounded-full px-5 py-2 hover:opacity-90 transition-opacity"
              >
                Open original PDF
              </a>
            )}

            {/* Open full image — always rendered */}
            <a
              href={image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border-color text-primary font-jakarta text-sm font-medium rounded-full px-5 py-2 hover:bg-chip-bg transition-colors"
            >
              Open full image
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CertificateModal({ certificate, onClose }) {
  return ReactDOM.createPortal(
    <ModalContent certificate={certificate} onClose={onClose} />,
    document.body
  );
}
