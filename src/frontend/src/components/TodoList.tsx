import styles from './TodoList.module.css';
import {useSelector} from 'react-redux';
import type {RootState} from '../store'
function TodoList(){
    const todos = useSelector((state:RootState)=>state.todo)
    return(
        <div className={styles.main}>
            {todos.map((todo)=>{
                return (
                <div className={styles.todo}>
                    <span className = {styles.todoName}>{todo.todo}</span>
                    <span className = {styles.todoDate}>{todo.date}</span>
                    <span className = {styles.doneCheck}><input type="checkbox"/></span>
                </div>);
            })}
        </div>
    )
}

export default TodoList;