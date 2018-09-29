__webpack_public_path__ = window["__webpack_public_path__"]

import Vue from 'vue'
import router from '@/router/index'
import store from '@/store'
import index from './index.vue'
import test from './test';

new test();

new Vue({
    router,
    store,
    render: h => h(index),
}).$mount('#app')