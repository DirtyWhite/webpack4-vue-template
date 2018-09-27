process.env.NODE_ENV = 'development'


import * as merge from 'webpack-merge'
import * as webpack from 'webpack'
import util from './util';
import baseConfig from './webpack.config';
import config from '../config';
const { root, getEntryByGlob, getTemplates } = util;
const entry = getEntryByGlob(config.entry);

export default merge(baseConfig, {
    mode: 'development',
    output: merge(baseConfig.output, {
        publicPath: '/'
    }),
    plugins: [
        ...getTemplates(entry, {
            title: config.title,
            publicPath: '/',
            slot: `<div id=app></div>`
        }),
        new webpack.HotModuleReplacementPlugin({})
    ],

})
