var http = require('http'),
	async = require('async'),
	fs = require('fs')

async.waterfall([
	cb => {
		var body = ''
		fs.readFile(process.argv[2], 'utf-8', (err, contents) => {
			if (err) {
				return cb(err)
			}
			cb(null, contents)
		})
	},

	(contents, cb) => {
		var body = ''
		http.get(contents, res => {
			res.on('data', chunk => {
				body += chunk
			})
			res.on('end', () => {
				cb(null, body)
			})
		}).on('error', err => {
			cb(err)
		})
	}
], (err, result) => {
	console.log(result)
	if (err) return console.error(err)
})

/*

 var fs = require('fs')
      , http = require('http')
      , async = require('async');
    
    async.waterfall([
      function(done){
        fs.readFile(process.argv[2], function(err, data){
          if (err) return done(err);
          done(null, data)
        });
      },
    
      function(data, done){
        var body = '';
        http.get(data.toString().trimRight(), function(res){
          res.on('data', function(chunk){
            body += chunk.toString();
          });
    
          res.on('end', function(chunk){
            done(null, body);
          });
        }).on('error', function(e){
          done(e);
        });
      }
    ], function done(err, result){
      if (err) return console.error(err);
      console.log(result);
    });


*/