import React from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 '>
        <div className='mt-4 w-75  '>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Customer name</th>
                    <th>Vehicle Number</th>
                    <th>Phone number</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ameen</td>
                    <td>KL 71 C 993</td>
                    <td>8594049041</td>
                    <td>
                        <Link to={'/service'} className='btn btn-warning'>view services</Link>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Home