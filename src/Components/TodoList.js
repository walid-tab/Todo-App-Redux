import React from 'react'
import {  useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
  
    const taskList= useSelector(state=> state.taskList)
  return (
    <div >
        
        {taskList.map( (todo,id)  =>    <TodoItem   todo={todo}    key={id} />)}

    </div>
  )
}

export default TodoList