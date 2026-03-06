<script setup lang="ts">
// App component with router setup
</script>

<template>
  <div class="min-h-screen bg-gray-100">
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
        </div>
      </div>
    </nav>
    <main class="container mx-auto px-4 py-8">
      <router-view />
    </main>
  </div>
</template>
