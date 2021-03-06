process.env.NODE_ENV = 'production'

import * as merge from 'webpack-merge'
import * as webpack from 'webpack'
import baseConfig from './webpack.config';
import util from './util';
import config from '../config';
import MiniCssExtractPlugin = require('mini-css-extract-plugin')
import ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
import CopyWebpackPlugin = require('copy-webpack-plugin');
import OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
import cleanWebpackPlugin = require('clean-webpack-plugin');
const { root, getEntryByGlob, getTemplates, assetsPath } = util;
const entry = getEntryByGlob(config.entry);

export default merge(baseConfig, {
    mode: 'production',
    output: {
        publicPath: './',
        filename: assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: assetsPath('js/[id].[chunkhash].js')
    },
    devtool: false,
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
    stats: 'none',
    plugins: [
        new cleanWebpackPlugin(baseConfig.output.path, {
            root: root(''),
            allowExternal: true,
            verbose: false
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"'
            },
            'process.env.VUE_ENV': '"client"'
        }),
        new MiniCssExtractPlugin({
            filename: assetsPath('css/[name].[contenthash].css')
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new CopyWebpackPlugin([{
            from: root('src/static'),
            to: assetsPath('assets'),
            ignore: ['.*']
        }]),
        ...getTemplates(entry, {
            title: config.title,
            publicPath: "./",
            // publicPath: `<%= cdn %>`,
            slot: `<div id=app></div>`
        }),
        new ScriptExtHtmlWebpackPlugin({
            inline: /runtimechunk..*.js$/
        }),
        config.showAnalyze ? (new (<any>require('webpack-bundle-analyzer')).BundleAnalyzerPlugin)({
            analyzerPort: 9090
        }) : e => { }
    ],
})