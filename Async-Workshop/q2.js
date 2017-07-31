var async = require('async'),
	http = require('http')

async.series({
	requestOne: done => {
		var body = ''
		http.get(process.argv[2], res => {
			res.on('data', chunk => {
				body += chunk
			})
			res.on('end', () => {
				done(null, body)
			})
		}).on('error', err => {
			done(err)
		})
	},
	requestTwo: done => {
		var body = ''
		http.get(process.argv[3], res => {
			res.on('data', chunk => {
				body += chunk
			})
			res.on('end', () => {
				done(null, body)
			})
		}).on('error', err => {
			done(err)
		})
	}
}, (err, results) => {
	if (err) return console.error(err)
	console.log(results)
})

/*

var http = require('http')
      , async = require('async');
    
    async.series({
      requestOne: function(done){
        fetchURL(process.argv[2], done);
      },
      requestTwo: function(done){
        fetchURL(process.argv[3], done);
      }
    },
    function done(err, result){
      if (err) return console.error(err);
      console.log(result);
    });
    
    
    function fetchURL(url, done) {
      var body = '';
      http.get(url, function(res){
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
*/