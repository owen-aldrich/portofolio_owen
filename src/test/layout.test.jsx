/**
 * layout.test.jsx
 *
 * Unit tests for PlaceholderImage and Navbar.
 * Requirements: 2.1–2.5, 14.1, 14.2
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import PlaceholderImage from '../components/PlaceholderImage';
import Navbar from '../components/Navbar';

// ─────────────────────────────────────────────
// PlaceholderImage
// ─────────────────────────────────────────────
describe('PlaceholderImage', () => {
  it('renders a div — never an img tag', () => {
    const { container } = render(<PlaceholderImage />);
    expect(container.querySelector('img')).toBeNull();
    expect(container.firstChild.tagName).toBe('DIV');
  });

  it('forwards a className to the outer div', () => {
    const { container } = render(<PlaceholderImage className="my-custom-class" />);
    expect(container.firstChild).toHaveClass('my-custom-class');
  });

  it('forwards inline style (width and height) to the outer div', () => {
    const { container } = render(
      <PlaceholderImage style={{ width: '300px', height: '200px' }} />
    );
    expect(container.firstChild.style.width).toBe('300px');
    expect(container.firstChild.style.height).toBe('200px');
  });

  it('variant="about" shows the overlay text "PROFILE PHOTO — ADD LATER"', () => {
    render(<PlaceholderImage variant="about" />);
    expect(screen.getByText('PROFILE PHOTO — ADD LATER')).toBeInTheDocument();
    expect(screen.getByText('[ aspect-ratio 1:1 ]')).toBeInTheDocument();
  });

  it('variant="default" does NOT show the overlay text', () => {
    render(<PlaceholderImage variant="default" />);
    expect(screen.queryByText('PROFILE PHOTO — ADD LATER')).toBeNull();
  });

  it('no variant prop (default) does NOT show the overlay text', () => {
    render(<PlaceholderImage />);
    expect(screen.queryByText('PROFILE PHOTO — ADD LATER')).toBeNull();
  });
});

// ─────────────────────────────────────────────
// Navbar
// ─────────────────────────────────────────────
describe('Navbar', () => {
  const renderNavbar = () =>
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );

  it('renders the logo with the text "Owen"', () => {
    renderNavbar();
    // personal.name === 'Owen'; the logo link should contain exactly "Owen"
    expect(screen.getByRole('link', { name: 'Owen' })).toBeInTheDocument();
  });

  it('renders all five nav link labels', () => {
    renderNavbar();
    const labels = ['About', 'Work', 'Stack', 'Capabilities', 'Contact'];
    labels.forEach((label) => {
      // There will be at least one element with this accessible name
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });
  });

  it('hamburger button is present in the DOM', () => {
    renderNavbar();
    // The hamburger button has aria-label="Toggle navigation menu"
    expect(
      screen.getByRole('button', { name: /toggle navigation menu/i })
    ).toBeInTheDocument();
  });

  it('hamburger button has aria-expanded="false" initially', () => {
    renderNavbar();
    const hamburger = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });

  it('clicking the hamburger opens the mobile dropdown and sets aria-expanded to true', async () => {
    const user = userEvent.setup();
    renderNavbar();
    const hamburger = screen.getByRole('button', { name: /toggle navigation menu/i });
    await user.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');
  });

  it('clicking a nav link in the mobile dropdown closes the menu', async () => {
    const user = userEvent.setup();
    renderNavbar();
    const hamburger = screen.getByRole('button', { name: /toggle navigation menu/i });

    // Open menu first
    await user.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');

    // Click the first mobile nav link (e.g. "About"); there will be multiple
    // "About" anchors — pick one inside the dropdown nav
    const aboutLinks = screen.getAllByText('About');
    await user.click(aboutLinks[aboutLinks.length - 1]);

    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });
});
