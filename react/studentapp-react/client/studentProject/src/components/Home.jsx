import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listStudents,deleteStudent } from '../api/fetchApi'
import { toast } from 'react-toastify'

function Home() {

    const [students, setStudents] = useState([])

    useEffect(() => {
        listStudents().then((res) => {
            setStudents(res.data)
        })
    }, [])

    const deleteData=(id)=>{
        deleteStudent(id).then((res)=>{
            toast('Student data deleted')
        })
    }

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="p-5 border shadow rounded" style={{ width: '90%', maxWidth: '800px' }}>
                <h3 className="text-center mb-4 fw-bold">STUDENT LIST</h3>

                <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>NAME</th>
                                <th>PLACE</th>
                                <th>EMAIL</th>
                                <th>PHONE</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                students.length > 0 ? (
                                    students.map((stud) => (
                                        <tr key={stud.id}>
                                            <td>{stud.name}</td>
                                            <td>{stud.place}</td>
                                            <td>{stud.email}</td>
                                            <td>{stud.phone}</td>
                                            <td>
                                                <Link to={'edit'}>
                                                    <i className="fa-solid fa-pen-to-square" style={{ color: "#74C0FC" }}></i>
                                                </Link>

                                                <i onClick={()=>{deleteData(stud.id)}}  className="fa-solid fa-trash" style={{ color: "#ff0000" }}></i>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center">
                                            No students found
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
