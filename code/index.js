'use strict';

var uuid = require('uuid');

exports.handler = (event, context, callback) => {
    console.log('hello world' + uuid.v4());
    callback(null, 'hello world');
}