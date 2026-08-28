import { uiTranslations } from '../data/translations.js';

const STORAGE_KEY = 'nurikor_lang';
let currentLang = 'en';

/**
 * Localize a field that can be either a localized object { en: '...', ru: '...' } or a string.
 */
export function localize(field, lang = currentLang) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'object') {
    return field[lang] || field.en || field.ru || '';
  }
  return String(field);
}

/**
 * Get a UI translation string by key
 */
export function t(key, lang = currentLang) {
  const dict = uiTranslations[lang] || uiTranslations.en;
  return dict[key] || '';
}

/**
 * Determine the initial language
 */
export function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && uiTranslations[saved]) {
      return saved;
    }
  } catch {
    // localStorage might be unavailable or disabled
  }

  const navLangs = navigator.languages || [navigator.language || navigator.userLanguage || ''];
  const ruPrefixes = ['ru', 'ky', 'be', 'kk', 'uz', 'tg'];

  for (const lang of navLangs) {
    if (!lang) continue;
    const lower = lang.toLowerCase();
    if (ruPrefixes.some(prefix => lower.startsWith(prefix))) {
      return 'ru';
    }
  }

  return 'en';
}

export function getCurrentLang() {
  return currentLang;
}

/**
 * Update page meta tags, title and document language attribute
 */
function updateMetaTags(lang) {
  document.documentElement.lang = lang;

  const pageTitle = t('page_title', lang);
  if (pageTitle) {
    document.title = pageTitle;
  }

  const metaDesc = t('meta_description', lang);
  if (metaDesc) {
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', metaDesc);

    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute('content', metaDesc);
  }

  const ogTitleEl = document.querySelector('meta[property="og:title"]');
  if (ogTitleEl) {
    ogTitleEl.setAttribute('content', pageTitle || `Nurikor — ${t('role', lang)}`);
  }
}

/**
 * Update static text elements marked with [data-i18n]
 */
export function updateStaticI18nElements(lang) {
  const dict = uiTranslations[lang] || uiTranslations.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = dict[key];
    if (value != null) {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    const value = dict[key];
    if (value != null) {
      el.setAttribute('aria-label', value);
    }
  });
}

/**
 * Set active language and execute callbacks
 */
export function setLanguage(lang, onLanguageChange) {
  currentLang = uiTranslations[lang] ? lang : 'en';

  try {
    localStorage.setItem(STORAGE_KEY, currentLang);
  } catch {
    // ignore
  }

  updateMetaTags(currentLang);
  updateStaticI18nElements(currentLang);

  if (typeof onLanguageChange === 'function') {
    onLanguageChange(currentLang);
  }
}
