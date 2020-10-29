import '../App.css';
import React, { Component } from 'react';
import { GrClose } from 'react-icons/gr';
import  { BsPencil } from 'react-icons/bs';
import DeletePopup from './DeletePopup';
import UpdatePopup from './UpdatePopup';

class taskCard extends Component {

    state = {
        toggleDeletePopup: false,
        toggleUpdatePopup: false
    };

    toggleDeletePopup = () => {
        this.setState({
            toggleDeletePopup: !this.state.toggleDeletePopup
        });
    };

    toggleUpdatePopup = () => {
        this.setState({
            toggleUpdatePopup: !this.state.toggleUpdatePopup
        });
    };

    render() {
        const {Task: {taskID, taskName, taskDescription, taskState}} = this.props;
        return (
            <div className="taskCard">
                {taskState ? <span className="taskDone">✓</span> : <span className="taskUndone">×</span>}
                <h1 className="taskName">{taskName}</h1>
                <div className="line"></div>
                <p className="taskDescription">{taskDescription}</p>
                <button className="updateButton" onClick={this.toggleUpdatePopup}><BsPencil className="updateButtonLogo"/></button>
                    {this.state.toggleUpdatePopup ? <UpdatePopup taskID={taskID} taskName={taskName} taskDescription={taskDescription} taskState={taskState} closePopup={this.toggleUpdatePopup}/> : null}
                <button className="DeleteButton" onClick={this.toggleDeletePopup}><GrClose className="deleteButtonLogo"/></button>
                    {this.state.toggleDeletePopup ? <DeletePopup taskName={taskName} taskID={taskID} closePopup={this.toggleDeletePopup}/> : null}
            </div>
        );
    }
}

export default taskCard;