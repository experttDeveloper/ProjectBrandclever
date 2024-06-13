import React, { useState } from 'react'
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap'
import '../css/comment.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import CommentList from './CommentList'

export default function Comment() {


    const [error, setError] = useState({ type: "", status: true, message: "" })
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        comment: "",
        created_at: new Date()
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError("")

    };

    const handleSubmit = () => {
        try {
            if (!formData.name) {
                setError({ type: "name", status: true, message: "Name is required!" });
                return
            }
            if (!formData.comment) {
                setError({ type: "comment", status: true, message: "Comment is required!" });
                return
            }
            setIsLoading(true);
            axios
                .post('https://developer.brandclever.in/brand/admin/form/comment.php', formData)
                .then((res) => {
                    if (res.data.status) {
                        toast.success(res.data.message || "Form submitted successfully!");
                        setFormData({
                            name: "",
                            comment: "",
                            created_at: ""
                        })
                        setIsLoading(false)
                        return;
                    }

                })
                .catch((error) => {
                    setIsLoading(false)
                    console.log("error", error);
                });
        } catch (error) {
            console.log("error", error)
        }
    }


    return (
        <div className='comment_sec_main'>
            <Container>
                <h3 className='commenet heading'>Comments</h3>
                <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                <Form.Control
                    type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Enter your full name"
                    name='name'
                    onChange={handleChange}
                    value={formData.name}
                />
                {error.status && error.type === "name" && <Form.Text id="passwordHelpBlock" muted>{error.message}</Form.Text>}
                <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        name='comment'
                        onChange={handleChange}
                        value={formData.comment}
                    />
                </FloatingLabel>
                {error.status && error.type === "comment" && <Form.Text id="passwordHelpBlock test" muted>{error.message}</Form.Text>}
                <div className='btn_sec'>
                    <Button className='post_btn' onClick={handleSubmit}>Post</Button>
                </div>
            </Container>
            <div className='comment_list'>
                <CommentList Loading={() => [isLoading, setIsLoading]} />
            </div>
        </div>
    )
}
