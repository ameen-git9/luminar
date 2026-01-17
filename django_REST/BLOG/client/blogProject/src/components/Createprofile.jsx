import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { createUserProfile } from '../api/fetchApi';



function CreateProfile() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const header = {
        "Authorization":`token ${sessionStorage.getItem("token")}`,
        "Content-type": "multipart/form-data"
    }

    const [createprofile, setCreateProfile] = useState({
        bio: "", profile_pic: ""
    })

    const formsubmit = () => {
        const { bio, profile_pic } = createprofile
        if (!bio || !profile_pic) {
            toast("Invalid data")

        }
        else {
            const formdata = new FormData
            formdata.append("bio", createprofile.bio)
            formdata.append("profile_pic", createprofile.profile_pic)

            createUserProfile(formdata,header).then((res) => {
                console.log(res.data);
                toast("Profile Created Successfully..")
                handleClose()
            })

        }
    }
    return (
        <div>
            <button className='btn btn-outline-info' onClick={handleShow}>Create Profile</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="bio" label="Bio" className='mt-2'>
                        <Form.Control type="text" placeholder="bio" onChange={(e) => { setCreateProfile({ ...createprofile, bio: e.target.value }) }} />
                    </FloatingLabel>

                    <FloatingLabel controlId="profile_pic" label="Profile_pic" className='mt-2'>
                        <Form.Control type="file" placeholder="image" onChange={(e) => { setCreateProfile({ ...createprofile, profile_pic: e.target.files[0] }) }} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={formsubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default CreateProfile