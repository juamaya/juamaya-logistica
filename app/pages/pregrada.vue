<script setup lang="ts">
import { useAlert } from '@/composables/useAlert'

const { alertRef, alerta, abrirAlerta } = useAlert()
</script>
<template>
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Maletines de Normales 👉 Pregrada
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
      <CardMaletin title=" 1/1  ✈  PREGRADA" field1=" " field2=" " />
    </div>
  </div>

  <section class="max-w-7xl mx-auto text-center mt-10">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Cajas de Elamentales 👉 Pregrada
    </h1>
    <ImageCaja />
    <p class="text-xl font-bold text-black mb-8 mt-10">👉 Pregrada 2</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
      <CardCajas
        title="✈  Caja 1"
        field1="PREGRADA 2"
        field-color="brown"
        field-text-color="#fff"
        @click="
          abrirAlerta(
            'Elementales Caja 1',
            '/imgCajas/preg-2.jpg',
            'Elementales Caja 1'
          )
        "
      />
    </div>

    <h2 class="text-lg font-bold text-gray-700 mb-8 mt-5">
      Haz click sobre las cajas para ver Elementales
      <br />👉
    </h2>
    <p class="text-xl font-bold text-black mb-8 mt-10">👉 Pregrada 3</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 mt-5">
      <CardCajas
        title="  ✈  Caja 1 "
        field1="PREGRADA 3 RH"
        field-color="#00f"
        field-text-color="#fff"
        @click="
          abrirAlerta(
            'Elementales Caja 1',
            '/imgCajas/preg-3-RH.jpg',
            'Elementales Caja 1'
          )
        "
      />
      <CardCajas
        title="  ✈  Caja 2 "
        field1="PREGRADA 3 LH"
        field-color="yellow"
        field-text-color="#000"
        @click="
          abrirAlerta(
            'Elementales Caja ',
            '/imgCajas/preg-3-LH.jpg',
            'Elementales Caja '
          )
        "
      />
    </div>
  </section>

  <section class="max-w-7xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">HTP-A320 Carro 👉 Pregrada</h1>

    <p class="text-lg font-bold text-black mb-8">
      Hay dos Carros<br />
      👉 Pregrada 2 👉 Pregrada 3
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5">
      <CardCarro
        title="Pregrada 2 RH_LH"
        image="/imgCarros/CarroPregrada_2_RH_LH.png"
        description="Ubicacion: H5"
      />
      <CardCarro
        title="Pregrada 3 RH_LH"
        image="/imgCarros/CarroPregrada_3_RH_LH.png"
        description="Ubicacion: H6"
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
