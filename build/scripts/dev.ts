///<reference path="../../typings/index.d.ts"/>
'use strict'
import * as webpack from 'webpack'
import devConfig from './webpack.dev.config';
const devServer = require('webpack-dev-server');

const config = {
    publicPath: '',
    open: true,
    openPage: '/index.html',
    stats: "minimal",
    hot: true,
    inline: true,
    hotOnly: true,
    historyApiFallback: true
}

function task() {
    devServer.addDevServerEntrypoints(devConfig, config);
    const compiler = webpack(devConfig)
    const server = new devServer(compiler, config);
    server.listen(7070, '0.0.0.0');
}
task();