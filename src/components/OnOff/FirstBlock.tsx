import React from "react";
import styled from "styled-components";
import {SecondBlock} from "./SecondBlock";
import {Circle} from "./Circle";

type FirstBlockPropsType = {
    bgColor: string;
    selected?: boolean;
}

export const FirstBlock = (props: FirstBlockPropsType) => {
    return (
        <div>
            <FirstBlockStyled bgColor={props.bgColor}>ON</FirstBlockStyled>
            <SecondBlock/>
            <Circle bgColor={props.bgColor}/>
        </div>

    );
};

const FirstBlockStyled = styled.div<FirstBlockPropsType>`
    width: 200px;
    height: 200px;
    border: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    background-color: ${props => (props.bgColor)};
`
