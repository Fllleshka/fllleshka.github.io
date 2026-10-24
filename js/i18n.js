(function () {
  var I = window.I18N, SUP = ["en", "ru", "sr"], KEY = "lang", listeners = [];
  I.lang = "en";
  function get(o, path) { return path.split(".").reduce(function (a, k) { return a && a[k]; }, o); }
  I.t = function (key) {
    var v = get(I[I.lang], key);
    if (v == null) v = get(I.en, key);
    return v == null ? key : v;
  };
  I.initial = function () {
    var q = new URLSearchParams(location.search).get("lang");
    if (SUP.indexOf(q) >= 0) return q;
    try { var s = localStorage.getItem(KEY); if (SUP.indexOf(s) >= 0) return s; } catch (e) {}
    var n = (navigator.language || "en").slice(0, 2).toLowerCase();
    return SUP.indexOf(n) >= 0 ? n : "en";
  };
  I.set = function (lang) {
    if (SUP.indexOf(lang) < 0) lang = "en";
    I.lang = lang;
    document.documentElement.lang = lang === "sr" ? "sr-Latn" : lang;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    try { var u = new URL(location.href); u.searchParams.set("lang", lang); history.replaceState(null, "", u); } catch (e) {}
    listeners.forEach(function (f) { f(); });
  };
  I.onChange = function (f) { listeners.push(f); };
  I.apply = function () {
    document.querySelectorAll("[data-i18n]").forEach(function (e) { e.textContent = I.t(e.dataset.i18n); });
    document.title = I.t("meta.title");
    document.querySelector('meta[name="description"]').setAttribute("content", I.t("meta.desc"));
  };
})();
