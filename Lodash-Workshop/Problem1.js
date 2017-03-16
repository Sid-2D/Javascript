var _ = require("lodash");

var worker = function(arr) {
    return _.filter(arr, {active: true});
};

// export the worker function as a nodejs module
module.exports = worker;