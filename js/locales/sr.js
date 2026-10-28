window.I18N = window.I18N || {};
I18N.sr = {
  meta: {
    title: "Vladislav — Python programer (FastAPI, aiogram, asyncio), Beograd",
    desc: "Portfolio Vladislava (Fllleshka), Python programera u Beogradu: FastAPI REST API, Telegram botovi na aiogramu, asyncio, SQLite, integracije sa marketplejsima i alati za automatizaciju."
  },
  nav: { projects: "Projekti", skills: "Veštine", path: "Put", contact: "Kontakt" },
  hero: {
    role: "Python programer", location: "Beograd, Srbija",
    lead: "Pravim FastAPI servise, Telegram botove i alate za automatizaciju u Pythonu: izvoze za marketplejse, API integracije i asinhrone planere. Živim u Beogradu i otvoren sam za nove prilike.",
    contact: "Javi mi se", projects: "Pogledaj projekte"
  },
  projects: {
    title: "Projekti", lead: "Izbor repozitorijuma sa GitHub-a: šta svaki projekat radi i koje tehnologije koristi.",
    items: {
      "gless-api": "REST API za prelazak sa konzolne aplikacije za automatizaciju na mikroservisnu arhitekturu: cenovnici, upravljanje pozivnim centrom, obrada fotografija i integracije sa platformama.",
      "price": "Desktop menadžer cenovnika: Tkinter interfejs povezan sa lokalnim FastAPI backendom, uz integracije sa Drom, Avito, 2GIS i VKontakte.",
      "posting": "Asinhroni autoposting u Telegramu: objavljuje fotografije i video-snimke u više kanala po rasporedu, po jedan worker za svaki kanal.",
      "bot": "Telegram bot auto-servisnog centra Gless Group, druga verzija napisana ispočetka.",
      "images": "Planer koji sinhronizuje fotografije proizvoda i podešavanja pozivnog centra za Gless Group (Windows).",
      "kosh": "Telegram bot za sportsku zajednicu Kosh Sports, napravljen u aiogramu i SQLite-u.",
      "flutter-todo": "To-do aplikacija napravljena u Flutteru.",
      "resume-flutter": "Moja biografija kao Dart/Flutter aplikacija."
    },
    points: {
      "gless-api": [
        "Preko 30 endpointa u 9 FastAPI rutera: upravljanje pozivnim centrom, nadzor fajlova, obrada fotografija, baza podataka, Avito i Drom.",
        "Generiše XML i YML cenovnike za Drom, Avito, 2GIS i VK iz SQLite kataloga uvezenog iz 1C.",
        "Automatizuje 1C 7.3 (PyAutoGUI), Excel rasporede (COM) i Drom sesiju u pregledaču (Selenium); šalje Telegram obaveštenja i vodi dnevnik u Google Sheets.",
        "Poredi fotografije proizvoda pomoću SSIM (OpenCV, scikit-image), obrađuje slike u Pillow-u, ima pytest testove sa FastAPI TestClient-om."
      ],
      "posting": [
        "Po jedna instanca worker klase za svaki kanal, svi rade istovremeno u jednoj asyncio petlji događaja (asyncio.gather).",
        "SQLite raspored sa nasumičnim pauzama od 10 do 20 minuta; fotografije i video-snimci se smenjuju u zadatoj srazmeri u linearnom vremenu.",
        "Bira send_video ili send_animation prema dužini snimka (MoviePy) i obrađuje ograničenja učestalosti, mrežne greške i greške Telegram API-ja.",
        "Tajne vrednosti u .env fajlu, neblokirajući pristup bazi preko aiosqlite."
      ]
    }
  },
  skills: {
    title: "Veštine",
    lead: "Kliknite na veštinu da vidite projekte u kojima sam je koristio. Broj pokazuje u koliko projekata se koristi.",
    backend: "Backend", bots: "Botovi i integracije", data: "Podaci i formati",
    automation: "Automatizacija i mediji", clients: "Desktop i mobilne aplikacije", tools: "Kvalitet i alati",
    usedIn: "korišćeno u", clear: "Poništi"
  },
  path: {
    title: "Put", now: "danas",
    school: "Završio fizičko-matematičku gimnaziju br. 88 u Omsku",
    master: "Master diploma, GUAP, Sankt Peterburg",
    work: "Radim u kompaniji Gless Group, živim u Beogradu"
  },
  contact: { title: "Kontakt", text: "Otvoren sam za posao u Srbiji. Najbrže me možete naći na Telegramu ili LinkedIn-u." },
  footer: "Napravljeno običnim HTML-om, CSS-om i JavaScriptom. Hostovano na GitHub Pages."
};
