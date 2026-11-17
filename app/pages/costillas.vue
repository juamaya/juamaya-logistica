<script setup lang="ts"></script>
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
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 mt-10">
      <CardCajas
        title="✈  Caja 1"
        field1="Costillas RH"
        field-color="blue"
        field-text-color="white"
      />
      <CardCajas
        title="  ✈  Caja 2  "
        field1="Costillas LH"
        field-color="yellow"
        field-text-color="black"
      />
      <CardCajas
        title="✈  Caja 3"
        field1="Costilla 0 Herraje RH_LH"
     field-color="blue"
        field-text-color="white"
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
</template>

<style scoped></style>
