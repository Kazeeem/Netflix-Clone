# Netflix Clone

A Netflix-inspired web application built with React that showcases movies and TV shows with video playback functionality.

## 🎯 Features

- **Home Page**: Browse and discover movies with responsive card layouts
- **Login Page**: User authentication interface
- **Video Player**: Watch movie trailers with embedded YouTube player
- **Responsive Navigation**: Dark navbar that activates on scroll
- **Dynamic Routing**: Seamless navigation between pages
- **Movie Database Integration**: Real-time data from The Movie Database (TMDb) API

## 🛠️ Technologies & Dependencies

### Core Framework
- **React** (^19.2.0) - JavaScript library for building user interfaces
- **React DOM** (^19.2.0) - React package for working with the DOM

### Routing
- **React Router DOM** (^7.9.6) - Declarative routing for React applications

### Build Tools & Development
- **Vite** (^7.2.4) - Next generation frontend build tool
- **@vitejs/plugin-react** (^5.1.1) - React plugin for Vite with Fast Refresh support

### Linting & Code Quality
- **ESLint** (^9.39.1) - JavaScript linter for identifying and fixing code issues
- **@eslint/js** (^9.39.1) - ESLint's built-in rules
- **eslint-plugin-react-hooks** (^7.0.1) - ESLint rules for React Hooks
- **eslint-plugin-react-refresh** (^0.4.24) - ESLint rules for React Refresh

### Type Support
- **@types/react** (^19.2.5) - TypeScript definitions for React
- **@types/react-dom** (^19.2.3) - TypeScript definitions for React DOM

### Utilities
- **globals** (^16.5.0) - Global variable definitions for ESLint

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd netflix-clone
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your TMDb API credentials:
```
VITE_MOVIE_DB_API_ACCESS_TOKEN=<your_token>
VITE_MOVIE_DB_API_KEY=<your_key>
```

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Build for Production
```bash
npm run build
```
Creates an optimized production build.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for preview.

### Lint Code
```bash
npm run lint
```
Runs ESLint to check code quality and identify issues.

## 📁 Project Structure

```
netflix-clone/
├── src/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Login/
│   │   └── Player/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── TitleCards/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── vite.config.js
├── eslint.config.js
├── package.json
└── index.html
```

## 🎬 Key Components

- **Home Page**: Main landing page displaying movie collections
- **Login Page**: Authentication interface
- **Player Page**: Video player component that fetches and displays movie trailers from YouTube
- **Navbar**: Navigation bar with scroll-triggered dark background
- **Footer**: Footer component
- **Title Cards**: Reusable movie card component with images and metadata

## 🔌 API Integration

The project integrates with **The Movie Database (TMDb) API** to fetch:
- Movie listings and metadata
- Video trailers and clips
- User authentication (if implemented)

## 🌐 Environment Variables

Required environment variables (in `.env`):
- `VITE_MOVIE_DB_API_ACCESS_TOKEN` - TMDb API access token
- `VITE_MOVIE_DB_API_KEY` - TMDb API key

## 📝 Notes

- Ensure you have Node.js installed (v16 or higher)
- The `.env` file should not be committed to version control
- All environment variables must be prefixed with `VITE_` to be accessible in client code

## 🤝 Contributing

Feel free to fork, modify, and improve the project!
