const { gql } = require('apollo-server')

var Tasks = [];

var ID = 1;

const typeDefs = gql`
    type Task {
        taskID: ID!
        taskName: String!
        taskDescription: String
        taskState: Boolean!
    },

    type Query {
        getTasks: [Task]!
        getTask(taskID: ID!): Task!
    },

    type Mutation {
        createTask(taskName: String!, taskDescription: String): Task!
    }
`;

const resolvers = {
    Query: {
        getTasks: () => Tasks,
        getTask: (parent, { taskID }) => Tasks.find(task => task.taskID == taskID)
    },

    Mutation: {
        createTask: (parent, { taskName, taskDescription, taskState }) => {

            let task = { taskID: ID++, taskName, taskDescription, taskState: false }
            Tasks.push(task)
            return task;
        }
    }
};

module.exports = { typeDefs, resolvers };