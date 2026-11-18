<script setup lang="ts">
import CajasPreequipado from '~/components/CajasPreequipado.vue'
</script>

<template>
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Maletines de Normales 👉 Preequipado
    </h1>
    <!-- MALETINES   -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
      <CardMaletin
        title="1/2 ✈ PREEQUIPADO"
        field1="ABS0258-6A 262 u"
        field2="MS21060L3 246 u"
        field3="DAN 7-8-8 86 u"
      />

      <CardMaletin title="2/2 ✈ PREEQUIPADO" field1="ABS0258-8A 262 u" />
    </div>
  </div>

  <!-- COMPONENTE CAJAS  -->

  <CajasPreequipado />

  <!-- CARROS FASE 1 -->

  <section class="max-w-3xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">HTP-A320 Carro 👉 Preequipado</h1>

    <CardCarro
      title="Preequipado"
      image="/imgCarros/CarroPreequipado_Tras_Del.png"
      description="Ubicacion: H8"
    />
  </section>
</template>
