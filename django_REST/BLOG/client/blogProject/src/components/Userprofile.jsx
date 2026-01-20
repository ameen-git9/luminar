import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserProfile } from '../api/fetchApi'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

function Userprofile() {

    const [profile, setProfile] = useState({
        id: "", bio: "", profile_pic: "", followers_count: "", followers_list: [], user: {}
    })

    const { id } = useParams()

    useEffect(() => {
        getUserProfile(id).then((res) => {
            console.log(res.data);
            setProfile(res.data)
        })
    }, [])

    return (

        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="p-4 border shadow rounded-4 bg-white" style={{ maxWidth: '350px' }}>
                <Card className="border-0 bg-transparent">
                    {/* Profile Picture */}
                    <div className="d-flex justify-content-center mb-3">
                        <div className="rounded-circle overflow-hidden" style={{ width: '150px', height: '150px' }}>
                            <img
                                src={`http://127.0.0.1:8000/${profile.profile_pic}`}
                                alt="Profile"
                                className="w-100 h-100 object-fit-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/150";
                                }}
                            />
                        </div>
                    </div>

                    <Card.Body className="text-center p-0">
                        {/* Name/Username */}
                        <Card.Title className="mb-2 fw-semibold fs-5">
                            {profile.name || profile.user.username}
                        </Card.Title>

                        {/* Bio */}
                        <Card.Text className="text-muted mb-3">
                            {profile.bio || "No bio yet"}
                        </Card.Text>

                        {/* Followers Count */}
                        <div className="d-flex justify-content-center">
                            <div className="bg-light px-4 py-2 rounded-pill d-flex align-items-center gap-2">
                                <i className="bi bi-people-fill text-primary"></i>
                                <span className="fw-semibold">{profile.followers_count || 0}</span>
                                <span className="text-muted">Followers</span>
                            </div>
                        </div>

                        
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Userprofile