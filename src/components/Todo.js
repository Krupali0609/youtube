import React, { useState } from 'react'
import Items from './Items'
import Formtodo from './Formtodo'
import Tododlist from './Tododlist'

const Todo = () => {
    
    const [todos, setTodos]=useState([])
    
  return (
    <div>
        
        <Formtodo todos={todos} setTodos={setTodos}/>
        <Tododlist todos={todos}  setTodos={setTodos}/>
        
        

    </div>
  )
}

export default Todo  