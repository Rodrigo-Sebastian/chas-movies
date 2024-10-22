# React + Vite

Teknik information:
- byggverktyg: Vite
- Biliotek: React,Redux Toolkit
- styling CSS-Tailwind, responsiv design.
- API the movie database API (TMDB)
- Distribution Github Pages

krav:
- Node.js
- npm/yarn
- Klona det här repo via git clone https://github.com/rodrigo-sebastian/chas-movies.git
- gå in i projektet med cd och namnet på projektet/ chas-movies
- installera dependencies och beroenden med npm install/ npm i
- skapa en .env fil i projektroten och kägg till din api nyckel för databasen: VITE_API_KEY=din_api_nyckel
- starta utvecklarens server med npm run dev
- appen kommer att vara tillgänglig på localhost:5173 

Funktioner:
- sökfunktin - Användare kan söka efter filmer via ett sökfält och få en lista över relevanta träffar.
- filmdetaljer - användare kan klicka på en film för att se detaljer såsom regissör, skådespelare och genrer.
- Favoriter - Användare kan lägga till filmer i en favoritlista som sparas i localStorage, vilket gör att favoriterna finns kvar även efter att sidan ahr uppdaterats.
- Google Analytics - integrerat för att spåra användarinteraktioner.
- responsiv design - Applikationen är mobilanpassad och fungerar på både mellan - storskärmar.












This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
