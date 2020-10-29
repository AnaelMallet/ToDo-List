import '../App.css';
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { GrClose } from 'react-icons/gr';

const CREATE_TASK = gql`
    mutation createTask($taskName: String!, $taskDescription: String) {
        createTask(taskName: $taskName, taskDescription: $taskDescription) {
            taskID
            taskName
            taskDescription
            taskState
        }
    }
`;
class CreatePopup extends Component {
    constructor(props) {
        super(props);
        this.Name = null;
        this.Description = null;
    }

    handleClick() {
        this.props.toggle();
       };
    
    setName(event) {
        this.Name = event.target.value;
    }

    setDescription(event) {
        this.Description = event.target.value;

    }

    render() {
        return (
            <div className="backgroundPopup">
                <div className="createPopup">
                    <h2 className="popupTitle">Ajouter une tâche</h2>
                    <Mutation
                    mutation={ CREATE_TASK }>
                        {createTask => (
                            <div>
                                <button className="closeButton" onClick={e => {e.preventDefault(); this.handleClick(); }}><GrClose className="closeButtonLogo"/></button>
                                <div className="inputSection">
                                    <span className="taskNameInputText">Nom de la tâche:</span>
                                    <input className="taskNameInput" onChange={this.setName.bind(this)}></input>
                                    <span className="taskDescriptionInputText">Description de la tâche:</span>
                                    <textarea className="taskDescriptionInput" onChange={this.setDescription.bind(this)}></textarea>
                                </div>
                                <button className="validateButton" onClick={e => {e.preventDefault(); createTask({ variables: {taskName: this.Name , taskDescription: this.Description} }); this.handleClick();}}>Valider</button>
                            </div>
                        )}
                    </Mutation>
                </div>
            </div>
        )
    }
}

export default CreatePopup;