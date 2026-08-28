import { getInitialLang, setLanguage } from './i18n.js';
import { renderAll } from './render.js';

function updateLanguageButtons(selectedLang) {
  const pill = document.querySelector('.lang-pill');
  if (pill) {
    pill.setAttribute('data-active', selectedLang);
  }

  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    const isActive = btn.dataset.lang === selectedLang;
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function handleLanguageSwitch(lang) {
  setLanguage(lang, currentLang => {
    updateLanguageButtons(currentLang);
    renderAll(currentLang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const initialLang = getInitialLang();

  // Attach click listener to language buttons
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang) {
        handleLanguageSwitch(lang);
      }
    });
  });

  // Initial render and setup
  handleLanguageSwitch(initialLang);
});
