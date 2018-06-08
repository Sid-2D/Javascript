const scissors = require('scissors'),
	  fs = require('fs')

let one = scissors('/link/to/file.pdf'),
	two = scissors('/link/to/file.pdf'),
	three = scissors('/link/to/file.pdf'),
	four = scissors('/link/to/file.pdf'),
	five = scissors('/link/to/file.pdf'),
	six = scissors('/link/to/file.pdf'),
	seven = scissors('/link/to/file.pdf')

scissors.join(one, two, three, four, five, six, seven)
		.pdfStream()
		.pipe(fs.createWriteStream('/link/to/complete-file.pdf'))
		.on('finish', () => {
		  console.log('Done.')
		 })
		.on('error', err => {
		  console.log(err)
		 })