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
    <StickerModal :activeVindow="activeVindow" :MyToggleOff="MyToggleOff" ></StickerModal>
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
      activeVindow: false,
    };
  },
  methods: {
    MyToggleOn() {
      this.activeVindow = true;
    },
    MyToggleOff() {
      this.activeVindow = false;
    },
  },
};
</script>