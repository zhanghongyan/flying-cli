/**
 * @file index.js
 * @author tifa(zhanghongyan_bd@gmail.com)
 *
 * @since 2017/10/11
 */

'use strict';

const FS = require('fs');
const PATH = require('path');

const FSE = require('fs-extra');
const STRING = require('string');

const ETPL = require('etpl');

const LOG = require('../../util/log');
const USER = require('../user').getRcData();

const UNIT_TYPE = require('./config');

ETPL.config( {
    variableOpen: '<%',
    variableClose: '%>'
});

let readFile = (type, fileName) => {
    let path = PATH.join(__dirname, '/../../template/', type);

    let file = FS.readFileSync(`${path}/${fileName}`, {encoding: 'utf8', flag: 'r'})
        .toString();

    return file;
};

module.exports = (type, data, targetDir = '') => {
    let fileType = UNIT_TYPE(type);
    let path = targetDir || process.cwd();

    path = PATH.join(path, '/', data.name);

    if (FS.existsSync(path) && data.overwrite === false) {

        LOG(`${STRING(type).capitalize().s} \`${data.name}\` is already exist!`, 'red');
        return false;
    }

    try {
        FSE.ensureDirSync(path);
    }
    catch (error) {
        LOG(`Directory \`${error.path}\` is already exist!`, 'red');
    }

    data = Object.assign({}, data, USER);

    fileType.forEach(item => {
        let fileName = item[0];
        let file = readFile(type, item[0]);
        let render = ETPL.compile(file);
        let text = render(data);
        let extension = item[1];

        if (extension) {
            fileName = `${data.name}.${extension}`;
        }

        else if (PATH.extname(fileName)) {
            fileName = `${item}`;
        }

        else {
            fileName = `${data.name}.${item}`;
        }

        try {
            FS.writeFileSync(
                PATH.join(path, '/', fileName),
                text, {encoding: 'utf8', flag: 'w'}
            );
        }
        catch (error) {
            LOG(`Directory \`${error.path}\` is already exist!`, 'fail');
        }
    });
};
