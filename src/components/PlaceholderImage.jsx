/**
 * PlaceholderImage
 *
 * Renders a styled <div> block in place of a missing image.
 * IMPORTANT: This component NEVER renders an <img> tag — no broken-image
 * browser rendering is possible.
 *
 * Props:
 *   className  — additional Tailwind classes forwarded to the outer div
 *   style      — inline styles forwarded to the outer div (used for explicit
 *                width / height so the block never collapses to zero)
 *   variant    — 'default' (plain block) | 'about' (shows text overlay)
 *
 * Requirements: 14.1, 14.2 — Design: PlaceholderImage, Property 5
 */
export default function PlaceholderImage({ className = '', style, variant = 'default' }) {
  return (
    <div
      className={`bg-image-bg relative ${className}`}
      style={style}
    >
      {variant === 'about' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 pointer-events-none">
          <span
            className="font-mono text-muted text-center leading-none"
            style={{ fontSize: '10px' }}
          >
            PROFILE PHOTO — ADD LATER
          </span>
          <span
            className="font-mono text-muted text-center leading-none"
            style={{ fontSize: '10px' }}
          >
            [ aspect-ratio 1:1 ]
          </span>
        </div>
      )}
    </div>
  );
}
