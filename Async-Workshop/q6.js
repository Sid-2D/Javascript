var async = require('async'),
	http = require('http')

async.reduce(['one', 'two', 'three'], 0, (memo, item, callback) => {
	var body = ''
	http.get(process.argv[2] + '/?number=' + item, res => {
		res.on('data', chunk => {
			body += chunk
		})
		res.on('end', () => callback(null, memo + Number(body)))
	}).on('error', err => callback(err))
}, (err, results) => {
	if (err) return console.error(err)
	console.log(results)
})


/*
var http = require('http')
  , async = require('async');

async.reduce(['one', 'two', 'three'], 0, function(memo, item, done){
  var body = '';

  http.get(process.argv[2] + "?number=" + item, function(res){
    res.on('data', function(chunk){
      body += chunk.toString();
    });

    res.on('end', function(){
      done(null, memo + Number(body));
    });
  }).on('error', done);

}, function done(err, result){
  if (err) return console.log(err);
  console.log(result);
    });
*/