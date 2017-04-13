var p1 = new Promise((resolve, reject) => { 
	setTimeout(() => {
		console.log('At p1');
		resolve('one');
	}, 000); 
});

var p2 = new Promise((resolve, reject) => { 
	setTimeout(() => {
		console.log('At p2');
		resolve	('two');
	}, 000); 
});

var p3 = new Promise((resolve, reject) => {
	// throw Error("Errrrr");
	setTimeout(() => {
		console.log('At p3');
		resolve('three');
	}, 000);
});

var p4 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('At p4');
		resolve('four');
	}, 000);
});

var p5 = new Promise((resolve, reject) => {
	console.log('At p5');
	reject('five');
});

Promise.all([p1, p2, p3, p4, p5])
.then(values => {
	console.log('At all success:');
	console.log(values);
})
.then(() => {
	console.log('At last then');
})
.catch(err => {
	console.log('At all catch:');
	console.log(err.message || err);	
});