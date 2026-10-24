import { certificates } from '../data/content.js';

const externalLink = (url) =>
  url.startsWith('http')
    ? ' target="_blank" rel="noopener noreferrer"'
    : '';

const button = (label, url, style = '') =>
  `<a class="button ${style}" href="${url}"${externalLink(url)}>${label}</a>`;

function configureNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      document.querySelector('#mobile-menu').classList.remove('open');
    });
  });

  document.querySelector('#menu-toggle').addEventListener('click', () => {
    document.querySelector('#mobile-menu').classList.toggle('open');
  });
}

function configureTabs() {
  document.querySelectorAll('.tabs button').forEach((buttonElement) => {
    buttonElement.addEventListener('click', () => {
      document.querySelectorAll('.tabs button').forEach((tab) => {
        tab.classList.toggle('active', tab === buttonElement);
      });

      document.querySelector('#projects-panel').classList.toggle(
        'hidden',
        buttonElement.dataset.tab !== 'projects',
      );
      document.querySelector('#certificates-panel').classList.toggle(
        'hidden',
        buttonElement.dataset.tab !== 'certificates',
      );
    });
  });
}

function showCertificate(certificate) {
  document.body.classList.add('no-scroll');
  document.querySelector('#modal-root').innerHTML = `
    <div class="modal-backdrop">
      <div class="modal">
        <header>
          <h2>${certificate.title}</h2>
          <button aria-label="Close modal">×</button>
        </header>
        <img src="${certificate.image}" alt="${certificate.title}">
        <div class="modal-body">
          <p>${certificate.issuer} · ${certificate.platform}</p>
          ${certificate.grade ? `<span class="chip">Grade: ${certificate.grade}</span>` : ''}
          <p>${certificate.description}</p>
          <div>
            ${certificate.pdfUrl ? button('Open original PDF', certificate.pdfUrl, 'dark') : ''}
            ${button('Open full image', certificate.image)}
          </div>
        </div>
      </div>
    </div>`;

  const closeModal = () => {
    document.body.classList.remove('no-scroll');
    document.querySelector('#modal-root').innerHTML = '';
  };

  document.querySelector('.modal-backdrop').addEventListener('click', (event) => {
    if (event.target === event.currentTarget) closeModal();
  });
  document.querySelector('.modal header button').addEventListener('click', closeModal);
}

function configureCertificates() {
  document.querySelectorAll('[data-certificate]').forEach((card) => {
    const open = () => {
      const certificate = certificates.find(
        (item) => item.id === card.dataset.certificate,
      );
      if (certificate) showCertificate(certificate);
    };

    card.addEventListener('click', open);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });
}

function configureCvModal() {
  const dialog = document.querySelector('#cv-modal');
  const trigger = document.querySelector('#view-cv');

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.showModal();
    document.body.classList.add('no-scroll');
    document.querySelector('#close-cv').focus();
  });

  document.querySelector('#close-cv').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (
      event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom
    )) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('no-scroll');
    trigger.focus();
  });
}

function configureContactForm() {
  const form = document.querySelector('#contact-form');
  const formKey = document.querySelector('meta[name="web3forms-key"]')?.content.trim();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(form));
    const status = document.querySelector('#form-status');

    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      status.textContent = 'Please complete all fields.';
      status.className = 'error';
      return;
    }

    if (!formKey) {
      status.textContent = 'Contact form is not configured. Please add the Web3Forms key in index.html.';
      status.className = 'error';
      return;
    }

    status.textContent = 'Sending…';
    status.className = '';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ access_key: formKey, ...fields }),
      });

      if (!response.ok) throw new Error('Request failed');
      form.reset();
      status.textContent = 'Message sent successfully! Thanks for reaching out.';
    } catch {
      status.textContent = 'Something went wrong. Please try again or email me directly.';
      status.className = 'error';
    }
  });
}

configureNavigation();
configureTabs();
configureCertificates();
configureCvModal();
configureContactForm();
