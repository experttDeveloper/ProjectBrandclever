import { Container, Link } from '@mui/material';
import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import ContactUsModal from './components/ContactUsModal';


export default function Meeting() {

    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");

    const handleOpen = (name) => {
        setOpen(true);
        setName(name);
    }



    return (
        <>
            <Container>
                <h2 className='get_a_free'>Get a Free Consultation Today</h2>
                <p className='our_experts_gh'>Our experts are dedicated to helping you succeed.
                    Talk to an expert and get your questions answered in a free 30-minute call.</p>
                <Row>
                    <Col md={3}>
                        <section className="team_section meeting_team_section">
                            <div className="cards">
                                <div className="card" >
                                    <div className="card-img-wrapper">
                                        <img className='meeting_salwe_img' src={"/images/team/owner.png"} />
                                    </div>
                                    {/* <Link to={"#"} className="social-icon" target='_blank'><i class="fa-regular fa-circle-nodes"></i></Link> */}
                                    <div className="card-content-wrapper">
                                        <div className="card-content">
                                            <div className='main_meeting'>

                                                <h4>Manish Verma</h4>
                                                <p className='sale_meeting_team'>Sales Head (Digital Marketing Expert)</p>
                                            </div>
                                            <div class="header_btn_dot"><Link className="_meeting_lin" href="#" onClick={() => handleOpen("Manish Verma")}>Book An Appointment</Link></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Col>
                    <Col md={3}>
                        <section className="team_section meeting_team_section">
                            <div className="cards">
                                <div className="card" >
                                    <div className="card-img-wrapper">
                                        <img className='meeting_salwe_img' src={"/images/team/pooja_chahaun.png"} />
                                    </div>
                                    {/* <Link to={"#"} className="social-icon" target='_blank'><i class="fa-regular fa-circle-nodes"></i></Link> */}
                                    <div className="card-content-wrapper">
                                        <div href="#" className="card-content">
                                            <div className='main_meeting'>

                                                <h4>Pooja Chauhan</h4>
                                                <p className='sale_meeting_team'>Business Analyst</p>
                                            </div>
                                            <div class="header_btn_dot"><Link className="_meeting_lin" href="#" onClick={() => handleOpen("Pooja Chauhan")}>Book An Appointment</Link></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Col>
                    <Col md={3}>
                        <section className="team_section meeting_team_section">
                            <div className="cards">
                                <div className="card" >
                                    <div className="card-img-wrapper">
                                        <img className='meeting_salwe_img' src={"/images/team/ishika.png"} />
                                    </div>
                                    {/* <Link to={"#"} className="social-icon" target='_blank'><i class="fa-regular fa-circle-nodes"></i></Link> */}
                                    <div className="card-content-wrapper">
                                        <div href="#" className="card-content">
                                            <div className='main_meeting'>

                                                <h4>Ishika Bhardwaj</h4>
                                                <p className='sale_meeting_team'>Project Manager</p>
                                            </div>
                                            <div class="header_btn_dot"><Link className="_meeting_lin" href="#" onClick={() => handleOpen("Ishika Bhardwaj")}>Book An Appointment</Link></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Col>
                    <Col md={3}>
                        <section className="team_section meeting_team_section">
                            <div className="cards">
                                <div className="card" >
                                    <div className="card-img-wrapper">
                                        <img className='meeting_salwe_img' src={"/images/team/charanjit.png"} />
                                    </div>
                                    {/* <Link to={"#"} className="social-icon" target='_blank'><i class="fa-regular fa-circle-nodes"></i></Link> */}
                                    <div className="card-content-wrapper">
                                        <div href="#" className="card-content">
                                            <div className='main_meeting'>

                                                <h4>Charanjeet Singh</h4>
                                                <p className='sale_meeting_team'>Customer Relationship Manager</p>
                                            </div>
                                            <div class="header_btn_dot"><Link className="_meeting_lin" href="#" onClick={() => handleOpen("Charanjeet Singh")}>Book An Appointment</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>

            {
                open && (
                    <ContactUsModal useOpen={() => [open, setOpen]} nameTitle={name}/>
                )
            }
        </>
    );
}
