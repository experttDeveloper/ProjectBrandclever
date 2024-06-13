import { Avatar, IconButton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function CommentList() {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // URL of the server endpoint
        const url = 'https://brandclever.in/developer/brand/admin/form/get_comment.php';

        const fetchData = async () => {
            try {
                // Make the GET request
                const response = await axios.get(url);
                console.log("responde", response)
            } catch (error) {
                // Handle any errors
                // setError(error);
            } finally {
                // Set loading to false after the fetch is complete
                setIsLoading(false);
            }
        };

        // Call the function to fetch data
        fetchData();
    }, [isLoading]);

    return (
        <div className='comment_list_section'>
            <div className='comment_desc'>
                <div className='list_avtar'>
                    <Avatar />
                </div>
                <div className='list_name'>
                    <p>ravan</p>
                </div>
                <div className='list_time'>
                    <p>just now</p>
                </div>
                <div className='action'>
                    <MoreHorizIcon />
                </div>

            </div>
            <div className='des'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='reply_btn'>
                <Button className='reply'>
                    Reply
                </Button>
            </div>


        </div>
    )
}
