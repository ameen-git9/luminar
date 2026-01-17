import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addBlog } from '../api/fetchApi';




function Addblog() {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,

    }
    const [addblog, setAddBlog] = useState({
        title: "", caption: "", image: ""
    })

    const formsubmit = () => {
        const { title, caption, image } = addblog
        if (!title || !caption || !image) {
            toast("Invalid data")

        }
        else {
            const formdata = new FormData
            formdata.append("title", addblog.title)
            formdata.append("caption", addblog.caption)
            formdata.append("image", addblog.image)

            addBlog(formdata, header).then((res) => {
                console.log(res.data);
                toast("Blog Added Successfully..")
                handleClose()
            })

        }
    }


    return (
        <div>
            <button className='btn btn-outline-info' onClick={handleShow}>ADD BLOGS</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="title" label="Title" className='mt-2'>
                        <Form.Control type="text" placeholder="Title" onChange={(e) => { setAddBlog({ ...addblog, title: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="caption" label="Caption" className='mt-2'>
                        <Form.Control type="text" placeholder="caption" onChange={(e) => { setAddBlog({ ...addblog, caption: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="image" label="Image" className='mt-2'>
                        <Form.Control type="file" placeholder="image" onChange={(e) => { setAddBlog({ ...addblog, image: e.target.files[0] }) }} />
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

export default Addblog