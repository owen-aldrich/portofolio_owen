import { capabilities } from '../data/content';

export default function CapabilitiesSection() {
  return (
    <div id="capabilities" className="py-20 bg-page-bg">
      <div className="max-w-content mx-auto px-6">

        {/* Section label — 04 */}
        <p className="font-mono text-muted text-sm mb-3">// 04 — TECHNICAL CAPABILITIES</p>

        {/* Section heading */}
        <h2 className="font-jakarta font-bold text-[42px] uppercase text-primary leading-tight">
          TECHNICAL CAPABILITIES.
        </h2>

        {/* 3-column capability card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {capabilities.map((cap) => (
            <div
              key={cap.number}
              className="group border border-border-color rounded-card-lg p-6 cursor-default transition-colors hover:bg-primary hover:border-primary"
            >
              {/* Number */}
              <span className="font-mono text-sm text-muted group-hover:text-dark-btn-text transition-colors">
                {cap.number}
              </span>

              {/* Title — two uppercase lines */}
              <div className="mt-2">
                {cap.title.map((line) => (
                  <div
                    key={line}
                    className="font-jakarta font-bold text-[22px] uppercase text-primary group-hover:text-dark-btn-text transition-colors leading-snug"
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="font-jakarta text-sm text-secondary group-hover:text-dark-btn-text transition-colors mt-3 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
