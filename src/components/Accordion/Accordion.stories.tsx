import type {Meta, StoryObj} from "@storybook/react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";
import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


export default {
    component: Accordion,
    title: "Accordion",
};

const onClickCallBack = action("some item was clicked")
const [collapsed, dispatch] = useReducer(reducer, {collapsed: true});

export const CollapsedAccordion = () => {

    return <Accordion collapsed={collapsed.collapsed}
                      setCollapsed={() => {
                      }}
                      title={"Menu"}
                      items={[{title: "Dasha", value: 1}, {title: "Artem", value: 2}, {
                          title: "Roma",
                          value: 3
                      }, {title: "Nikita", value: 4}]} onClick={onClickCallBack}/>

}
export const OpenedAccordion = () => {
    return <Accordion collapsed={collapsed.collapsed}
                      setCollapsed={() => {
                      }}
                      title={"Menu"}
                      items={[{title: "Dasha", value: 1}, {title: "Artem", value: 2}, {
                          title: "Roma",
                          value: 3
                      }, {title: "Nikita", value: 4}]} onClick={onClickCallBack}/>
}

export const ModeChangingAccordion = () => {
    // const [state, setState] = React.useState(false);
    return <Accordion collapsed={collapsed.collapsed}
                      setCollapsed={() => dispatch({type: TOGGLE_COLLAPSED})}
                      title={"Menu"}
                      items={[{title: "Dasha", value: 1}, {title: "Artem", value: 2}, {
                          title: "Roma",
                          value: 3
                      }, {title: "Nikita", value: 4}]} onClick={onClickCallBack}/>
}