const express = require('express')
const queue = require('kue').createQueue()
const morgan = require('morgan')

const app = express()
app.use(morgan('dev'))


app.get('/', (req, res) => res.json({ping: 'pong'}))

let jobID = 0;
app.post('/jobs', async (req, res) => {
	const id = ++jobID;
	const myJob = await queue.create('my-job', {id}).save()
	return res.json(myJob)	
})

app.listen(3000, (err) => {
	if (!err) console.log('Server is listening on port 3000')
})
