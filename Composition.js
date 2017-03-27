var compose = (f, g) => x => f(g(x));

var toUpperCase = x => x.toUpperCase();

var exclaim = x => x + '!';

var shout = compose(exclaim, toUpperCase);

console.log(shout("ain't gonna live if livin is without you")); 