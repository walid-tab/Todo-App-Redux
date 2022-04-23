import React from 'react'
import { useDispatch } from 'react-redux'
import { deletetodo } from '../Redux/Actions'

function TodoItem({todo}) {
    const dispatch= useDispatch()
  return (
    <div>
       
            <ul className="task-item">
                <li className="tasks-list">{todo.task}</li>
                <button className="remove-task-button"  onClick={()=> dispatch(deletetodo(todo.id) )  }  >delete</button>
                 
            </ul> 

    </div>
  )
}

export default TodoItem