import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            title: "By Otaky",
            stickerArray: ["1.png", "2.png", "3.png", "4.png"],
            article: [
                { id: 0, title: "Otaky our development game", sublabel: "Development game", pageImg: "otaky_img.png", previewImage: "2.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quae? Illum temporibus, perspiciatis vel architecto aliquam ea vero pariatur alias tempora! Sunt quam dolor vero. Commodi praesentium officiis harum illum!" },
                { id: 1, title: "New Sticker", sublabel: "Review", pageImg: "Sticker_food.png", previewImage: "1.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quae? Illum temporibus, perspiciatis vel architecto aliquam ea vero pariatur alias tempora! Sunt quam dolor vero. Commodi praesentium officiis harum illum!" }],
            currentArticleId: 0,
        }
    },
    mutations: {
        changeArticleId(state, id) {
            state.currentArticleId = id
            
        }
    },
    actions: {
        changeArticleId(context, id) {
            context.commit('changeArticleId',id)
            
        }
    }
})

export default store