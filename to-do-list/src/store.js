import { createStore } from 'redux';

const initialState = {
    tasks: []
};

const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';

export const addTask = (task) => ({
    type:ADD_TASK,
    payload: task,
});

export const deleteTask = (index) => ({
    type: DELETE_TASK,
    payload: index,
})

function taskReducer(state = initialState, action){
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        
        case DELETE_TASK:
            return{
                ...state,
                tasks: state.tasks.filter((_, index) => index !== action.payload)
            };
        
        default:
            return state;
    }
}

const store = createStore(taskReducer);

export default store;

