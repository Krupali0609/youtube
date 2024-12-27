import React from 'react'

const Cons = () => {
    function just(){
        console.log("click")
    }
  return (
    <div>
        <button onClick={just}>
            Click me
        </button>
    </div>
  )
}

export default Cons