"use strict"
let modalSubscribe = document.querySelector('.modal-subscribe');
let subscribeBtn = document.getElementById("modal-subscribe-btn");
let subscribeCloseBtn = document.getElementById("modal-subscribe-close-btn");
const byeMessege = "<div class ='form-subscribe__byeMessege'>Добро пожаловать в комьнити </div> <button id='modal-subscribe-close-btn' class='modal-subscribe__close'>X</button>";
const reciveSubModal = `<div class="modal-subscribe__header">
<div class="modal-subscribe__label">Подпишись на рассылку новостей о нашем проекте</div>
<button id="modal-subscribe-close-btn" class="modal-subscribe__close">X</button>
</div>

<form id="mail_subscribe" class="form-subscribe"  method="POST" >
<input type="text" name="name" class="form-subscribe__input" placeholder="Укажите имя">
<input type="text"name="email" class="form-subscribe__input" placeholder="Элетронная почта">
<input type="submit" class="form-subscribe__submit" value="Подписаться">
</form>`;
subscribeCloseBtn.addEventListener('click', () => {
    modalSubscribe.classList.toggle('active');
});

subscribeBtn.addEventListener('click',
    () => {
        if (modalSubscribe.matches('.active')) {
            modalSubscribe.classList.toggle('active');
        }
    }
);
// request with Jqery

// $('#mail_subscribe').submit(function() {
//     let subscribeForm = document.querySelector(".form-subscribe");
//     if ( (subscribeForm.name.value.length >= 3) && (subscribeForm.email.value.length >= 3)){
//     var post_data = $('#mail_subscribe').serialize();
//     modalSubscribe.innerHTML = byeMessege;
//     let subscribeCloseBtn = document.getElementById("modal-subscribe-close-btn");
//     subscribeCloseBtn.addEventListener('click',() => {
//         modalSubscribe.classList.toggle('active');
//     });
//     $.post('action/subscribeAction.php', post_data, () =>{       
//         modalSubscribe.classList.toggle('active');
//         modalSubscribe.innerHTML = reciveSubModal;
//         let subscribeCloseBtn = document.getElementById("modal-subscribe-close-btn");
//         subscribeCloseBtn.addEventListener('click',() => {
//             modalSubscribe.classList.toggle('active');
//         });

//     });}
//     else {
//         subscribeForm.reset();
//     }
// });

// fetch request

let subscribeForm = document.getElementById('mail_subscribe');

subscribeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if ( (subscribeForm.name.value.length >= 3) && (subscribeForm.email.value.length >= 3)){
        let response = await fetch('action/subscribeAction.php', {
            method: 'POST',
            body: new FormData(subscribeForm)
        }).then(response => 404).then(result => {
            if (result == 200){
                modalSubscribe.innerHTML = byeMessege;
                let subscribeCloseBtn = document.getElementById("modal-subscribe-close-btn");
                subscribeCloseBtn.addEventListener('click',() => {
                modalSubscribe.classList.toggle('active');
        });
            }
            else {
                let header = document.querySelector('.modal-subscribe__label');
                header.textContent = "Error ^ try later";
                header.style.color = 'red';
            }
        });
   
    }
});

let stickerBtnClose = document.querySelector('button[data-modal="sticker-modal"]');
let stickerBtnMain = document.querySelector('button[data-modal="sticker-modal-reset"]');
class ModalSticker {
    constructor(modalStickerObj, modalImgObj, arrStickers, successMessageObj) {
        this.modalImgObj = modalImgObj;
        this.arrStickers = arrStickers;
        this.successMessageObj = successMessageObj;
        this.modalStickerObj = modalStickerObj;
        console.log(this.arrStickers)
    }
    getRandomArrayElement() {
        return this.arrStickers[Math.floor(Math.random() * this.arrStickers.length)]
    };
    closeModal() {
        this.modalStickerObj.classList.toggle('active')
    };
    resetModal() {
        // console.log(this.modalStickerObj)
        // console.log(this.arrStickers)
        if (this.modalStickerObj.matches('.active')) {
            this.modalStickerObj.classList.toggle('active')
        }
        console.log("../src/sticker/" + this.getRandomArrayElement(this.arrStickers))
        this.modalImgObj.src = "../src/sticker/" + this.getRandomArrayElement(this.arrStickers)

    };
    async copyImg() {
        try {
            const pngImageSource = this.modalImgObj.getAttribute('src')
            await CopyImageClipboard.copyImageToClipboard(pngImageSource)
            successMessage.style.display = "block"
            setTimeout(() => successMessage.style.display = "", 2000)
        } catch (e) {
            alert(`Error: ${e.message}`)
        }
    }
}
// create var for modal window with stickers
let modalSticker = document.getElementById("sticker-modal");
let modalImg = document.getElementById("modal-img");
let successMessage = document.getElementById("successMessage");
let arrStickers = ["1.png", "2.png", "3.png", "4.png"];
// declare class of modal window with stickers
const MyModalSticker = new ModalSticker(modalSticker, modalImg, ["1.png", "2.png", "3.png", "4.png"], successMessage);
const copyPngImageButton = document.querySelector('#copyPng');

// add event of modal window with stickers
stickerBtnMain.addEventListener("click", MyModalSticker.resetModal.bind(MyModalSticker));
stickerBtnClose.addEventListener("click", MyModalSticker.closeModal.bind(MyModalSticker));
copyPngImageButton.addEventListener('click', MyModalSticker.copyImg.bind(MyModalSticker));





$('.blog__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

});




stickerBtnMain.addEventListener('click', function(e) {
        let
            size = Math.max(this.offsetWidth, this.offsetHeight),
            x = e.offsetX - size / 2,
            y = e.offsetY - size / 2,
            wave = this.querySelector('.wave')

        // Create an element if it doesn't exist
        if (!wave) {
            wave = document.createElement('span')
            wave.className = 'wave'
        }
        wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
        this.appendChild(wave)
    });