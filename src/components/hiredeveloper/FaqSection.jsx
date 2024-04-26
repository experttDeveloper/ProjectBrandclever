import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FaqSection() {
    return (
        <div>
            <div className="faqs">
                <div className="container">
                    <div className="title_faqs">
                        <h2 className="titlefaqs">Frequently Asked Questions</h2>
                    </div>
                    <div className="accordionfaq">
                        <div className="left_side_faq">

                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        What is Shopify, and why is it popular for e-commerce?
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Shopify is a leading e-commerce platform that allows
                                        businesses to create and manage online stores. Its popularity
                                        stems from its user-friendly interface, customizable
                                        templates, secure transactions, and a range of powerful
                                        features tailored to e-commerce needs.
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        Can I make changes to my Shopify store after it's live?
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Absolutely. You have complete control over your Shopify store
                                        and can make changes such as adding products, updating
                                        content, modifying design elements, and integrating new
                                        features even after it's live.
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        How can a Shopify expert help improve my online store?
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Shopify experts have specialized knowledge to enhance your
                                        store's design, functionality, and performance. They can
                                        optimize the user experience, integrate third-party apps,
                                        customize themes, and implement strategies for increased
                                        conversions and sales.
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        Do Shopify experts provide SEO services for my store?
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Yes, many Shopify experts offer SEO services to optimize your
                                        store for search engines. They can help with keyword research,
                                        meta tags, page speed optimization, and other SEO strategies
                                        to improve visibility and ranking.
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                        <div className="right_side_faq">
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        How long does setting up a Shopify store with your expert help
                                        take?
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        The timeframe varies depending on the complexity of the
                                        project. A simple store setup may take a few days, while a
                                        more customized and feature-rich store can take several weeks.
                                        Timelines are typically discussed and agreed upon during
                                        project consultation.
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        Can I get support and maintenance for my Shopify store
                                        post-launch?
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Yes, Shopify experts often provide ongoing support and
                                        maintenance services. This includes updates, security patches,
                                        troubleshooting, and ensuring your store operates smoothly and
                                        securely.
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        How secure is Shopify for processing customer payments?
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Shopify is highly secure for processing payments. It is PCI
                                        DSS compliant, ensuring that all payment transactions and
                                        customer data are handled securely and meet industry standards
                                        for payment processing.
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        Are there limits to the customization of a Shopify store?
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        While Shopify provides a structured environment, it offers
                                        extensive customization options. Experts can tailor themes,
                                        add custom code, and utilize apps to achieve a wide range of
                                        design and functional enhancements to suit your unique
                                        business needs.
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
