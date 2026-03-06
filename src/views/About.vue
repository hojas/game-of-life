<script setup lang="ts">
// About page component for Conway's Game of Life
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center p-4">
    <h1 class="text-4xl font-bold mb-8 text-gray-800">
      {{ $t('about.title') }}
    </h1>

    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-gray-800">
            {{ $t('about.gameTitle') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('about.gameDescription') }}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-gray-800">
            {{ $t('about.rulesTitle') }}
          </h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>{{ $t('about.rule1') }}</li>
            <li>{{ $t('about.rule2') }}</li>
            <li>{{ $t('about.rule3') }}</li>
            <li>{{ $t('about.rule4') }}</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-gray-800">
            {{ $t('about.historyTitle') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('about.historyDescription') }}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-gray-800">
            {{ $t('about.patternsTitle') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('about.patternsDescription') }}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-gray-800">
            {{ $t('about.featuresTitle') }}
          </h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>{{ $t('about.feature1') }}</li>
            <li>{{ $t('about.feature2') }}</li>
            <li>{{ $t('about.feature3') }}</li>
            <li>{{ $t('about.feature4') }}</li>
            <li>{{ $t('about.feature5') }}</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 额外的样式优化 */
</style>
