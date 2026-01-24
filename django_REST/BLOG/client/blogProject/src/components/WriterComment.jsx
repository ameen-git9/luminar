import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function WriterComment() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                    {/* {count.comment_count} */}
                </span>

            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default WriterComment