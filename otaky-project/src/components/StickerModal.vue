<template>
  <div v-if="activeVindow" class="sticker-modal" id="sticker-modal">
    <div class="sticker-modal__header">
      <div class="sticker-modal__label">&lt;Some sticker&gt;</div>
      <button
        @click="$emit('toggle-off')"
        data-modal="sticker-modal"
        class="sticker-modal__close-btn"
      >
        X
      </button>
    </div>
    <img
      id="modal-img"
      :src="getImgUrl(currentSticker)"
      class="sticker-modal__img"
    />
    <button id="copyPng" @click="copyImg" class="sticker-modal__copy-btn">
      Copy
    </button>
    <div
      v-if="successMessage"
      class="sticker-modal__label sticker-modal_success"
    >
      Success!
    </div>
  </div>
</template>

<script>
import { copyImageToClipboard } from "copy-image-clipboard";

export default {
  props: ["activeVindow", "currentSticker"],
  data() {
    return {
      successMessage: false,
    };
  },
  methods: {
    copyImg() {
      copyImageToClipboard(this.getImgUrl(this.currentSticker))
        .then(() => {
          console.log("Image Copied");
        })
        .catch((e) => {
          console.log("Error: ", e.message);
        });
      // toggle successMessagethis.randomSticker()
      this.successMessage = true;
      setTimeout(() => (this.successMessage = false), 1000);
    },

    getImgUrl(pic) {
      return require("../assets/img/sticker/" + pic);
    },
  },
  computed: {},
};
</script>
