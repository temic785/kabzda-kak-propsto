import type {Meta, StoryObj} from "@storybook/react";
import {Accordion} from "./Accordion";
import React from "react";


export default {
    component: Accordion,
    title: "Accordion",
};


export const CollapsedAccordion = () => {
    return <Accordion collapsed={true}
                      setCollapsed={() => {
                      }}
                      title={"Menu"}/>

}
export const OpenedAccordion = () => {
    return <Accordion collapsed={false}
                      setCollapsed={() => {
                      }}
                      title={"Menu"}/>
}

export const ModeChangingAccordion = () => {
    const [state, setState] = React.useState(false);
    return <Accordion collapsed={state}
                      setCollapsed={() => setState(!state)}
                      title={"Menu"}/>
}