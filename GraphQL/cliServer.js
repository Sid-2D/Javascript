var { graphql, buildSchema } = require('graphql')

var schema = buildSchema(`
	type Query {
		hello: String,
		name: String
	}
`)

var apiRoot = {
	hello: () => {
		return 'Hello world'
	},
	name: () => {
		return 'Jensen'
	}
}

graphql(schema, '{ hello }', apiRoot).then(response => {
	console.log(response)
})