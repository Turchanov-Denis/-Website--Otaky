"use struct"
let stickerBtnClose = document.querySelector('button[data-modal="sticker-modal"]');
let stickerBtnMain = document.querySelector('button[data-modal="sticker-modal-reset"]');
let modalSticker = document.getElementById("sticker-modal");
let modalImg = document.getElementById("modal-img");
let successMessage = document.getElementById("successMessage")
let arrStickers = ["1.png","2.png","3.png","4.png"]

function getRandomArrayElement(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}


let closeModal = () =>{
    modalSticker.classList.toggle('active')
};

let resetModal = () =>{
    if ( modalSticker.matches('.active')){
        modalSticker.classList.toggle('active')
    }
    console.log("../sticker/" + getRandomArrayElement(arrStickers))
    modalImg.src = "../sticker/" + getRandomArrayElement(arrStickers)

};
// stickerBtn.addEventListener("click", switchModal);
stickerBtnMain.addEventListener("click", resetModal)
stickerBtnClose.addEventListener("click", closeModal)

const copyPngImageButton = document.querySelector('#copyPng')


copyPngImageButton.addEventListener('click', async () => {
  try {
    const pngImageSource = modalImg.getAttribute('src')
    await CopyImageClipboard.copyImageToClipboard(pngImageSource)
    successMessage.style.display = "block"
    setTimeout(()=> successMessage.style.display = "", 2000)
  } catch(e) {
    alert(`Error: ${e.message}`)
  }
})