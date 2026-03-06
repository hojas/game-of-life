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
    gridSize: 100,
  },
  {
    id: 'blinker',
    name: 'Blinker',
    description: 'A simple oscillator that alternates between two states',
    pattern: createBlinkerPattern(),
    gridSize: 100,
  },
  {
    id: 'beacon',
    name: 'Beacon',
    description: 'A 4-cell oscillator with a period of 2',
    pattern: createBeaconPattern(),
    gridSize: 100,
  },
  {
    id: 'pulsar',
    name: 'Pulsar',
    description: 'A larger oscillator with a period of 3',
    pattern: createPulsarPattern(),
    gridSize: 100,
  },
  {
    id: 'spaceship',
    name: 'Spaceship',
    description: 'A lightweight spaceship that moves horizontally',
    pattern: createSpaceshipPattern(),
    gridSize: 100,
  },
  {
    id: 'gosper-glider-gun',
    name: 'Gosper Glider Gun',
    description: 'A pattern that continuously produces gliders',
    pattern: createGosperGliderGunPattern(),
    gridSize: 100,
  },
]

// 创建滑翔机模式
function createGliderPattern(): boolean[] {
  const pattern = Array.from({ length: 100 * 100 }).fill(false)
  const startRow = 45
  const startCol = 45

  // 滑翔机形状
  const glider = [
    [0, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ]

  for (const [row, col] of glider) {
    const index = (startRow + row) * 100 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 创建闪烁器模式
function createBlinkerPattern(): boolean[] {
  const pattern = Array.from({ length: 100 * 100 }).fill(false)
  const startRow = 49
  const startCol = 48

  // 闪烁器形状
  for (let i = 0; i < 3; i++) {
    const index = startRow * 100 + (startCol + i)
    pattern[index] = true
  }

  return pattern
}

// 创建信标模式
function createBeaconPattern(): boolean[] {
  const pattern = Array.from({ length: 100 * 100 }).fill(false)

  // 信标形状
  const beacon = [
    [48, 48],
    [48, 49],
    [49, 48],
    [50, 51],
    [51, 50],
    [51, 51],
  ]

  for (const [row, col] of beacon) {
    const index = row * 100 + col
    pattern[index] = true
  }

  return pattern
}

// 创建脉冲星模式
function createPulsarPattern(): boolean[] {
  const pattern = Array.from({ length: 100 * 100 }).fill(false)
  const centerRow = 50
  const centerCol = 50

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
    const index = (centerRow + row - 8) * 100 + (centerCol + col - 8)
    pattern[index] = true
  }

  return pattern
}

// 创建宇宙飞船模式
function createSpaceshipPattern(): boolean[] {
  const pattern = Array.from({ length: 100 * 100 }).fill(false)
  const startRow = 45
  const startCol = 45

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
    const index = (startRow + row) * 100 + (startCol + col)
    pattern[index] = true
  }

  return pattern
}

// 创建高斯滑翔机炮模式
function createGosperGliderGunPattern(): boolean[] {
  const pattern = Array.from({ length: 100 * 100 }).fill(false)

  // 高斯滑翔机炮形状
  const gosperGliderGun = [
    [40, 40],
    [41, 38],
    [41, 40],
    [42, 28],
    [42, 29],
    [42, 36],
    [42, 37],
    [42, 50],
    [42, 51],
    [43, 27],
    [43, 31],
    [43, 36],
    [43, 37],
    [43, 50],
    [43, 51],
    [44, 16],
    [44, 17],
    [44, 26],
    [44, 32],
    [44, 36],
    [44, 37],
    [45, 16],
    [45, 17],
    [45, 26],
    [45, 30],
    [45, 32],
    [45, 33],
    [45, 38],
    [45, 40],
    [46, 26],
    [46, 32],
    [46, 40],
    [47, 27],
    [47, 31],
    [48, 28],
    [48, 29],
  ]

  for (const [row, col] of gosperGliderGun) {
    const index = row * 100 + col
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
