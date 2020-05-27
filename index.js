const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser())

app.post('/path', (req, res) => {
	console.log(req.body)

	if (req.body.invalid) {
		res.status(400)
		res.send({
			status: 400,
			message: '不正なリクエストです',
			details: 'this is details message',
		})

		return
	}
	res.send({
		status: 200,
		message: 'OK',
	})
})

const port = 4000
app.listen(port, () => console.log(`listen on port ${port}!`))
