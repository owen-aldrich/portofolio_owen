/**
 * Unit tests for ProjectCard component
 * Requirements: 6.1, 6.2, 6.3, 6.4 — Design: Property 1
 */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const project = {
  slug: 'test-project',
  title: 'Test Project Title',
  description: 'A test description.',
  year: '2025',
  category: '// TEST',
  coverImage: '/images/projects/test/cover.jpg',
  detailImage: '/images/projects/test/detail.jpg',
  techStack: ['React', 'Vite'],
  features: [{ title: 'Feature 1', description: 'Desc 1' }],
  outcomes: [{ title: 'Outcome 1', description: 'Desc 1' }],
  githubUrl: null,
  liveUrl: null,
};

function renderCard(props = {}) {
  return render(
    <MemoryRouter>
      <ProjectCard project={{ ...project, ...props }} />
    </MemoryRouter>
  );
}

describe('ProjectCard', () => {
  it('renders with data-testid="project-card"', () => {
    renderCard();
    expect(screen.getByTestId('project-card')).toBeInTheDocument();
  });

  it('renders the project title', () => {
    renderCard();
    expect(screen.getByText('Test Project Title')).toBeInTheDocument();
  });

  it('renders the category badge', () => {
    renderCard();
    expect(screen.getByText('// TEST')).toBeInTheDocument();
  });

  it('renders the year', () => {
    renderCard();
    expect(screen.getByText('2025')).toBeInTheDocument();
  });

  it('renders the description', () => {
    renderCard();
    expect(screen.getByText('A test description.')).toBeInTheDocument();
  });

  it('"View details" link points to /projects/test-project', () => {
    renderCard();
    const link = screen.getByRole('link', { name: /view details/i });
    expect(link).toHaveAttribute('href', '/projects/test-project');
  });
});
