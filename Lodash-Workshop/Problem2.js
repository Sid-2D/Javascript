var _ = require("lodash");

var worker = function(arr) {
   return _.sortBy(arr, function (obj) {
   		return obj.quantity;
   }).reverse();
};

// export the worker function as a nodejs module
module.exports = worker;