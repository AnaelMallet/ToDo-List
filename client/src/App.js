import './App.css';
import React, { Component } from 'react';
import { GrAdd } from 'react-icons/gr';
import TasksList from './components/TasksList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import CreatePopup from './components/CreatePopup';
import StateKey from './components/StateKey';

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
                <div>
                    <div className="todo-list">
                        <h1 className="title">To-do list</h1>
                        <div className="addButtonSection">
                            <button onClick={this.togglePopup} className="addButton"><span><GrAdd className="addButtonLogo"/> Ajouter une tâche</span></button>
                            {this.state.toggle ? <CreatePopup toggle={this.togglePopup}/> : null }
                        </div>
                        <StateKey/>
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
