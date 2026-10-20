/**
 * CertificateCard
 *
 * Card layout matching ProjectCard: image on top, info below.
 * Clicking anywhere opens the modal.
 *
 * Props:
 *   certificate — { id, title, issuer, platform, date, grade, image, ... }
 *   onOpen      — (certificate) => void
 *
 * Requirements: 8.1
 */
import { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';

export default function CertificateCard({ certificate, onOpen }) {
  const { title, issuer, platform, date, grade, image } = certificate;
  const [imgError, setImgError] = useState(false);

  return (
    <div
      data-testid="certificate-card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(certificate)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(certificate); }}
      className="flex flex-col border border-border-color rounded-card-sm overflow-hidden bg-white cursor-pointer hover:shadow-card transition-shadow"
    >
      {/* Certificate image */}
      <div className="w-full h-[180px] md:h-[200px] bg-image-bg flex-shrink-0">
        {imgError ? (
          <PlaceholderImage className="w-full h-full" />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 p-5">
        {/* Issuer badge */}
        <span className="inline-block bg-badge-bg text-badge-text rounded-full text-xs px-3 py-1 font-jakarta w-fit">
          {issuer}
        </span>

        {/* Title */}
        <h3 className="font-jakarta font-semibold text-[16px] text-primary leading-snug mt-1">
          {title}
        </h3>

        {/* Platform + date row */}
        <div className="flex items-center justify-between mt-0.5">
          <span className="font-jakarta text-xs text-secondary">{platform}</span>
          <span className="font-mono text-xs text-muted">{date}</span>
        </div>

        {/* Grade pill — only when non-null */}
        {grade && (
          <span className="inline-block bg-chip-bg text-secondary rounded-full text-xs px-3 py-1 font-jakarta w-fit mt-1">
            Grade: {grade}
          </span>
        )}
      </div>
    </div>
  );
}
