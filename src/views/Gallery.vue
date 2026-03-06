<script setup lang="ts">
import { useRouter } from 'vue-router'

interface GamePreset {
  id: string
  name: string
  description: string
  pattern: boolean[]
  gridSize: number
}

const router = useRouter()

const games: GamePreset[] = [
  {
    id: 'glider',
    name: 'Glider',
    description: 'A simple spaceship that moves diagonally across the grid',
    pattern: createGliderPattern(),
    gridSize: 50,
  },
  {
    id: 'blinker',
    name: 'Blinker',
    description: 'A simple oscillator that alternates between two states',
    pattern: createBlinkerPattern(),
    gridSize: 50,
  },
  {
    id: 'beacon',
    name: 'Beacon',
    description: 'A 4-cell oscillator with a period of 2',
    pattern: createBeaconPattern(),
    gridSize: 50,
  },
  {
    id: 'pulsar',
    name: 'Pulsar',
    description: 'A larger oscillator with a period of 3',
    pattern: createPulsarPattern(),
    gridSize: 50,
  },
  {
    id: 'spaceship',
    name: 'Spaceship',
    description: 'A lightweight spaceship that moves horizontally',
    pattern: createSpaceshipPattern(),
    gridSize: 50,
  },
  {
    id: 'gosperGliderGun',
    name: 'Gosper Glider Gun',
    description: 'A pattern that continuously produces gliders',
    pattern: createGosperGliderGunPattern(),
    gridSize: 50,
  },
  {
    id: 'rPentomino',
    name: 'R-pentomino',
    description: 'A famous pattern that evolves into complex structures',
    pattern: createRPentominoPattern(),
    gridSize: 50,
  },
  {
    id: 'diehard',
    name: 'Diehard',
    description: 'A pattern that takes 130 generations to disappear',
    pattern: createDiehardPattern(),
    gridSize: 50,
  },
  {
    id: 'acorn',
    name: 'Acorn',
    description: 'A pattern that produces a large number of cells',
    pattern: createAcornPattern(),
    gridSize: 50,
  },
  {
    id: 'queenBeeShuttle',
    name: 'Queen Bee Shuttle',
    description: 'An oscillator that shuttles back and forth',
    pattern: createQueenBeeShuttlePattern(),
    gridSize: 50,
  },
  {
    id: 'loaf',
    name: 'Loaf',
    description: 'A still life pattern',
    pattern: createLoafPattern(),
    gridSize: 50,
  },
  {
    id: 'boat',
    name: 'Boat',
    description: 'A still life pattern',
    pattern: createBoatPattern(),
    gridSize: 50,
  },
  {
    id: 'tub',
    name: 'Tub',
    description: 'A still life pattern',
    pattern: createTubPattern(),
    gridSize: 50,
  },
  {
    id: 'middleweightSpaceship',
    name: 'Middleweight Spaceship',
    description: 'A medium-sized spaceship',
    pattern: createMiddleweightSpaceshipPattern(),
    gridSize: 50,
  },
  {
    id: 'heavyweightSpaceship',
    name: 'Heavyweight Spaceship',
    description: 'A large spaceship',
    pattern: createHeavyweightSpaceshipPattern(),
    gridSize: 50,
  },
]

// 创建滑翔机模式
function createGliderPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)
  const startRow = 22
  const startCol = 22
  
  // 滑翔机形状
  const glider = [
    [0, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ]
  
  for (const [row, col] of glider) {
    const index = (startRow + row) * 50 + (startCol + col)
    pattern[index] = true
  }
  
  return pattern
}

// 创建闪烁器模式
function createBlinkerPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)
  const startRow = 24
  const startCol = 23
  
  // 闪烁器形状
  for (let i = 0; i < 3; i++) {
    const index = startRow * 50 + (startCol + i)
    pattern[index] = true
  }
  
  return pattern
}

// 创建信标模式
function createBeaconPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)
  const startRow = 23
  const startCol = 23

  // 信标形状
  const beacon = [
    [0, 0],
    [0, 1],
    [1, 0],
    [2, 2],
    [3, 1],
    [3, 2],
  ]

  for (const [row, col] of beacon) {
    const index = (startRow + row) * 50 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 创建脉冲星模式
function createPulsarPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)
  const centerRow = 25
  const centerCol = 25

  // 脉冲星形状
  const pulsar = [
    [0, 4],
    [0, 5],
    [0, 6],
    [0, 10],
    [0, 11],
    [0, 12],
    [4, 0],
    [4, 2],
    [4, 7],
    [4, 9],
    [4, 14],
    [4, 16],
    [5, 0],
    [5, 2],
    [5, 7],
    [5, 9],
    [5, 14],
    [5, 16],
    [6, 0],
    [6, 2],
    [6, 7],
    [6, 9],
    [6, 14],
    [6, 16],
    [10, 0],
    [10, 2],
    [10, 7],
    [10, 9],
    [10, 14],
    [10, 16],
    [11, 0],
    [11, 2],
    [11, 7],
    [11, 9],
    [11, 14],
    [11, 16],
    [12, 0],
    [12, 2],
    [12, 7],
    [12, 9],
    [12, 14],
    [12, 16],
    [14, 4],
    [14, 5],
    [14, 6],
    [14, 10],
    [14, 11],
    [14, 12],
    [16, 4],
    [16, 5],
    [16, 6],
    [16, 10],
    [16, 11],
    [16, 12],
  ]

  for (const [row, col] of pulsar) {
    const index = (centerRow + row - 8) * 50 + (centerCol + col - 8)
    pattern[index] = true
  }

  return pattern
}

