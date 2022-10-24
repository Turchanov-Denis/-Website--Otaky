<template>
  <a
    href="#/article"
    @click="this.$store.dispatch('changeArticleId', id)"
    :style="{
      margin: '0 30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      textDecoration: 'none',
      width: '248px',
      maxHeight: '248px',
      background: `url(${image}) center center/cover no-repeat`,
      borderRadius: '4px',
    }"
  >
    <div class="blog__preview-label">{{ title }}</div>

    <div class="blog__preview-sublabel">{{ sublabel }}</div>
  </a>
</template>

<script>
export default {
  props: ["id", "image", "title", "sublabel"],
};
</script>