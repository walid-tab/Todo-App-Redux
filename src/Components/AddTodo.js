import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from '../Redux/Actions'

function AddTodo() {
const [text,setText]= useState('')
const dispatch= useDispatch()
  return (
    <div  className="add-todo">
        <input  className="task-input"  value={text}   onChange={(e)=>setText(e.target.value)}    ></input>
        <button  className="task-button"  onClick={()=>{dispatch(addtodo({id:Math.random(),   task:text   })); setText("")  }}     >Add</button>

    </div>
  )
}

export default AddTodo