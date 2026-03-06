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
    gridSize: 20,
  },
  {
    id: 'blinker',
    name: 'Blinker',
    description: 'A simple oscillator that alternates between two states',
    pattern: createBlinkerPattern(),
    gridSize: 10,
  },
  {
    id: 'beacon',
    name: 'Beacon',
    description: 'A 4-cell oscillator with a period of 2',
    pattern: createBeaconPattern(),
    gridSize: 10,
  },
  {
    id: 'pulsar',
    name: 'Pulsar',
    description: 'A larger oscillator with a period of 3',
    pattern: createPulsarPattern(),
    gridSize: 20,
  },
  {
    id: 'spaceship',
    name: 'Spaceship',
    description: 'A lightweight spaceship that moves horizontally',
    pattern: createSpaceshipPattern(),
    gridSize: 20,
  },
  {
    id: 'gosper-glider-gun',
    name: 'Gosper Glider Gun',
    description: 'A pattern that continuously produces gliders',
    pattern: createGosperGliderGunPattern(),
    gridSize: 30,
  },
]

// 创建滑翔机模式
function createGliderPattern(): boolean[] {
  const pattern = Array.from({ length: 20 * 20 }).fill(false)
  const startRow = 5
  const startCol = 5

  // 滑翔机形状
  const glider = [
    [0, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ]

  for (const [row, col] of glider) {
    const index = (startRow + row) * 20 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 创建闪烁器模式
function createBlinkerPattern(): boolean[] {
  const pattern = Array.from({ length: 10 * 10 }).fill(false)
  const startRow = 4
  const startCol = 4

  // 闪烁器形状
  for (let i = 0; i < 3; i++) {
    const index = startRow * 10 + (startCol + i)
    pattern[index] = true
  }

  return pattern
}

// 创建信标模式
function createBeaconPattern(): boolean[] {
  const pattern = Array.from({ length: 10 * 10 }).fill(false)

  // 信标形状
  const beacon = [
    [2, 2],
    [2, 3],
    [3, 2],
    [4, 5],
    [5, 4],
    [5, 5],
  ]

  for (const [row, col] of beacon) {
    const index = row * 10 + col
    pattern[index] = true
  }

  return pattern
}

// 创建脉冲星模式
function createPulsarPattern(): boolean[] {
  const pattern = Array.from({ length: 20 * 20 }).fill(false)
  const centerRow = 10
  const centerCol = 10

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
    const index = (centerRow + row - 8) * 20 + (centerCol + col - 8)
    pattern[index] = true
  }

  return pattern
}

// 创建宇宙飞船模式
function createSpaceshipPattern(): boolean[] {
  const pattern = Array.from({ length: 20 * 20 }).fill(false)
  const startRow = 10
  const startCol = 5

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
    const index = (startRow + row) * 20 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 创建高斯滑翔机炮模式
function createGosperGliderGunPattern(): boolean[] {
  const pattern = Array.from({ length: 30 * 30 }).fill(false)

  // 高斯滑翔机炮形状
  const gosperGliderGun = [
    [0, 24],
    [1, 22],
    [1, 24],
    [2, 12],
    [2, 13],
    [2, 20],
    [2, 21],
    [2, 34],
    [2, 35],
    [3, 11],
    [3, 15],
    [3, 20],
    [3, 21],
    [3, 34],
    [3, 35],
    [4, 0],
    [4, 1],
    [4, 10],
    [4, 16],
    [4, 20],
    [4, 21],
    [5, 0],
    [5, 1],
    [5, 10],
    [5, 14],
    [5, 16],
    [5, 17],
    [5, 22],
    [5, 24],
    [6, 10],
    [6, 16],
    [6, 24],
    [7, 11],
    [7, 15],
    [8, 12],
    [8, 13],
  ]

  for (const [row, col] of gosperGliderGun) {
    const index = row * 30 + col
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
      Game Gallery
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
              {{ game.name }}
            </h2>
            <p class="text-gray-600 mb-4">
              {{ game.description }}
            </p>
            <div class="flex justify-end">
              <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                View Game
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
