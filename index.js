const express = require('express')
// const bodyParser = require('body-parser')

const app = express()
app.use(function (req, res, next) {
	var data = ''
	req.on('data', function (chunk) {
		data += chunk
	})
	req.on('end', function () {
		req.rawBody = data
		next()
	})
})

app.post('/path', (req, res) => {
	console.log('headers')
	console.log(req.headers)
	console.log('body')
	console.log(req.rawBody)

	res.send({
		status: 200,
		message: 'OK',
	})
})

const port = 4000
app.listen(port, () => console.log(`listen on port ${port}!`))
