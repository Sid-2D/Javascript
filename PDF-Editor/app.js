const scissors = require('scissors'),
	  fs = require('fs')

var index = [], page1to9 = [], page10to38 = [], page39to99 = [], rest = [] 

for (let i = 1; i <= 12; i++) {
	index.push(i)
}

var pdf = scissors('Sample.pdf')
		  .pages(index)
		  .pdfStream()
		  .pipe(fs.createWriteStream('index.pdf'))
		  .on('finish', () => {
		  	console.log('Done.')
		  })
		  .on('error', err => {
		  	console.log(err)
		  })

for (let i = 1; i < 10; i++) {
	if (i <= 3) {
		page1to9.push(13 + 111 * (i - 1))
	} else if (i <= 9) {
		page1to9.push(331 + 11 * (i - 4))	
	}
}

var pdf = scissors('Sample.pdf')
		  .pages(page1to9)
		  .pdfStream()
		  .pipe(fs.createWriteStream('Page1-9.pdf'))
		  .on('finish', () => {
		  	console.log('Done.')
		  })
		  .on('error', err => {
		  	console.log(err)
		  })

let k = 0
for (let i = 1; i < 30; i++) {
	if (i % 11 === 0) k++
	if (14 + k + 11 * (i - 1) == 235) {
		page10to38.push(14 + k + 1 + 11 * (i - 1))
	} else {
		page10to38.push(14 + k + 11 * (i - 1))
	}
}

var pdf = scissors('Sample.pdf')
		  .pages(page10to38)
		  .pdfStream()
		  .pipe(fs.createWriteStream('Page10-38.pdf'))
		  .on('finish', () => {
		  	console.log('Done.')
		  })
		  .on('error', err => {
		  	console.log(err)
		  })

for (let i = 0; i < 67; i++) {
	if (page1to9.indexOf(330 + i) === -1) {
		page39to99.push(330 + i)
	}
}

var pdf = scissors('Sample.pdf')
		  .pages(page39to99)
		  .pdfStream()
		  .pipe(fs.createWriteStream('Page39-99.pdf'))
		  .on('finish', () => {
		  	console.log('Done.')
		  })
		  .on('error', err => {
		  	console.log(err)
		  })

for (let i = 0; i <= 396; i++) {
	if ((index.indexOf(i) === -1) && (page1to9.indexOf(i) === -1) && (page10to38.indexOf(i) === -1) && (page39to99.indexOf(i) === -1)) {
		rest.push(i)
	}
}

var pdf = scissors('Sample.pdf')
		  .pages(rest.slice(1, 287))
		  .pdfStream()
		  .pipe(fs.createWriteStream('rest.pdf'))
		  .on('finish', () => {
		  	console.log('Done.')
		  })
		  .on('error', err => {
		  	console.log(err)
		  })

setTimeout(() => {
	let pdfA = scissors('index.pdf'), 
		pdfB = scissors('Page1-9.pdf'), 
		pdfC = scissors('Page10-38.pdf'),
		pdfD = scissors('Page39-99.pdf'),
		pdfE = scissors('rest.pdf')

	scissors.join(pdfA, pdfB, pdfC, pdfD, pdfE)
			.pdfStream()
			.pipe(fs.createWriteStream('SPM-Complete.pdf'))
			.on('finish', () => {
			  console.log('Done.')
			 })
			.on('error', err => {
			  console.log(err)
			 })
}, 7000)