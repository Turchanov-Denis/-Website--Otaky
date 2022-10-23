<template>
  <div>
    <img
      v-bind:src="vendingImage"
      class="vending-stickers__decoration-machine"
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
    <StickerModal :activeVindow="activeVindow" :MyToggleOff="MyToggleOff" :currentSticker="currentSticker"></StickerModal>
  </div>
</template>

<script>
import StickerModal from "./StickerModal.vue";

export default {
  props: ["vendingImage"],
  components: {
    StickerModal,
  },
  data() {
    return {
      activeVindow: true,
      stickerArray: ["1.png", "2.png", "3.png", "4.png"],
      currentSticker: this.randomSticker(),
    };
  },
  methods: {
    MyToggleOn() {
      this.activeVindow = true;
      this.changeSticker()
    },
    MyToggleOff() {
      this.activeVindow = false;
    },
    randomSticker() {
      return ["1.png", "2.png", "3.png", "4.png"][
        Math.floor(Math.random() * ["1.png", "2.png", "3.png", "4.png"].length)
      ];
    },
    changeSticker(){
      this.currentSticker = this.randomSticker()
    }
  },
};
</script>