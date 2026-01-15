import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


function Home() {

    return (

        <Container fluid className="min-vh-100 d-flex  align-items-center justify-content-center bg-light">
            <Row className="g-4 justify-content-center">


                <Col xs={20} md={10} lg={10} >
                    <Link to="/writer" className="text-decoration-none text-dark">
                        <div className="p-4 bg-white shadow-sm rounded text-center h-100">
                            <img src="/writerr.jpg" alt="Writer" className="img-fluid rounded mb-3"
                                style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                            <h4 className="fw-bold">Writer</h4>
                            <p className="text-muted"> Create and publish your stories </p>
                        </div>
                    </Link>
                </Col>


                <Col xs={20} md={10} lg={10}>
                    <Link to="/reader" className="text-decoration-none text-dark">
                        <div className="p-4 bg-white shadow-sm rounded text-center h-100">
                            <img src="/reader.jpg" alt="Reader" className="img-fluid rounded mb-3"
                                style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                            <h4 className="fw-bold">Reader</h4>
                            <p className="text-muted">
                                Read and explore great content
                            </p>
                        </div>
                    </Link>
                </Col>

            </Row>
        </Container>
    )
}

export default Home