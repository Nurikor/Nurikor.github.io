import { en } from './en.js';
import { ru } from './ru.js';

const translations = { en, ru };

export function setLang(lang) {
  const dict = translations[lang] || {};
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = dict[key];
    if (value == null) return;

    const isList = Array.isArray(value);
    el[isList ? 'innerHTML' : 'textContent'] = isList
      ? value.map(item => `<li>${item}</li>`).join('')
      : value;
  });
}
