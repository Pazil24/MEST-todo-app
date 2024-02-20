import { useState } from "react";
import styles from "./index.module.css";
import {useLocalStorage} from "usehooks-ts";

function AddTodo() {
    const [todos, setTodos] = useLocalStorage("TODO", []);
    // let todo; using useState prevents re-rendering an empty string
    const [todo, setTodo] = useState("");

    function collectInput(event) {
        setTodo(event.target.value);
    }

    function saveTodo() {
        //Get existing list of todos from local storage
        // let todos = JSON.parse(localStorage.getItem("TODO")) || [];

        //Add new todo to existing list of todos
        // todos.push(todo);

        //Set all todos in local storage
        // localStorage.setItem("TODO", JSON.stringify(todos));
        setTodos([...todos, todo]);
    }


    return (
        <section className={styles.addTodo}>
            <input
                onChange={collectInput}
                className={styles.addTodoInput}
                placeholder="Start typing..." />
            <button onClick={saveTodo}>Create</button>
        </section>
    );
}

export default AddTodo;