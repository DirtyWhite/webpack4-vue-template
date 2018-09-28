///<reference path="../../typings/index.d.ts"/>

'use strict'
import chalk from 'chalk';
import * as webpack from 'webpack'
import prodConfig from './webpack.prod.config'
import { spinner } from './util';
function task() {
    spinner.start();
    webpack(prodConfig, function (err, stats) {

        if (err) throw err
        process.stdout.write('\n\n' + stats.toString({
            colors: true,
            modules: false,
            version: false,
            children: false,
            chunks: false,
            chunkModules: false,
            entrypoints: false,
            hash: false,
            timings: false,
        }) + '\n\n')

        if (stats.hasErrors()) {
            console.log(chalk.red('  构建失败.\n'))
            process.exit(1)
        }

        console.log(chalk.cyan('  构建完成.\n'))
        spinner.stop();
    })
}
task();
