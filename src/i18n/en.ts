export default {
  home: {
    title: 'Conway\'s Game of Life',
    start: 'Start',
    pause: 'Pause',
    reset: 'Reset',
    speed: 'Speed:',
    size: 'Size:',
    generation: 'Generation:',
  },
  gallery: {
    title: 'Game Gallery',
    viewGame: 'View Game',
    glider: {
      name: 'Glider',
      description: 'A simple spaceship that moves diagonally across the grid',
    },
    blinker: {
      name: 'Blinker',
      description: 'A simple oscillator that alternates between two states',
    },
    beacon: {
      name: 'Beacon',
      description: 'A 4-cell oscillator with a period of 2',
    },
    pulsar: {
      name: 'Pulsar',
      description: 'A larger oscillator with a period of 3',
    },
    spaceship: {
      name: 'Spaceship',
      description: 'A lightweight spaceship that moves horizontally',
    },
    gosperGliderGun: {
      name: 'Gosper Glider Gun',
      description: 'A pattern that continuously produces gliders',
    },
    rPentomino: {
      name: 'R-pentomino',
      description: 'A famous pattern that evolves into complex structures',
    },
    diehard: {
      name: 'Diehard',
      description: 'A pattern that takes 130 generations to disappear',
    },
    acorn: {
      name: 'Acorn',
      description: 'A pattern that produces a large number of cells',
    },
    queenBeeShuttle: {
      name: 'Queen Bee Shuttle',
      description: 'An oscillator that shuttles back and forth',
    },
    loaf: {
      name: 'Loaf',
      description: 'A still life pattern',
    },
    boat: {
      name: 'Boat',
      description: 'A still life pattern',
    },
    tub: {
      name: 'Tub',
      description: 'A still life pattern',
    },
    middleweightSpaceship: {
      name: 'Middleweight Spaceship',
      description: 'A medium-sized spaceship',
    },
    heavyweightSpaceship: {
      name: 'Heavyweight Spaceship',
      description: 'A large spaceship',
    },
  },
  gameDetail: {
    backToGallery: 'Back to Gallery',
  },
  nav: {
    home: 'Game of Life',
    gallery: 'Gallery',
    about: 'About',
  },
  about: {
    title: 'About Conway\'s Game of Life',
    gameTitle: 'What is Conway\'s Game of Life?',
    gameDescription: 'Conway\'s Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.',
    rulesTitle: 'Rules',
    rule1: 'Any live cell with fewer than two live neighbors dies, as if by underpopulation.',
    rule2: 'Any live cell with two or three live neighbors lives on to the next generation.',
    rule3: 'Any live cell with more than three live neighbors dies, as if by overpopulation.',
    rule4: 'Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.',
    historyTitle: 'History',
    historyDescription: 'The Game of Life was invented by John Conway in 1970. It gained popularity when it was featured in Martin Gardner\'s column in Scientific American. Since then, it has been widely studied and has become a classic example of emergence and self-organization in complex systems.',
    patternsTitle: 'Patterns',
    patternsDescription: 'The Game of Life has many interesting patterns, including oscillators (patterns that repeat over time), spaceships (patterns that move across the grid), and still lifes (patterns that remain stable). Some patterns, like the Gosper Glider Gun, can even produce an infinite number of new patterns.',
    featuresTitle: 'Features of This Implementation',
    feature1: 'Interactive grid with adjustable size and speed',
    feature2: 'Gallery of predefined patterns',
    feature3: 'Real-time generation counter',
    feature4: 'Support for multiple languages (English and Chinese)',
    feature5: 'Responsive design for different screen sizes',
  },
}
