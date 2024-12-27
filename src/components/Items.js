import React from 'react'
import styles from "./items.module.css"

const Items = ({item, todos, setTodos}) => {
  function handleDelete(){
    setTodos(todos.filter((todo)=>todo!== item) )
  }
  return (
    <div className={styles.items}>
      <div className={styles.i}> {item.name} <span>
        <button onClick={()=> handleDelete(item)}className={styles.delete}> x</button>
      </span></div>
      
      <hr className={styles.line}></hr></div>
  ) 
}

export default Items    