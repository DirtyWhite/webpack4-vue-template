///<reference path="../../typings/index.d.ts"/>
'use strict'
import * as webpack from 'webpack'
import devConfig from './webpack.dev.config';
const devServer = require('webpack-dev-server');
const opn = require('opn');


const options = {
    publicPath: '',
    openPage: 'index.html',
    stats: "minimal",
    port: 7070,
    host: '0.0.0.0',
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