import { personal } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-border-color">
      <div className="max-w-content mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left side — name + copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <span className="font-jakarta font-medium text-primary text-sm">
            {personal.fullName}
          </span>
          <span className="hidden sm:inline font-jakarta text-secondary text-sm">·</span>
          <span className="font-jakarta text-secondary text-sm">
            {personal.copyright}
          </span>
        </div>

        {/* Right side — nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex items-center flex-wrap gap-5">
            {personal.footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : undefined}
                  className="font-jakarta text-sm text-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
