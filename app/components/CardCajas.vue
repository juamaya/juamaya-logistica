

<script setup lang="ts">
interface Props {
  title: string
  field1?: string

  // Colores personalizables
  fieldColor?: string
  fieldTextColor?: string
}

withDefaults(defineProps<Props>(), {
  fieldColor: '#f9fafb',
  fieldTextColor: '#374151'
})

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <article
    @click="emit('click')"
    class="w-full bg-gray-300 rounded-2xl shadow-lg
           border border-gray-200 p-5
           transition-all duration-300
           hover:shadow-xl hover:-translate-y-1
           cursor-pointer"
  >

    <!-- TITULO -->
    <h2 class="text-xl font-bold text-gray-800 mb-5 text-center">
      {{ title }}
    </h2>

    <!-- CAMPOS -->
    <div class="space-y-3">

      <div
        v-if="field1"
        class="rounded-lg p-3"
        :style="{ backgroundColor: fieldColor }"
      >
        <p
          class="text-xl font-semibold whitespace-pre-wrap"
          :style="{ color: fieldTextColor }"
        >
          {{ field1 }}
        </p>
      </div>

    </div>

  </article>
</template>
