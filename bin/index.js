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

PROGRAM
    .command('create')
    .option('-t, --type <string>', 'create')
    .description('Generate a new `fly` unit [component]')
    .alias('c')
    .action(() => {
        require('../command/create')();
    });

PROGRAM
    .command('config')
    .option('-e, --email <string>', 'email prefix')
    .option('-a, --author <string>', 'author name')
    .option('-N, --pName <string>', 'project name(`local work space` or `git dir`)')
    .option('-I, --pId <string>', 'project id')
    .option('-l, --list [boolean]', 'list config')
    .description('Generate fin user config')
    .alias('C')
    .action(() => {
        require('../command/config')();
    });

PROGRAM.parse(process.argv);

if (!PROGRAM.args.length) {
    PROGRAM.help();
}
 