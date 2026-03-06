# Conway's Game of Life

A Vue 3 + TypeScript implementation of Conway's Game of Life, built with Vite and Tailwind CSS.

## Features

- Interactive grid with click-to-toggle cells
- Start, pause, and reset controls
- Adjustable game speed (50-1000ms)
- Configurable grid size (10x10 to 40x40)
- Real-time generation counter
- Responsive design

## Technologies

- Vue 3 + Composition API
- TypeScript
- Vite
- Tailwind CSS
- ESLint with @antfu/eslint-config

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd game-of-life
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

## Usage

### Development

```bash
pnpm run dev
```

The game will be available at http://localhost:5173/

### Production Build

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

### Linting

```bash
pnpm run lint
```

## Game Rules

1. Any live cell with fewer than 2 live neighbors dies (underpopulation)
2. Any live cell with 2 or 3 live neighbors lives on to the next generation
3. Any live cell with more than 3 live neighbors dies (overpopulation)
4. Any dead cell with exactly 3 live neighbors becomes a live cell (reproduction)

## Project Structure

```
game-of-life/
├── src/
│   ├── App.vue          # Main game component
│   ├── main.ts          # Application entry
│   ├── style.css        # Global styles
│   └── vite-env.d.ts    # TypeScript declarations
├── public/              # Static assets
├── index.html           # HTML entry
├── package.json         # Project configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── eslint.config.js     # ESLint configuration
```

## License

MIT
