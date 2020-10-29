import '../App.css';
import React, { Component } from 'react';

class StateKey extends Component {
    render() {
        return (
            <div className="Key">
                <span className="keyDone">✓</span><span className="keyDoneText">= Tâche terminé</span>
                <span className="keyUndone">×</span><span className="keyUndoneText"> = Tâche non terminé</span>
            </div>
        )
    }
}

export default StateKey;