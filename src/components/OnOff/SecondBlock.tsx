import React from "react";
import styled from "styled-components";

type SecondBlockPropsType = {
    bgColor?: string;
    selected?: boolean;

}


export const SecondBlock = (props: SecondBlockPropsType) => {
    return (
        <SecondBlockStyled bgColor={props.bgColor}>
            OFF
        </SecondBlockStyled>
    );
};

const SecondBlockStyled = styled.div<SecondBlockPropsType>`
    width: 200px;
    height: 200px;
    border: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => (props.bgColor)};

`