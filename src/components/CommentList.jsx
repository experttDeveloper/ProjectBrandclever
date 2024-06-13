import { Avatar, Tooltip } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReplyIcon from '@mui/icons-material/Reply';
import { Button } from 'react-bootstrap';
import moment from 'moment/moment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function CommentList({ Loading }) {

    const [isLoading, setIsLoading] = Loading();
    const [comments, setComments] = useState([]);
    const [moreComments, setMoreComments] = useState(3);
    const [like, setLike] = useState(false)

    const loadMoreComments = () => {
        setMoreComments(moreComments + 3); // Load 3 more blogs
    };


    const handleLike = (id) => {
        setLike(prevLikes => ({
            ...prevLikes,
            [id]: !prevLikes[id]
        }));
    };
    useEffect(() => {
        // URL of the server endpoint
        const url = 'https://brandclever.in/developer/brand/admin/form/get_comment.php';
        const fetchData = async () => {
            try {
                setIsLoading(true)
                // Make the GET request
                const response = await axios.get(url);
                setComments(response.data)
                setIsLoading(false)
            } catch (error) {
                console.log("error", error)
                setIsLoading(false)
            } finally {
                // Set loading to false after the fetch is complete
                setIsLoading(false);
            }
        };

        // Call the function to fetch data
        fetchData();
    }, [isLoading]);

    return (
        <>
            {
                comments.length && (
                    <>
                        {comments.slice(0, moreComments).map((ele, key) => {

                            const time = moment(ele.created_at).fromNow();
                            return (
                                <>
                                    <div className='comment_list_section'>
                                        <div className='comment_desc' key={key}>
                                            <div className='list_avtar'>
                                                <Avatar />
                                            </div>
                                            <div className='list_name'>
                                                <p>{ele.name}</p>
                                            </div>

                                            <div className='action'>
                                                <Tooltip onClick={() => handleLike(ele.id)}>
                                                    {like[ele.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                                </Tooltip>
                                            </div>
                                        </div>
                                        <div className='list_time'>
                                            <p>{time}</p>
                                        </div>
                                        <div className='des'>
                                            <p>{ele.comment}</p>
                                        </div>
                                        <div className='reply_btn'>
                                            <ReplyIcon />
                                            <p>Reply</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </>
                )
            }

            {moreComments < comments.length && (
                <div className='load_more_cmnt'>
                    <Button onClick={loadMoreComments} className='more_comments'>Load More</Button>
                </div>

            )}
        </>
    )
}
