import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {add, postTodo} from '../slices/todoSlices';
import styles from './AddTodo.module.css'
import type { AppDispatch } from '../store';

function AddTodo(){
    const [todoItem, setTodoItem] = useState('');
    const [todoDate, setTodoDate] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const addToTodo = ()=>{
        dispatch(postTodo({todo:todoItem, done:false, date:todoDate}));
        setTodoDate('');
        setTodoItem('');
    }

    return(
        <div className={styles.addTodo}>
            <input type="text" className={styles.todoName} value = {todoItem} onChange={(e)=>setTodoItem(e.target.value)}/>
            <input type="date" className={styles.todoDate} value={todoDate} onChange={(e)=>setTodoDate(e.target.value)}/>
            <button className={styles.addButton} onClick={addToTodo}>Add</button>
        </div>
    )
}

export default AddTodo;