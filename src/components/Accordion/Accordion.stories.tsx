import type {Meta, StoryObj} from "@storybook/react";
import {Accordion} from "./Accordion";
import React from "react";


export default {
    component: Accordion
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