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
const cellSize = ref(16)
let intervalId: number | null = null

const gridSize = ref(20)
const grid = ref<boolean[]>([])

// 游戏预设数据
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

// 获取当前游戏
const game = computed(() => {
  const id = route.params.id as string
  return games.find(g => g.id === id)
})

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
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
    <h1 class="text-4xl font-bold mb-6 text-gray-800">
      {{ game?.name }}
    </h1>

    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
      <div class="flex flex-wrap justify-between items-center mb-4">
        <div class="flex space-x-2 mb-2 sm:mb-0">
          <button
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            :disabled="isRunning"
            @click="startGame"
          >
            Start
          </button>
          <button
            class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            :disabled="!isRunning"
            @click="pauseGame"
          >
            Pause
          </button>
          <button
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            @click="resetGame"
          >
            Reset
          </button>
          <button
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            @click="goBack"
          >
            Back to Gallery
          </button>
        </div>

        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <label class="mr-2 text-sm font-medium text-gray-700">Speed:</label>
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
        <p>Generation: {{ generation }}</p>
        <p class="mt-2">
          {{ game?.description }}
        </p>
      </div>
    </div>
  </div>
</template>
