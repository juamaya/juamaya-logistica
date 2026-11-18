<script setup lang="ts">
import { useAlert } from '@/composables/useAlert'

const { alertRef, alerta, abrirAlerta } = useAlert()
</script>
<template>
  <div>
    <section class="max-w-7xl mx-auto text-center mt-15">
      <h1 class="font-bold text-black mb-8">
        HTP-A320 Cajas de Elamentales 👉 Fase 1
      </h1>
      <p class="text-lg font-bold text-black mb-8">
        Hay dos juegos de Cajas de Elementales<br />
        👉 Fase 1 RH 👉 Fase 1 LH
      </p>
      <ImageCaja />

      <p class="text-xl font-bold text-black my-10">👉 Fase 1 RH</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
        <CardCajas
          title="✈  Caja 1"
          field1="FASE 1 DG RH "
          field-color="#00f"
          field-text-color="#fff"
          @click="
            abrirAlerta(
              'Elementales Caja 1',
              '/imgCajas/F1-caja1-RH.jpg',
              'Elementales Caja 1'
            )
          "
        />
        <CardCajas
          title="  ✈  Caja 2  "
          field1="FASE 1 DG RH "
          field-color="#00f"
          field-text-color="#fff"
          @click="
            abrirAlerta(
              'Elementales Caja 2',
              '/imgCajas/F1-caja2.jpg',
              'Elementales Caja 2'
            )
          "
        />
        <CardCajas
          title="  ✈  Caja 3 "
          field1="KIT FASE 1 RH "
          field-color="#00f"
          field-text-color="#fff"
          @click="
            abrirAlerta(
              'Elementales Caja 3',
              '/imgCajas/F1-Kit-caja3.jpg',
              'Elementales Caja 3'
            )
          "
        />
      </div>
      <h2 class="text-lg font-bold text-gray-700 mb-8 mt-5">
        Haz click sobre las cajas para ver Elementales
        <br />👉
      </h2>
      <p class="text-xl font-bold text-black my-10">👉 Fase 1 LH</p>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 mt-5"
      >
        <CardCajas
          title="✈  Caja 1"
          field1="FASE 1 DG LH "
          field-color="yellow"
          field-text-color="#1e40af"
          @click="
            abrirAlerta(
              'Elementales Caja 2',
              '/imgCajas/F1-caja1-LH.jpg',
              'Elementales Caja 2'
            )
          "
        />
        <CardCajas
          title="  ✈  Caja 2  "
          field1="FASE 1 DG LH "
          field-color="yellow"
          field-text-color="#1e40af"
          @click="
            abrirAlerta(
              'Elementales Caja 2',
              '/imgCajas/F1-caja2.jpg',
              'Elementales Caja 2'
            )
          "
        />
        <CardCajas
          title="  ✈  Caja 3 "
          field1="KIT FASE 1 LH "
          field-color="yellow"
          field-text-color="#1e40af"
          @click="
            abrirAlerta(
              'Elementales Caja 3',
              '/imgCajas/F1-Kit-caja3.jpg',
              'Elementales Caja 3'
            )
          "
        />
      </div>
    </section>
 <!-- CAJAS DE COSTILLAS FASE 1 -->
  <section class="max-w-7xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Cajas de Costillas interiores 👉 Fase 1
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5">
      <CardCarro
        title="Fase 1 RH"
        image="/imgCajas/F1-LH-caja-costillas.png"
        description="Ubicacion: Carro F1 RH "
      />
      <CardCarro
        title="Fase 1 LH"
        image="/imgCajas/F1-LH-caja-costillas.png"
        description="Ubicacion: Carro F1 LH "
      />
    </div>
  </section>

  </div>

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
