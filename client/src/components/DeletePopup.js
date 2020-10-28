import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import './DeletePopup.css'
import { GrClose } from 'react-icons/gr';

const DELETE_TASK = gql`
    mutation deleteTask($taskID: ID!) {
        deleteTask(taskID: $taskID)
    }
`;

class DeletePopup extends Component {

    handleClick() {
        this.props.closePopup();
       };

    render() {
        const {taskName, taskID} = this.props;
        return (
            <div className="DeletePopup_Background">
                <div className="DeletePopup">
                    <button className="DeletePopup_CloseButton" onClick={e => {e.preventDefault(); this.handleClick()}}><GrClose className="DeletePopup_CloseButton_Logo"/></button>
                    <h2 className="DeletePopup_Title">Supprimer une tâche</h2>
                    <p className="DeletePopup_Text">Voulez-vous supprimer la tâche { taskName } ?</p>
                    <Mutation mutation={ DELETE_TASK }>
                    {(deleteTask) => (
                        <button onClick={e => {e.preventDefault(); deleteTask({variables: {taskID}}); this.handleClick()}} className="DeletePopup_YesButton">Oui</button>
                    )}
                    </Mutation>
                    <button className="DeletePopup_NoButton" onClick={e => {e.preventDefault(); this.handleClick()}}>Non</button>
                </div>
            </div>
        )
    }
}
/*
function DeletePopup({taskName, taskID}) {
    return (
        <div className="DeletePopup_Background">
            <div className="DeletePopup">
                <button className="DeletePopup_CloseButton"><GrClose className="DeletePopup_CloseButton_Logo"/></button>
                <h2 className="DeletePopup_Title">Supprimer une tâche</h2>
                <p className="DeletePopup_Text">Voulez-vous supprimer la tâche { taskName } ?</p>
                <Mutation mutation={ DELETE_TASK }>
                {(deleteTask) => (
                    <button onClick={e => {e.preventDefault(); deleteTask({variables: {taskID}}) }} className="DeletePopup_YesButton">Oui</button>
                )}
                </Mutation>
                <button className="DeletePopup_NoButton">Non</button>
            </div>
        </div>
    )
}
*/
export default DeletePopup;
