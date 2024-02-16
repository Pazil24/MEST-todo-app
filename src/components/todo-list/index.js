import React from "react";

function TodoList() {

    // let todos;

    const [todos, setTodos] = React.useState([]);

    function getTodos () {
        //Get existing list of todos from local storage
        let todos = JSON.parse(localStorage.getItem("TODO")) || [];
        // Update React State
        setTodos(todos);
    }
    React.useEffect(getTodos, []);

    return (
        <ul>
            {todos.map(function(todo, index) {
                return <li key={index}>{todo}</li>
            })}
        </ul>
    );
}

export default TodoList;