// 创建宇宙飞船模式
function createSpaceshipPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)
  const startRow = 22
  const startCol = 22

  // 宇宙飞船形状
  const spaceship = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 0],
    [1, 4],
    [2, 4],
    [3, 0],
    [3, 3],
  ]

  for (const [row, col] of spaceship) {
    const index = (startRow + row) * 50 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 创建高斯滑翔机炮模式
function createGosperGliderGunPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)

  // 高斯滑翔机炮形状
  const gosperGliderGun = [
    [5, 10],
    [6, 8],
    [6, 10],
    [7, 1],
    [7, 2],
    [7, 9],
    [7, 10],
    [7, 21],
    [7, 22],
    [8, 0],
    [8, 4],
    [8, 9],
    [8, 10],
    [8, 21],
    [8, 22],
    [9, 17],
    [9, 18],
    [9, 25],
    [9, 26],
    [9, 35],
    [9, 36],
    [10, 17],
    [10, 18],
    [10, 25],
    [10, 27],
    [10, 29],
    [10, 30],
    [10, 38],
    [10, 40],
    [11, 25],
    [11, 29],
    [11, 40],
    [12, 26],
    [12, 28],
    [13, 27],
    [13, 28],
  ]

  for (const [row, col] of gosperGliderGun) {
    const index = row * 50 + col
    pattern[index] = true
  }

  return pattern
}

// 创建 R-pentomino 模式
function createRPentominoPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)
  const startRow = 23
  const startCol = 23

  // R-pentomino 形状
  const rPentomino = [
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [2, 1],
  ]

  for (const [row, col] of rPentomino) {
    const index = (startRow + row) * 50 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 创建 Diehard 模式
function createDiehardPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)
  const startRow = 20
  const startCol = 20

  // Diehard 形状
  const diehard = [
    [0, 6],
    [1, 0],
    [1, 1],
    [2, 1],
    [2, 5],
    [2, 6],
    [2, 7],
  ]

  for (const [row, col] of diehard) {
    const index = (startRow + row) * 50 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 创建 Acorn 模式
function createAcornPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)
  const startRow = 20
  const startCol = 20

  // Acorn 形状
  const acorn = [
    [0, 1],
    [1, 3],
    [2, 0],
    [2, 1],
    [2, 4],
    [2, 5],
    [2, 6],
  ]

  for (const [row, col] of acorn) {
    const index = (startRow + row) * 50 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 创建 Queen Bee Shuttle 模式
function createQueenBeeShuttlePattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)
  const startRow = 20
  const startCol = 15

  // Queen Bee Shuttle 形状
  const queenBeeShuttle = [
    [0, 5],
    [1, 4],
    [1, 6],
    [2, 3],
    [2, 7],
    [3, 3],
    [3, 7],
    [4, 4],
    [4, 6],
    [5, 5],
    [0, 15],
    [1, 14],
    [1, 16],
    [2, 13],
    [2, 17],
    [3, 13],
    [3, 17],
    [4, 14],
    [4, 16],
    [5, 15],
  ]

  for (const [row, col] of queenBeeShuttle) {
    const index = (startRow + row) * 50 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 创建 Loaf 模式
function createLoafPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)
  const startRow = 23
  const startCol = 23

  // Loaf 形状
  const loaf = [
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 3],
    [2, 1],
    [2, 2],
    [3, 2],
  ]

  for (const [row, col] of loaf) {
    const index = (startRow + row) * 50 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 创建 Boat 模式
function createBoatPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)
  const startRow = 23
  const startCol = 23

  // Boat 形状
  const boat = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1],
  ]

  for (const [row, col] of boat) {
    const index = (startRow + row) * 50 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 创建 Tub 模式
function createTubPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)
  const startRow = 23
  const startCol = 23

  // Tub 形状
  const tub = [
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1],
  ]

  for (const [row, col] of tub) {
    const index = (startRow + row) * 50 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 创建 Middleweight Spaceship 模式
function createMiddleweightSpaceshipPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)
  const startRow = 22
  const startCol = 20

  // Middleweight Spaceship 形状
  const middleweightSpaceship = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 0],
    [1, 4],
    [2, 0],
    [2, 4],
    [3, 0],
    [3, 3],
    [4, 1],
    [4, 2],
  ]

  for (const [row, col] of middleweightSpaceship) {
    const index = (startRow + row) * 50 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 创建 Heavyweight Spaceship 模式
function createHeavyweightSpaceshipPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false)
  const startRow = 22
  const startCol = 18

  // Heavyweight Spaceship 形状
  const heavyweightSpaceship = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [1, 0],
    [1, 5],
    [2, 0],
    [2, 5],
    [3, 0],
    [3, 4],
    [4, 1],
    [4, 2],
    [4, 3],
  ]

  for (const [row, col] of heavyweightSpaceship) {
    const index = (startRow + row) * 50 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 导航到游戏详情页面
function navigateToGame(id: string) {
  router.push(`/game/${id}`)
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <h1 class="text-4xl font-bold mb-6 text-gray-800 text-center">
      {{ $t('gallery.title') }}
    </h1>

    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="game in games"
          :key="game.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          @click="navigateToGame(game.id)"
        >
          <div class="p-6">
            <h2 class="text-xl font-bold mb-2">
              {{ $t(`gallery.${game.id}.name`) }}
            </h2>
            <p class="text-gray-600 mb-4">
              {{ $t(`gallery.${game.id}.description`) }}
            </p>
            <div class="flex justify-end">
              <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                {{ $t('gallery.viewGame') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
