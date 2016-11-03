// ACTIONS

export const ADD_TODO       = 'ADD_TODO';
export const SHOW_TODOS     = 'SHOW_TODOS';

export const addTodo = (task) => {
    console.log('action', task);
    return {
        type: ADD_TODO,
        task
    }
}

export const showTodos = (todos) => {
    console.log('showAction', todos);
    return {
        type: SHOW_TODOS,
        todos
    }
}
