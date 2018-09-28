///<reference path="../../typings/index.d.ts"/>

import { resolve, normalize, basename, dirname, extname, posix } from 'path';
import * as merge from 'webpack-merge'
import config from '../config';
const html = require('html-webpack-plugin')
const glob = require('glob');
const ora = require('ora');

export const spinner = ora({
    text: '正在构建',
    spinner: {
        interval: 40,
        frames: ['⠋ ⠴', '⠙ ⠦', '⠹ ⠧', '⠼ ⠹', '⠴ ⠋', '⠦ ⠙', '⠧ ⠼']
    }
})

let utils = {
    isDev: process.env.NODE_ENV == 'development',
    root(dir: string, ...dirs) {
        return resolve(__dirname, '../../', dir, ...dirs)
    },
    /**
     * 根据glob 生成入口对象
     * @param globPath glob表达式，可以是确切路径
     * @param bool  默认为true 是否以匹配的文件名作为入口名，false的话会取其所在文件夹的命名
     */
    getEntryByGlob(globPath: string, bool = true) {
        let path = utils.root(normalize(globPath))
        let entries = {};
        let isGlob = glob.hasMagic(globPath);
        glob.sync(path).forEach(entry => {
            let dirs = dirname(entry).split('/');
            let leastdir = dirs[dirs.length - 1];
            let fileName = basename(entry);
            let ext = extname(entry)
            let name = fileName.replace(ext, '');
            if (!isGlob || bool) {
                entries[name] = entry;
            } else {
                entries[leastdir] = entry;
            }
        });
        return entries;
    },
    getTemplates(entry, config?) {
        let templates = [];
        for (let i in entry) {
            let name = i;
            templates.push(
                new html(merge({
                    template: utils.root('src/template.html'),
                    filename: i + '.html',
                    inject: true,
                    minify: false,
                    cache: true,
                    isDev: utils.isDev
                }, config || {}))
            )
        }
        return templates
    },
    assetsPath(_path) {
        const assetsSubDirectory = config.subDirectory
        return posix.join(assetsSubDirectory, _path)
    }
}

export default utils;
