// Build a lookup map of all SVG icons at module load time.
// Using { eager: true, query: '?url' } so Vite returns the resolved public URL
// for each SVG file rather than trying to import it as a JS module.
const icons = import.meta.glob('../assets/icons/*.svg', { eager: true, query: '?url', import: 'default' });

/**
 * IconBox
 *
 * Renders a 36×36 icon box containing a 22×22 SVG icon when the icon file
 * exists in src/assets/icons/, or falls back to a text badge when the icon
 * is null or the file is absent.
 *
 * Props:
 *   icon  {string|null}  SVG filename, e.g. 'react.svg', or null
 *   name  {string}       Technology name used as alt text and badge label
 */
export default function IconBox({ icon, name }) {
  // The glob keys look like '../assets/icons/react.svg'
  const key = icon ? `../assets/icons/${icon}` : null;
  const resolvedUrl = key ? icons[key] : null;

  if (resolvedUrl) {
    return (
      <div className="w-9 h-9 rounded-icon border border-icon-border bg-white flex items-center justify-center flex-shrink-0">
        <img
          src={resolvedUrl}
          alt={name}
          width={22}
          height={22}
          className="object-contain"
        />
      </div>
    );
  }

  // Fallback: render the technology name as a text badge
  return (
    <span className="bg-chip-bg text-secondary text-xs rounded-full px-3 py-1 flex-shrink-0">
      {name}
    </span>
  );
}
