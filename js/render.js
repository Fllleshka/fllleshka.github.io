window.Render = (function () {
  var P = window.PROFILE, J = window.PROJECTS, t = function (k) { return I18N.t(k); };
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function tags(list) {
    var ul = el("ul", "tags");
    list.forEach(function (x) { ul.appendChild(el("li", null, x)); });
    return ul;
  }
  function projects() {
    var ul = document.getElementById("project-list");
    ul.replaceChildren();
    J.forEach(function (p) {
      var li = el("li", "project" + (p.featured ? " is-featured" : ""));
      var name = el(p.url ? "a" : "span", "project-name", p.name);
      if (p.url) { name.href = p.url; name.rel = "noopener"; }
      li.append(name, el("p", "project-desc", t("projects.items." + p.id)), tags(p.tags));
      ul.appendChild(li);
    });
  }
  function skills() {
    var box = document.getElementById("skills-list");
    box.replaceChildren();
    P.skills.forEach(function (g) {
      var d = el("div", "skill-group");
      d.append(el("h3", null, t("skills." + g.group)), tags(g.items));
      box.appendChild(d);
    });
  }
  function path() {
    var ol = document.getElementById("path-list");
    ol.replaceChildren();
    P.path.forEach(function (s) {
      var li = el("li");
      li.append(el("span", "when", s.when || t("path.now")), el("span", null, t("path." + s.id)));
      ol.appendChild(li);
    });
  }
  function contacts() {
    var ul = document.getElementById("contact-list");
    ul.replaceChildren();
    [["Telegram", P.links.telegram], ["LinkedIn", P.links.linkedin], ["GitHub", P.links.github],
     ["Email", P.links.email && "mailto:" + P.links.email]].forEach(function (c) {
      if (!c[1]) return;
      var li = el("li"), a = el("a", "btn", c[0]);
      a.href = c[1]; a.rel = "noopener";
      li.appendChild(a); ul.appendChild(li);
    });
  }
  function api(intro) {
    var pre = document.getElementById("api");
    pre.replaceChildren();
    pre.classList.toggle("intro", !!intro);
    function kv(k, v, last, raw) {
      return [["p", "  "], ["k", '"' + k + '"'], ["p", ": "], raw || ["s", '"' + v + '"'], ["p", last ? "" : ","]];
    }
    var stack = ["s", "[" + P.stack.map(function (x) { return '"' + x + '"'; }).join(", ") + "]"];
    var lines = [
      [["m", "GET /api/vladislav?lang=" + I18N.lang + "  "], ["ok", "200 OK"]],
      [["p", "{"]],
      kv("name", P.name), kv("role", t("hero.role")), kv("location", t("hero.location")),
      kv("company", P.company), kv("open_to_work", null, false, ["b", "true"]), kv("stack", null, true, stack),
      [["p", "}"]]
    ];
    lines.forEach(function (parts, i) {
      var line = el("span", "line");
      line.style.setProperty("--i", i);
      parts.forEach(function (p) { line.appendChild(el("span", p[0], p[1])); });
      pre.appendChild(line);
    });
  }
  return { all: function (intro) { projects(); skills(); path(); contacts(); api(intro); } };
})();
