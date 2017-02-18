function *factorial(n) {
	var f = 1;
	for (var i = 1; i <= n; i++) {
		f *= i;
		yield f;
	}
}

for (var n of factorial(5)) {
	console.log(n);
}