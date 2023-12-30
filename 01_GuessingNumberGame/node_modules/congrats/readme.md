# Congrats

> Get congratulatory phrases, straight to your computer, for FREE!

![congrats npm](http://i.giphy.com/WPJDGY9K5AVa0.gif)

This is largely based on the [superb](https://www.npmjs.com/package/superb) library from the prolific @sindresorhus. The phrase list itself is just a [JSON file](phrases.json) and can be used wherever you'd like (via cli or in your app). There are currently ~50 phrases. Create a PR and add some more!


## Install

```
$ npm install --save congrats
```


## Usage

```js
var congrats = require('congrats');

congrats();
//=> you did it

congrats();
//=> great job

congrats.phrases;
// ['congrats', 'well done', ...]
```


## API

### congrats()

Type: `string`

Random [congratulatory phrases](phrases.json).

### congrats.phrases

Type: `array`

All the phrases.


## CLI

```
$ npm install --global congrats
```

```
$ congrats --help

  Examples
    $ congrats
    legendary

    $ congrats --all
    ace
    amazing
    ...

  Options
    --all  Get all the phrases instead of a random word
```


## Related Modules

- [cat-names](https://github.com/sindresorhus/superb) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [yes-no-phrases](https://github.com/sindresorhus/yes-no-phrases) - Get yes/no like phrases


## License

MIT © [Mark Thomas](https://charityware.github.io)
