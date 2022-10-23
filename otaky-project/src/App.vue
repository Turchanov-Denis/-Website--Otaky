<template>
  <div id="app">
    <VendingSection></VendingSection>
    <AboutSection></AboutSection>
  </div>
</template>

<script>
import VendingSection from "./components/VendingSection";
import AboutSection from "./components/AboutSection.vue";
export default {
  name: "App",
  components: { VendingSection,AboutSection },
};
</script>


<style>
/* Fonts */
@import "https://fonts.googleapis.com/css2?family=Cinzel&family=Rajdhani:wght@300;600&display=swap";
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
/* Main style */
@import "css/style.css";
</style>
