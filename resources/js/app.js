require('./bootstrap');

import Vue from 'vue'
import App from './vue/app'
// 1. importujeme
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare,faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare,faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)
//2. přidáme ikony


const app = new Vue ({
    el: '#app',
    components: { App }
});
//2. vytvoříme spojení s app.vue souborem
