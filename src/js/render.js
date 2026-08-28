import { localize, t } from './i18n.js';
import { profileConfig } from '../data/profile.js';
import { projectsData } from '../data/projects.js';
import { aboutSectionsData } from '../data/about.js';

// SVG Icons
const CHEVRON_ICON = `
  <svg class="chevron-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
    <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
  </svg>
`;

const EXTERNAL_LINK_ICON = `
  <svg class="external-link-icon" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
  </svg>
`;

/**
 * Render Hero Profile info (avatar, name)
 */
export function renderHeroProfile(lang) {
  const avatarImg = document.getElementById('hero-avatar');
  if (avatarImg && profileConfig.avatar) {
    avatarImg.src = profileConfig.avatar;
    avatarImg.alt = profileConfig.avatarAlt || `${profileConfig.name} avatar`;
  }

  const nameEl = document.getElementById('hero-name');
  if (nameEl) {
    nameEl.textContent = profileConfig.name;
  }
}

/**
 * Render Primary Action buttons (GitHub, Telegram, etc.)
 */
export function renderPrimaryLinks(lang) {
  const container = document.getElementById('primary-links-list');
  if (!container || !Array.isArray(profileConfig.primaryLinks)) return;

  container.innerHTML = profileConfig.primaryLinks.map(link => {
    const title = localize(link.title, lang);
    return `
      <li>
        <a class="big-link" id="link-${link.id}" href="${link.url}" target="_blank" rel="noopener noreferrer">
          ${link.icon ? `<img class="icon" src="${link.icon}" alt="" aria-hidden="true" width="20" height="20">` : ''}
          <span>${title}</span>
        </a>
      </li>
    `;
  }).join('');
}

/**
 * Render Footer Social Links
 */
export function renderSocialLinks() {
  const container = document.getElementById('social-links-list');
  if (!container || !Array.isArray(profileConfig.socialLinks)) return;

  container.innerHTML = profileConfig.socialLinks.map(link => `
    <li>
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.label}">
        <img src="${link.icon}" alt="" class="footer-icon" aria-hidden="true" width="18" height="18">
      </a>
    </li>
  `).join('');
}

/**
 * Render Projects with state preservation
 */
export function renderProjects(lang) {
  const container = document.getElementById('projects-container');
  if (!container || !Array.isArray(projectsData)) return;

  // Capture open state of projects before re-rendering
  const openProjectIds = new Set();
  container.querySelectorAll('details[data-project-id]').forEach(el => {
    if (el.open) {
      openProjectIds.add(el.getAttribute('data-project-id'));
    }
  });

  const detailsBtnText = t('project_details_btn', lang) || 'Details';

  container.innerHTML = projectsData.map(project => {
    const title = localize(project.title, lang);
    const shortDesc = localize(project.shortDesc, lang);
    const fullDesc = localize(project.fullDesc, lang);
    const isOpen = openProjectIds.has(project.id) ? 'open' : '';

    const linksHtml = project.links && project.links.length ? `
      <div class="project-links">
        ${project.links.map(link => `
          <a href="${link.url}" class="project-link-btn" target="_blank" rel="noopener noreferrer">
            <span>${localize(link.text, lang)}</span>
            ${EXTERNAL_LINK_ICON}
          </a>
        `).join('')}
      </div>
    ` : '';

    return `
      <article class="project-card">
        <details class="project-details" data-project-id="${project.id}" ${isOpen}>
          <summary class="project-summary">
            <div class="project-summary-info">
              <h3 class="project-title">${title}</h3>
              ${shortDesc ? `<p class="project-short-desc">${shortDesc}</p>` : ''}
            </div>
            <span class="project-toggle-badge">
              <span class="toggle-text">${detailsBtnText}</span>
              ${CHEVRON_ICON}
            </span>
          </summary>
          <div class="project-content">
            ${fullDesc ? `<p class="project-full-desc">${fullDesc}</p>` : ''}
            ${linksHtml}
          </div>
        </details>
      </article>
    `;
  }).join('');
}

