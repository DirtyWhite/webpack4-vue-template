
/**
 * 混合，组件公共逻辑可以写在这里，默认混入state
 */
import {
    Component,
    Vue
} from "vue-property-decorator";

import state from './store/state'
declare module 'vue/types/vue' {
    interface Vue {
        $state: typeof state
    }
}

@Component
export default class globalMixin extends Vue {

    get $state() {
        return this.$store.state
    }
}