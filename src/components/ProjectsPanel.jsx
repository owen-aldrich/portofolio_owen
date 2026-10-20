/**
 * ProjectsPanel
 *
 * Renders projects in a 2-column grid (1-col on mobile).
 *
 * Props:
 *   projects — array of project objects from Content_Store
 *
 * Requirements: 5.5, 5.7, 13.6 — Design: Property 1
 */
import ProjectCard from './ProjectCard';

export default function ProjectsPanel({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
