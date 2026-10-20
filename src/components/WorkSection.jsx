/**
 * WorkSection
 *
 * Section "// 02 — PORTFOLIO".
 * Heading: "Work & learning." left, subtitle text right.
 * Tab switcher below heading, then ProjectsPanel or CertificatesPanel.
 *
 * Requirements: 5.1-5.4
 */
import { useState } from 'react';
import { projects, certificates } from '../data/content';
import TabSwitcher from './TabSwitcher';
import ProjectsPanel from './ProjectsPanel';
import CertificatesPanel from './CertificatesPanel';

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="py-20 bg-page-bg">
      <div className="max-w-content mx-auto px-6">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="font-mono text-muted text-sm mb-3">// 02 — PORTFOLIO</p>
            <h2 className="font-jakarta font-bold text-[48px] leading-tight tracking-[-1px] text-primary">
              Work &amp; learning<span className="text-heading-dot">.</span>
            </h2>
          </div>
          <p className="font-jakarta text-sm text-secondary leading-snug md:text-right max-w-[220px] pb-2">
            Projects that put ideas into practice.<br />
            Credentials that support the journey.
          </p>
        </div>

        {/* Tab switcher */}
        <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content panels */}
        {activeTab === 'projects' ? (
          <ProjectsPanel projects={projects} />
        ) : (
          <CertificatesPanel certificates={certificates} />
        )}
      </div>
    </div>
  );
}
