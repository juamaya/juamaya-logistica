<script setup lang="ts">
import CajasFase2 from '~/components/CajasFase2.vue'
</script>
<template>
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Maletines de Normales 👉 Fase 2
    </h1>
    <h2 class="text-lg font-bold text-black mb-8">
      Hay dos juegos de Maletines de Normales<br />
      👉 Fase 2 RH 👉 Fase 2 LH
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
      <CardMaletin
        title=" 1/2 ✈    FASE 2  RH  "
        field1="ABS0258-8A         220 u"
        field2="ABS0254-5-200z      55 u"
        field3="ABS0258-5A         448 u"
      />

      <CardMaletin
        title=" 2/2 ✈    FASE 2  RH  "
        field1="ABS0254-5-250z     152 u"
        field2="ABS0258-5A         448 u"
        field3="DAN 7-5-5A         215 u"
      />
    </div>
  </div>
  <!-- COMPONENTE CAJAS FASE 2 -->

  <CajasFase2 />

  <!-- CARROS FASE 2 -->
  <section class="max-w-7xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">HTP-A320 Carro 👉 Fase 2</h1>
    <p class="text-lg font-bold text-black mb-8">
      Hay dos Carros <br />👉 Fase 2 RH 👉 Fase 2 LH
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5">
      <CardCarro
        title="Fase 2 RH"
        image="/imgCarros/CarroFase2_RH.png"
        description="Ubicacion: H2"
      />
      <CardCarro
        title="Fase 2 LH"
        image="/imgCarros/CarroFase2_LH.png"
        description="Ubicacion: H2"
      />
    </div>
  </section>
</template>

<style scoped></style>
