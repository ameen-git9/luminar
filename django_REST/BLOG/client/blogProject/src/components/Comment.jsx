import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  listComments } from '../api/fetchApi';



function Comment() {
    const [comments, setComments] = useState({});

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        "Content-typr": "application/json"
    }

    const id = sessionStorage.getItem("blogId")

    useEffect(() => {
        listComments(id, header).then((res) => {
            console.log(res.data);
            setComments(res.data)

        })
    }, [])

 
    

    return (
        <div>
            <i onClick={handleShow} class="fa-solid fa-comment" style={{ color: " #ededed", cursor: "pointer" }}></i>
            <span></span>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        comments.length > 0 ?
                            comments.map((comment) => (
                                <div>
                                    <img className='rounded' width={'20px'} height={'20px'} src="" alt="" />
                                    <span>{comment.user.username}</span>
                                    <p>{comment.comment}</p>
                                </div>
                            ))
                            : <h6>No Comments</h6>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        <i class="fa-solid fa-paper-plane fa-beat-fade" style={{ color: " #74C0FC" }}></i>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Comment