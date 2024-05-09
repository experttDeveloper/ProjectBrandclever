import React from 'react'
import { Facebook, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import '../css/SocialContact.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';


export default function SocialContact() {
    return (
        <div>
            <div id="wrapper">
                <div className="box-area">
                    <div id="box-front" className="box">
                        <Link to="https://www.instagram.com/brandclever.in/" className="button glow-button" target="_blank">
                            <Instagram />
                        </Link>
                    </div>
                    <div id="box-right" className="box">
                        <Link to="https://www.linkedin.com/company/brandclever/" className="button glow-button" target="_blank">
                            <LinkedIn />
                        </Link>
                    </div>
                    <div id="box-back" className="box">
                        <Link to="mailto:career@brandclever.in" className="button glow-button" target="_blank">
                            <MailOutlineIcon />
                        </Link>
                    </div>
                    <div id="box-left" className="box">
                        <Link to="tel:+91-9872711866" className="button glow-button" target="_blank">
                            <AddIcCallIcon />
                        </Link>
                    </div>
                    <div id="box-bottom" className="box">

                    </div>
                </div>
            </div>
        </div>
    )
}
