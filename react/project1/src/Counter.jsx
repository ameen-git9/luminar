import React from 'react'
import { useState } from 'react'

function Counter() {
    const[counter,setCounter]=useState(0)

    function increment(){
        setCounter(counter+1)

    }

    function decrement(){
        setCounter(counter-1)
        
    }

    function reset(){
        setCounter(0)
        
    }


  return (
    <div className='mt-2 text-center '>
        <h1>{counter}</h1>
        <div className='d-flex justify-content-center align-content-center gap-2'>
        <button className='btn btn-info' onClick={increment}>Increment</button>
        <button className='btn btn-primary' onClick={decrement}>Decrement</button>
        <button className='btn btn-success' onClick={reset}>Reset</button>
        </div>
        
    </div>
  )
}

export default Counter