var promise = require('q')

var obj = {
	value: 3
}

var globalValues = {}

function callMe(counter) {
	if (this.value === counter) {
		throw Error('Error occured ' + counter)
	} else {
		return this.value
	}
}

var callMeArray = []
for (var i = 0; i <= 10; i++) {
	callMeArray[i] = callMe.bind(obj, i)
}

function promisify() {
	var defered = promise.defer()
	console.log('At 1')
	callMeArray.forEach((fn, i) => {
		try {
			globalValues[i] = fn()
		} catch (e) {
			console.log(e)
		}
	})
	console.log('At 2')
	defered.resolve('Successful')
	return defered.promise
}

var result = promisify()

console.log(result)

console.log(globalValues)