// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    return _.chain(collection)
    		.map(ele => (ele + 'chained').toUpperCase())
    		.sortBy();
};

// export the worker function as a nodejs module
module.exports = worker;