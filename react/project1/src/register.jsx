import React from 'react'

function register() {
  return (
    // <div>register</div>
    <>
      <h1 style={{ color: "yellowgreen" }}>Register</h1>
      <form action="">
        <input type="text" className='form-control mt-2' placeholder='Username' />
        <input type="text" className='form-control mt-2' placeholder='Email' />
        <input type="text" className='form-control mt-2' placeholder='password' />
        <button className='btn btn-info mt-2'>Register</button>
      </form>
    </>
  )
}

export default register