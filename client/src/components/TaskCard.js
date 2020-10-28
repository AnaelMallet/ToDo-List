import React, { Component } from 'react';
import { GrClose } from 'react-icons/gr';
import  { BsPencil } from 'react-icons/bs';
import DeletePopup from './DeletePopup';
import UpdatePopup from './UpdatePopup';
import './TaskCard.css';

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
            <div className="TaskCard">
                {taskState ? <span className="doneTask">✓</span> : <span className="undoneTask">×</span>}
                <h1 className="TaskCard_taskName">{taskName}</h1>
                <div className="TaskCard_Line"></div>
                <p className="TaskCard_taskDescription">{taskDescription}</p>
                <button className="TaskCard_UpdateButton" onClick={this.toggleUpdatePopup}><BsPencil className="TaskCard_UpdateButton_Logo"/></button>
                    {this.state.toggleUpdatePopup ? <UpdatePopup taskID={taskID} taskName={taskName} taskDescription={taskDescription} taskState={taskState} closePopup={this.toggleUpdatePopup}/> : null}
                <button className="TaskCard_DeleteButton" onClick={this.toggleDeletePopup}><GrClose className="TaskCard_DeleteButton_Logo"/></button>
                    {this.state.toggleDeletePopup ? <DeletePopup taskName={taskName} taskID={taskID} closePopup={this.toggleDeletePopup}/> : null}
            </div>
        );
    }
}
/*
function Task({Task: {taskID, taskName, taskDescription, taskState}}) {
    return (
        <div className="TaskCard">
            <h1 className="TaskCard_taskName">{taskName}</h1>
            <div className="TaskCard_Line"></div>
            <p className="TaskCard_taskDescription">{taskDescription}</p>
            <Popup trigger={<button className="TaskCard_UpdateButton"><BsPencil className="TaskCard_UpdateButton_Logo"/></button>}>
                
            </Popup>
            <button className="TaskCard_DeleteButton"><GrClose className="TaskCard_DeleteButton_Logo"/></button>
            <DeletePopup taskName={taskName} taskID={taskID}/>
        </div>
    );
}
*/
export default taskCard;