# micro-handlers

> Different handlers based on HTTP method for Micro

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
import microHandlers from 'micro-handlers'

export default microHandlers({
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
