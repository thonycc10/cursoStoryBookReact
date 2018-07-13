import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
    const events = {
        onPinTask,
        onArchiveTask,
    };

    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox"/>
            <span className="glow-text">
                <span>Loading</span><span>cool</span><span>state</span>
            </span>
        </div>
    )

    if (loading) {
        // return <div className="list-items">loading</div>;
        return (<div className="list-items">
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
        </div>
        )
    }

    if (tasks.length === 0) {
        return(
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check"/>
                    <div className="title-message">You have no taks</div>
                    <div className="subtitle-message"> sit back and relax</div>
                </div>
            </div>
        )
        {/*<div className="list-items">empty</div>;*/}
    }

    const taskInOrder = [
        ...tasks.filter(t => t.state === 'TASK_PINNED'),
        ...tasks.filter(t => t.state !== 'TASK_PINNED'),

    ];

    return (
        <div className="list-items">
            {taskInOrder.map(tasks => <Task key={tasks.id} task={tasks} {...events}/>)}
        </div>
    );
}

TaskList.prototype = {
    loading: PropTypes.bool,
    tasks: PropTypes.arrayOf(Task.propTypes.task),
    onPinTask: PropTypes.func,
    onArchiveTask: PropTypes.fun,
}

TaskList.defaultProps = {
    loading: false,
}

export default TaskList;