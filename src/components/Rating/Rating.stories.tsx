import type {Meta, StoryObj} from "@storybook/react";
import React, {useState} from "react";
import {Rating, Star} from "./Rating";


export default {
    component: Rating,
    title: "Rating",
};


export const StarNoClick = () => {
    return (
        <div>
            <Star setValue={x => x} value={1} selected={false}/>
            <Star setValue={x => x} value={2} selected={false}/>
            <Star setValue={x => x} value={3} selected={false}/>
            <Star setValue={x => x} value={4} selected={false}/>
            <Star setValue={x => x} value={5} selected={false}/>
        </div>
    )
}
export const StarClick = () => {
    return (
        <div>
            <Star setValue={x => x} value={1} selected={true}/>
            <Star setValue={x => x} value={2} selected={true}/>
            <Star setValue={x => x} value={3} selected={true}/>
            <Star setValue={x => x} value={4} selected={true}/>
            <Star setValue={x => x} value={5} selected={true}/>
        </div>
    )
}

export const ModeChangingRating = () => {
    return <Rating/>
}