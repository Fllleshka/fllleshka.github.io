window.PROFILE = {
  name: "Vladislav",
  handle: "Fllleshka",
  company: "Gless Group",
  links: {
    telegram: "https://t.me/fleshkaomsk",
    linkedin: "https://www.linkedin.com/in/fleysnervlad",
    github: "https://github.com/Fllleshka",
    email: "" // add your address to show an email button
  },
  stack: ["Python", "FastAPI", "aiogram", "asyncio", "SQLite"],
  // Названия навыков должны совпадать с PROJECTS[].skills — по ним считается, где навык применялся.
  // Навык без проектов показывается обычным тегом, навык с проектами — кнопкой-фильтром.
  skills: [
    { group: "backend", items: ["Python", "FastAPI", "Pydantic", "REST API", "OpenAPI / Swagger", "Uvicorn", "asyncio", "requests", "PHP", "C#"] },
    { group: "bots", items: ["aiogram", "Telegram Bot API", "pyTelegramBotAPI", "Avito API", "OAuth 2.0", "Google Sheets API", "Selenium"] },
    { group: "data", items: ["SQLite", "aiosqlite", "SQL", "XML / YML", "openpyxl", "Excel (COM)"] },
    { group: "automation", items: ["PyAutoGUI", "pywin32", "Pillow", "OpenCV", "scikit-image", "MoviePy", "Task scheduling"] },
    { group: "clients", items: ["Tkinter", "Dart", "Flutter"] },
    { group: "tools", items: ["pytest", "Git", "GitHub", "GitHub Pages", "python-dotenv", "logging", "OOP"] }
  ],
  path: [
    { id: "school", when: "2013" },
    { id: "master", when: "2019" },
    { id: "work", when: null }
  ]
};
