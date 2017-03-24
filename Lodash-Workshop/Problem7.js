// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    return _.chain(collection)
    		.reduce((accumulator, value, key) => {
		    	accumulator[value.article] = accumulator[value.article] + value.quantity || value.quantity; 
		    	return accumulator; 
		    }, {})
		    .map((value, key) => {
		    	return {
		    		article: parseInt(key),
		    		total_orders: value
		    	};
		    })
		    .sortBy(key => -key.total_orders);
};

// export the worker function as a nodejs module
module.exports = worker;