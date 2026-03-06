<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface GamePreset {
  id: string
  name: string
  description: string
  pattern: boolean[]
  gridSize: number
}

const router = useRouter()
const route = useRoute()

const speed = ref(200)
const isRunning = ref(false)
const generation = ref(0)
const cellSize = ref(8)
let intervalId: number | null = null

const gridSize = ref(50)
const grid = ref<boolean[]>([])

// 游戏预设数据
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

// 获取当前游戏
const game = computed(() => {
  const id = route.params.id as string
  return games.find(g => g.id === id)
})

// 创建滑翔机模式
function createGliderPattern(): boolean[] {
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]
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
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]
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
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]
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
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]
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
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]
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
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]

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
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]
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
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]
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
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]
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
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]
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
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]
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
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]
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
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]
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
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]
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
  const pattern = Array.from({ length: 50 * 50 }).fill(false) as boolean[]
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

// 初始化网格
function initGrid() {
  if (game.value) {
    gridSize.value = game.value.gridSize
    grid.value = [...game.value.pattern]
  }
  generation.value = 0
}

// 切换细胞状态
function toggleCell(index: number) {
  grid.value[index] = !grid.value[index]
}

// 计算邻居数量
function getNeighbors(row: number, col: number): number {
  let count = 0
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]

  for (const [dr, dc] of directions) {
    const newRow = (row + dr + gridSize.value) % gridSize.value
    const newCol = (col + dc + gridSize.value) % gridSize.value
    const index = newRow * gridSize.value + newCol
    if (grid.value[index]) {
      count++
    }
  }

  return count
}

// 计算下一代
function nextGeneration() {
  const newGrid = [...grid.value]

  for (let row = 0; row < gridSize.value; row++) {
    for (let col = 0; col < gridSize.value; col++) {
      const index = row * gridSize.value + col
      const neighbors = getNeighbors(row, col)

      if (grid.value[index]) {
        // 存活细胞
        if (neighbors < 2 || neighbors > 3) {
          newGrid[index] = false
        }
      }
      else {
        // 死亡细胞
        if (neighbors === 3) {
          newGrid[index] = true
        }
      }
    }
  }

  grid.value = newGrid
  generation.value++
}

// 开始游戏
function startGame() {
  if (!isRunning.value) {
    isRunning.value = true
    intervalId = window.setInterval(nextGeneration, speed.value)
  }
}

// 暂停游戏
function pauseGame() {
  if (isRunning.value && intervalId) {
    clearInterval(intervalId)
    isRunning.value = false
  }
}

// 重置游戏
function resetGame() {
  pauseGame()
  initGrid()
}

// 返回画廊
function goBack() {
  router.push('/gallery')
}

// 监听速度变化
watch(speed, () => {
  if (isRunning.value && intervalId) {
    clearInterval(intervalId)
    intervalId = window.setInterval(nextGeneration, speed.value)
  }
})

// 生命周期钩子
onMounted(() => {
  initGrid()
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="bg-gray-100 flex flex-col items-center justify-center p-4">
    <h1 class="text-4xl font-bold mb-6 text-gray-800">
      {{ $t(`gallery.${game?.id}.name`) }}
    </h1>

    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-7xl">
      <div class="flex flex-wrap justify-between items-center mb-4">
        <div class="flex space-x-2 mb-2 sm:mb-0">
          <button
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            :disabled="isRunning"
            @click="startGame"
          >
            {{ $t('home.start') }}
          </button>
          <button
            class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            :disabled="!isRunning"
            @click="pauseGame"
          >
            {{ $t('home.pause') }}
          </button>
          <button
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            @click="resetGame"
          >
            {{ $t('home.reset') }}
          </button>
          <button
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            @click="goBack"
          >
            {{ $t('gameDetail.backToGallery') }}
          </button>
        </div>

        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <label class="mr-2 text-sm font-medium text-gray-700">{{ $t('home.speed') }}</label>
            <input
              v-model.number="speed"
              type="range"
              min="50"
              max="1000"
              step="50"
              class="w-32"
            >
            <span class="ml-2 text-sm text-gray-600">{{ speed }}ms</span>
          </div>
        </div>
      </div>

      <div class="overflow-auto flex justify-center">
        <div
          class="grid gap-0.5 bg-gray-300 p-1"
          :style="{
            gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
            gridTemplateRows: `repeat(${gridSize}, ${cellSize}px)`,
          }"
        >
          <div
            v-for="(cell, index) in grid"
            :key="index"
            class="cursor-pointer transition-colors"
            :class="cell ? 'bg-gray-800' : 'bg-white'"
            @click="toggleCell(index)"
          />
        </div>
      </div>

      <div class="mt-4 text-sm text-gray-600">
        <p>{{ $t('home.generation') }} {{ generation }}</p>
        <p class="mt-2">
          {{ $t(`gallery.${game?.id}.description`) }}
        </p>
      </div>
    </div>
  </div>
</template>
