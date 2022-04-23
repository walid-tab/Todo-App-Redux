import { ADDTODO, DELETETODO } from "./ActionType"

export const addtodo=(newTodo)=>{
    return {
          type:ADDTODO,
          payload:newTodo
    }
}

export const deletetodo= (id )=>{

    return {
        type: DELETETODO,
        payload: id
    }
}
