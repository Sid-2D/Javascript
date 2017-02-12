function getDependencies(tree) {
    if (!tree) {
        return [];
    }
    var keys = Object.keys(tree);
    var arr = [];
    if ('name' in tree) {
        arr = arr.concat(getDependencies(tree.dependencies));
        return arr.sort();
    } else {
        keys.forEach(function (key) {
            if (key != 'version') {
                if (typeof tree[key] === 'object' && 'dependencies' in tree[key]) {
                    arr = arr.concat(getDependencies(tree[key].dependencies));
                }
                if (arr.indexOf(key + '@' + tree[key].version) === -1) {
                    arr.push(key + '@' + tree[key].version);
                }
            }
        });
        return arr;
    }
}

module.exports = getDependencies;

var loremIpsum = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
    "optimist": {
        "version": "0.3.7",
        "dependencies": {
            "wordwrap": {
                "version": "0.0.2"
            }
        }
    },
    "inflection": {
        "version": "1.2.6"
        }
    }
};

// console.log(getDependencies(loremIpsum));
