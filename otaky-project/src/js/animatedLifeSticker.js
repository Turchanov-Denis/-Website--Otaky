export default function LifeSticker() {
    let liveSticker = document.getElementById("liveSticker");
    let bodySticker = document.querySelector(".vending-stickers__decoration-sticker");
    let handSticker = document.querySelector(".vending-stickers__decoration-sticker-hands");
    liveSticker.addEventListener("mouseover", () => {
        console.log("re");
        bodySticker.classList.add("vending-stickers__decoration-sticker-animation");
        handSticker.classList.add(
            "vending-stickers__decoration-sticker-hands-animation"
        );
    });
} 