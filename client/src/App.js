import React, { Component } from 'react';
import { GrAdd } from 'react-icons/gr';
import TasksList from './components/TasksList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import CreatePopup from './components/CreatePopup';
import Popup from 'reactjs-popup';

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
})

class App extends Component {

    render() {
        return (
            <ApolloProvider client={client}>
                <div className="App">
                    <div className="App_ToDoList">
                        <h1 className="ToDoList_Title">To-do list</h1>
                        <div>
                            <Popup trigger={<button className="Add_Button"><span className="Add_Button_Text"><GrAdd className="Add_Button_Logo"/> Ajouter une tâche</span></button> } closeOnEscape>
                                <CreatePopup/>
                            </Popup>
                        </div>
                        <div>
                            <TasksList/>
                        </div>
                    </div>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
