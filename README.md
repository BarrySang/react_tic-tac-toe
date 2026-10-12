# React Tic-Tac-Toe

A lightweight browser-based Tic-Tac-Toe game built with React, TypeScript, and Vite. The app provides a clean 3x3 gameplay experience where two players alternate placing X and O marks, with automatic win and draw detection.

## Features

- Interactive 3x3 game board
- Turn-based gameplay for two players
- Win detection across rows, columns, and diagonals
- Draw detection when the board fills up without a winner
- Reset button to start a fresh round
- Responsive, modern UI with a glassmorphism-inspired style
- Built using React + TypeScript for a simple, maintainable frontend

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS for styling
- GitHub Pages deployment support via `gh-pages`

## Project Structure

```text
react_tic-tac-toe/
├── src/
│   ├── App.tsx        # Main game logic and UI
│   ├── App.css        # Board and styling
│   ├── main.tsx       # React entry point
│   └── index.css      # Base styles
├── public/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

This starts the Vite development server, usually available at:

```text
http://localhost:5173
```

## Production Build

```bash
npm run build
```

This generates the production-ready files in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Deployment

This project includes a deploy script for GitHub Pages:

```bash
npm run deploy
```

## Gameplay Rules

- Player X starts the game.
- Players take turns clicking an empty square.
- A player wins by lining up three marks in a row horizontally, vertically, or diagonally.
- If all nine spaces are filled and no player has won, the game ends in a draw.
- The current turn or winner is shown above the board, and the board can be reset at any time.

## License

This project is provided for educational and personal use.

