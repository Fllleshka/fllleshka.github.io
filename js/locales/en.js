window.I18N = window.I18N || {};
I18N.en = {
  meta: {
    title: "Vladislav — Python developer (FastAPI, aiogram, asyncio), Belgrade",
    desc: "Portfolio of Vladislav (Fllleshka), Python developer in Belgrade: FastAPI REST APIs, Telegram bots on aiogram, asyncio, SQLite, marketplace integrations and automation tools."
  },
  nav: { projects: "Projects", skills: "Skills", path: "Path", contact: "Contact" },
  hero: {
    role: "Python developer", location: "Belgrade, Serbia",
    lead: "I build FastAPI services, Telegram bots and automation tools in Python: marketplace price feeds, API integrations and async schedulers. Based in Belgrade and open to new roles.",
    contact: "Get in touch", projects: "See my projects"
  },
  projects: {
    title: "Projects", lead: "Selected repositories from GitHub: what each one does and which technologies it uses.",
    items: {
      "gless-api": "REST API that moves a console automation tool to a microservice architecture: price-list feeds, call-centre control, photo processing and marketplace integrations.",
      "price": "Desktop price list manager: a Tkinter interface talking to a local FastAPI backend, with Drom, Avito, 2GIS and VKontakte integrations.",
      "posting": "Async Telegram auto-poster: publishes photos and videos to several channels on a schedule, one worker per channel.",
      "bot": "Telegram bot for the Gless Group car service centre, the second iteration rebuilt from scratch.",
      "images": "Scheduler that keeps product photos and call-centre settings in sync for Gless Group (Windows).",
      "kosh": "Telegram bot for the Kosh Sports community, built with aiogram and SQLite.",
      "flutter-todo": "To-do app built with Flutter.",
      "resume-flutter": "My résumé as a Dart/Flutter app."
    },
    points: {
      "gless-api": [
        "30+ endpoints across 9 FastAPI routers: call-centre control, file monitoring, photo processing, database, Avito and Drom.",
        "Builds XML and YML price feeds for Drom, Avito, 2GIS and VK from a SQLite catalogue imported from 1C.",
        "Automates 1C 7.3 (PyAutoGUI), Excel schedules (COM) and a Drom browser session (Selenium); sends Telegram alerts and logs to Google Sheets.",
        "Compares product photos by SSIM (OpenCV, scikit-image), processes images with Pillow, includes pytest tests with FastAPI TestClient."
      ],
      "posting": [
        "One worker class instance per channel, all running concurrently in a single asyncio event loop (asyncio.gather).",
        "SQLite schedule with random 10–20 minute gaps; photos and videos are interleaved in proportion with a linear-time merge.",
        "Chooses send_video or send_animation by clip length (MoviePy) and handles Telegram flood-control, network and API errors.",
        "Secrets kept in .env, non-blocking database access through aiosqlite."
      ]
    }
  },
  skills: {
    title: "Skills",
    lead: "Click a skill to see the projects where I used it. The number shows how many projects use it.",
    backend: "Backend", bots: "Bots and integrations", data: "Data and formats",
    automation: "Automation and media", clients: "Desktop and mobile", tools: "Quality and tools",
    usedIn: "used in", clear: "Clear"
  },
  path: {
    title: "Path", now: "now",
    school: "Graduated from physics and mathematics Gymnasium No. 88, Omsk",
    master: "Master’s degree, GUAP, Saint Petersburg",
    work: "Working at Gless Group, based in Belgrade"
  },
  contact: { title: "Contact", text: "Open to work in Serbia. The fastest way to reach me is Telegram or LinkedIn." },
  footer: "Built with plain HTML, CSS and JavaScript. Hosted on GitHub Pages."
};
