<script setup lang="ts"></script>
<template>
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Maletines de Normales 👉 Fase 2
    </h1>
       <h2 class="text-lg font-bold text-black mb-8">
      Hay dos juegos de Maletines de Normales<br/> 👉 Fase 2 RH 👉 Fase 2 LH
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
      <CardMaletin
        title=" 1/2 ✈    FASE 2  RH  "
        field1="ABS0258-8A         220 u"
        field2="ABS0254-5-200z      55 u"
        field3="ABS0258-5A         448 u"
      />

      <CardMaletin
        title=" 2/2 ✈    FASE 2  RH  "
        field1="ABS0254-5-250z     152 u"
        field2="ABS0258-5A         448 u"
        field3="DAN 7-5-5A         215 u"
      />
    </div>
  </div>

  <section class="max-w-7xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Cajas de Elementales 👉 Fase 2
    </h1>
    <h2 class="text-lg font-bold text-black mb-8">
      Hay dos juegos de Cajas de Elamentales <br/>👉 Fase 2 RH 👉 Fase 2 LH
    </h2>
    <ImageCaja />
     <p class="text-xl font-bold text-black my-10">
        👉 Fase 2 RH
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
      <CardCajas
        title="✈  Caja 1"
        field1="FASE 2 RH "
        field-color="#00f"
        field-text-color="#fff"
      />
      <CardCajas
        title="  ✈  Caja 2  "
        field1="FASE 2 RH"
        field-color="#00f"
        field-text-color="#fff"
      />
      <CardCajas
        title="✈  Caja 3"
        field1="KIT MECANIZADOS RH"
      field-color="GRAY"
        field-text-color="#fff"
      />
      <CardCajas
        title="  ✈  Caja 4  "
        field1="FASE 3 RH"
        field-color="#0f0"
        field-text-color="#000"
      />
    </div>
     <p class="text-xl font-bold text-black my-10">
        👉 Fase 2 LH
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 mt-5">
      <CardCajas
        title="✈  Caja 1"
        field1="FASE 2 LH "
        field-color="yellow"
        field-text-color="#1e40af"
      />
      <CardCajas
        title="  ✈  Caja 2  "
        field1="FASE 2 LH"
        field-color="yellow"
        field-text-color="#1e40af"
      />
      <CardCajas
        title="✈  Caja 3"
         field1="KIT MECANIZADOS LH"
      field-color="GRAY"
        field-text-color="#FFF"
      />
      <CardCajas
        title="  ✈  Caja 4  "
        field1="FASE 3 LH"
        field-color="#0f0"
        field-text-color="#000"
      />
    </div>
  </section>
  <section class="max-w-7xl mx-auto text-center mt-15">
    <h1 class="font-bold text-black mb-8">HTP-A320 Carro 👉 Fase 2</h1>
    <p class="text-lg font-bold text-black mb-8">
      Hay dos Carros <br/>👉 Fase 2 RH 👉 Fase 2 LH
    </p>
    <div class="grid grid-cols-1   lg:grid-cols-2 gap-5 mx-5">

        <CardCarro
        title="Fase 2 RH"
         image="/imgCarros/CarroFase2_RH.png"
        description="Ubicacion: H2"
        />
        <CardCarro
        title="Fase 2 LH"
        image="/imgCarros/CarroFase2_LH.png"
        description="Ubicacion: H2"
        />
      </div>
  </section>
</template>

<style scoped></style>
