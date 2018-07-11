const queue = require('kue').createQueue()

queue.process('my-job', 1, (job, done) => {
	console.log('worker: processing my-job', job.data.id)

	setTimeout(() => {
		console.log('worker: done my-job', job.data.id)
		done()
	}, Math.random() * 10000)
})
