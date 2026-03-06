<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'

const gridSize = ref(30)
const speed = ref(200)
const isRunning = ref(false)
const generation = ref(0)
const cellSize = ref(16)
let intervalId: number | null = null

const grid = ref<boolean[]>([])

// 初始化网格
function initGrid() {
  const newGrid = Array.from({ length: gridSize.value * gridSize.value }).fill(false)
  // 随机生成一些初始细胞
  for (let i = 0; i < newGrid.length; i++) {
    newGrid[i] = Math.random() > 0.7
  }
  grid.value = newGrid
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

// 监听速度变化
watch(speed, () => {
  if (isRunning.value && intervalId) {
    clearInterval(intervalId)
    intervalId = window.setInterval(nextGeneration, speed.value)
  }
})

// 监听网格大小变化
watch(gridSize, () => {
  pauseGame()
  initGrid()
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
      Conway's Game of Life
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

          <div class="flex items-center">
            <label class="mr-2 text-sm font-medium text-gray-700">Size:</label>
            <select v-model.number="gridSize" class="px-2 py-1 border rounded">
              <option value="10">
                10x10
              </option>
              <option value="20">
                20x20
              </option>
              <option value="30">
                30x30
              </option>
              <option value="40">
                40x40
              </option>
            </select>
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
      </div>
    </div>
  </div>
</template>
