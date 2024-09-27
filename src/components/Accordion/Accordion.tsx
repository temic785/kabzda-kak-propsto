import React, {useState} from "react";

type AccordionPropsType = {
    title: string;
}


export const Accordion = (props: AccordionPropsType) => {


    let [collapsed, setCollapsed] = useState(false);


    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={() => {
                setCollapsed(!collapsed)
            }}>Toggle
            </button>
            {!collapsed ? <AccordionBody/> : null}
        </div>
    );

};
// export const Accordion = (props: AccordionPropsType) => {
//     if (props.collapsed === true) {
//         return (
//             <div>
//                 <AccordionTitle title={props.title}/>
//             </div>
//
//         )
//     } else {
//         return (
//             <div>
//                 <AccordionBody/>
//             </div>
//         );
//     }
//
// };
type AccordionTitlePropsType = {
    title: string;
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3>{props.title}</h3>
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