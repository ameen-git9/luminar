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
    <div>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PLACE</th>
                </tr>
            </thead>
            <tbody>
                {
                    student.map((stud)=>(
                        <tr>
                            <td>{stud.id}</td>
                            <td>{stud.name}</td>
                            <td>{stud.place}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Student