# CovoitEsprit – Carpooling Application

A modern carpooling web application built with **Tailwind CSS**, **SCSS**, and a component-based structure. This project focuses on UI/UX design and page layout for expense simulation and results visualization.

## 📁 Project Structure

.
├── public/
│ ├── assets/
│ │ └── map-route.png
│ ├── SimulationExpensesPage.html
│ ├── SimulationResultsPage.html
│ ├── style.css
│ └── style.css.map
│
├── src/
│ ├── components/
│ │ ├── Header.html
│ │ ├── Footer.html
│ │ ├── SimulationExpensesPage.html
│ │ └── SimulationResultsPage.html
│ │
│ ├── js/
│ │ └── include.js
│ │
│ ├── styles/
│ │ ├── main.scss
│ │ ├── components/
│ │ │ ├── Header.scss
│ │ │ ├── Footer.scss
│ │ │ ├── SimulationExpensesPage.scss
│ │ │ └── SimulationResultsPage.scss
│ │ │
│ │ ├── style-compiled.css
│ │ └── style-compiled.css.map
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── package-lock.json
├── TODO.md
└── README.md


## 🎨 Design Palette

- **Primary Blue** `#1e3a8a`
- **Accent Blue** `#3b82f6`
- **Green** `#10b981`
- **Orange** `#f97316`
- **Red** `#ef4444`
- **Gray** `#6b7280`

## 📦 Installation

### Requirements
- Node.js
- npm or yarn

### Install Dependencies

```bash
npm install

Start Development
npm run dev

Build for Production
npm run build


CSS output: public/style.css

🚀 Main Pages

SimulationExpensesPage – Cost calculation UI

SimulationResultsPage – Visual result display

🛠 Components

Header (navigation, logo, responsive)

Footer (contact + social icons)

Expenses form

Results cards / grid

🎯 Features

Responsive UI

Tailwind utilities

Modular SCSS

Component-based HTML

Clean folder organization

📱 Breakpoints

Mobile < 480px

Tablet < 768px

Desktop > 1024px

🔧 Technologies

Tailwind CSS

SCSS

PostCSS

HTML5

JavaScript

🚀 Deployment

Run npm run build

Deploy /public

Ensure style.css is referenced

🤝 Contribution Ideas

Add form validation

Add accessibility improvements

Add result calculation logic

📄 License

MIT License

👨‍💻 Author

UI/UX built using Tailwind + SCSS.
