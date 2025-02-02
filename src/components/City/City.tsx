import React from "react";

export type CityType = {
    id: string,
    country: string,
    city: string,
    population: number
}
export type CityPropsType = {
    city: CityType[]
    filterCity: () => void
}

export const City = ({city, filterCity}: CityPropsType) => {

    return (

        <select name="citySelect" onClick={filterCity}>
            {
                city.map(arr => (
                    <option>{arr.city}</option>
                ))
            }
        </select>
    );
};
