// ACTIONS

export const ADD_TODO       = 'ADD_TODO';
export const TOGGLE_COLOR   = 'TOGGLE_COLOR';

export const addTodo = (task) => {
    console.log('action', task);
    return {
        type: ADD_TODO,
        task
    }
}

export const toggleColor = (index) => {
    console.log('color change');
    return {
        type: TOGGLE_COLOR,
        index
    }
}
