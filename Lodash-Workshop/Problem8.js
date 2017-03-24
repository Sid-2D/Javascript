// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    // do work; return stuff
    return obj = {
    	average: _.reduce(collection, (sum, user) => sum += user.income, 0) / collection.length,
    	underperform: _.chain(collection)
    				   .filter(user => user.income <= obj.average)
    				   .sortBy(user => user.income),
    	overperform: _.chain(collection)
    				  .filter(user => user.income > obj.average)
				      .sortBy(user => user.income)
    }
};

// export the worker function as a nodejs module
module.exports = worker;