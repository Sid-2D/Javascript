var async = require('async'),
	http = require('http')

async.each([process.argv[2], process.argv[3]], (url, done) => {
	http.get(url, res => {
		res.on('data', chunk => {})
		res.on('end', () => done())
	}).on('error', err => {
		done(err)
	})
}, (err) => {
	if (err) console.error(err)
})

/*
 var http = require('http')
      , async = require('async');
    
    async.each(process.argv.slice(2), function(item, done){
      http.get(item, function(res){
        res.on('data', function(chunk){
        });
    
        res.on('end', function(){
          done(null);
        });
      }).on('error', function(err){
        done(err);
      });
    },
    function(err){
      if(err) console.error(err);
    });
*/