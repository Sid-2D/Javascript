var readline = require('readline')

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

function interact() {
	rl.question('Do you want to quit?', answer => {
		if (answer === "Yes") {
			rl.close()
		} else {
			interact()
		}
	})
}

interact()