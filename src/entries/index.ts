__webpack_public_path__ = window["__webpack_public_path__"]

import Vue from 'vue';
import root from '../module/base.vue'


console.log(Vue)
console.log(window['Vuex'])
console.log(window['VueRouter'])
new Vue({
    render: h => h(root)
}).$mount('#app')