import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllCustomer, getCustomer, getServices } from '../api/fetchApi'
import Addservice from './Addservice'
import { deleteService } from '../api/fetchApi'
import { toast } from 'react-toastify'
import Editservice from './Editservice'
import { serviceaddContext } from '../ContextApi'



function Service() {


    const [service, setService] = useState([])
    const [total, setTotal] = useState(0)


    const {serviceaddContextData} = useContext(serviceaddContext)


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


    }, [serviceaddContextData])


    const deleteData = (id) => {
        deleteService(id).then((res) => {
            console.log(res.data);
            toast("service deleted")

        })
    }


    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100 '>
            <div className='mt-4 w-75  '>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr className='text-center'>
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
                                    <tr className='text-center'>
                                        <td>{serv.title}</td>
                                        <td>{serv.description}</td>
                                        <td>{serv.amount}</td>
                                        <td>{serv.status}</td>
                                        <td className='d-flex justify-content-around'>
                                            <button className='btn btn-outline-danger' onClick={() => { deleteData(serv.id) }}>Delete</button>
                                            <Editservice id={serv.id} />
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