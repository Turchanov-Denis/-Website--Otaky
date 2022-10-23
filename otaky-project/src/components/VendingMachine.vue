<template>
  <div>
    <img
      v-bind:src="vendingImage"
      :class="[
          'vending-stickers__decoration-machine vending-stickers__decoration-machine',vendingAnimation && ['animate__animated', 'animate__shakeX']
      ]"
      alt=""
    />
  </div>
  <div>
    <button
      @click="MyToggleOn"
      data-modal="sticker-modal-reset"
      class="vending-stickers__button vending-stickers__button-animated"
    >
      *Click*
    </button>
    <StickerModal
      :activeVindow="activeVindow"
      :MyToggleOff="MyToggleOff"
      :currentSticker="currentSticker"
    ></StickerModal>
  </div>
</template>

<script>
import StickerModal from "./StickerModal.vue";

export default {
  props: ["vendingImage", "stickerArray"],
  components: {
    StickerModal,
  },
  data() {
    return {
      activeVindow: false,
      currentSticker: this.randomSticker(),
      vendingAnimation: false,
    };
  },
  methods: {
    MyToggleOn() {
      this.activeVindow = true;
      this.changeSticker();
      this.vendingAnimation = true;
      setTimeout(() => (this.vendingAnimation = false), 500);
    },
    MyToggleOff() {
      this.activeVindow = false;
    },
    randomSticker() {
      return this.stickerArray[
        Math.floor(Math.random() * this.stickerArray.length)
      ];
    },
    changeSticker() {
      this.currentSticker = this.randomSticker();
    },
  },
};
</script>