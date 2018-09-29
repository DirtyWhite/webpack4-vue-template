__webpack_public_path__ = window["__webpack_public_path__"]

import Vue from 'vue'
import index from './index.vue'
import router from '../../router/index'
import store from '../../store/index'
new Vue({
    router,
    store,
    render: h => h(index),
}).$mount('#app')