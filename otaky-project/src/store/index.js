import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            title: "By Otaky",
            stickerArray: ["1.png", "2.png", "3.png", "4.png"],
        }
    }
  })

export default store