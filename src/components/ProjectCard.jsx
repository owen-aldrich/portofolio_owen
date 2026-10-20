/**
 * ProjectCard
 *
 * Renders a summary card for a single project.
 * Desktop: image top (full-width, taller), then text + action row below.
 * Mobile: same layout.
 *
 * Props:
 *   project — { slug, title, description, year, category, coverImage, liveUrl }
 *
 * Requirements: 6.1-6.5, 14.1, 14.8 — Design: Property 1
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PlaceholderImage from './PlaceholderImage';

export default function ProjectCard({ project }) {
  const { slug, title, description, year, category, coverImage, liveUrl, githubUrl } = project;
  const [imgError, setImgError] = useState(false);

  return (
    <div
      data-testid="project-card"
      className="flex flex-col border border-border-color rounded-card-sm overflow-hidden bg-white"
    >
      {/* Cover image — full width, taller */}
      <div className="w-full h-[220px] md:h-[260px] bg-image-bg flex-shrink-0">
        {imgError ? (
          <PlaceholderImage className="w-full h-full" />
        ) : (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-3 p-5">
        {/* Category badge */}
        <span className="inline-block bg-badge-bg text-badge-text rounded-full text-xs px-3 py-1 font-jakarta w-fit">
          {category}
        </span>

        {/* Title */}
        <h3 className="font-jakarta font-bold text-[20px] text-primary leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="font-jakarta text-sm text-secondary leading-relaxed">
          {description}
        </p>

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-1 flex-wrap">
          <Link
            to={`/projects/${slug}`}
            className="font-jakarta text-sm font-medium text-primary border border-border-color rounded-full px-4 py-2 hover:bg-chip-bg transition-colors"
          >
            View details
          </Link>

          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-jakarta text-sm font-medium text-primary border border-border-color rounded-full px-4 py-2 hover:bg-chip-bg transition-colors"
            >
              Live Demo
            </a>
          ) : (
            <span
              className="font-jakarta text-sm font-medium text-muted border border-border-color rounded-full px-4 py-2 cursor-not-allowed opacity-50 select-none"
              title="Live demo not available"
            >
              Live Demo
            </span>
          )}

          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-jakarta text-sm font-medium text-primary border border-border-color rounded-full px-4 py-2 hover:bg-chip-bg transition-colors"
            >
              GitHub
            </a>
          ) : (
            <span
              className="font-jakarta text-sm font-medium text-muted border border-border-color rounded-full px-4 py-2 cursor-not-allowed opacity-50 select-none"
              title="Repository not available"
            >
              GitHub
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

