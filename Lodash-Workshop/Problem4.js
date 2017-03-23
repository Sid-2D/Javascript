// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
	var obj = {
		hot: [],
		warm: []
	};
    _.forEach(collection, (key, name) => {
    	if(_.every(key, temp => temp > 19)) {
    		obj.hot.push(name);
    	} else if (_.some(key, temp => temp > 19)) {
    		obj.warm.push(name);
    	}
    });
    return obj;
};

// export the worker function as a nodejs module

module.exports = worker;