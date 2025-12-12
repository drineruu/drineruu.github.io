# Driner Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS. This portfolio showcases personal projects, skills, education, and professional experience with a clean and interactive design.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design using Tailwind CSS
- **Interactive Components**: Smooth animations and interactive elements
- **Multi-section Layout**: Organized sections including:
  - Hero section with introduction
  - About me
  - Skills showcase
  - Education background
  - Projects portfolio
  - Testimonials
  - Contact information
- **Resume Integration**: Direct access to downloadable resume
- **GitHub Pages Deployment**: Automated deployment via GitHub Actions

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React & React Icons
- **Build Tool**: React Scripts
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 18 or higher)
- npm (comes with Node.js)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/drineruu/drineruu.github.io.git
   cd drineruu.github.io/portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the app

## 🎯 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)
- `npm run deploy` - Deploys the built app to GitHub Pages

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

The app automatically deploys when you push to the `main` or `master` branch. The GitHub Actions workflow:

1. Installs dependencies
2. Builds the project
3. Deploys to GitHub Pages

### Manual Deployment

Deploy manually using:

```bash
npm run deploy
```

The live site will be available at: `https://drineruu.github.io`
