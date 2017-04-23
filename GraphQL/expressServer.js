var express = require('express'),
    app = express(),
	graphqlHTTP = require('express-graphql'),
	{ buildSchema } = require('graphql')

var schema = buildSchema(`
	type RandomDie {
		numSides: Int!
		rollOnce: Int!
		roll(numRolls: Int!): [Int]
	}

	input MessageInput {
		content: String
		author: String
	}

	type Message {
		id: ID!
		content: String
		author: String
	}

	type Mutation {
		createMessage(input: MessageInput): Message
		updateMessage(id: ID!, input: MessageInput): Message
	}

	type Query {
		quote: String,
		random: Float!,
		rollThreeDice: [Int],
		rollDice(numDice: Int!, numSides: Int): [Int]
		getDie(numSides: Int): RandomDie
		getMessage(id: ID!): Message
	}
`)

class RandomDie {
	constructor(numSides) {
		this.numSides = numSides
	}

	rollOnce() {
		return 1 + parseInt(Math.random() * this.numSides)
	}

	roll({ numRolls }) {
		var output = []
		for (var i = 0; i < numRolls; i++) {
			output.push(this.rollOnce())
		}
		return output
	}
}

class Message {
	constructor(id, {content, author}) {
		this.id = id
		this.content = content
		this.author = author
	}
}

var fakeDB = {}

var apiRoot = {
	quote: _ => Math.random() < 0.5 ? 'Stay hungry' : 'Stay foolish',
	random: _ => Math.random(),
	rollThreeDice: _ => [1, 2, 3].map(_ => 1 + parseInt(Math.random() * 6)),
	rollDice: ({numDice, numSides}) => {
		var output = []
		for (var i = 0; i < numDice; i++) {
			output.push(1 + parseInt(Math.random() * (numSides || 6)))
		}
		return output
	},
	getDie: numSides => new RandomDie(numSides || 6),
	getMessage: ({ id }) => {
		if (!fakeDB[id]) {
			throw new Error('No message exists with id: ' + id)
		}
		return new Message(id, fakeDB[id])
	},
	createMessage: ({ input }) => {
		var id = parseInt(Math.random() * 100).toString(16)
		fakeDB[id] = input
		return new Message(id, input)
	},
	updateMessage: ({ id, input }) => {
		if (!fakeDB[id]) {
			throw new Error('No message exists with id: ' + id)
		}
		fakeDB[id] = input
		return new Message(id, input)
	}
}

app.use('/graphql', graphqlHTTP({
	schema,
	rootValue: apiRoot,
	graphiql: true
}))

app.listen(3000, error => { 
	if(error) {
		return console.error(error)
	}
	console.log('Listening on port 3000.')
})