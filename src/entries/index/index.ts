__webpack_public_path__ = window["__webpack_public_path__"]

import Vue from 'vue'
import router from '../../router'
import store from '../../store'
import index from './index.vue'

new Vue({
    router,
    store,
    render: h => h(index),
}).$mount('#app')