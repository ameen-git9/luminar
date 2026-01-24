import React, { useContext, useEffect, useState } from 'react'
import { addFollower, getUserData, profileDetails, profileUnfollow } from '../api/fetchApi'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { followContext, unfollowContext } from '../ContextApi';








function Profiledetail() {


    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json"

    }


    const{setfollowContextData,followContextData}=useContext(followContext)
    const{setunfollowContextData,unfollowContextData}=useContext(unfollowContext)

    const [profile, setprofile] = useState({
        user: { id: "", username: "", password: "", email: "" }, bio: "", profile_pic: ""
    })

    const [user, setUser] = useState({
        id: "", username: ""
    })

    const [followers, setFollowers] = useState([])

    const { id } = useParams()


    useEffect(() => {
        profileDetails(id, header).then(res => {
            console.log(res.data);
            setprofile(res.data)
            setFollowers(res.data.followers_list)


        })

        getUserData(header).then(res => {
            setUser(res.data)
        })
    }, [followContextData,unfollowContextData])


console.log(profile);
console.log(user);
console.log(followers);



    const isFollowing = followers.filter((res) => (res.id == user.id)).length > 0;

    const unfollow = () => {
        profileUnfollow(id, header).then((res) => {
            console.log(res.data);
            setunfollowContextData(res)
            toast("UnFollowed")
        })

    }

    const follow = () => {
        addFollower(id, header).then((res) => {
            console.log(res.data);
            setfollowContextData(res)
            toast("Followed")



        })

    }


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
                        {
                            isFollowing
                                ? <Button onClick={unfollow} variant='secondary'>UnFollow</Button>
                                : <Button onClick={follow} variant='primary'>Follow</Button>
                        }
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default Profiledetail