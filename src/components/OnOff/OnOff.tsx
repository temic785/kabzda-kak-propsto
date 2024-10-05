import React from "react";
import styled from "styled-components";
import "../../App.css";

type OnOffPropstType = {
    onChange: () => void;
    colorState: boolean;
}
export const OnOff = (props: OnOffPropstType) => {
    return (
        <OnOffStyled>
            <Square colorState={props.colorState}/>
            <Circle colorState={props.colorState} onChange={props.onChange}/>
        </OnOffStyled>)
};

type SquareTypes = {
    colorState: boolean;
}
const Square = ({colorState}: SquareTypes) => {
    return (
        <>
            <div className="square" style={{backgroundColor: colorState ? "green" : ""}}>ON</div>
            <div className="square" style={{backgroundColor: !colorState ? "red" : ""}}>OFF</div>
        </>
    )
}

type CircleTypes = {
    colorState: boolean;
    onChange: () => void;
}
const Circle = (props: CircleTypes) => {

    const className = props.colorState ? "circle-green" : "circle-red"
    return (
        <div onClick={props.onChange} className={className}>
        </div>
    )
}

const OnOffStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding-top: 100px;
    flex-direction: row;
`


