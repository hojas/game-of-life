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
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <router-link to="/" class="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
              {{ $t('nav.home') }}
            </router-link>
            <router-link to="/gallery" class="text-gray-600 hover:text-blue-600 transition">
              {{ $t('nav.gallery') }}
            </router-link>
          </div>
          <div class="flex items-center">
            <button
              class="px-3 py-1 mr-2 rounded hover:bg-gray-200 transition"
              :class="{ 'bg-gray-200': $i18n.locale === 'zh' }"
              @click="switchLanguage('zh')"
            >
              中文
            </button>
            <button
              class="px-3 py-1 rounded hover:bg-gray-200 transition"
              :class="{ 'bg-gray-200': $i18n.locale === 'en' }"
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
