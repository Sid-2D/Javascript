var synaptic = require('synaptic');
var network = new synaptic.Architect.Perceptron(2, 3, 1);
var trainer = new synaptic.Trainer(network);
var trainingSet = [
	{
		input: [0, 0],
		output: [0]
	},
	{
		input: [0, 1],
		output: [1]
	},
	{
		input: [1, 0],
		output: [1]
	},
	{
		input: [1, 1],
		output: [0]
	}
];

trainer.train(trainingSet, {
	iterations: 100000,
	error: .000001,
	rate: 0.1
});

(function validate() {
	outputs = [];
	outputs.push({
		input: '0 0',
		output: network.activate([0,0])[0].toFixed(0),
		target: 0
	});
	outputs.push({
		input: '0 1',
		output: network.activate([0,1])[0].toFixed(0),
		target: 1
	});
	outputs.push({
		input: '1 0',
		output: network.activate([1,0])[0].toFixed(0),
		target: 1
	});
	outputs.push({
		input: '1 1',
		output: network.activate([1,1])[0].toFixed(0),
		target: 0
	});
	console.log(JSON.stringify(outputs, null, 2));
})();