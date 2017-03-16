var _ = require("lodash");

var worker = function(arr) {
   return _.forEach(arr, function (key) {
   		if (key.population >= 1) {
   			key.size = 'big';
   		} else if (key.population >= 0.5) {
   			key.size = 'med';
   		} else {
   			key.size = 'small';
   		}
   })
};

// export the worker function as a nodejs module
module.exports = worker;