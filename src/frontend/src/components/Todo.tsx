import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import styles from './Todo.module.css';
function Todo(){
    return(
        <div className={styles.main}>
            <div className={styles.section}>
                <TodoList/>
                <AddTodo/>
            </div>
        </div>
    )
}

export default Todo;