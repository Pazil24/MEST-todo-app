import { useLocalStorage } from "usehooks-ts";

function TodoList() {
    const [todos, setTodos] = useLocalStorage("TODO", []);

    return (
        <ol>
            {todos.map(function(todo, index) {
                return <li key={index}>{todo}</li>
            })}
        </ol>
    );
}

export default TodoList;