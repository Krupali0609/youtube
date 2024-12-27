import React, { useState } from 'react'

const Form = () => {
    const[name, setName]=useState({
        firstName:"",
        lastName:""
    })
    function handleChange(e){
        setName(e.target.value)
 
    }
    function handleSubmit(e){
        e.preventDefault();
       console.log(name)
    }
  return (
    <div>
        <form>
            <label > Firtname:</label>
            <input onChange={(e) =>setName({...name,firstName:e.target.value})} type='text' value={name.firstName}></input>
            <input onChange={(e)=>setName({...name, lastName:e.target.value})} type='text' value={name.lastName}></input>
            <button onClick={(e)=>handleSubmit(e)}>Add</button>
        </form>
    </div>
  )
}

export default Form 