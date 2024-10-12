import type {Meta, StoryObj} from "@storybook/react";
import React, {useState} from "react";
import {OnOff} from "./OnOff";


export default {
    component: OnOff,
    title: "OnOff",
};


export const StateOn = () => {
    return <OnOff colorState={true} onChange={() => {
    }}/>

}
export const StateOff = () => {
    return <OnOff colorState={false} onChange={() => {
    }}/>
}

export const ModeChangingOnOff = () => {
    const [color, setColor] = useState<boolean>(true);
    return <OnOff colorState={color} onChange={() => setColor(!color)}/>
}