
<script setup lang="ts">

interface Props {
  title: string
  field1?: string
  field2?: string
  field3?: string
  field4?: string
}

defineProps<Props>()

</script>

<template>
  <article
    class="w-full bg-gray-300 rounded-2xl shadow-lg
           border border-gray-200 p-5
           transition-all duration-300
           hover:shadow-xl hover:-translate-y-1"
  >

    <!-- TITULO -->
    <h2 class="text-xl font-bold text-gray-800 mb-5 text-center">
      {{ title }}
    </h2>

    <!-- CAMPOS -->
    <div class="space-y-3">

      <div v-if="field1" class="bg-gray-50 rounded-lg p-3">
        <p class="text-sm font-semibold text-gray-700 whitespace-pre-wrap">
          {{ field1 }}
        </p>
      </div>

      <div v-if="field2" class="bg-gray-50 rounded-lg p-3">
        <p class="text-sm font-semibold text-gray-700 whitespace-pre-wrap">
          {{ field2 }}
        </p>
      </div>

      <div v-if="field3" class="bg-gray-50 rounded-lg p-3">
        <p class="text-sm font-semibold text-gray-700 whitespace-pre-wrap">
          {{ field3 }}
        </p>
      </div>

      <div v-if="field4" class="bg-gray-50 rounded-lg p-3">
        <p class="text-sm font-semibold text-gray-700 whitespace-pre-wrap">
          {{ field4 }}
        </p>
      </div>

    </div>

  </article>
</template>
