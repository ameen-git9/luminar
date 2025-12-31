import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Add from './Add'
import { listTodo } from '../api/fetchApi'
import { deleteTodo } from '../api/fetchApi'
import { toast } from 'react-toastify'
import Edit from './Edit'

function Home() {

    const [todo, setTodo] = useState([])

    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        'Content-type': 'application/json'
    }
    useEffect(() => {
        listTodo(header).then((res) => {
            console.log(res.data);
            setTodo(res.data)



        })
    }, [])

    const dataDelete=(id)=>{
        deleteTodo(id,header).then((res)=>{
            console.log(res.data);
            toast("Todo deleted")
            
        })
    }
            
        





    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className='w-75 p-3 mt-4'>
                <h1 className='text-center'>TODOS LIST</h1>

                <table className='table table-bordered table-striped table-hover '>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>DESCRIPTION</th>
                            <th>ADDED DATE</th>
                            <th>DUE DATE</th>
                            <th>STATUS</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todo.length > 0 ? (
                                todo.map((todo) => (
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.title}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.added_date}</td>
                                        <td>{todo.due_date}</td>
                                        <td>{todo.status}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={()=>{dataDelete(todo.id)}}>DELETE</button>
                                            <Edit id={todo.id}/>
                                        </td>


                                    </tr>
                                ))
                            )
                                :
                                <td>no data found</td>
                        }
                    </tbody>
                </table>
                <div>
                    <Add />
                </div>
            </div>
        </div>
    )
}

export default Home