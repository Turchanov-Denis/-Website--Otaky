<template>
  <div class="container">
    <div class="blog__page-label">{{ article[currentArticleId].title }}</div>
    <img
      class="blog__page-img"
      :src="require('../assets/img/blog/' + article[currentArticleId].pageImg)"
      alt=""
    />
    <div class="blog__page-text">{{ article[currentArticleId].text }}</div>
    <a href="#/" class="blog__page-link">- - back - - </a>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: mapState(["currentArticleId", "article"]),
  //   image: require(`../assets/img/${this.article[this.currentArticleId].image}`)
  
};
</script>