import React from "react";
import styled from "styled-components";
import {FirstBlock} from "./FirstBlock";
import {SecondBlock} from "./SecondBlock";


type OnOffPropstType = {
    trafficLight: boolean;
}


export const OnOff = (props: OnOffPropstType) => {
    return (
        <OnOffStyled>
            {props.trafficLight && <FirstBlock bgColor={"red"}/>}
            {!props.trafficLight && <FirstBlock bgColor={"green"}/>}

        </OnOffStyled>)


    // if (props.trafficLight === true) {
    //     return (
    //     <OnOffStyled>
    //         <FirstBlock bgColor={"red"}/>
    //         <SecondBlock/>
    //         <Circle/>
    //     </OnOffStyled>)
    // } else {
    //     return (<OnOffStyled>
    //         <FirstBlock/>
    //         <SecondBlock bgColor={"green"}/>
    //         <Circle/>
    //     </OnOffStyled>)
    // }


};


const OnOffStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 100px;
    flex-direction: row;
`

//
// const Block = styled.div`
//     width: 200px;
//     height: 200px;
//     border: 3px solid black;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: red;
// `


