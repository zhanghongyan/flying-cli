/**
 * @file index.js
 * @author tifa(zhanghongyan_bd@gmail.com)
 *
 * @since 2017/9/29
 */

'use strict';

const PATH = require('path');

const EXEC = require('child_process').exec;

const PROGRAM = require('commander');
const CO = require('co');
const PROMPT = require('co-prompt');

const PROGRESS = require('../util/progress')();

const LOG = require('../util/log');

const USER = require('./user');



