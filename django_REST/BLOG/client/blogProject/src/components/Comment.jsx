import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { blogDetails, listComments } from '../api/fetchApi';
import { addComments } from '../api/fetchApi';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { addCommentContext } from '../ContextApi';




function Comment() {
    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json"

    }

    const id = sessionStorage.getItem("blogId")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [comments, setComments] = useState([])

    const [count, setCount] = useState({})

    const {setaddCommentContextData,addCommentContextData}=useContext(addCommentContext)

    useEffect(() => {
        listComments(id, header).then((res) => {
            console.log(res.data);
            setComments(res.data)

        })

        blogDetails(id, header).then((res) => {
            console.log(res.data);
            setCount(res.data);
        })
            .catch((err) => console.log(err));

    }, [addCommentContextData])

    const [newComment, setNewComment] = useState({
        comment: ""
    });

    const addComment = () => {
        addComments(id, newComment, header).then((res) => {
            console.log(res.data);
            setNewComment(res.data)
            setaddCommentContextData(res)
            toast("Comment Added successfully")
            handleClose()


        }).catch((res) => {
            console.log(res.data);

        })

    }




    return (
        <div>
            <button onClick={handleShow} className='btn btn-outline-primary d-flex align-items-center px-4 py-2'
                style={{
                    borderRadius: '50px',
                    borderWidth: '2px',
                    fontWeight: '600'
                }}>
                <i className="fas fa-comment me-2"></i>
                <span>Comment</span>
                <span className="ms-2 badge bg-primary rounded-pill">
                    {count.comment_count}
                </span>

            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        comments.length > 0 ?
                            comments.map((comment) => (
                                <div>
                                    {/* <img className='rounded' width={'20px'} height={'20px'}  alt="" /> */}
                                    <span>{comment.user.username}</span>
                                    <p>{comment.comment}</p>
                                </div>
                            ))
                            : <h6>No Comments</h6>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e) => { setNewComment({ ...newComment, comment: e.target.value }) }} />

                    <Button variant="secondary" onClick={addComment}>
                        <i class="fa-solid fa-paper-plane fa-beat-fade" style={{ color: " #74C0FC" }}></i>
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Comment