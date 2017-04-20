var a, b, rest;

// Set a = 10, b = 20
[a, b] = [10, 20];
console.log(a);
console.log(b);

// Set a = 10, b = [20]
[a, ...b] = [10, 20];
console.log(a);
console.log(b);

// Set a = 10, b = 20
({a, b} = {a: 10, b: 20});
console.log(a);
console.log(b);

// Swap a and b
[a, b] = [b, a];
console.log(a);
console.log(b);

var metadata = {
    title: 'Scratchpad',
    translations: [
       {
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
       }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

var {title: englishTitle, translations: [{title: localTitle}]} = metadata;

console.log(englishTitle);
console.log(localTitle);