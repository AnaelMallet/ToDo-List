import React, { Component } from 'react';
import { GrAdd } from 'react-icons/gr';
import TasksList from './components/TasksList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import CreatePopup from './components/CreatePopup';

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
})

class App extends Component {

    state = {
        toggle: false
    };

    togglePopup = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    };

    render() {
        return (
            <ApolloProvider client={client}>
                <div className="App">
                    <div className="App_ToDoList">
                        <h1 className="ToDoList_Title">To-do list</h1>
                        <div>
                        <button className="Add_Button" onClick={this.togglePopup}><span className="Add_Button_Text"><GrAdd className="Add_Button_Logo"/> Ajouter une tâche</span></button>
                        {this.state.toggle ? <CreatePopup toggle={this.togglePopup}/> : null }
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
