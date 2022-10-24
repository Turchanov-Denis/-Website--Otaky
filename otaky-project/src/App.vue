<template>
  <component :is="currentView" />
</template>

<script>
import Home from "./pages/Home";
import Article from "./pages/Article";
const routes = {
  "-Website--Otaky/otaky-project/dist/": Home,
  "-Website--Otaky/otaky-project/dist/#article": Article,
};

export default {
  name: "App",

  components: { Home, Article },
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "-Website--Otaky/otaky-project/dist/"];
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
  
  
};
</script>


<style>
/* Fonts */
@import "https://fonts.googleapis.com/css2?family=Cinzel&family=Rajdhani:wght@300;600&display=swap";
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
/* Main style */
@import "css/style.css";
</style>
