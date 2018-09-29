import Vue, { AsyncComponent } from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/index.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/home',
            component: Home
        }
    ]
})