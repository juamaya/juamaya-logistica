<script setup lang="ts">
import { useAlert } from '@/composables/useAlert'
const { alertRef, alerta, abrirAlerta } = useAlert()
</script>


<template>
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Maletines de Normales 👉 Costillas
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
      <CardMaletin
        title=" 1/1  ✈  COSTILLAS    "
        field1="MS21060L3         249 u"
      />
    </div>
  </div>

  <section class="max-w-7xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Cajas de Elamentales 👉 Costillas
    </h1>

    <ImageCaja />

    <h2 class="text-lg font-bold text-gray-700 mb-8 mt-5">
      Haz click sobre las cajas para ver Elementales
      <br />👉
    </h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 mt-10"
    >
      <CardCajas
        title="✈  Caja 1"
        field1="COSTILLAS RH"
        field-color="blue"
        field-text-color="white"
        @click="
          abrirAlerta(
            'Elementales Caja 1',
            '/imgCajas/cos-RH.jpg',
            'Elementales Caja 1'
          )"
      />
      <CardCajas
        title="  ✈  Caja 2  "
        field1="COSTILLAS LH"
        field-color="yellow"
        field-text-color="black"
        @click="
          abrirAlerta(
            'Elementales Caja 2',
            '/imgCajas/cos-LH.jpg',
            'Elementales Caja 2'
          )
        "
      />
      <CardCajas
        title="✈  Caja 3"
        field1="COSTILLA 0 - HERRAJE RH_LH"
        field-color="blue"
        field-text-color="yellow"
        @click="
          abrirAlerta(
            'Elementales Caja 3',
            '/imgCajas/costilla-0.jpg',
            'Elementales Caja 3'
          )
        "
      />
    </div>
  </section>

  <section class="max-w-3xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">HTP-A320 Carro 👉 Costillas</h1>

    <CardCarro
      title="Costillas"
      image="/imgCarros/CarroCostillas_RH_LH.png"
      description="Ubicacion: H9"
    />
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
