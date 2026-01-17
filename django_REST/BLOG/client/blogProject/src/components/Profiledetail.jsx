import React, { useEffect, useState } from 'react'
import { profileDetails } from '../api/fetchApi'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';




function Profiledetail() {


    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json"

    }

    const {id} = useParams()

    const[profile,setprofile]=useState({
        user:{id:"",username:"",password:"",email:""},bio:"",profile_pic:""
    })
    

    useEffect(()=>{
        profileDetails(id,header).then(res=>{
            console.log(res.data);
            setprofile(res.data)

            
        })
    },[])
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='w-50 p-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={profile.profile_pic} />
                    <Card.Body>
                        <Card.Title>{profile.user.username}</Card.Title>
                        <Card.Text>
                            {profile.bio}
                        </Card.Text>


                        <button className='btn btn-primary'>View</button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default Profiledetail