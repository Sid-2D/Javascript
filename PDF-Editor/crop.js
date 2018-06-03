const scissors = require('scissors'),
	  fs = require('fs')

var pdf = scissors('app.pdf')
		  .pages(0)
		  .crop(0, 0, 0, 100)
		  .pdfStream()
		  .pipe(fs.createWriteStream('out.pdf'))
		  .on('finish', () => {
		  	console.log('Done')
		  }).on('error', err => {
		  	console.log(err)
		  })