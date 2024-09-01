import React from "react";
import "./App.css";
import {Accordion} from "./Accordion";
import {Dop} from "./Dop";
import {OnOff} from "./components/OnOff/OnOff";

const topCars = [
    {manufacturer: "BMW", model: "m5cs"},
    {manufacturer: "Mercedes", model: "e63s"},
    {manufacturer: "Audi", model: "rs6"}
]

function App() {
    return (
        <div className="App">
            {/*<Accordion title={"Menu"} collapsed={true}/>*/}
            {/*<Accordion title={"List"} collapsed={false}/>*/}
            {/*<Dop data={topCars}/>*/}
            <OnOff trafficLight={true}/>
            <OnOff trafficLight={false}/>
        </div>
    );
}

export default App;
