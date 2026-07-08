import { setLang } from './i18n/index.js';

function updateLanguageButtons(selectedLang) {
  const langs = document.querySelectorAll('.lang-btn');
  langs.forEach(btn => btn.setAttribute('aria-pressed', btn.dataset.lang === selectedLang));
}

document.addEventListener('DOMContentLoaded', () => {
  const langs = document.querySelectorAll('.lang-btn');

  langs.forEach(btn => btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    setLang(lang);
    updateLanguageButtons(lang);
  }));

  setLang('en');
  updateLanguageButtons('en');
});
