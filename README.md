# 🌤️ Weather App

A responsive weather application built with **React, Vite, Redux Toolkit, and OpenWeatherMap API**.

This is my first Redux project, developed as part of my journey to learn Redux and improve my React development skills. The application allows users to search for cities and explore current weather conditions and upcoming weather forecasts.

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature in Celsius
- ☁️ Show current weather conditions
- 💧 Display humidity and atmospheric pressure
- 🌬️ Show wind speed and visibility
- 🌅 Display sunrise and sunset times
- 🕒 Hourly weather forecast
- 📅 5-day weather forecast
- 🔄 Loading skeleton while fetching data
- 📱 Responsive user interface
- 🗃️ Centralized state management with Redux Toolkit

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| Vite | Development server and build tool |
| Redux Toolkit | Global state management |
| React Redux | Connecting React with Redux |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS | Styling |
| DaisyUI | UI components |
| Lucide React | Icons |
| OpenWeatherMap API | Weather data |

## 📂 Project Structure

```text
weather-app/
│
├── public/
│
├── src/
│   ├── redux/
│   │   └── store.js
│   ├── config
│   │   └──axiosInstance
│   │
│   ├── components/
│   │   ├── CurrentWeather.jsx
│   │   ├── ForecustWeather.jsx
│   │   └── ...
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

*Note: The folder structure above is an example. Your actual project structure may be different.*

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd weather-app
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory of the project.

Add the following environment variables:

```env
VITE_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
VITE_API_URL=https://api.openweathermap.org
```

Replace `YOUR_OPENWEATHERMAP_API_KEY` with your own API key.

You can get an API key from:

[OpenWeatherMap](https://openweathermap.org/api)

**Important:** Since this project uses Vite, environment variables must start with `VITE_` to be accessible from frontend code.

You can access them using:

```javascript
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
```

### 5. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

Open this URL in your browser to explore the application.

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint (if configured) |

## 🧠 What I Learned

Through this project, I am learning and practicing:

- Understanding Redux and global state management.
- Creating a Redux store using Redux Toolkit.
- Creating slices and managing application state.
- Using `useSelector()` to access Redux state.
- Using `useDispatch()` to dispatch actions.
- Managing asynchronous API requests.
- Fetching and displaying data from external APIs.
- Handling loading and error states.
- Working with React components and reusable UI.
- Managing environment variables in Vite.

## 🌐 API Reference

This project uses the OpenWeatherMap API to retrieve weather information.

- [Current Weather API](https://openweathermap.org/current)
- [5 Day / 3 Hour Forecast API](https://openweathermap.org/forecast5)

Weather data is provided by [OpenWeatherMap](https://openweathermap.org/).

## 🔐 Security Notes

- Never commit your actual `.env` file to GitHub.
- Make sure `.env` is included in `.gitignore`.
- Vite exposes variables prefixed with `VITE_` in the client-side bundle. Therefore, these variables are not secret.
- Use a backend proxy if you need to protect API credentials from public exposure.

Example `.gitignore` entry:

```gitignore
node_modules
dist
.env
.env.*
!.env.example
```

You can create a `.env.example` file containing placeholder values:

```env
VITE_API_KEY=your_api_key_here
VITE_API_URL=https://api.openweathermap.org
```

## 🎯 Project Goal

The main goal of this project is to gain practical experience with Redux Toolkit and understand how global state management works in a real-world React application.

This is my first Redux project, and I will continue improving it as I learn more about React, Redux, and modern frontend development.

---

**Built with ❤️ while learning React and Redux.**
