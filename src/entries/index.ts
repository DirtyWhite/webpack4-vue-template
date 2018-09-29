__webpack_public_path__ = window["__webpack_public_path__"]

import Vue from 'vue'
import index from './index'
new Vue({
    render: h => h(index)
}).$mount('#app')