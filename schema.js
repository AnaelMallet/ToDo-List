const 
{
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

// ToDo Item

const ToDoListItem = new GraphQLObjectType({
    name: "ToDo Item",
    fields: () => ({
        todo_id: { type: GraphQLInt },
        todo_name: { type: GraphQLString },
        todo_desc: { type: GraphQLString },
        todo_state: { type: GraphQLBoolean }
    })
})

//Root Query

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        Items: {
            type: new GraphQLList(ToDoListItem),
            resolve(parent, args) {
                return fetch("http://localhost:5000/graphql")
                .then(res => res.data);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});