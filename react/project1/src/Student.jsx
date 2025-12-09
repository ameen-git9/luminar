import React from 'react'

function Student() {


    const student=[
        {id:1,name:'ameen',place:'calicut'},
        {id:2,name:'ameer',place:'calicut'},
        {id:3,name:'amaan',place:'afk'},
        {id:4,name:'srijin',place:'malappuram'},
        {id:5,name:'fahis',place:'edavanna'}
    ]


  return (
    <div className='d-flex text-center justify-content-center mt-3 align-content-center '>
        <table className='table table-bordered table-striped w-75'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PLACE</th>
                </tr>
            </thead>
            <tbody>
                {
                    student.length > 0?
                        student.map((stud)=>(
                        <tr>
                            <td>{stud.id}</td>
                            <td>{stud.name}</td>
                            <td>{stud.place}</td>
                        </tr>
                    ))

                    : <h2>No students</h2>
                }
            </tbody>
        </table>
    </div>
  )
}

export default Student