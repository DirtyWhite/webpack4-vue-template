process.env.NODE_ENV = 'production'


import * as merge from 'webpack-merge'
import baseConfig from './webpack.config';
import util from './util';
import config from '../config';
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const { root, getEntryByGlob, getTemplates, assetsPath } = util;
const entry = getEntryByGlob(config.entry);

export default merge(baseConfig, {
    mode: 'production',
    output: merge(baseConfig.output, {
        publicPath: '',
        filename: assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: assetsPath('js/[id].[chunkhash].js')
    }),
    devServer: {
        contentBase: false,
        host: '0.0.0.0',
        port: '7070',
        stats: 'minimal',
        open: true,
        historyApiFallback: true,
        openPage: '/index.html',
        progress: true,
    },
    optimization: {
        minimize: true,
        nodeEnv: 'production',
        runtimeChunk: {
            name: entrypoint => `runtimechunk~${entrypoint.name}`
        },
        splitChunks: {
            chunks: 'all'
        },
    },

    plugins: [
        ...getTemplates(entry, {
            title: config.title,
            publicPath: `<%= cdn %>`,
            slot: `<div id=app></div>`
        }),
        new MiniCssExtractPlugin({
            filename: assetsPath('css/[name].[contenthash].css')
        }),
        new ScriptExtHtmlWebpackPlugin({
            inline: /runtimechunk..*.js$/
        })
    ],
})