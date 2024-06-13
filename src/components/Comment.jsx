import React, { useState } from 'react'
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap'
import '../css/comment.css'

export default function Comment() {

    const [comment, setComment] = useState("")

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
                />
                <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </FloatingLabel>
                <div className='btn_sec'>
                    <Button className='post_btn'>Post</Button>
                </div>
            </Container>
        </div>
    )
}
