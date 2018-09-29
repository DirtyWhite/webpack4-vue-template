///<reference path="../typings/index.d.ts"/>

export default new class buildConfig {
    title= ""
    name = ""
    platform = ""
    year = ""
    /**输出目录相对位置 */
    relativePath = '../../../../'

    /**是否在编译完成后展现各模块的编译情况 */
    showAnalyze = false

    /**入口，根据需求更改 */
    entry = 'src/entries/**/*.{js,ts}'

    /**静态资源输出目录 */
    outputDir = 'release'

    /**模板输出目录 */
    // templateOutputDir = root(this.projectDir, relativePath + 'release/')

    /**构建的静态资源存放的子目录 */
    subDirectory = 'static'

    

}