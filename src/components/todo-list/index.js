import { useLocalStorage } from "usehooks-ts";
import TodoItem from "../todo-item";

function TodoList() {
    const [todos, setTodos] = useLocalStorage("TODO", []);

    function deleteAll () {
        setTodos([]);
    }

    return (
        <section>
            <button onClick={deleteAll} className='btn btn-danger'>
                DeleteAll
            </button>
        <ol className='list-group'>
            {todos.map(function(todo, index) {
               return <TodoItem todo={todo} index={index}/>
            })}
        </ol>
        </section>
    );
}

export default TodoList;