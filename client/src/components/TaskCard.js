import React, { Component } from 'react';
import { GrClose } from 'react-icons/gr';
import  { BsPencil } from 'react-icons/bs';
import Popup from 'reactjs-popup';
import DeletePopup from './DeletePopup';
import './TaskCard.css';

class taskCard extends Component {

    state = {
        toggle: false
    };

    togglePopup = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    };

    render() {
        const {Task: {taskID, taskName, taskDescription, taskState}} = this.props;
        return (
            <div className="TaskCard">
                <h1 className="TaskCard_taskName">{taskName}</h1>
                <div className="TaskCard_Line"></div>
                <p className="TaskCard_taskDescription">{taskDescription}</p>
                <Popup trigger={<button className="TaskCard_UpdateButton"><BsPencil className="TaskCard_UpdateButton_Logo"/></button>}>
                    
                </Popup>
                <button className="TaskCard_DeleteButton" onClick={this.togglePopup}><GrClose className="TaskCard_DeleteButton_Logo"/></button>
                {this.state.toggle ? <DeletePopup taskName={taskName} taskID={taskID} closePopup={this.togglePopup}/> : null}
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