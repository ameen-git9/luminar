import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllCustomer, getCustomer, getServices } from '../api/fetchApi'
import Addservice from './Addservice'






function Service() {


    const [service, setService] = useState([])
    const [total, setTotal] = useState(0)


    const { id } = useParams()
    useEffect(() => {
        getServices(id).then((res) => {
            console.log(res.data);
            setService(res.data)
        })


        getCustomer(id).then((res) => {
            console.log(res.data);
            setTotal(res.data.total_amount)
        })


    }, [])
    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100 '>
            <div className='mt-4 w-75  '>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>TITLE</th>
                            <th>DESCRIPTION</th>
                            <th>AMOUNT</th>
                            <th>STATUS</th>
                            <th>OPTION</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            service.length > 0 ?
                                service.map((serv) => (
                                    <tr>
                                        <td>{serv.title}</td>
                                        <td>{serv.description}</td>
                                        <td>{serv.amount}</td>
                                        <td>{serv.status}</td>
                                        <td>
                                            <Link to={'/service'} className='btn btn-warning'>view services</Link>
                                        </td>
                                        
                                    </tr>
                                ))
                                : <td>no data</td>
                        }
                    </tbody>
                </table>
                <h3 className='text-center text-warning'>Total Amount : {total}</h3>
                <div>
                    <Addservice id={id} />
                </div>
            </div>
        </div>
    )
}

export default Service