import React from 'react'
import { Link } from 'react-router-dom'

function Service() {
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 '>
        <div className='mt-4 w-75  '>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>AMOUNT</th>
                    <th>OPTION</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>PISTON</td>
                    <td>PISTON CHANGED</td>
                    <td>2000</td>
                    <td>
                        <Link to={'/service'} className='btn btn-warning'>services</Link>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Service