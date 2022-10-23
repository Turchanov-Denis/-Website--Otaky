<template>
  <div>
    <div class="vending__preview_label">About project Otaky</div>
    <section class="otaky-advertisement">
      <div class="container">
        <div
          class="about__row"
          style="display: flex; justify-content: space-between"
        >
          <div>
            <img
              src="../assets/img/otaky_img.png"
              class="otaky-advertisement__img"
              alt=""
            />
          </div>
          <div
            :style="{
              paddingLeft: '80px',
            }"
          >
            <div class="about__mark">
              <div class="about__label">Otaky</div>
              <div class="about__sublabel">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </div>
              <div class="social">
                <button id="modal-subscribe-btn" class="social__button">
                  Подписаться
                </button>
                <a href="#" class="social__icon-link">подписаться на бусти</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>