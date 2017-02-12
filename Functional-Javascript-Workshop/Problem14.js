function repeat(operation, num) {
  	if (num <= 0) {
  		return;
  	}
	operation();
	if (num % 10) {		
	  	setTimeout(function () {
	  		return repeat(operation, --num);	
	  	}, 0);
	} else {
		return repeat(operation, --num);
	}
}

module.exports = repeat