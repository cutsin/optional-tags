# optional-tags

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

## Exports optional html tags with some levels, Constrainted by [w3.org#optional-tags](http://www.w3.org/html/wg/drafts/html/master/syntax.html#optional-tags).

For some reason, we can omit element's start tag or end tag like this (comply with a standard):

```html
<!doctype html><html lang="en"><link><base><body><ul><li>say hi<p>it's all we need</ul>
```

## Why omit the tags? (unfinished drafts):
- Optimize transfer: 
- Improve performance: 
- Make easier to handle [white-space processing model](http://www.w3.org/TR/2013/WD-css-text-3-20131010/#white-space-rules)
- Doesn't affect the performance of the browser

## Example

```js
var optionalTags = require('optional-tags')

// recommend
var safeTags = new optionalTags()
console.log( 'safe start tags: ', safeTags.starts.join(', ') )
console.log( 'safe end tags: ', safeTags.join(', ') )

// recommend, but make sure you don't use any comments or space character
var radicalTags = new optionalTags('radical')
console.log( 'open start tags: ', radicalTags.starts.join(', ') )
console.log( 'open end tags: ', radicalTags.ends.join(', ') )
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/optional-tags.svg?style=flat
[npm-url]: https://npmjs.org/package/optional-tags
[travis-image]: https://img.shields.io/travis/jshttp/optional-tags.svg?style=flat
[travis-url]: https://travis-ci.org/jshttp/optional-tags
[coveralls-image]: https://img.shields.io/coveralls/jshttp/optional-tags.svg?style=flat
[coveralls-url]: https://coveralls.io/r/jshttp/optional-tags
[downloads-image]: https://img.shields.io/npm/dm/optional-tags.svg?style=flat
[downloads-url]: https://npmjs.org/package/optional-tags
