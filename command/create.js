/**
 * @file index.js
 * @author tifa(zhanghongyan_bd@gmail.com)
 *
 * @since 2017/10/7
 */

'use strict';

require('console.table');

const PATH = require('path');

const STRING = require('string');
const PROGRAM = require('commander');
const CO = require('co');
const PROMPT = require('co-prompt');

const LOG = require('../util/log');

const CREATE = require('./create/index');

const GET_ENV = require('../util/getEnv');


const ACTION = {
    component(option) {
        console.log(123)
        CREATE('component', option);

        LOG('Generation completed!', 'success');
    }
};

const CREATE_TYPE = 'single';
const OVERWRITE = false;

module.exports = () => {
    CO(function *() {
        let {type, title = '', extra = 'page'} = PROGRAM.args[0];

        if (!type) {
            LOG(` The \`${type}\` does not support!`);
        }

        if (type in ACTION) {
            let name = yield PROMPT(`Create ${type} name: `);

            if (!name) {
                LOG(`The type \`${type}\` name is required!`);
            }

            let alias = STRING(name).camelize().s;

            const ENV = GET_ENV(type, name) || {};

            try {
                ACTION[type]({
                    ENV,
                    overwrite: OVERWRITE,
                    createType: CREATE_TYPE,
                    type, name, title, alias, extra
                });
            }
            catch (e) {
                 LOG(`${e}`);
            }
        }
        else {
            LOG(`The type \`${type}\` does not support!`);
        }
    });
};
