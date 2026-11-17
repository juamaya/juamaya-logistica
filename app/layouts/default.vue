<script setup lang="ts">
import Footer from "~/components/Footer.vue";
 
import NavBar from "~/components/NavBar.vue";
</script>

<template>
  <div>
    <NavBar />

    <div class="mt-20">
      <ImageMaletin />
   
    </div>

    <main>
      <slot />
    </main>
     <!-- BOTON VOLVER ARRIBA -->
   
    <BtnScrollTop/>
   
    
    <Footer />
  </div>
</template>
