import React, { useEffect, useState } from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, TablePagination, Paper, Typography } from '@mui/material';

import axios from 'axios';
import { Link } from 'react-router-dom';

export default function LandingPageUser() {

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        // URL of the server endpoint
        const url = 'https://brandclever.in/developer/brand/admin/form/get_landing_page_users.php';

        const fetchData = async () => {
            try {
                // Make the GET request
                const response = await axios.get(url);
                console.log("response",response.data)
                setUsers(response.data)
            } catch (error) {
                // Handle any errors
                setError(error);
            } finally {
                // Set loading to false after the fetch is complete
                setIsLoading(false);
            }
        };

        // Call the function to fetch data
        fetchData();
    }, [isLoading]);


    // Change page handler
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Change rows per page handler
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Calculate pagination
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);

    return (
        <div>
            <Paper>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Message</TableCell>
                            <TableCell>Date & Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.length ? (
                                <>
                                {(rowsPerPage > 0
                                    ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : users
                                ).map((user, key) => (
                                    <TableRow key={key}>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>{user.name} </TableCell>
                                        <TableCell><Link to={`mailto:${user.email}`}>{user.email}</Link> </TableCell>
                                        <TableCell>{user.number ? user.number : "None"}</TableCell>
                                        <TableCell>{user.message}</TableCell>
                                        <TableCell>{user.created_at}</TableCell>
        
                                    </TableRow>
                                ))}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={4} />
                                    </TableRow>
                                )}
                                
                                </>
                            ):(
                                <Typography variant='h5'>
                                    No data found
                                </Typography>
                            )
                        }
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[10, 20, 100]}
                    component="div"
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
}
