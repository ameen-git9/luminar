import React from 'react'

function Login() {
  return (
    <div>
        <h1>Login</h1>
        <form action="">
        <input type="text" className='form-control mt-2' placeholder='Username' />
        <input type="text" className='form-control mt-2' placeholder='password' />
        <button className='btn btn-success mt-2'>Login</button>
      </form>
    </div>
  )
}

export default Login