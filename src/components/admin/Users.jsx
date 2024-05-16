import React, { useEffect, useState } from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, TablePagination, Paper, Checkbox, Button, Chip } from '@mui/material';

import { toast } from 'react-toastify';

export default function Users() {

    const [users, serUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selected, setSelected] = useState([]);
    const [isLoading, setIsLoading] = useState(false);



    // useEffect(() => {
    //     (async () => {
    //         setIsLoading(true)
    //         const result = await getAllUsers();
    //         serUsers(result)
    //         setIsLoading(true)
    //     })()
    // }, [isLoading])


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
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    {/* <TableBody>
                        {(rowsPerPage > 0
                            ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : users
                        ).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell padding="checkbox">
                                    <Checkbox checked={selected.indexOf(row._id) !== -1} />
                                </TableCell>
                                <TableCell>{row._id}</TableCell>
                                <TableCell>{row.firstname} {row.lastname} </TableCell>
                                <TableCell>{row.email}</TableCell>
                              
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={4} />
                            </TableRow>
                        )}
                    </TableBody> */}
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
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
