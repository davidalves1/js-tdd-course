# Github Wrapper

A wrapper to work with the [Github Web API](https://developer.github.com/v3/).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Github Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```sh
$ npm install github-wrapper --save
```

## How to use

### ES6

```js
// to import a specific method
import { method } from 'github-wrapper';

// to import everything
import * as githubWrapper from 'github-wrapper';
```

### CommonJS

```js
var githubWrapper = require('github-wrapper');
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="github-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="github-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `githubWrapper`. Follow an example:

```js
const albums = githubWrapper.searchAlbums('Choosen Artist');
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors
|  [David Alves](https://github.com/davidalves1/)   |

See also the list of [contributors](https://github.com/davidalves1/js-tdd-course/tree/master/github-wrapper) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
