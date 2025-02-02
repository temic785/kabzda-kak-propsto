import {City, CityPropsType, CityType} from "./City";
import React, {useCallback, useMemo, useState} from "react";
import {v1} from "uuid";

export default {
    component: City,
    title: "City",
}

export const SecretCity = ({city, filterCity}: CityPropsType) => {
    console.log("Secret City")
    return (

        <select name="citySelect" onClick={filterCity}>
            {
                city.map(arr => (
                    <option key={arr.id}>{arr.city}</option>
                ))
            }
        </select>
    );
};

export const CityMemo = React.memo(SecretCity)


export const HelpsToReactCallback = () => {
    console.log("Like use callback");
    const originalCities = [
        {id: v1(), country: "Belarus", city: "Minsk", population: 2000000},
        {id: v1(), country: "Belarus", city: "Brest", population: 345000},
        {id: v1(), country: "Belarus", city: "Gomel", population: 500000},
        {id: v1(), country: "Russia", city: "Moscow", population: 1310000},
        {id: v1(), country: "Russia", city: "Saint-Petersburg", population: 560000},
        {id: v1(), country: "Russia", city: "Krasnoyarsk", population: 1198000},
        {id: v1(), country: "Poland", city: "Krasnoyarsk", population: 669000},
        {id: v1(), country: "Poland", city: "Krakow", population: 790000},
        {id: v1(), country: "Poland", city: "Warsaw", population: 1865000},
    ];

    const [city, setCity] = useState<CityType[]>(originalCities);
    const [counter, setCounter] = useState<number>(0)


    const allBelarusCity = useMemo(() => {
        return () => {
            setCity(originalCities.filter(c => c.country === "Belarus"))
        }
    }, [city])

    const moreOneMillionPopulation = useCallback(() => {
        setCity(originalCities.filter(c => c.population > 1000000))
    }, [city])

    const cityWithWordMInName = useCallback(() => {
        setCity(originalCities.filter(c => c.city.toLowerCase().includes("m")));
    }, [city])

    const sumCounter = useCallback(() => {
        let counterSum = counter + 1;
        setCounter(counterSum)
    }, [counter])

    return (
        <div>

            <CityMemo city={city} filterCity={allBelarusCity}></CityMemo>
            <CityMemo city={city} filterCity={moreOneMillionPopulation}></CityMemo>
            <CityMemo city={city} filterCity={cityWithWordMInName}></CityMemo>
            <button onClick={sumCounter}>+</button>
            <p>{counter}</p>
        </div>
    )
}