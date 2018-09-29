
import {
    Component,
    Vue,
} from "vue-property-decorator";
import state from './store/state'

declare module 'vue/types/vue' {
    interface Vue {
        $state: state
    }
}

@Component({})
export default class globalMixin extends Vue {

    get $state() {
        return this.$store.state
    }
}