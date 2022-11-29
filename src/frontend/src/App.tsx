import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComponent from './components/Todo';
import {useDispatch, useSelector} from 'react-redux'
interface statetype {
  count:number
}
function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state:statetype)=>state.count)
  const dispatch = useDispatch();
  return (
    <div className="App">
     <div className="App_todo_header">Todos</div>
     <TodoComponent/>
    </div>
  );
}

export default App;
