import '../App.css';
import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import TaskCard from './TaskCard';

const GET_TASKS = gql`
    query getTasks {
        getTasks {
            taskID
            taskName
            taskDescription
            taskState
        }
    }
`;

function TaskLists() {
    return (
      <Fragment>
            <h1 className="taskTitle">Tâches</h1>
            <Query query={GET_TASKS}>
                {
                    ({ loading, error, data }) => {
                        if(loading) return <h4 className="loadingData">Chargement...</h4>
                        if(error) console.log(error)
                        if(data.getTasks.length === 0) {
                            return <h4 className="notFoundData">Vous n'avez actuellement aucune tâches à faire</h4>
                        }
                        else {
                            return <Fragment>
                            {
                                data.getTasks.map(Task => (
                                    <TaskCard key={Task.taskID} Task={Task}/>
                                ))
                            }
                            </Fragment>
                        }
                    }
                }
            </Query>
        </Fragment>
    );
}

export default TaskLists;