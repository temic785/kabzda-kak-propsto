import React, {useReducer, useState} from "react";
import "./App.css";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {reducer, TOGGLE_COLLAPSED} from "./components/Accordion/reducer";

const topCars = [
    {manufacturer: "BMW", model: "m5cs"},
    {manufacturer: "Mercedes", model: "e63s"},
    {manufacturer: "Audi", model: "rs6"}
]

function App() {
    //const [collapsed, setCollapsed] = useState<boolean>(true);
    const [collapsed, dispatch] = useReducer(reducer, {collapsed: true});
    const [color, setColor] = useState<boolean>(true);

    const onClickCallBack = "some item was clicked"

    return (
        <div className="App">
            {/*<Accordion collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)} title={"Menu"}*/}
            <Accordion collapsed={collapsed.collapsed} setCollapsed={() => dispatch({type: TOGGLE_COLLAPSED})}
                       title={"Menu"}
                       items={[{title: "Dasha", value: 1}, {title: "Artem", value: 2}, {
                           title: "Roma",
                           value: 3
                       }, {title: "Nikita", value: 4}]} onClick={() => console.log(onClickCallBack)}/>
            <Rating/>
            {/*<Dop data={topCars}/>*/}
            <OnOff colorState={color} onChange={() => setColor(!color)}/>

        </div>
    );
}

export default App;
