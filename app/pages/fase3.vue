<script setup lang="ts">
import { useAlert } from '@/composables/useAlert'
const { alertRef, alerta, abrirAlerta } = useAlert()
</script>

<template>
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Maletines de Normales 👉 Fase 3
    </h1>

    <h2 class="text-lg font-bold text-black mb-8">
      Hay dos juegos de Maletines de Normales <br />👉 Fase 3 RH 👉 Fase 3 LH
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
      <CardMaletin
        title=" 1/1  ✈  FASE 3  RH  "
        field1="ABS0254-5-500z     44 u"
      />
    </div>
  </div>

  <section class="max-w-7xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Cajas de Elamentales 👉 Fase 3
    </h1>
    <h2 class="text-lg font-bold text-black mb-8">
      Hay dos juegos de Cajas de Elementales <br />👉 Fase 3 RH 👉 Fase 3 LH
    </h2>
    <ImageCaja />
    <p class="text-xl font-bold text-black my-10">👉 Fase 3 RH</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
      <CardCajas
        title="✈  Caja 1"
        field1="FASE 3 RH"
        field-color="#00f"
        field-text-color="#fff"
        @click="
          abrirAlerta(
            'Elementales Caja 1',
            '/imgCajas/F3-c1-RH.jpg',
            'Elementales Caja 1'
          )
        "
      />
      <CardCajas
        title="  ✈  Caja 2  "
        field1="KIT FASE 3 RH"
        field-color="#00f"
        field-text-color="#fff"
        @click="
          abrirAlerta(
            'Elementales Caja 2',
            '/imgCajas/F3-Kit-RH.jpg',
            'Elementales Caja 2'
          )
        "
      />
      <CardCajas
        title="✈  Caja 3"
        field1="PREGRADA 1"
        field-color="brown"
        field-text-color="#fff"
        @click="
          abrirAlerta(
            'Elementales Caja 3',
            '/imgCajas/F3-pregrada1.jpg',
            'Elementales Caja 3'
          )
        "
      />
    </div>
    <h2 class="text-lg font-bold text-gray-700 mb-8 mt-5">
      Haz click sobre las cajas para ver Elementales
      <br />👉
    </h2>
    <p class="text-xl font-bold text-black my-10">👉 Fase 3 LH</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 mt-5">
      <CardCajas
        title="✈  Caja 1"
        field1="FASE 3 LH"
        field-color="yellow"
        field-text-color="#000"
        @click="
          abrirAlerta(
            'Elementales Caja 1',
            '/imgCajas/F3-c1-LH.jpg',
            'Elementales Caja 1'
          )
        "
      />
      <CardCajas
        title="  ✈  Caja 2  "
        field1="KIT FASE 3 LH"
        field-color="yellow"
        field-text-color="#000"
        @click="
          abrirAlerta(
            'Elementales Caja 2',
            '/imgCajas/F3-Kit-LH.jpg',
            'Elementales Caja 2'
          )
        "
      />
    </div>
  </section>
  <section class="max-w-7xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">HTP-A320 Carro 👉 Fase 3</h1>
    <p class="text-lg font-bold text-black mb-8">
      Hay dos Carros<br />
      👉 Fase 3 RH 👉 Fase 3 LH
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5">
      <CardCarro
        title="Fase 3 RH"
        image="/imgCarros/CarroFase3_RH.png"
        description="Ubicacion: H3"
      />
      <CardCarro
        title="Fase 3 LH"
        image="/imgCarros/CarroFase3_LH.png"
        description="Ubicacion: H3"
      />
    </div>
  </section>

  <!-- UNA SOLA ALERTA PARA TODAS LAS TARJETAS -->
  <BaseAlert
    ref="alertRef"
    :title="alerta.title"
    :image="alerta.image"
    :image-alt="alerta.imageAlt"
    :image-width="450"
    :image-height="450"
    confirm-button-text="OK"
    confirm-button-color="#2563eb"
    background-color="#dcfce7"
  />
</template>

<style scoped></style>
