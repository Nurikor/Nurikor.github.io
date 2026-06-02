(function(){
  const translations = window.I18N || {};
  const langs = Array.from(document.querySelectorAll(`.lang-btn`));

  function setLang(lang){
    const dict = translations[lang] || {};
    document.querySelectorAll(`[data-i18n]`).forEach(el=>{
      const key = el.getAttribute(`data-i18n`);
      if (!key) return;
      if (dict[key]) {
        if (Array.isArray(dict[key])) {
          // Для массивов создаем список
          el.innerHTML = dict[key].map(item => `<li>${item}</li>`).join(``);
        } else {
          el.textContent = dict[key];
        }
      }
    });
    langs.forEach(b=>b.setAttribute(`aria-pressed`, b.getAttribute(`data-lang`)===lang));
  }

  langs.forEach(btn=>btn.addEventListener(`click`, ()=>setLang(btn.getAttribute(`data-lang`))));

  // Default language
  setLang(`en`);
})();
