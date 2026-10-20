/**
 * worksection.test.jsx
 *
 * Unit tests for TabSwitcher and WorkSection.
 * Requirements: 5.2, 5.3, 5.4
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import TabSwitcher from '../components/TabSwitcher';
import WorkSection from '../components/WorkSection';

// ─────────────────────────────────────────────
// TabSwitcher
// ─────────────────────────────────────────────
describe('TabSwitcher', () => {
  it('renders "Projects" and "Certificates" tab buttons', () => {
    render(<TabSwitcher activeTab="projects" onTabChange={() => {}} />);
    expect(screen.getByRole('button', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Certificates' })).toBeInTheDocument();
  });

  it('active tab ("projects") has bg-white class; inactive tab does not', () => {
    render(<TabSwitcher activeTab="projects" onTabChange={() => {}} />);
    const projectsBtn = screen.getByRole('button', { name: 'Projects' });
    const certificatesBtn = screen.getByRole('button', { name: 'Certificates' });
    expect(projectsBtn).toHaveClass('bg-white');
    expect(certificatesBtn).not.toHaveClass('bg-white');
  });

  it('active tab ("certificates") has bg-white class; inactive tab does not', () => {
    render(<TabSwitcher activeTab="certificates" onTabChange={() => {}} />);
    const projectsBtn = screen.getByRole('button', { name: 'Projects' });
    const certificatesBtn = screen.getByRole('button', { name: 'Certificates' });
    expect(certificatesBtn).toHaveClass('bg-white');
    expect(projectsBtn).not.toHaveClass('bg-white');
  });

  it('clicking "Certificates" calls onTabChange with "certificates"', async () => {
    const user = userEvent.setup();
    const mockOnTabChange = vi.fn();
    render(<TabSwitcher activeTab="projects" onTabChange={mockOnTabChange} />);
    await user.click(screen.getByRole('button', { name: 'Certificates' }));
    expect(mockOnTabChange).toHaveBeenCalledWith('certificates');
  });

  it('clicking "Projects" calls onTabChange with "projects"', async () => {
    const user = userEvent.setup();
    const mockOnTabChange = vi.fn();
    render(<TabSwitcher activeTab="certificates" onTabChange={mockOnTabChange} />);
    await user.click(screen.getByRole('button', { name: 'Projects' }));
    expect(mockOnTabChange).toHaveBeenCalledWith('projects');
  });
});

// ─────────────────────────────────────────────
// WorkSection
// ─────────────────────────────────────────────
describe('WorkSection', () => {
  const renderWorkSection = () =>
    render(
      <MemoryRouter>
        <WorkSection />
      </MemoryRouter>
    );

  it('renders the "// 02 — WORK & LEARNING" section label', () => {
    renderWorkSection();
    expect(screen.getByText('// 02 — WORK & LEARNING')).toBeInTheDocument();
  });

  it('shows project cards by default (projects panel is active on initial render)', () => {
    renderWorkSection();
    // ProjectCard components each carry data-testid="project-card"
    const cards = screen.getAllByTestId('project-card');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('"Projects" tab is active (bg-white) on initial render', () => {
    renderWorkSection();
    const projectsBtn = screen.getByRole('button', { name: 'Projects' });
    expect(projectsBtn).toHaveClass('bg-white');
  });

  it('clicking "Certificates" tab hides project cards and shows certificate cards', async () => {
    const user = userEvent.setup();
    renderWorkSection();

    await user.click(screen.getByRole('button', { name: 'Certificates' }));

    // CertificateCard components each carry data-testid="certificate-card"
    const certCards = screen.getAllByTestId('certificate-card');
    expect(certCards.length).toBeGreaterThan(0);

    // Project cards should be gone
    expect(screen.queryAllByTestId('project-card')).toHaveLength(0);
  });

  it('clicking "Projects" tab after switching back hides certificates and shows projects', async () => {
    const user = userEvent.setup();
    renderWorkSection();

    // Switch to certificates
    await user.click(screen.getByRole('button', { name: 'Certificates' }));
    expect(screen.getAllByTestId('certificate-card').length).toBeGreaterThan(0);

    // Switch back to projects
    await user.click(screen.getByRole('button', { name: 'Projects' }));
    expect(screen.getAllByTestId('project-card').length).toBeGreaterThan(0);
    expect(screen.queryAllByTestId('certificate-card')).toHaveLength(0);
  });
});
