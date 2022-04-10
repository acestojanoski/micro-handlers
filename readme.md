# micro-handlers

> Different handlers based on HTTP method for Micro

![CI](https://github.com/acestojanoski/micro-handlers/actions/workflows/main.yml/badge.svg?branch=develop)
[![Downloads](https://img.shields.io/npm/dm/micro-handlers.svg)](https://npmjs.com/micro-handlers)
[![Install size](https://packagephobia.com/badge?p=micro-handlers)](https://packagephobia.com/result?p=micro-handlers)

## Install

```sh
npm install micro-handlers
```

or

```sh
yarn add micro-handlers
```

## Usage

```js
const microHandlers = require('micro-handlers')

module.exports = microHandlers({
	GET: (req, res) => {
		res.end('Hello from GET')
	},
	POST: (req, res) => {
		res.end('Hello from POST')
	},
})
```

## API

### microHandlers(handlers)

#### handlers

Type: `Record<Method, Handler>`

##### Method

Type: `GET | POST | PUT | PATCH | DELETE`

##### Handler

Type: `Function`

## License

[MIT](./license)

## Related

- [`allowed-methods`](https://github.com/acestojanoski/allowed-methods)
