import React, {useState} from "react";
import "./App.css";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Dop} from "./Dop";
import {OnOff} from "./components/OnOff/OnOff";

const topCars = [
    {manufacturer: "BMW", model: "m5cs"},
    {manufacturer: "Mercedes", model: "e63s"},
    {manufacturer: "Audi", model: "rs6"}
]

function App() {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [color, setColor] = useState<boolean>(true);

    const onClickCallBack = "some item was clicked"

    return (
        <div className="App">
            <Accordion collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)} title={"Menu"}
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
