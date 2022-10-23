<template>
    <div v-if="activeVindow" class="sticker-modal" id="sticker-modal">
      <div class="sticker-modal__header">
        <div class="sticker-modal__label">&lt;Some sticker&gt;</div>
        <button @click="MyToggleOff" data-modal="sticker-modal" class="sticker-modal__close-btn">
          X
        </button>
      </div>
      <img id="modal-img" src="../assets/img/sticker/1.png" class="sticker-modal__img" />
      <button id="copyPng" class="sticker-modal__copy-btn">Copy</button>
      <div
        id="successMessage"
        class="sticker-modal__label sticker-modal_success">
        Success!
      </div>
    </div>
</template>

<script>
export default {
    props: ["activeVindow","MyToggleOff"],
    data(){
        return{}
    },
    methods: {
        

    }
}
</script>
