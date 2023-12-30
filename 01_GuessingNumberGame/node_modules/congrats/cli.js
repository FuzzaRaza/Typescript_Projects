#!/usr/bin/env node
'use strict';
var meow = require('meow');
var congrats = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ congrats',
		'  great job',
		'',
		'  $ congrats --all',
		'  great job',
		'  kudos',
		'  ...',
		'',
		'Options',
		'  --all  Get all the phrases instead of a random phrase'
	]
});

console.log(cli.flags.all ? congrats.phrases.join('\n') : congrats());
