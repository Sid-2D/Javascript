// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
   // do work; return stuff
   return _.chain(collection)
   		   .groupBy('username')
   		   .map((user, value) => {
   		   		return {
   		   			username: value,
   		   			comment_count: _.size(user) 
   		   		};
   		   })
   		   .sortBy(obj => -obj.comment_count);
};

// export the worker function as a nodejs module
module.exports = worker;