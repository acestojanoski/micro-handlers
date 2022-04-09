'use strict'
const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']

function microHandlers(handlers) {
	if (!(handlers instanceof Object)) {
		throw new TypeError('You must supply a handlers object to `micro-handlers`.')
	}

	return (req, res) => {
		const handler = methods.includes(req.method) ? handlers[req.method] : null

		if (handler) {
			return handler(req, res)
		}

		res.setHeader('allow', Object.keys(handlers).join(', '))
		res.statusCode = 405
		res.end('Method Not Allowed', 'utf8')
	}
}

module.exports = microHandlers
