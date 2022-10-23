<template>
  <div style="about">
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
    <footer>
      <div class="modal-subscribe active">
        <div class="modal-subscribe__header">
          <div class="modal-subscribe__label">
            Подпишись на рассылку новостей о нашем проекте
          </div>
          <button id="modal-subscribe-close-btn" class="modal-subscribe__close">
            X
          </button>
        </div>

        <form id="mail_subscribe" class="form-subscribe" method="POST">
          <input
            type="text"
            name="name"
            class="form-subscribe__input"
            placeholder="Укажите имя"
          />
          <input
            type="text"
            name="email"
            class="form-subscribe__input"
            placeholder="Элетронная почта"
          />
          <input
            type="submit"
            class="form-subscribe__submit"
            value="Подписаться"
          />
        </form>
      </div>
      <div class="vending__preview_label">
        Created https://github.com/Turchanov-Denis
      </div>
    </footer>
  </div>
</template>