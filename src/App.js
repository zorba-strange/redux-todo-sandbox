const React             = require('react');
const AddTodo           = require('./components/AddTodos').default;
const TodoList          = require('./components/TodoList').default;
// const test          = require('./components/TodoList').default;



console.log('todoList', TodoList);
const App = () => (
    <div>
        <h1>Hello World</h1>
        <AddTodo />
        <TodoList />
    </div>
);


export default App;
