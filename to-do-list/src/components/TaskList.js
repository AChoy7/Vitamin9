import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../store';

function TaskList() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    return (
        <u1 className="list-group">
            {tasks.map (( task, index ) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {task}
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(deleteTask(index))}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </u1>
    );
}

export default TaskList;