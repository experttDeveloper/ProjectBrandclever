import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FaqSection({ data }) {
    return (
        <div>
            <div className="faqs">
                <div className="container">
                    <div className="title_faqs">
                        <h2 className="titlefaqs">Frequently Asked Questions</h2>
                    </div>
                    <div className="accordionfaq">
                        <div className="left_side_faq">
                            {
                                data.slice(0, 4).map((ele, key) => {
                                    return (
                                        <div key={key}>
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                >
                                                    {ele.question}
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {ele.answer}
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="right_side_faq">
                            {data.slice(4, 9).map((ele, key) => {
                                return (
                                    <div key={key}>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                            >
                                                {ele.question}
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {ele.description}
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                )
                            })}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
