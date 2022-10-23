<template>
  <div id="app" style="max-width:1400px; margin:0 auto; background: radial-gradient(97.29% 97.4% at 0 0, rgba(203, 69, 107, 0.5) 0, #646a6f 100%);
    box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);">
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
