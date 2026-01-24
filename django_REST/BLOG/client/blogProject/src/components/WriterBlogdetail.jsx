import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { getWriterBlog } from '../api/fetchApi';
import WriterComment from './WriterComment';






function WriterBlogdetail() {

    const { id } = useParams()

    const [blog, setBlog] = useState({
        title: "", caption: "", image: "", likes_count: "", comments_count: "", user: {}
    })

    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json"

    }

    useEffect(() => {
        getWriterBlog(id, header).then((res) => {
            console.log(res.data);
            setBlog(res.data)

        })
    }, [])

    const deleteData = () => {

    }


    return (
        <div className='d-flex justify-content-center align-items-center mt-3'>
            <div className='w-50 border shadow p-3'>
                <Card className="h-100 shadow">
                    <Card.Img variant="top" src={blog.image} style={{ height: "250px", objectFit: "cover" }} />
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>{blog.caption}</Card.Text>
                        
                        <WriterComment/>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default WriterBlogdetail