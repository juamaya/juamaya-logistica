<script setup lang="ts"></script>
<template>
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="font-bold text-black mb-8">
      HTP-A320 Maletines de Normales 👉 Pregrada
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
      <CardMaletin title=" 1/1  ✈  PREGRADA    " field1=" " field2=" " />
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
        field1="Pregrada 2"
        field-color="brown"
        field-text-color="#fff"
      />
    </div>
    <p class="text-xl font-bold text-black mb-8 mt-10">👉 Pregrada 3</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 mt-5">
      <CardCajas
        title="  ✈  Caja 1 "
        field1="Pregrada 3 RH"
        field-color="#00f"
        field-text-color="#fff"
      />
      <CardCajas
        title="  ✈  Caja 2 "
        field1="Pregrada 3 LH"
        field-color="yellow"
        field-text-color="#000"
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
</template>

<style scoped></style>
