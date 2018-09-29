///<reference path="../../typings/index.d.ts"/>
import util from './util'
import * as VueLoaderPlugin from 'vue-loader/lib/plugin'
import config from '../config';
import * as webpack from 'webpack'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { root, isDev, assetsPath, getEntryByGlob } = util;

export default {
    entry: getEntryByGlob(config.entry),
    output: {
        filename: '[name].js',
        path: root(config.outputDir)
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': root('src'),
            'lib': root('lib')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: root('src'),
                loader: "babel-loader"
            },
            {
                test: /\.ts$/,
                include: root('src'),
                loader: "ts-loader"
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsxSuffixTo: [/\.vue$/]
                        }
                    }
                ],
            },
            {
                test: /\.vue$/,
                include: root('src'),
                loader: 'vue-loader',
            },
            {
                test: /\.(css|scss)$/,
                include: root('src'),
                use: [
                    'style-loader',
                    isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 20000,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 20000,
                    name: assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.html$/,
                include: root('src'),
                loader: "mustache-loader"
            },

        ]
    },
    externals: {
        'vue': '(window.Vue.default = window.Vue)',
        'vue-router': '(window.vueRouter.default = window.vueRouter)',
        'vuex': '(window.Vuex.default = window.Vuex)'
    },
    plugins: [
        new VueLoaderPlugin()
    ]

}