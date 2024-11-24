import type {Meta, StoryObj} from "@storybook/react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";
import React from "react";


export default {
    component: Accordion,
    title: "Accordion",
};

const onClickCallBack = action("some item was clicked")

export const CollapsedAccordion = () => {

    return <Accordion collapsed={true}
                      setCollapsed={() => {
                      }}
                      title={"Menu"}
                      items={[{title: "Dasha", value: 1}, {title: "Artem", value: 2}, {
                          title: "Roma",
                          value: 3
                      }, {title: "Nikita", value: 4}]} onClick={onClickCallBack}/>

}
export const OpenedAccordion = () => {
    return <Accordion collapsed={false}
                      setCollapsed={() => {
                      }}
                      title={"Menu"}
                      items={[{title: "Dasha", value: 1}, {title: "Artem", value: 2}, {
                          title: "Roma",
                          value: 3
                      }, {title: "Nikita", value: 4}]} onClick={onClickCallBack}/>
}

export const ModeChangingAccordion = () => {
    const [state, setState] = React.useState(false);
    return <Accordion collapsed={state}
                      setCollapsed={() => setState(!state)}
                      title={"Menu"}
                      items={[{title: "Dasha", value: 1}, {title: "Artem", value: 2}, {
                          title: "Roma",
                          value: 3
                      }, {title: "Nikita", value: 4}]} onClick={onClickCallBack}/>
}