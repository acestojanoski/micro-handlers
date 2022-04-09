const http = require('http')
const test = require('ava')
const testListen = require('test-listen')
const sut = require('.')

test('Should throw a TypeError if no handlers object is provided', (t) => {
	const error = t.throws(
		() => {
			sut()
		},
		{ instanceOf: TypeError }
	)

	t.is(error.message, 'You must supply a handlers object to `micro-handlers`.')
})

test('Should return `Method Not Allowed` if there is no handler for the requested method', async (t) => {
	const handler = sut({
		POST: (_, res) => {
			res.end()
		},
	})

	const server = http.createServer(handler)
	const url = await testListen(server)

	const fetch = await import('node-fetch').then((mod) => mod.default)
	const response = await fetch(url)
	const data = await response.text()
	t.is(data, 'Method Not Allowed')
	t.is(response.status, 405)
})

test('Should handle the defined handlers', async (t) => {
	const handler = sut({
		GET: (_, res) => {
			res.end('get')
		},
		POST: (_, res) => {
			res.end('post')
		},
	})

	const server = http.createServer(handler)
	const url = await testListen(server)

	const fetch = await import('node-fetch').then((mod) => mod.default)

	const getData = await fetch(url).then((res) => res.text())
	const postData = await fetch(url, { method: 'POST' }).then((res) => res.text())

	t.is(getData, 'get')
	t.is(postData, 'post')
})
