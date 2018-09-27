export default new class config {
    
    /**活动名 */
    name = ''

    /**活动平台 */
    platform = ''

    /**活动年份 */
    year = ''

    /**活动标题 */
    title = '活动标题'

    /**是否使用服务端渲染你 */
    isSsr = false

    /**入口，根据需求更改 */
    entry = this.isSsr ? 'src/entries/**/entry-client.{js,ts}' : 'src/entries/**/*.{js,ts}'

    /**ssr编译的server-entry入口 */
    serverEntry = 'src/entries/**/server-client.{js,ts}'

    /**构建的静态资源存放的子目录 */
    subDirectory = 'static'

}