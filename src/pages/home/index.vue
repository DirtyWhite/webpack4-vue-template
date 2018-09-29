<script lang='tsx'>
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch
} from "vue-property-decorator";
import { State, Mutation, Action } from "vuex-class";
export default {
    name: 'home',
    data(){
        return {
            title: 'Home'
        }
    }
}
</script>

<style lang='scss' scoped>

</style>
