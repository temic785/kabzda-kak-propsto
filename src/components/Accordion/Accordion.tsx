import React from "react";


export type AccordionPropsType = {
    title: string;
    setCollapsed: () => void;
    collapsed: boolean;
}


export const Accordion = ({title, collapsed, setCollapsed}: AccordionPropsType) => {


    return (
        <div>
            <AccordionTitle onClick={setCollapsed} title={title}/>
            {!collapsed ? <AccordionBody/> : null}
        </div>
    );

};

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
}

const AccordionTitle = ({title, onClick}: AccordionTitlePropsType) => {
    return (
        <h3 onClick={onClick}>{title}</h3>
    )
}
const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}