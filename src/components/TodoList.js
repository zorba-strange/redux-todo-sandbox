const React             = require('react');
const { connect }       = require('react-redux');
const { toggleColor }    = require('../actions/actions');
const Todo              = require('./Todo').default;

const Todos = ({todos, onTodoClick}) => {
    console.log(onTodoClick);
    console.log('todoS', todos);
    return (
        <div>
            <h1>test</h1>
            {todos.map((todo, index) => <Todo onClick={() => onTodoClick(index)} key={index}{...todo}/>)}
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        todos: state.todos
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (index) => {
            dispatch(toggleColor(index))
        }
    }
}

const TodoList = connect(mapStateToProps, mapDispatchToProps)(Todos);

export default TodoList;

