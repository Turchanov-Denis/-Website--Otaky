"use strict"


// * This subscribe email form -- end


// * This rerun random stiker for vending machine + copy image
let stickerMachine = document.querySelector(".vending-stickers__decoration-machine")

let stickerBtnClose = document.querySelector('button[data-modal="sticker-modal"]');
let stickerBtnMain = document.querySelector('button[data-modal="sticker-modal-reset"]');
class ModalSticker {
    constructor(modalStickerObj, modalImgObj, arrStickers, successMessageObj) {
        this.modalImgObj = modalImgObj;
        this.arrStickers = arrStickers;
        this.successMessageObj = successMessageObj;
        this.modalStickerObj = modalStickerObj;
        // console.log(this.arrStickers)
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
        stickerMachine.classList.add('animate__animated', 'animate__shakeX')
        if (this.modalStickerObj.matches('.active')) {
            this.modalStickerObj.classList.toggle('active')
        }
        console.log("../src/img/sticker/" + this.getRandomArrayElement(this.arrStickers))
        this.modalImgObj.src = "../src/img/sticker/" + this.getRandomArrayElement(this.arrStickers)
        setTimeout(() => { stickerMachine.classList.remove('animate__animated', 'animate__shakeX') }, 500)
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

let liveSticker = document.getElementById("liveSticker");
let bodySticker = document.querySelector(".vending-stickers__decoration-sticker");
let handSticker = document.querySelector(".vending-stickers__decoration-sticker-hands");

console.log(liveSticker)
liveSticker.addEventListener('mouseover', () => {
    console.log("re")
    bodySticker.classList.add("vending-stickers__decoration-sticker-animation");
    handSticker.classList.add("vending-stickers__decoration-sticker-hands-animation");
})



$('.blog__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

});



