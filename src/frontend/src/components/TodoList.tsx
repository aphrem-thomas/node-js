import styles from './TodoList.module.css';
import {useSelector} from 'react-redux';
import type {RootState} from '../store'
function TodoList(){
    const todos = useSelector((state:RootState)=>state.todo)
    return(
        <div className={styles.main}>
            {todos.map((todo)=>{
                return (<div>
                    <span>{todo.todo}</span><span>{todo.date}</span>
                </div>);
            })}
        </div>
    )
}

export default TodoList;