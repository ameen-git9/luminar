import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserProfile } from '../api/fetchApi'
import Card from 'react-bootstrap/Card';

function Userprofile() {

    const[profile,setProfile]=useState({
        id:"",bio:"",profile_pic:"",followers_count:"",followers_list:[],user:{}       
    })

    const { id } = useParams()

    useEffect(() => {
        getUserProfile(id).then((res)=>{
            console.log(res.data);
            setProfile(res.data)          
        })
    }, [])

    return (
        
            <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className=' p-3 border shadow'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`http://127.0.0.1:8000/${profile.profile_pic}`} />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            {profile.bio}
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
                </div>
                
        </div>
    )
}

export default Userprofile