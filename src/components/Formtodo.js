import React from 'react'
import { useState } from 'react'
import styles from "./form.module.css"

const Formtodo = ({todos, setTodos}) => {
    //const[todo, setTodo ]=useState("")
    const[todo, setTodo ]=useState({name:"", done:false})
   
    function handleSubmit(e){
            e.preventDefault()
            setTodos([...todos,todo])
            setTodo({name:"", done:false} )
            //console.log(setTodos)
        }
  return (
    <form className={styles.todoform}onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
    <input className={styles.modernInput}
     onChange={(e)=>setTodo({name:e.target.value, done:false})} type='text' placeholder='Add a task..' value={todo.name}/> 
    <button className={styles.modernButton}
     type="submit"> Add</button>
     </div>
    </form>
  )
}

export default Formtodo
