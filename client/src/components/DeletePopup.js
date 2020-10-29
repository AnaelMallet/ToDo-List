import '../App.css';
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
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
            <div className="backgroundPopup">
                <div className="deletePopup">
                    <button className="closeButton" onClick={e => {e.preventDefault(); this.handleClick()}}><GrClose className="closeButtonLogo"/></button>
                    <h2 className="popupTitle">Supprimer une tâche</h2>
                    <p className="deleteText">Voulez-vous supprimer la tâche { taskName } ?</p>
                    <Mutation mutation={ DELETE_TASK }>
                    {(deleteTask) => (
                        <button className="yesButton" onClick={e => {e.preventDefault(); deleteTask({variables: {taskID}}); this.handleClick()}}>Oui</button>
                    )}
                    </Mutation>
                    <button className="noButton" onClick={e => {e.preventDefault(); this.handleClick()}}>Non</button>
                </div>
            </div>
        )
    }
}
export default DeletePopup;
