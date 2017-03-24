// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    return _.template('Hello <%= name %> (logins: <%= login.length %>)')(collection);
};

// export the worker function as a nodejs module
module.exports = worker;