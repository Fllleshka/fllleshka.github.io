document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".lang button"), first = true;
  function update() {
    I18N.apply();
    Render.all(first);
    first = false;
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === I18N.lang)); });
  }
  I18N.onChange(update);
  buttons.forEach(function (b) { b.addEventListener("click", function () { I18N.set(b.dataset.lang); }); });
  I18N.set(I18N.initial());
});
