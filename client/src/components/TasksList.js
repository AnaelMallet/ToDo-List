import React, { Fragment } from 'react';
import './TasksList.css';
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

function Items() {
    return (
      <Fragment>
            <h1 className="Item_List_Title">Tâches</h1>
            <Query query={GET_TASKS}>
                {
                    ({ loading, error, data }) => {
                        if(loading) return <h4 className="Loading_Text">Chargement...</h4>
                        if(error) console.log(error)
                        if(data.getTasks.length === 0) {
                            return <h4 className="No_Data_Text">Vous n'avez actuellement aucune tâches à faire</h4>
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

export default Items;