///<reference path="../typings/index.d.ts"/>
'use strict'
import * as webpack from 'webpack'
import devConfig from './webpack.dev.config';
import devServer = require('webpack-dev-server');
import opn = require('opn');

const options = {
    publicPath: '',
    openPage: 'index.html',
    stats: "none",
    overlay: true,
    port: 7070,
    quiet: true,
    host: '0.0.0.0',
    noInfo: true,
    inline: true,
    hotOnly: true,
    historyApiFallback: true
}

function task() {
    devServer.addDevServerEntrypoints(devConfig, options);
    const compiler = webpack(devConfig)
    const server = new devServer(compiler, options);
    server.listen(options.port, options.host);
    opn(`http://localhost:${options.port}/${options.openPage}`)
}
task();