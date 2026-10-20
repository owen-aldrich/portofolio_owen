/**
 * CertificatesPanel
 *
 * 2-column grid layout (matches ProjectsPanel).
 *
 * Props:
 *   certificates — array of certificate objects from Content_Store
 *
 * Requirements: 5.6, 5.8, 13.7
 */
import { useState } from 'react';
import CertificateCard from './CertificateCard';
import CertificateModal from './CertificateModal';

export default function CertificatesPanel({ certificates }) {
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        {certificates.map((cert) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            onOpen={(c) => setActiveCertificate(c)}
          />
        ))}
      </div>

      {activeCertificate !== null && (
        <CertificateModal
          certificate={activeCertificate}
          onClose={() => setActiveCertificate(null)}
        />
      )}
    </>
  );
}
