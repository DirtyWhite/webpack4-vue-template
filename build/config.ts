export default new class config {

    /**活动名 */
    name = ''

    /**活动平台 */
    platform = ''

    /**活动年份 */
    year = ''

    /**活动标题 */
    title = '活动标题'

    /**拼接项目目录 */
    projectDir = `${this.year}/${this.platform}/${this.name}`;

    /**输出目录相对位置 */
    relativePath = '../../../../'

    /**是否使用服务端渲染 */
    isSsr = false

    /**入口，根据需求更改 */
    entry = this.isSsr ? 'src/entries/**/entry-client.{js,ts}' : 'src/entries/**/*.{js,ts}'

    /**静态资源输出目录 */
    outputDir = 'release'

    /**模板输出目录 */
    // templateOutputDir = root(this.projectDir, relativePath + 'release/')

    /**ssr编译的server-entry入口 */
    serverEntry = 'src/entries/**/server-client.{js,ts}'

    /**构建的静态资源存放的子目录 */
    subDirectory = 'static'

}