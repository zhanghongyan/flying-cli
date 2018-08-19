#!/usr/bin/env node --harmony

/**
 * @file index.js
 * @author tifa(zhanghongyan_bd@gmail.com)
 *
 * @since 2017/9/19
 */

/* global process */

'use strict';

process.env.NODE_PATH = __dirname + '/../node_modules/';

const FS = require('fs');

const PROGRAM = require('commander');
const USER = require('../command/user');

if (!FS.existsSync(USER.flyrc)) {
    USER.createRC();
}

PROGRAM
    .version(require('../package').version );


PROGRAM
    .command('init')
    .option('-u, --uri <string>', 'icode Uri')
    .option('-p, --path <string>', 'Your project icode patch `/baidu/${path}`')
    .description('Generate a new MIS project')
    .alias('i')
    .action(() => {
        require('../command/init')();
    });
 