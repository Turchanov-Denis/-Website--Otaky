<template>
  <section class="vending">
    <div class="vending__preview_label">{{ title }}</div>
    <div class="vending-stickers">
      <div class="container">
        <div class="vending-stickers__row">
          <div class="vending-stickers__label">random vending stickers</div>
        </div>

        <div class="vending-stickers__decoration-element">
          <img src="../assets/img/decoration-element.png" alt="" />
        </div>

        <div class="vending-stickers__row" style="margin-top: -30px">
          <div id="liveSticker">
            <img
              src="../assets/img/body_decoration_stiсker.png"
              class="vending-stickers__decoration-sticker"
              alt=""
            /><img
              class="vending-stickers__decoration-sticker-hands"
              src="../assets/img/hands.png"
              alt=""
            />
          </div>
          <VendingMachine
            :vendingImage="vendingImage"
            :stickerArray="stickerArray"
          >
          </VendingMachine>
        </div>
        <div class="vending-stickers__row">
          <div class="vending-stickers__remark">
            Note: gives out random stickers when clicking on the button
          </div>
        </div>
      </div>
    </div>

    <!-- Modal window -->
  </section>
</template>


<script>
import VendingMachine from "./VendingMachine.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      vendingImage: require("../assets/img/vending_machine.png"),
    };
  },
  name: "App",
  components: { VendingMachine },
  computed: mapState([
    // map this.count to store.state.count
    "stickerArray","title"
  ]),
  methods: {},
};
</script>