import React from 'react';
import { GrClose } from 'react-icons/gr';
import  { BsPencil } from 'react-icons/bs';
import Popup from 'reactjs-popup';
import UpdatePopup from './UpdatePopup';
import DeletePopup from './DeletePopup';
import './css/TaskCard.css';

function Task({Task: {taskName, taskDescription, taskState}}) {
    return (
        <div className="TaskCard">
            <h1 className="TaskCard_taskName">{taskName}</h1>
            <div className="TaskCard_Line"></div>
            <p className="TaskCard_taskDescription">{taskDescription}</p>
            <Popup trigger={<button className="TaskCard_UpdateButton"><BsPencil className="TaskCard_UpdateButton_Logo"/></button>}>
                <UpdatePopup/>
            </Popup>
            <Popup trigger={<button className="TaskCard_DeleteButton"><GrClose className="TaskCard_DeleteButton_Logo"/></button>}>
                <DeletePopup/>
            </Popup>
            
        </div>
    );
}

export default Task;