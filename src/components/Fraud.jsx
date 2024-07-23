import * as React from 'react';
import '../css/Fraud.css';
import { Container } from 'react-bootstrap';
import MetaTitleDes from './MetaTitleDes';
import TopHeader from './TopHeader';

const Fraud = () => {
    return (
        <>
            <MetaTitleDes title={"BrandClever - Leading IT Service Provider In India"} description={"To Know More. How we different from others. We aim to provide ideal solutions to our clients using the latest innovative technology strategies."} />

            <TopHeader title="Fraud Disclaimer" description="Brandclever will never send unsolicited mailings requesting sensitive information. Your security is our top priority. Any questionable activities should be reported right away." />
                <div className="uppersection_fraud">
                    <Container className='fraud_section'>
                        <div className="terms_conditions_inner">

                            <div className="popup_fraud_content">
                                <h2 className="title_fraud_content_heading">To Our Esteemed Clients</h2>
                                <p className="title_fraud_contenttext">
                                    We've learned that dishonest individuals are trying to damage Brandclever's name by engaging in fraudulent activity. We want to make sure that our clients are educated and shielded from potential scammers, thus we take this topic extremely seriously.
                                </p>
                                {/* <div className="fake_channels">
                                    <p className="identified"><b>We have identified a <span className="fake">fake</span> website:</b></p>
                                    <a href="https://brandclever.in/contact" className="text_red">
                                    https://brandclever.in/contact
                                    </a>
                                    <p className="Telegram">
                                        <b>Fraud Telegram channel:</b> <span className="aronwebsol">@aronwebsolutionsCS</span> Please note
                                        that these are not associated with our official operations.
                                    </p>
                                </div> */}
                                <p className="official">
                                    <span className="Our">There are only official means of communication available on our website.</span>
                                </p>
                                <p><a href="brandclever.in/" className="sec_clr">brandclever.in/</a></p>
                                {/* <p><a href="https://www.aronwebsolutions.co.uk" className="sec_clr">https://www.aronwebsolutions.co.uk</a></p> */}
                                <p className="fs_30"><span className="fs_26">Our Official email address:</span></p>
                                <p>
                                    <a href="mailto:career@brandclever.in" className="fw_break mailto:sec_clr">
                                        career@brandclever.in
                                    </a>
                                </p>
                                <p>
                                    <a href="mailto:hr.brandclever@gmail.com" className="fw_dark sec_clr">
                                        hr.brandclever@gmail.com
                                    </a>
                                </p>
                                <p className="fs_30"><span className="fs_26">Our official contact number:</span><span className="fs_30"> +91-9872711866.</span></p>
                                <p>
                                We highly advise avoiding interacting with unapproved websites or Telegram groups. Brandclever does not support any contact or transaction that is started on these platforms.
                                Only our official email addresses and website are used for formal correspondence.
                                </p>
                                <p>
                                We strongly advise you to confirm the legitimacy of our correspondence by cross-referencing specifics with our official website and contact data. Please contact us at <span className="sec_clr"> +91-9872711866</span> or report any suspicious behavior you come across right away to <span className="sec_clr">
                                    <a href="mailto:hr.brandclever@gmail.com">hr.brandclever@gmail.com</a></span>.
                                </p>
                                <p>
                                Brandclever is dedicated to provide secure and reliable services. We are taking proactive measures to resolve this matter and value your cooperation in being watchful for any fraudulent attempts.
                                </p>
                            </div>
                            <p className="terms_para terms_spb">
                            We take great pride in doing our business with integrity and morality. The purpose of this fraud alert is to let you know that we take scams seriously and that we want to make sure you and we are safe from any challenging situations.
                            </p>
                            <h3 className="terms_inner_headings">Acceptance of the Conditions</h3>
                            <p className="terms_para terms_spb">
                            You acknowledge and agree to be bound by these terms and conditions by using our services and visiting our website. Please do not use our services if you disagree with any aspect of these terms.
                            </p>
                            <h3 className="terms_inner_headings">Work Assignment Online</h3>
                            <p className="terms_para terms_spb">
                            We do not randomly approach people for unpaid employment assignments like writing online reviews or creating content. All of our contacts take place exclusively through our official channels of communication, which include the phone numbers mentioned on our website and company email addresses. Please feel free to call our official hotline to confirm any work requests.
                            </p>
                            <h3 className="terms_inner_headings">The client Rights and Obligations</h3>
                            <p className="terms_para terms_spb">
                            Being a client, you ensure that we will use current, correct information that is necessary to carry out our services successfully. You bear the responsibility for activities conducted using your account and for protecting account details, such as login credentials.
                            </p>
                            <h3 className="terms_inner_headings">Independent Contractors</h3>
                            <p className="terms_para terms_spb">
                            We might work with respectable outside service providers to help us deliver our services. These suppliers guarantee a high degree of data protection since they are bound by confidentiality agreements and only have access to the personal data required to carry out their assigned responsibilities.
                            </p>
                            <h3 className="terms_inner_headings">Payment Policies</h3>
                            <p className="terms_para terms_spb">
                            We will include specific payment conditions for our services in separate bids or agreements. It is your duty to make sure that all payments are made on time and in compliance with the conditions that have been established.
                            </p>
                            <h3 className="terms_inner_headings">Valid correspondence</h3>
                            <p className="terms_para terms_spb">
                            We value the confidentiality of client information and, unless required by law, will not divulge any proprietary or sensitive information to third parties without first obtaining written agreement.
                            </p>
                            <h3 className="terms_inner_headings">Promises and Outcomes</h3>
                            <p className="terms_para terms_spb">
                            Although we work hard to deliver high-quality services, we cannot promise any certain outcome and will not be held accountable for any punitive, consequential, incidental, direct, or indirect damages resulting from using or not being able to utilize our services.
                            </p>
                            <h3 className="terms_inner_headings">Expulsion</h3>
                            <p className="terms_para">
                            By giving written notice, any party may end the services at any moment. You will be liable for all amounts paid and expenses incurred through the termination date.
                            </p>
                        </div>
                    </Container>
                </div>
        </>
    );
};

export default Fraud;
