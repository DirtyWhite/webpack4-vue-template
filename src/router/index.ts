import Vue, { AsyncComponent } from 'vue'
import Router from 'vue-router'
import rootComponent from '../pages/root.vue'
import Home from '../pages/home/index.vue'


Vue.use(Router)

export default new Router({
    mode:'hash'
    routes: [
        {
            path: '/',
            component: Home
        }
    ]
})







