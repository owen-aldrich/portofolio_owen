/**
 * TabSwitcher
 *
 * Pill-style two-tab toggle for the Work section.
 *
 * Props:
 *   activeTab    — 'projects' | 'certificates'
 *   onTabChange  — (tab: string) => void
 *
 * Requirements: 5.2, 5.3, 5.4
 */
export default function TabSwitcher({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'projects',     label: 'Projects'     },
    { id: 'certificates', label: 'Certificates' },
  ];

  return (
    <div className="inline-flex items-center gap-1 bg-chip-bg rounded-full p-1">
      {tabs.map((tab) =>
        tab.id === activeTab ? (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="bg-white border border-border-color shadow-card-sm rounded-full px-5 py-2 font-jakarta text-sm font-medium text-primary"
          >
            {tab.label}
          </button>
        ) : (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="text-secondary font-jakarta text-sm px-5 py-2 rounded-full hover:text-primary transition-colors"
          >
            {tab.label}
          </button>
        )
      )}
    </div>
  );
}
