import React from "react";
import styled from "styled-components";

type CirclePropsType = {
    bgColor: string;
}

export const Circle = (props: CirclePropsType) => {
    return (
        <CircleStyled bgColor={props.bgColor}>

        </CircleStyled>
    );
};

const CircleStyled = styled.div<CirclePropsType>`
    border-radius: 50%;
    border: 5px solid black;
    width: 120px;
    height: 120px;
    background-color: ${props => (props.bgColor)};

`