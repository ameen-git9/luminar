import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { deleteEmployee, listEmployee } from '../api/fetchApi'


function Home() {
    const [employee, setEmployee] = useState([])

    useEffect(() => {
        listEmployee().then((res) => {
            setEmployee(res.data)
        })
    }, [])

    const deleteData=(id)=>{
        deleteEmployee(id).then((res)=>{
            toast('Employee  deleted')
        })
    }



    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
            <div className=' w-75'>
                <table className='table table-bordered table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>SALARY</th>
                            <th>DESIGNATION</th>
                            <th>EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.length > 0 ? (
                                employee.map((empl) => (
                                    <tr key={empl._id}>
                                        <td>{empl.name}</td>
                                        <td>{empl.salary}</td>
                                        <td>{empl.designation}</td>
                                        <td>{empl.email}</td>
                                        <td>
                                            <Link to={`/edit/${empl.id}`}>
                                                <i className="fa-regular fa-pen-to-square fa-beat-fade me-3"style={{ color: "#63E6BE" }}></i>
                                            </Link>
                                            <i onClick={()=>{deleteData(empl.id)}} className="fa-solid fa-trash-arrow-up fa-shake"style={{ color: "#f92b06" }}></i>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No Employees Found
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Home