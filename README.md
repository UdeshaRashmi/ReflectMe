# ReflectMe

A personal goal tracking and achievement application built with React, Vite, and Tailwind CSS.

## Features

- Set and track personal goals
- Record and celebrate achievements
- Visualize progress with charts
- Dark/light theme support
- Responsive design for all devices

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Routing**: React Router
- **Charts**: Recharts
- **State Management**: React Context API
- **HTTP Client**: Axios

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and icons
│   ├── components/         # Reusable UI components
│   ├── context/            # React context providers
│   ├── pages/              # Page components
│   ├── services/           # API service functions
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── styles/             # CSS and Tailwind configuration
│   ├── App.jsx             # Root app component
│   ├── main.jsx            # Entry point
│   └── router.jsx          # Route definitions
├── .env                    # Environment variables
├── package.json            # Project dependencies
└── tailwind.config.js      # Tailwind CSS configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_BASE_URL=http://localhost:3001/api
```