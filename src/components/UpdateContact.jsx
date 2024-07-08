import React from 'react';
import '../css/updatecontact.css';

export default function UpdateContact() {

    return (
        <div class="updated_container">
            <span class="big-circle"></span>
            <img src="img/shape.png" class="square" alt="" />
            <div class="form">
                <div class="contact-info">
                    <h3 class="title">Send us a Message!</h3>
                    <p class="text">
                        We're here to help with any questions you might have. Connect with our expert team to get the guidance you need for outstanding results. Simply fill out this quick form, and we'll get back to you soon.
                    </p>

                    <div class="info">
                        <div class="information">
                            <i class="fas fa-phone"></i>
                            <p>+91-9872711866</p>
                        </div>
                        <div class="information">
                            <i class="fas fa-envelope"></i>
                            <p>career@brandclever.in</p>
                        </div>
                        <div class="information">
                            <i class="location_brand fas fa-map-marker-alt"></i>

                            <p>4th Floor, F-301, Bansal Tower, Phase 8B, Industrial Area, Sector 74, Brandclever, Sahibzada Ajit Singh Nagar, Punjab 160055</p>
                        </div>

                    </div>

                    <div class="social-media">
                        <p>Connect with us :</p>
                        <div class="social-icons">
                            <a href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="contact-form custom_form">
                    <span class="circle one"></span>
                    <span class="circle two"></span>

                    <form action="index.html" autocomplete="off">
                        <h3 class="title">Contact us</h3>
                        <div class="input-container">
                            <input type="text" name="name" class="input" placeholder="Name*" />
                        </div>
                        <div class="input-container">
                            <input type="email" name="email" class="input" placeholder="Email*" />
                        </div>
                        <div class="input-container">
                            <input type="text" name="phone" class="input" placeholder="Subjet*" />
                        </div>
                        <div class="input-container textarea">
                            <textarea name="message" class="input" placeholder="Message*"></textarea>
                        </div>
                        <input type="submit" value="Submit" class="btn" />
                    </form>
                </div>
            </div>
        </div>
    )
}
