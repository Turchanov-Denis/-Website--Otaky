import { createApp } from 'vue'
import App from './App.vue'


createApp(App).mount('#app')

import LifeSticker from './js/animatedLifeSticker'
import subscribe from './js/subscribeForm'

// *animates an object by adding animation classes to it
LifeSticker();
subscribe();