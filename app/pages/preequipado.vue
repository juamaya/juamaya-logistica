
<script setup lang="ts">
import { ref } from 'vue'

interface AlertInstance {
  showAlert: () => Promise<void>
}

const alertRef = ref<AlertInstance | null>(null)

// Datos dinámicos de la alerta
const alerta = ref({
  title: '',
  image: '',
  imageAlt: ''
})

// Configurar alerta según la tarjeta
const abrirAlerta = async (
  title: string,
  image: string,
  imageAlt: string
) => {
  alerta.value = {
    title,
    image,
    imageAlt
  }

  // Esperar a que Vue actualice las props
  await nextTick()

  // Abrir SweetAlert2
  alertRef.value?.showAlert()
}
</script>

<template>
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Maletines de Normales 👉 Preequipado
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
      <CardMaletin
        title="1/2 ✈ PREEQUIPADO"
        field1="ABS0258-6A 262 u"
        field2="MS21060L3 246 u"
        field3="DAN 7-8-8 86 u"
      />

      <CardMaletin
        title="2/2 ✈ PREEQUIPADO"
        field1="ABS0258-8A 262 u"
      />
    </div>
  </div>

  <section class="max-w-7xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Cajas de Elementales 👉 Preequipado
    </h1>

    <ImageCaja />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 mt-10">

      <CardCajas
        title="✈ Caja 1"
        field1="PREEQUIPADO RH"
        field-color="#00F"
        field-text-color="white"
      />

      <CardCajas
        title="✈ Caja 2"
        field1="PREEQUIPADO LH"
        field-color="yellow"
        field-text-color="#1e40af"
      />

      <CardCajas
        title="✈ Caja 3"
        field1="KIT MECANIZADOS"
        field-color="gray"
        field-text-color="white"
      />

      <!-- CAJA 4 -->
      <CardCajas
        title="✈ Caja 4"
        field1="FASE 3 RH"
        field-color="#00f"
        field-text-color="#fff"
        @click="abrirAlerta(
          'Elementales Caja 4',
          '/imgCajas/fase3-preequipado-RH.jpg',
          'Elementales Caja 4'
        )"
      />

      <!-- CAJA 5 -->
      <CardCajas
        title="✈ Caja 5"
        field1="FASE 3 LH"
        field-color="yellow"
        field-text-color="#000"
        @click="abrirAlerta(
          'Elementales Caja 5',
          '/imgCajas/fase3-preequipado-LH.jpg',
          'Elementales Caja 5'
        )"
      />

      <!-- CAJA 6 -->
      <CardCajas
        title="✈ Caja 6"
        field1="FASE 4 UNION RH_LH"
        field-color="brown"
        field-text-color="white"
            @click="abrirAlerta(
          'Elementales Caja 6',
          '/imgCajas/CarroFase1_LH.png',
          'Elementales Caja 6'
        )"
      />

    </div>
  </section>

  <section class="max-w-3xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Carro 👉 Preequipado
    </h1>

    <CardCarro
      title="Preequipado"
      image="/imgCarros/CarroPreequipado_Tras_Del.png"
      description="Ubicacion: H8"
    />
  </section>

  <!-- UNA SOLA ALERTA PARA TODAS LAS TARJETAS -->
  <BaseAlert
    ref="alertRef"
    :title="alerta.title"
    :image="alerta.image"
    :image-alt="alerta.imageAlt"
    :image-width="400"
    :image-height="400"
    confirm-button-text="OK"
    confirm-button-color="#2563eb"
    background-color="#dcfce7"
  />

</template>
