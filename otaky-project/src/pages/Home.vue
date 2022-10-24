<template>
  <div
    id="app"
    style="
      max-width: 1400px;
      margin: 0 auto;
      background: radial-gradient(
        97.29% 97.4% at 0 0,
        rgba(203, 69, 107, 0.5) 0,
        #646a6f 100%
      );
      box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);
    "
  >
    <VendingSection></VendingSection>
    <SliderSection></SliderSection>
    <AboutSection></AboutSection>
  </div>
</template>


<script>
import VendingSection from "../components/VendingSection";
import AboutSection from "../components/AboutSection";
import SliderSection from "../components/SliderSection";

export default {
  name: "Home",
  components: { VendingSection, AboutSection, SliderSection },
};
</script>