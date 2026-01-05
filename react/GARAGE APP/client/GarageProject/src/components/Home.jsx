import React from 'react'
import { Link } from 'react-router-dom'
import { getallServices } from '../api/fetchApi'
import { useEffect, useState } from 'react'


function Home() {


    const [service, setService] = useState([])

    useEffect(() => {
        getallServices().then((res) => {
            console.log(res.data);
            const services = res.data

            const cur_date = new Date
            const year = cur_date.getFullYear()
            const m = cur_date.getFullYear() + 1
            const month = m.toString().padstart(2, 0)
            const d = cur_date.getDate()
            const day = d.toString().padStart(2, 0)
            const today = `${year}-${month}-${day}`
            console.log(today);
            const allServices = services?.filter((serv) => (serv.exp_date == today))
            setService(allServices);





        })
    }, [])





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
                        {
                            service.length > 0 ?
                                service.map((serv) => (
                                    <tr>
                                        <td>{serv.customer.customer_name}</td>
                                        <td>{serv.customer.vehicle_no}</td>
                                        <td>{serv.customer.phone}</td>
                                        <td>
                                            <Link to={'/service'} className='btn btn-warning'>view services</Link>
                                        </td>
                                    </tr>
                                ))
                                : <td>no data</td>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home