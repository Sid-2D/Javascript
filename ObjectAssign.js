let obj1 = { a: 0, b: { c: 0 } }

// Clone
let obj2 = Object.assign({}, obj1)

// Reference
let obj3 = obj1

// Deep clone
let obj4 = JSON.parse(JSON.stringify(obj1))

obj1.a = 1
console.log('obj1:', JSON.stringify(obj1))
console.log('obj2:', JSON.stringify(obj2))
console.log('obj3:', JSON.stringify(obj3))
console.log('obj4:', JSON.stringify(obj4))

obj2.a = 2
console.log('obj1:', JSON.stringify(obj1))
console.log('obj2:', JSON.stringify(obj2))
console.log('obj3:', JSON.stringify(obj3))
console.log('obj4:', JSON.stringify(obj4))

obj2.b.c = 3
console.log('obj1:', JSON.stringify(obj1))
console.log('obj2:', JSON.stringify(obj2))
console.log('obj3:', JSON.stringify(obj3))
console.log('obj4:', JSON.stringify(obj4))

obj1.b.c = 4
console.log('obj1:', JSON.stringify(obj1))
console.log('obj2:', JSON.stringify(obj2))
console.log('obj3:', JSON.stringify(obj3))
console.log('obj4:', JSON.stringify(obj4))