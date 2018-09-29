__webpack_public_path__ = window["__webpack_public_path__"]

import Vue from 'vue'
import router from '@/router/index'
import store from '@/store'
import index from './index.vue'
import mixin from '@/mixin';
Vue.mixin(mixin);
new Vue({
    router,
    store,
    render: h => h(index),
}).$mount('#app')