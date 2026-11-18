<script setup lang="ts">
 
import { useAlert } from '@/composables/useAlert'
const { alertRef, alerta, abrirAlerta } = useAlert()
</script>
<template>
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Maletines de Normales 👉 Union
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
      <CardMaletin
        title="1/4   ✈ UNION  "
        field1="DAN 7-8-7          175 u"
        field2="ABS0258-6A         316 u"
        field3="ABS0259-6A         128 u"
        field4="DAN 7-8-10         88  u"
      />

      <CardMaletin
        title=" 2/4 ✈ UNION  "
        field1="ABS0258-5A         280 u"
        field2="ABS0259-8A         308 u"
      />

      <CardMaletin
        title="3/4  ✈ UNION  "
        field1="ABS0259-10A         152 u"
        field2="DAN 7-8-11          186 u"
        field3="ABS0738-2-10          4 u"
      />

      <CardMaletin title="4/4  ✈ UNION  " field1="ABS0258-8A          520 u" />
    </div>
  </div>

  <section class="max-w-7xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Cajas de Elamentales 👉 Union
    </h1>

    <ImageCaja />

        <h2 class="text-lg font-bold text-gray-700 mb-8 mt-5">
      Haz click sobre las cajas para ver Elementales
      <br />👉
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 mt-10">
      <CardCajas
        title="✈  Caja 1"
        field1="UNION RH"
        field-color="#00F"
        field-text-color="white"
         @click="
          abrirAlerta(
            'Elementales Caja 1',
            '/imgCajas/Union-RH.jpg',
            'Elementales Caja 1'
          )"
      />
      <CardCajas
        title="  ✈  Caja 2  "
        field1="UNION LH"
        field-color="yellow"
        field-text-color="black"
            @click="
          abrirAlerta(
            'Elementales Caja 2',
            '/imgCajas/Union-LH.jpg',
            'Elementales Caja 2'
          )"
      />
      <CardCajas
        title="✈  Caja 3"
        field1="KIT MECANIZADOS UNION"
        field-color="gray"
        field-text-color="white"
            @click="
          abrirAlerta(
            'Elementales Caja 3',
            '/imgCajas/Union-Kit.jpg',
            'Elementales Caja 3'
          )"
      />
      <CardCajas
        title="  ✈  Caja 4 "
        field1="1/2 FASE 4 UNION"
        field-color="brown"
        field-text-color="white"
            @click="
          abrirAlerta(
            'Elementales Caja 1',
            '/imgCajas/Union-F4.jpg',
            'Elementales Caja 1'
          )"
      />
    </div>
  </section>

  <section class="max-w-3xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">HTP-A320 Carro 👉 Union</h1>

    <CardCarro
      title="Union"
     image="/imgCarros/CarroUnion_RH_LH.png"
      description="Ubicacion: H7"
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
