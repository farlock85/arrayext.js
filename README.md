# Array Extensions for TypeScript

Curray adds extra functionality to the native JavaScript Array type without the added overhead of an expensive library.

This package is based on the library [linqts](https://github.com/kutyel/linq.ts).

## Install

Install the Curray package through NPM:

```sh
npm i --save curray
```

Alternatively you can download the package from the Releases page.

This library doesn't have any exported members so you either need to include the appropriate file from `/dist` manually, or add a fake import to your application somewhere to trick your bundler to include it:

```js
import { curray } from 'curray';
...
curray();
```
This function doesn't actually do anything.

### NPM scripts

- `npm t`: Run test suite
- `npm start`: Run `npm run build` in watch mode
- `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `npm run test:prod`: Run linting and generate coverage
- `npm run build`: Generate bundles and typings
- `npm run lint`: Lints code
