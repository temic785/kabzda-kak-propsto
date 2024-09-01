import React from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
}


export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
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