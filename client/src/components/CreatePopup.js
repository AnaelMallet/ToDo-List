import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import './css/CreatePopup.css';

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

class Popup extends Component {

    constructor(props) {
        super(props);
        this.Name = null;
        this.Description = null;
    }
    
    getName(event) {
        this.Name = event.target.value;
    }

    getDescription(event) {
        this.Description = event.target.value;

    }

    render() {
        return (
            <div className="Popup_Background">
                <div className="Popup">
                    <h2 className="Popup_Title">Ajouter une tâche</h2>
                    <Mutation mutation={ CREATE_TASK }>
                        {(createTask) => (
                            <form onSubmit={e => {e.preventDefault(); createTask({ variables: {taskName: this.Name , taskDescription: this.Description} });}}>
                                <div className="Popup_Input">
                                    <div className="Input_Name">
                                        <span className="Task_Name_Input_Text">Nom de la tâche:</span><input className="Task_Name_Input" onChange={this.getName.bind(this)}></input>
                                    </div>
                                    <div className="Input_Description">
                                        <span className="Task_Description_Input_Text">Description de la tâche:</span><textarea className="Task_Description_Input" onChange={this.getDescription.bind(this)}></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="Validate_Button">Valider</button>
                            </form>
                        )}
                    </Mutation>
                </div>
            </div>
        )
    }
}

export default Popup;