<script setup lang="ts">
import { useAlert } from '@/composables/useAlert'

const { alertRef, alerta, abrirAlerta } = useAlert()
</script>
<template>
  <div>
    <section class="max-w-7xl mx-auto text-center mt-15">
      <h1 class="font-bold text-black mb-8">
        HTP-A320 Cajas de Elementales 👉 Fase 2
      </h1>
      <h2 class="text-lg font-bold text-black mb-8">
        Hay dos juegos de Cajas de Elamentales <br />👉 Fase 2 RH 👉 Fase 2 LH
      </h2>
      <ImageCaja />
      <p class="text-xl font-bold text-black my-10">👉 Fase 2 RH</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
        <CardCajas
          title="✈  Caja 1"
          field1="FASE 2 RH "
          field-color="#00f"
          field-text-color="#fff"
          @click="
            abrirAlerta(
              'Elementales Caja 1',
              '/imgCajas/F2-c1-RH.jpg',
              'Elementales Caja 1'
            )
          "
        />
        <CardCajas
          title="  ✈  Caja 2  "
          field1="FASE 2 RH"
          field-color="#00f"
          field-text-color="#fff"
             @click="
            abrirAlerta(
              'Elementales Caja 2',
              '/imgCajas/F2-c2-RH.jpg',
              'Elementales Caja 2'
            )
          "
        />
        <CardCajas
          title="✈  Caja 3"
          field1="KIT FASE 2 RH"
          field-color="#00f"
          field-text-color="#fff"
             @click="
            abrirAlerta(
              'Elementales Caja 3',
              '/imgCajas/F2-Kit-RH.png',
              'Elementales Caja 3'
            )
          "
        />
        <CardCajas
          title="  ✈  Caja 4  "
          field1="2/3 FASE 3 RH"
          field-color="#0f0"
          field-text-color="#00f"
             @click="
            abrirAlerta(
              'Elementales Caja 4',
              '/imgCajas/F2-F3-RH.jpg',
              'Elementales Caja 4'
            )
          "
        />
      </div>

      <h2 class="text-lg font-bold text-gray-700 mb-8 mt-5">
        Haz click sobre las cajas para ver Elementales
        <br />👉
      </h2>
      <p class="text-xl font-bold text-black my-10">👉 Fase 2 LH</p>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 mt-5"
      >
        <CardCajas
          title="✈  Caja 1"
          field1="FASE 2 LH "
          field-color="yellow"
          field-text-color="#1e40af"
               @click="
            abrirAlerta(
              'Elementales Caja 1',
              '/imgCajas/F2-c1-LH.jpg',
              'Elementales Caja 1'
            )
          "
        />
        <CardCajas
          title="  ✈  Caja 2  "
          field1="FASE 2 LH"
          field-color="yellow"
          field-text-color="#1e40af"
               @click="
            abrirAlerta(
              'Elementales Caja 2',
              '/imgCajas/F2-c2-LH.jpg',
              'Elementales Caja 2'
            )
          "
        />
        <CardCajas
          title="✈  Caja 3"
          field1="KIT FASE 2 LH"
          field-color="yellow"
          field-text-color="#1e40af"
               @click="
            abrirAlerta(
              'Elementales Caja 3',
              '/imgCajas/F2-Kit-LH.jpg',
              'Elementales Caja 3'
            )
          "
        />
        <CardCajas
          title="  ✈  Caja 4  "
          field1="2/3 FASE 3 LH"
          field-color="#0f0"
          field-text-color="yellow"
               @click="
            abrirAlerta(
              'Elementales Caja 4',
              '/imgCajas/F2-F3-LH.jpg',
              'Elementales Caja 4'
            )
          "
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
  </div>
</template>

<style scoped></style>
