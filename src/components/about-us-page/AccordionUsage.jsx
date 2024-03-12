import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function AccordionUsage() {
    return (
        <div>
            <style>
                {`
                    .MuiPaper-root {
                        background-color: transparent; /* Set background color of accordion to transparent */
                    }
                `}
            </style>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<MdOutlineKeyboardArrowDown fontSize={25}  style={{color:"white"}} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <h1 style={{ color: "rgb(23, 139, 23)", fontSize: "20px" }}>EXPERTISE IN MECHANICAL AND CIVIL WORKS</h1>
                </AccordionSummary>
                <AccordionDetails>
                   <p style={{color:"white"}}> At the core of our success is the fusion of
                    mechanical precision and civil mastery. Our team
                    of professionals brings together diverse skills to
                    create a harmonious blend that is evident in the
                    successful completion of projects. </p>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<MdOutlineKeyboardArrowDown fontSize={25} style={{color:"white"}} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <h1 style={{ color: "rgb(23, 139, 23)", fontSize: "20px" }}> VERSATILITY IN PROJECT SCOPE</h1>
                </AccordionSummary>
                <AccordionDetails>
                <p style={{color:"white"}}>Whether it's a large-scale government initiative
                    or a private venture, we have the experience and
                    capability to handle projects of varying scopes
                    and complexities. Our adaptability sets us apart,
                    ensuring that we meet the unique requirements 
                    of each undertaking.  </p>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<MdOutlineKeyboardArrowDown fontSize={25} style={{color:"white"}}  />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h1 style={{ color: "rgb(23, 139, 23)", fontSize: "20px" }}>COMMITMENT TO EXCELLENCE</h1>
                </AccordionSummary>
                <AccordionDetails>
                <p style={{color:"white"}}> Excellence is not just a goal; it's a commitment
                    we uphold in every aspect of our work. From the
                    conceptualization phase to project completion,
                    we adhere to the highest standards, ensuring
                    that each project stands as a testament to our
                    dedication to quality.</p>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
