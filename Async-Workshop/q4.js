var async = require('async'),
	http = require('http')

async.map([process.argv[2], process.argv[3]], (url, done) => {
	var body = ''
	http.get(url, res => {
		res.on('data', chunk => {
			body += chunk
		})
		res.on('end', () => done(null, body))
	}).on('error', err => done(err))
}, (err, results) => {
	if (err) return console.error(err)
		console.log(results)
})


/*
 var http = require('http')
      , async = require('async');
    
    async.map(process.argv.slice(2), function(url, done){
      var body = '';
      http.get(url, function(res){
        res.on('data', function(chunk){
          body += chunk.toString();
        });
    
        res.on('end', function(){
         return done(null, body);
        });
      });
    },
    function done(err, results){
      if (err) return console.log(err);
      // results is an array of the response bodies in the same order
      console.log(results);
    });
*/