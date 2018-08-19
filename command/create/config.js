/**
 * @file index.js
 * @author tifa(zhanghongyan_bd@gmail.com)
 *
 * @since 2017/10/11
 */

'use strict';

module.exports = function(type, extra) {
    let option = extra || {};

    return {
        component: [
            ['jsx'],
            ['README.md']
        ]
    }[type]
};
