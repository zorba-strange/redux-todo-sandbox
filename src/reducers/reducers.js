const { ADD_TODO }            = require('../actions/actions');
const { SHOW_TODOS }            = require('../actions/actions');

const seed =  {
    todos: [
        {
            task: 'test one two',
            isDone: false
        }
    ]
}

const todoApp = (state=seed, action) => {
    console.log('reduxer', state.todos);
    switch( action.type ){
        case ADD_TODO: 
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        task: action.task,
                        isDone: false
                    }
                ]
            })

        case SHOW_TODOS:
            return {

            }

        default: 
            return state
    }
}


export default todoApp;
