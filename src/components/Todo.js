const React           = require('react');


const Todo = ({task, isDone, onClick}) => (
        <div style={{color: isDone ? 'black' : 'red'}} onClick={onClick}>{task}</div>
)


export default Todo;
