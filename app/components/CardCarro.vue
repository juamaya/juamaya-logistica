
<script setup lang="ts">
interface Props {
  title: string
  image: string
  description?: string
}

defineProps<Props>()
</script>

<template>
  <article
    class="w-[90%] md:w-[80%] mx-auto
           bg-transparent rounded-2xl shadow-lg
           border-4 border-gray-400 overflow-hidden
           transition-all duration-300
           hover:shadow-xl hover:-translate-y-2"
  >

    <!-- IMAGEN -->
    <div class="w-full h-70 flex items-center justify-center p-3">
     <NuxtImg
        :src="image"
        :alt="title"
        class="max-w-full max-h-full w-full h-full object-contain object-center"
        loading="lazy"
      />
    </div>

    <!-- CONTENIDO -->
    <div class="p-5 text-center">

      <h2 class="text-xl font-bold text-gray-800">
        {{ title }}
      </h2>

      <p
        v-if="description"
        class="mt-2 text-sm text-gray-600"
      >
        {{ description }}
      </p>

    </div>

  </article>
</template>
