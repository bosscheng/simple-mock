'use strict';
const _ = require('lodash');


module.exports = _.extend(
    {},
    require('../../config/config-base.js'),
    require('./config-log.js'),
    require('./config-server.js'),
    require('./config-mongoDB.js')
);