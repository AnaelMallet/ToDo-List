import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import './CreatePopup.css';
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

/*const GET_TASKS = gql`
    query getTasks {
        getTasks {
            taskID
            taskName
            taskDescription
            taskState
        }
    }
`;*/

class Popup extends Component {
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
            <div className="Popup_Background">
                <div className="Popup">
                    <h2 className="Popup_Title">Ajouter une tâche</h2>
                    <Mutation
                    mutation={ CREATE_TASK }>
                        {createTask => (
                            <div className="Popup_Input">
                                <button className="Popup_CloseButton" onClick={e => {e.preventDefault(); this.handleClick(); }}><GrClose/></button>
                                <div className="Input_Name">
                                    <span className="Task_Name_Input_Text">Nom de la tâche:</span><input className="Task_Name_Input" onChange={this.setName.bind(this)}></input>
                                </div>
                                <div className="Input_Description">
                                    <span className="Task_Description_Input_Text">Description de la tâche:</span><textarea className="Task_Description_Input" onChange={this.setDescription.bind(this)}></textarea>
                                </div>
                                <button className="Validate_Button" onClick={e => {e.preventDefault(); createTask({ variables: {taskName: this.Name , taskDescription: this.Description} }); this.handleClick();}}>Valider</button>
                            </div>
                        )}
                    </Mutation>
                </div>
            </div>
        )
    }
}

export default Popup;