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

@Component({})
export default class Base extends Vue {
    render(h) {
        return <div class='root'>
            <img src={require("../images/10月.jpg")} alt="" />
        </div>
    }
}
</script>

<style lang='scss' scoped>
    .root {
      font-size: 28px;
      &:active {
        color: 48px;
      }
    }
</style>
