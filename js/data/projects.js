var GH = "https://github.com/Fllleshka/";

// skills: канонические названия навыков. Они должны совпадать с названиями в js/data/profile.js,
// по ним строится счётчик «где применялся» и фильтр по навыку.
window.PROJECTS = [
  {
    id: "gless-api", name: "glessgroupfastapi", url: GH + "glessgroupfastapi", featured: true,
    skills: ["Python", "FastAPI", "Pydantic", "REST API", "OpenAPI / Swagger", "Uvicorn",
             "SQLite", "SQL", "XML / YML", "openpyxl", "Excel (COM)", "pywin32",
             "Selenium", "PyAutoGUI", "Pillow", "OpenCV", "scikit-image",
             "Google Sheets API", "Telegram Bot API", "pyTelegramBotAPI", "Avito API", "OAuth 2.0",
             "requests", "pytest", "logging"]
  },
  {
    id: "price", name: "GlessGroupMainProgram", url: GH + "glessgroupmainprogram", featured: true,
    skills: ["Python", "Tkinter", "FastAPI", "REST API"]
  },
  {
    id: "posting", name: "postingMediaInChannel", url: GH + "postingMediaInChannel", featured: true,
    skills: ["Python", "aiogram", "Telegram Bot API", "asyncio", "aiosqlite", "SQLite", "SQL",
             "MoviePy", "Task scheduling", "OOP", "python-dotenv", "logging"]
  },
  {
    id: "bot", name: "BotGless2", url: GH + "BotGless2",
    skills: ["Python", "Telegram Bot API"]
  },
  {
    id: "images", name: "GlessGroupDonloadImages", url: GH + "GlessGroupDonloadImages",
    skills: ["Python", "Task scheduling"]
  },
  {
    id: "kosh", name: "kosh2_1", url: GH + "kosh2_1",
    skills: ["Python", "aiogram", "Telegram Bot API", "SQLite"]
  },
  {
    id: "resume-flutter", name: "MyResumeDartFlutter", url: GH + "MyResumeDartFlutter",
    skills: ["Dart", "Flutter"]
  }
];
