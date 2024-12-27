import React from 'react'
import Items from './Items'
import styles from "./todolist.module.css"

const Tododlist = ({todos, setTodos}) => {
  return (
    <div className={styles.list}> 
      {todos.map((item)=>(
        <Items key={item.name} item={item} todos={todos} setTodos={setTodos}/>
    ))}
    </div>
  )
}

export default Tododlist