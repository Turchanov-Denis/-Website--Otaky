<template>
  <section class="vending">
    <div class="vending__preview_label">By Otaky</div>
    <div class="vending-stickers">
      <div class="container">
        <div class="vending-stickers__row">
          <div class="vending-stickers__label">random vending stickers</div>
        </div>

        <div class="vending-stickers__decoration-element">
          <img src="../img/decoration-element.png" alt="" />
        </div>

        <div class="vending-stickers__row" style="margin-top: -30px">
          <div id="liveSticker" class="col-md-3">
            <img
              src="../img/body_decoration_stiсker.png"
              class="vending-stickers__decoration-sticker"
              alt=""
            /><img
              class="vending-stickers__decoration-sticker-hands"
              src="../img/hands.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="../img/vending_machine.png"
              class="vending-stickers__decoration-machine"
              alt=""
            />
          </div>
          <div>
            <button
              data-modal="sticker-modal-reset"
              class="vending-stickers__button vending-stickers__button-animated"
            >
              *Click*
            </button>
          </div>
        </div>
        <div class="vending-stickers__row">
          <div class="vending-stickers__remark">
            Note: gives out random stickers when clicking on the button
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="vending-stickers__bg-line"></div> -->

    <div class="sticker-modal active" id="sticker-modal">
      <div class="sticker-modal__header">
        <div class="sticker-modal__label">&lt;Some sticker&gt;</div>
        <button data-modal="sticker-modal" class="sticker-modal__close-btn">
          X
        </button>
      </div>
      <img
        id="modal-img"
        src="../img/sticker/1.png"
        class="sticker-modal__img"
      />
      <button id="copyPng" class="sticker-modal__copy-btn">Copy</button>
      <div
        id="successMessage"
        class="sticker-modal__label sticker-modal_success"
      >
        Success!
      </div>
    </div>
  </section>
</template>