const React             = require('react');
const { connect }       = require('react-redux');
const { showTodos }     = require('../actions/actions');

const Todos = ({todos}) => {
    console.log('todoS', todos);
    return (
        <div>
            <h1>test</h1>
            {todos.map((todo, index) => <div key={index}>{todo.task}</div>)}
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        todos: state.todos
    }
} 

// const mapDispatchToProps = (dispatch) => {
//     return {
//         dispatch(showTodos(todos))
//     }
// }

const TodoList = connect(mapStateToProps)(Todos);

// const test = () => {
//     return (
//         <div>
//             <h1>Todo List</h1>
//         </div>
//     )
// }

export default TodoList;
// export default test;

