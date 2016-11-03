const { ADD_TODO }            = require('../actions/actions');


const todoApp = (state=[], action) => {
    switch( action.type ){
        case ADD_TODO: 
            return Object.assign({}, state, {
                todos: [
                    ...state,
                    {
                        task: action.task,
                        isDone: false
                    }
                ]
            })
        default: 
            return state;
    }
}

export default todoApp;
