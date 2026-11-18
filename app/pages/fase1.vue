<script setup lang="ts">
import CajasFase1 from '~/components/CajasFase1.vue'
import CardCarro from '~/components/CardCarro.vue'
</script>
<template>
  <div class="max-w-7xl mx-auto text-center">
  <!-- MALETINES FASE 1 -->

    <h1 class="font-bold text-black mb-8">
      HTP-A320 Maletines de Normales 👉 Fase 1
    </h1>
    <h2 class="text-lg font-bold text-black mb-8">
      Hay dos juegos de Maletines de Normales
      <br />👉 Fase 1 RH 👉 Fase 1 LH
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
      <CardMaletin
        title=" 1/1  ✈  FASE 1  RH  "
        field1="MS21060L3         148 u"
      />
    </div>
  </div>
  
  <!-- COMPONENTE CAJAS FASE 1 -->

  <CajasFase1 />

  <!-- PANELES FASE 1 -->
  <section class="max-w-7xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Paneles de Elementales 👉 Fase 1
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5">
      <CardCarro
        title="Fase 1 RH"
        image="/imgCajas/F1-Panel-RH.png"
        description="Ubicacion: Carro F1 RH "
      />
      <CardCarro
        title="Fase 1 LH"
        image="/imgCajas/F1-Panel-LH.png"
        description="Ubicacion: Carro F1 LH  "
      />
    </div>
  </section>

  <!-- CARROS FASE 1 -->

  <section class="max-w-7xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">HTP-A320 Carro 👉 Fase 1</h1>
    <p class="text-lg font-bold text-black black mb-8">
      Hay dos Carros <br />👉 Fase 1 RH 👉 Fase 1 LH
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5">
      <CardCarro
        title="Fase 1 RH"
        image="/imgCarros/CarroFase1_RH.png"
        description="Ubicacion: H1"
      />
      <CardCarro
        title="Fase 1 LH"
        image="/imgCarros/CarroFase1_LH.png"
        description="Ubicacion: H1"
      />
    </div>
  </section>
</template>

<style scoped></style>
