window.Render = (function () {
  var P = window.PROFILE, J = window.PROJECTS, t = function (k) { return I18N.t(k); };
  var selected = null; // навык, выбранный в блоке Skills

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function usedIn(skill) {
    return J.filter(function (p) { return p.skills.indexOf(skill) >= 0; });
  }
  function tags(list) {
    var ul = el("ul", "tags");
    list.forEach(function (x) { ul.appendChild(el("li", x === selected ? "is-hit" : null, x)); });
    return ul;
  }
  function select(skill) {
    selected = selected === skill ? null : skill;
    projects(); skills(); detail();
  }

  function projects() {
    var ul = document.getElementById("project-list");
    ul.replaceChildren();
    J.forEach(function (p) {
      var dim = selected && p.skills.indexOf(selected) < 0;
      var li = el("li", "project" + (p.featured ? " is-featured" : "") + (dim ? " is-dim" : ""));
      var name = el(p.url ? "a" : "span", "project-name", p.name);
      if (p.url) { name.href = p.url; name.rel = "noopener"; }
      var body = el("div", "project-body");
      body.appendChild(el("p", "project-desc", t("projects.items." + p.id)));
      var pts = t("projects.points." + p.id);
      if (Array.isArray(pts)) {
        var list = el("ul", "points");
        pts.forEach(function (x) { list.appendChild(el("li", null, x)); });
        body.appendChild(list);
      }
      body.appendChild(tags(p.skills));
      li.append(name, body);
      ul.appendChild(li);
    });
  }

  function skills() {
    var box = document.getElementById("skills-list");
    box.replaceChildren();
    P.skills.forEach(function (g) {
      var d = el("div", "skill-group"), ul = el("ul", "chips");
      g.items.forEach(function (name) {
        var n = usedIn(name).length, li = el("li", n ? null : "plain");
        if (n) {
          var b = el("button", "skill-chip");
          b.type = "button";
          b.setAttribute("aria-pressed", String(name === selected));
          b.append(document.createTextNode(name), el("span", "count", String(n)));
          b.addEventListener("click", function () { select(name); });
          li.appendChild(b);
        } else {
          li.textContent = name;
        }
        ul.appendChild(li);
      });
      d.append(el("h3", null, t("skills." + g.group)), ul);
      box.appendChild(d);
    });
  }

  function detail() {
    var box = document.getElementById("skill-detail");
    box.replaceChildren();
    box.hidden = !selected;
    if (!selected) return;
    var head = el("p", "skill-detail-head"), links = el("ul");
    head.append(el("strong", null, selected), document.createTextNode(" — " + t("skills.usedIn")));
    usedIn(selected).forEach(function (p) {
      var li = el("li"), a = el("a", null, p.name);
      a.href = p.url; a.rel = "noopener";
      li.appendChild(a); links.appendChild(li);
    });
    var clear = el("button", "btn-link", t("skills.clear"));
    clear.type = "button";
    clear.addEventListener("click", function () { select(selected); });
    box.append(head, links, clear);
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
  return { all: function (intro) { projects(); skills(); detail(); path(); contacts(); api(intro); } };
})();
