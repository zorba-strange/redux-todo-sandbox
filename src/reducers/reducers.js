const { ADD_TODO, TOGGLE_COLOR }            = require('../actions/actions');

const seed =  {
    todos: [
        {
            task: 'test one two',
            isDone: false
        }
    ]
}

const todoApp = (state=seed, action) => {
    switch( action.type ){
        case ADD_TODO: 
            console.log('added');
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        task: action.task,
                        isDone: false
                    }
                ]
            })

        case TOGGLE_COLOR:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if(index == action.index){
                        return Object.assign({}, todo, {
                            isDone: !todo.isDone
                        })
                    }
                    return todo;
                })
            })

        default: 
            return state
    }
}


export default todoApp;
