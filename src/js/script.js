"use strict"
let stickerBtnClose = document.querySelector('button[data-modal="sticker-modal"]');
let stickerBtnMain = document.querySelector('button[data-modal="sticker-modal-reset"]');

class ModalSticker {
    constructor(modalStickerObj,modalImgObj,arrStickers,successMessageObj){
        this.modalImgObj = modalImgObj;
        this.arrStickers = arrStickers;
        this.successMessageObj = successMessageObj;
        this.modalStickerObj = modalStickerObj;
        console.log(this.arrStickers)
    }
    getRandomArrayElement(){
        return this.arrStickers[Math.floor(Math.random()*this.arrStickers.length)]
    };
    closeModal () {
        this.modalStickerObj.classList.toggle('active')
    };
    resetModal (){
        // console.log(this.modalStickerObj)
        // console.log(this.arrStickers)
        if ( this.modalStickerObj.matches('.active')){
            this.modalStickerObj.classList.toggle('active')
        }
        console.log("../sticker/" + this.getRandomArrayElement(this.arrStickers))
        this.modalImgObj.src = "../sticker/" +  this.getRandomArrayElement(this.arrStickers)
    
    };
    async copyImg () {
        try {
          const pngImageSource = this.modalImgObj.getAttribute('src')
          await CopyImageClipboard.copyImageToClipboard(pngImageSource)
          successMessage.style.display = "block"
          setTimeout(()=> successMessage.style.display = "", 2000)
        } catch(e) {
          alert(`Error: ${e.message}`)
        }
      }
}
// create var for modal window with stickers
let modalSticker = document.getElementById("sticker-modal");
let modalImg = document.getElementById("modal-img");
let successMessage = document.getElementById("successMessage")
let arrStickers = ["1.png","2.png","3.png","4.png"]
// declare class of modal window with stickers
const MyModalSticker = new ModalSticker(modalSticker,modalImg,["1.png","2.png","3.png","4.png"],successMessage)
const copyPngImageButton = document.querySelector('#copyPng')

// add event of modal window with stickers
stickerBtnMain.addEventListener("click", MyModalSticker.resetModal.bind(MyModalSticker))
stickerBtnClose.addEventListener("click", MyModalSticker.closeModal.bind(MyModalSticker))
copyPngImageButton.addEventListener('click', MyModalSticker.copyImg.bind(MyModalSticker))


  
$('.blog__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    
  });
      