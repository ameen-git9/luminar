import React, { useEffect, useState } from 'react'
import { addFollower, listAllProfile } from '../api/fetchApi'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';




function Profilelist() {

    const [profile, setProfiles] = useState([])

    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json"

    }

    useEffect(() => {
        listAllProfile(header).then(res => {
            console.log(res.data);
            setProfiles(res.data)

        })
    }, [])

    // const follow=(id)=>{
    //     addFollower(id,header).then((res)=>{
    //         console.log(res.data);
    //         toast("followed")


    //     })
    // }
    return (
        <div>
            <Row>
                {profile.length > 0 ? (
                    profile.map((prof) => (
                        <Col md={4} className=" mb-4 d-flex mt-5" key={prof.id}>
                            <Card className="h-100 w-100 shadow">
                                <Card.Img
                                    variant="top"
                                    src={prof.profile_pic}
                                    style={{height: "220px",objectFit: "cover"}}/>

                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{prof.user.username}</Card.Title>

                                    <Card.Text className="flex-grow-1">
                                        {prof.bio}
                                    </Card.Text>

                                    <Link to={`/profile/detail/${prof.id}`} className="btn btn-outline-primary"> View </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <h5>No profiles</h5>
                )}
            </Row>
        </div>

    )
}

export default Profilelist