/**
 * Render About sections with state preservation
 */
export function renderAbout(lang) {
  const container = document.getElementById('about-container');
  if (!container || !Array.isArray(aboutSectionsData)) return;

  // Capture open states before re-rendering
  const mainDetails = container.querySelector('.about-main-details');
  const isMainOpen = mainDetails ? mainDetails.open : true;

  const openSubIds = new Set();
  container.querySelectorAll('.about-sub-details[data-section-id]').forEach(el => {
    if (el.open) {
      openSubIds.add(el.getAttribute('data-section-id'));
    }
  });

  const aboutMeTitle = t('about_me_title', lang) || 'About me';

  const sectionsHtml = aboutSectionsData.map(section => {
    const title = localize(section.title, lang);
    const content = localize(section.content, lang);
    const rawItems = section.items ? (section.items[lang] || section.items.en || section.items.ru || section.items) : null;
    const items = Array.isArray(rawItems) ? rawItems : [];
    const images = Array.isArray(section.images) ? section.images : [];
    const periods = Array.isArray(section.periods) ? section.periods : [];
    const isOpen = openSubIds.has(section.id) ? 'open' : '';

    // Items list
    const itemsHtml = items.length ? `
      <ul class="about-list">
        ${items.map(item => `<li>${localize(item, lang)}</li>`).join('')}
      </ul>
    ` : '';

    // Paragraph
    const paragraphHtml = content ? `<p class="about-paragraph">${content}</p>` : '';

    // Timeline periods
    const periodsHtml = periods.length ? `
      <div class="timeline-container">
        ${periods.map(p => {
          const periodBadge = localize(p.period, lang);
          const pTitle = localize(p.title, lang);
          const pContent = localize(p.content, lang);
          const pLinks = Array.isArray(p.links) ? p.links : [];

          const linksHtml = pLinks.length ? `
            <div class="timeline-links">
              ${pLinks.map(link => `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="timeline-link">
                  <span>${localize(link.text, lang)}</span>
                  ${EXTERNAL_LINK_ICON}
                </a>
              `).join('')}
            </div>
          ` : '';

          return `
            <div class="timeline-block">
              <div class="timeline-badge">${periodBadge}</div>
              <div class="timeline-body">
                <h4 class="timeline-heading">${pTitle}</h4>
                <p class="timeline-text">${pContent}</p>
                ${linksHtml}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    ` : '';

    // Images gallery
    const imagesHtml = images.length ? `
      <div class="about-images ${images.length > 1 ? 'about-gallery' : ''}">
        ${images.map(img => {
          const src = typeof img === 'string' ? img : img.src;
          const alt = localize(img.alt || section.title, lang);
          const caption = localize(img.caption, lang);

          return `
            <figure class="about-image-card">
              <img class="about-img" src="${src}" alt="${alt}" loading="lazy" />
              ${caption ? `<figcaption class="about-img-caption">${caption}</figcaption>` : ''}
            </figure>
          `;
        }).join('')}
      </div>
    ` : '';

    return `
      <details class="about-sub-details" data-section-id="${section.id}" ${isOpen}>
        <summary class="about-sub-summary">
          <span class="sub-title">${title}</span>
          ${CHEVRON_ICON}
        </summary>
        <div class="about-sub-content">
          ${itemsHtml}
          ${paragraphHtml}
          ${periodsHtml}
          ${imagesHtml}
        </div>
      </details>
    `;
  }).join('');

  container.innerHTML = `
    <details class="about-main-details" ${isMainOpen ? 'open' : ''}>
      <summary class="about-main-summary">
        <span>${aboutMeTitle}</span>
        ${CHEVRON_ICON}
      </summary>
      <div class="about-subsections">
        ${sectionsHtml}
      </div>
    </details>
  `;
}

/**
 * Full re-render of all dynamic components for a given language
 */
export function renderAll(lang) {
  renderHeroProfile(lang);
  renderPrimaryLinks(lang);
  renderSocialLinks();
  renderProjects(lang);
  renderAbout(lang);
}
