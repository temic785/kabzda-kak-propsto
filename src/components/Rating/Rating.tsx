import React, {useState} from "react";

type RatingPropsType = {}

export const Rating = (props: RatingPropsType) => {

    const [value, setValue] = useState(0)
    return (
        <div>
            <Star setValue={setValue} value={1} selected={value > 0}/>
            <Star setValue={setValue} value={2} selected={value > 1}/>
            <Star setValue={setValue} value={3} selected={value > 2}/>
            <Star setValue={setValue} value={4} selected={value > 3}/>
            <Star setValue={setValue} value={5} selected={value > 4}/>


        </div>
    );
};

type StarPopsType = {
    selected?: boolean
    value: 0 | 1 | 2 | 3 | 4 | 5
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

export function Star(props: StarPopsType) {
    return (
        <span onClick={() => props.setValue(props.value)}>{props.selected ? <b>Star </b> : "Star "}</span>
    )
}