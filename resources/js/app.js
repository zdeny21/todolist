require('./bootstrap');

import Vue from 'vue'
import App from './vue/app'
// 1. importujeme

const app = new Vue ({
    el: '#app',
    components: { App }
});
//2. vytvoříme spojení s app.vue souborem
