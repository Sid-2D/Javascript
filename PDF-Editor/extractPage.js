const scissors = require('scissors'),
	  fs = require('fs')

var pdf = scissors('7.pdf')
		  .pages(11)
		  .pdfStream()
		  .pipe(fs.createWriteStream('7th-Sem.pdf'))
		  .on('finish', () => {
		  	console.log('Done')
		  }).on('error', err => {
		  	console.log(err)
		  })