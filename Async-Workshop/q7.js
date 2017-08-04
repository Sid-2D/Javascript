var async = require('async'),
	http = require('http')

var count = 0
var body = ''
async.whilst(() => {
		return body !== 'meerkat'
	}, callback => {
	count++
	body = ''
	http.get(process.argv[2], res => {
		res.on('data', chunk => {
			body += chunk
		})
		res.on('end', () => callback(null, count))
	}).on('error', err => callback(err))
}, (err, n) => {
	if (err) return console.log(err)
	console.log(n)
})

/*
    var http = require('http')
      , async = require('async');
    
    var requestBody = '';
    
    var count = 0;
    
    async.whilst(
      function() {
        return !/meerkat/.test(requestBody.trim());
      },
    
      function(done){
        var body = '';
        http.get(process.argv[2], function(res){
          res.on('data', function(chunk){
            body += chunk.toString();
          });
    
          res.on('end', function(){
            ++count;
            requestBody = body;
            done();
          });
        }).on('error', done);
      },
    
      function(err){
        if (err) return console.log(err);
        console.log(count);
      }
    )
*/