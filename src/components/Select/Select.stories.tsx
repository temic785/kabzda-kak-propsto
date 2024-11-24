import React, {ChangeEvent, useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    component: Select,
    title: "Select",
};
type ItemsType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    item: ItemsType[]
}

export const ControlledSelect = (props: SelectPropsType) => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }


    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option>none</option>
            <option value="1">Minsk</option>
            <option value="2">Moscow</option>
            <option value="3">Kiev</option>

        </select>
    );
};
export const SelectHW = (props: SelectPropsType) => {

    const [parentValue, setParentValue] = useState<string>("2")

    const [value, setValue] = useState<ItemsType[]>([
        {title: "Dasha", value: "1"},
        {title: "Artem", value: "2"},
        {title: "Roma", value: "3"},
        {title: "Nikita", value: "4"}
    ])


    return (
        <Select onClick={setParentValue} value={parentValue} item={value}/>
    )
}