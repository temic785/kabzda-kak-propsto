import React from "react";

type DopPropsType = {
    manufacturer: string;
    model: string;
}
type DataDopPropsType = {
    data: DopPropsType[];
}


export const Dop = (props: DataDopPropsType) => {
    return (
        <div>
            {props.data.map((topCars, i: number) => {
                debugger;
                return (
                    <table key={i}>
                        <tr>
                            <th>manufacturer</th>
                            <th>model</th>
                        </tr>
                        <tr>
                            <td>{topCars.manufacturer}</td>
                            <td>{topCars.model}</td>
                        </tr>

                    </table>
                )
            })}
        </div>
    );
};

