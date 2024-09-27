import React from "react";
import "./App.css";
import {Dop} from "./Dop";
import {OnOff} from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

const topCars = [
    {manufacturer: "BMW", model: "m5cs"},
    {manufacturer: "Mercedes", model: "e63s"},
    {manufacturer: "Audi", model: "rs6"}
]

function App() {
    return (
        <div className="App">
            <Accordion title={"Menu"}/>
            <Accordion title={"List"}/>
            {/*<Dop data={topCars}/>*/}
            {/*<OnOff trafficLight={true}/>*/}
            {/*<OnOff trafficLight={false}/>*/}
            <Rating/>
        </div>
    );
}

export default App;
