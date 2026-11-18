<script setup lang="ts">
import { useAlert } from '@/composables/useAlert'
const { alertRef, alerta, abrirAlerta } = useAlert()
</script>

<template>
  <section class="max-w-7xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Cajas de Elementales 👉 Preequipado
    </h1>

    <ImageCaja />

    <h2 class="text-lg font-bold text-gray-700 mb-8">
      Haz click sobre las cajas para ver Elementales
      <br />👉
    </h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 mt-10"
    >
      <!-- CAJA 1 -->
      <CardCajas
        title="✈ Caja 1"
        field1="PREEQUIPADO RH"
        field-color="#00F"
        field-text-color="white"
        @click="
          abrirAlerta(
            'Elementales Caja 1',
            '/imgCajas/preeq-RH.jpg',
            'Elementales Caja 1'
          )
        "
      />
      <!-- CAJA 2 -->
      <CardCajas
        title="✈ Caja 2"
        field1="PREEQUIPADO LH"
        field-color="yellow"
        field-text-color="#1e40af"
        @click="
          abrirAlerta(
            'Elementales Caja 2',
            '/imgCajas/preeq-LH.jpg',
            'Elementales Caja 2'
          )
        "
      />
      <!-- CAJA 3 -->
      <CardCajas
        title="✈ Caja 3"
        field1="KIT MECANIZADOS PREEQ."
        field-color="gray"
        field-text-color="white"
        @click="
          abrirAlerta(
            'Elementales Caja 3',
            '/imgCajas/preeq-kit.jpg',
            'Elementales Caja 3'
          )
        "
      />

      <!-- CAJA 4 -->
      <CardCajas
        title="✈ Caja 4"
        field1="3/3 FASE 3 RH"
        field-color="#0F0"
        field-text-color="#00f"
        @click="
          abrirAlerta(
            'Elementales Caja 4',
            '/imgCajas/fase3-preequipado-RH.jpg',
            'Elementales Caja 4'
          )
        "
      />

      <!-- CAJA 5 -->
      <CardCajas
        title="✈ Caja 5"
        field1="3/3 FASE 3 LH"
        field-color="#0F0"
        field-text-color="yellow"
        @click="
          abrirAlerta(
            'Elementales Caja 5',
            '/imgCajas/fase3-preequipado-LH.jpg',
            'Elementales Caja 5'
          )
        "
      />

      <!-- CAJA 6 -->
      <CardCajas
        title="✈ Caja 6"
        field1="2/2 FASE 4 UNION"
        field-color="brown"
        field-text-color="white"
        @click="
          abrirAlerta(
            'Elementales Caja 6',
            '/imgCajas/fase4-preeq.jpg',
            'Elementales Caja 6'
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
</template>

<style scoped></style>
