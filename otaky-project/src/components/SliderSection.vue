<template>
  <section class="blog">
   
      <BlogShowcase
        v-for="(item, index) in this.$store.state.article"
        :key="index"
        :id="item.id"
        :title="item.title"
        :sublabel="item.sublabel"
        :image="require('../assets/img/blog/' + item.previewImage)"
      ></BlogShowcase>
    
  </section>
</template>

<script>
import BlogShowcase from "../components/BlogShowcase";
export default {
  data() {
    return {
      items: [1, 2],
    };
  },
  components: {BlogShowcase}
};
</script>