/**
 * Unit tests for CertificateCard and CertificateModal components
 * Requirements: 8.1–8.12 — Design: Property 2
 */
import { render, screen, fireEvent } from '@testing-library/react';
import CertificateCard from '../components/CertificateCard';
import CertificateModal from '../components/CertificateModal';

const cert = {
  id: 'test-cert',
  title: 'Test Certificate',
  issuer: 'Test Issuer',
  platform: 'Test Platform',
  date: 'Jan 2025',
  grade: '95%',
  description: 'A test certificate description.',
  image: '/images/certificates/test.jpg',
  pdfUrl: null,
};

// ── CertificateCard ─────────────────────────────────────────────────────────

describe('CertificateCard', () => {
  it('renders with data-testid="certificate-card"', () => {
    render(<CertificateCard certificate={cert} onOpen={() => {}} />);
    expect(screen.getByTestId('certificate-card')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<CertificateCard certificate={cert} onOpen={() => {}} />);
    expect(screen.getByText('Test Certificate')).toBeInTheDocument();
  });

  it('renders the issuer and platform', () => {
    render(<CertificateCard certificate={cert} onOpen={() => {}} />);
    expect(screen.getByText('Test Issuer · Test Platform')).toBeInTheDocument();
  });

  it('renders the date', () => {
    render(<CertificateCard certificate={cert} onOpen={() => {}} />);
    expect(screen.getByText('Jan 2025')).toBeInTheDocument();
  });

  it('calls onOpen with the certificate object when clicked', () => {
    const onOpen = vi.fn();
    render(<CertificateCard certificate={cert} onOpen={onOpen} />);
    fireEvent.click(screen.getByTestId('certificate-card'));
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onOpen).toHaveBeenCalledWith(cert);
  });
});

// ── CertificateModal ────────────────────────────────────────────────────────

describe('CertificateModal', () => {
  it('renders the title', () => {
    render(<CertificateModal certificate={cert} onClose={() => {}} />);
    expect(screen.getByRole('heading', { name: /test certificate/i })).toBeInTheDocument();
  });

  it('renders the grade pill when grade is non-null', () => {
    render(<CertificateModal certificate={cert} onClose={() => {}} />);
    expect(screen.getByText('Grade: 95%')).toBeInTheDocument();
  });

  it('does NOT render grade pill when grade is null', () => {
    render(<CertificateModal certificate={{ ...cert, grade: null }} onClose={() => {}} />);
    expect(screen.queryByText(/grade:/i)).not.toBeInTheDocument();
  });

  it('renders "Open full image" link', () => {
    render(<CertificateModal certificate={cert} onClose={() => {}} />);
    expect(screen.getByRole('link', { name: /open full image/i })).toBeInTheDocument();
  });

  it('does NOT render "Open original PDF" when pdfUrl is null', () => {
    render(<CertificateModal certificate={cert} onClose={() => {}} />);
    expect(screen.queryByRole('link', { name: /open original pdf/i })).not.toBeInTheDocument();
  });

  it('renders "Open original PDF" link when pdfUrl is non-null', () => {
    render(
      <CertificateModal
        certificate={{ ...cert, pdfUrl: 'https://example.com/cert.pdf' }}
        onClose={() => {}}
      />
    );
    expect(screen.getByRole('link', { name: /open original pdf/i })).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    const onClose = vi.fn();
    render(<CertificateModal certificate={cert} onClose={onClose} />);
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when the backdrop is clicked', () => {
    const onClose = vi.fn();
    render(<CertificateModal certificate={cert} onClose={onClose} />);
    // The backdrop is the outermost dialog element
    fireEvent.click(screen.getByRole('dialog'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
