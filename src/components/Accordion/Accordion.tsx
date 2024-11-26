import React from "react";
import {StateType} from "./reducer";


export type AccordionPropsType = {
    title: string;
    setCollapsed: () => void;
    collapsed: boolean;
    items: ItemsType[]
    onClick: (value: any) => void
}

type ItemsType = {
    title: string
    value: any
}


export const Accordion = ({title, collapsed, setCollapsed, items, onClick}: AccordionPropsType) => {


    return (
        <div>
            <AccordionTitle onClick={setCollapsed} title={title}/>
            {!collapsed ? <AccordionBody onClick={onClick} items={items}/> : null}
        </div>
    );

};

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
}

export type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (i: any) => void
}


const AccordionTitle = ({title, onClick}: AccordionTitlePropsType) => {
    return (
        <h3 onClick={onClick}>{title}</h3>
    )
}
const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>
    )
}