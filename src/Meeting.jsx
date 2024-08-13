import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function Meeting() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <IconButton variant="outlined" onClick={handleClickOpen} className='meeeting_btn'>
                <CalendarMonthIcon />
            </IconButton>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className='meeting_section'
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" className='meeting_title'>
                    Join via meeting link
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <div className='meeting_links'>
                        <Link href="https://calendly.com/experttdeveloper/15-minute-meeting" target="_blank">
                            <p className='linkss'>15 mintus</p>
                        </Link>
                        <Link href="https://calendly.com/experttdeveloper/30-minute-meeting" target="_blank">
                            <p className='linkss'>30 mintus</p>
                        </Link>
                    </div>
                </DialogContent>
            </BootstrapDialog>
        </React.Fragment>
    );
}
