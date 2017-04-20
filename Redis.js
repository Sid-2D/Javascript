var redis = require('redis'),
	client = redis.createClient();

client.on('error', err => console.log('Error', err));
client.set('user:name', 'Siddd', (err, reply) => {
	console.log(reply);
});
client.get('user:name', (err, reply) => {
	console.log('Reply:', reply);
	client.quit();
});