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
        deleteTask(taskID: ID!): String!
        updateTask(taskID: ID!, taskName: String, taskDescription: String, taskState: Boolean): Task!
    }
`;

const resolvers = {
    Query: {
        getTasks: () => Tasks,
        getTask: (parent, { taskID }) => Tasks.find(task => task.taskID == taskID)
    },

    Mutation: {
        createTask: (parent, { taskName, taskDescription }) => {
            if (taskDescription == null) taskDescription = "";
            let task = { taskID: ID++, taskName, taskDescription, taskState: false }
            Tasks.push(task)
            return task;
        },

        deleteTask: (parent, { taskID }) => {
            task = Tasks.find(task => task.taskID == taskID)
            index = Tasks.indexOf(task)
            Tasks.splice(index, 1)
            return "la tâche numéro " + taskID + " à été supprimée avec succés";
        },

        updateTask: (parent, {taskID, taskName, taskDescription, taskState}) => {
            task = Tasks.find(task => task.taskID == taskID)
            index = Tasks.indexOf(task)
            Tasks[index] = {
                taskID: taskID,
                taskName: taskName,
                taskDescription: taskDescription,
                taskState: taskState
            }
            newTask = Tasks.find(newtask => newtask.taskID == taskID)
            return newTask;
        }
    }
};

module.exports = { typeDefs, resolvers };