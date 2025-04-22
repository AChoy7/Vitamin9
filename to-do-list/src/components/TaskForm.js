import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';

function TaskForm(){
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== ''){
            dispatch(addTask(input));
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a new task..."
                    value = {input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn btn-primary w-20 mt-2" type="submit">
                    Add Task
                </button>
            </div>
        </form>
    );
}

export default TaskForm;