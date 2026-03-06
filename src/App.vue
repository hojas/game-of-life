<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function switchLanguage(lang: string) {
  locale.value = lang
}
</script>

<template>
  <div class="bg-gray-100">
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-6">
            <router-link to="/" class="text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-300">
              {{ $t('nav.home') }}
            </router-link>
            <router-link to="/gallery" class="text-gray-600 hover:text-blue-600 transition duration-300 px-2 py-1 rounded-md">
              {{ $t('nav.gallery') }}
            </router-link>
            <router-link to="/about" class="text-gray-600 hover:text-blue-600 transition duration-300 px-2 py-1 rounded-md">
              {{ $t('nav.about') }}
            </router-link>
          </div>
          <div class="flex items-center space-x-2">
            <button
              class="px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 font-medium"
              :class="{ 'bg-blue-100 text-blue-700': $i18n.locale === 'zh' }"
              @click="switchLanguage('zh')"
            >
              中文
            </button>
            <button
              class="px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 font-medium"
              :class="{ 'bg-blue-100 text-blue-700': $i18n.locale === 'en' }"
              @click="switchLanguage('en')"
            >
              English
            </button>
          </div>
        </div>
      </div>
    </nav>
    <main class="container mx-auto px-4 py-8">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
/* 激活的导航链接样式 */
.router-link-active {
  color: #2563eb !important;
  font-weight: 500;
}
</style>
