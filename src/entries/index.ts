__webpack_public_path__ = window["__webpack_public_path__"]

import Vue from 'vue'
import root from '../module/base.vue'
import yell from '../module/yell'
console.log(Vue)
new Vue({
    render: h => h(root)
}).$mount('#app')