
/**
 * @file index.js
 * @author tifa(zhanghongyan_bd@gmail.com)
 *
 * @since 2017/10/14
 */

const CHALK = require('chalk');

const FLYING_CLI = [
    '______ _       _                _____ _      _____ ',
    '|  ____| |     (_)              / ____| |    |_   _|',
    '| |__  | |_   _ _ _ __   __ _  | |    | |      | |',  
    '|  __| | | | | | | '_ \ / _` | | |    | |      | |',  
    '| |    | | |_| | | | | | (_| | | |____| |____ _| |',_ 
    '|_|    |_|\__, |_|_| |_|\__, |  \_____|______|_____|',
    '         __/ |         __/ |                        ',
    '        |___/         |___/                         '
];

console.log(CHALK.yellow(`\n Version: ${process.env.npm_package_version}`));

console.log(CHALK.gray(`\n ${FLYING_CLI.join('\n')} \n`));

console.log(CHALK.yellow(`\n fin-cli installed \n`));
