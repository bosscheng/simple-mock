'use strict';

/**
 * 监听未捕获异常
 */
process.on('uncaughtException', console.error);
/**
 * 监听未捕获reject
 */
process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
});

// node
const path = require('path');

// koa
const Koa = require('koa');
const Router = require("koa-router");
const favicon = require("koa-favicon");
const bodyParser = require("koa-bodyparser");
const session = require("koa-session");
const logger = require("koa-logger");
const compress = require("koa-compress");
const cors = require("@koa/cors");
const etag = require('koa-etag');
const staticCache = require('koa-static-cache');
const onerror = require('koa-onerror');
const json = require('koa-json');
const jsonp = require('koa-safe-jsonp');
const ejs = require('koa-ejs');

// utils
const _ = require("lodash");

