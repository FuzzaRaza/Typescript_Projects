'use strict';
var phrases = require('./phrases.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = uniqueRandomArray(phrases);
module.exports.phrases = phrases;
