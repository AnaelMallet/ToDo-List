import '../App.css';
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { GrClose } from 'react-icons/gr';

const UPDATE_TASK = gql`
    mutation updateTask($taskID: ID!, $taskName: String!, $taskDescription: String, $taskState: Boolean!) {
        updateTask(taskID: $taskID, taskName: $taskName, taskDescription: $taskDescription, taskState: $taskState) {
            taskID
            taskName
            taskDescription
            taskState
        }
    }
`;

class UpdatePopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: props.taskName,
            taskDescription: props.taskDescription,
            taskState: props.taskState
        }
    }

    handleClick() {
        this.props.closePopup();
       };

    setTaskState(event) {
        let state;
        if (event.target.value === "false") state = false;
        if (event.target.value === "true") state = true;
        this.setState({
            taskState: state
        });
    }

    setTaskName(event) {
        this.setState({
            taskName: event.target.value
        })
    }

    setTaskDescription(event) {
        this.setState({
            taskDescription: event.target.value
        })
    }

    render() {
        const {taskID} = this.props;
        return (
            <div className="backgroundPopup">
                <div className="updatePopup">
                    <h2 className="popupTitle">Modifier une tâche</h2>
                    <Mutation
                    mutation={ UPDATE_TASK }>
                        {updateTask => (
                            <div className="inputSection">
                                <button className="closeButton" onClick={e => {e.preventDefault(); this.handleClick(); }}><GrClose className="closeButtonLogo"/></button>
                                <div className="Input_Name">
                                    <span className="taskNameInputText">Nouveau nom de la tâche:</span>
                                    <input className="taskNameInput" value={this.state.taskName} onChange={this.setTaskName.bind(this)}></input>
                                    <span className="taskDescriptionInputText">Nouvelle description de la tâche:</span>
                                    <textarea className="taskDescriptionInput" value={this.state.taskDescription} onChange={this.setTaskDescription.bind(this) }></textarea>
                                </div>
                                <div className="radioSection">
                                    <span className="taskStateText">Nouvelle état de la tâche:</span>
                                    <label className="taskStateTextFalse"><input type="radio" name="taskState" value="false" checked={this.state.taskState === false} onChange={this.setTaskState.bind(this)}/> Tâche non terminé</label> 
                                    <label className="taskStateTextTrue"><input type="radio" name="taskState" value="true" checked={this.state.taskState === true} onChange={this.setTaskState.bind(this)}/>Tâche terminé</label>
                                </div>
                                <button className="validateButton" onClick={e => {e.preventDefault(); updateTask({ variables: {taskID: taskID, taskName: this.state.taskName , taskDescription: this.state.taskDescription, taskState: this.state.taskState} }); this.handleClick();}}>Valider</button>
                            </div>
                        )}
                    </Mutation>
                </div>
            </div>
        )
    }
}

export default UpdatePopup;