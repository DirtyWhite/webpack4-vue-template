__webpack_public_path__ = window["__webpack_public_path__"]

import Vue from 'vue';
import VueRouter from 'vue-router'
import root from '../module/base.vue'
console.log(Vue)
console.log(VueRouter)
new Vue({
    render: h => h(root)
}).$mount('#app')