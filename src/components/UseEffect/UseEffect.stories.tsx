import {useEffect, useState} from "react";

export default {
    title: "UseEffect",
}
type ClockType = {
    hours: number
    min: number
    sec: number
}
export const Сlock = () => {
    const getDate = new Date();
    const [counter, setCounter] = useState<ClockType>({
        hours: getDate.getHours(),
        min: getDate.getMinutes(),
        sec: getDate.getSeconds(),
    });
    useEffect(() => {
        console.log("Example useEffect")
        const intervalId = setInterval(() => {

            setCounter(clock => {
                switch (true) {
                    case clock.hours === 23 && clock.min === 59 && clock.sec === 59: {
                        return {...clock, hours: 0, min: 0, sec: 0};
                    }
                    case clock.min === 59 && clock.sec === 59: {
                        return {...clock, hours: clock.hours + 1, min: 0, sec: 0};
                    }
                    case clock.sec === 59: {
                        return {...clock, min: clock.min + 1, sec: 0}
                    }
                    default:
                        return {...clock, sec: clock.sec + 1}
                }
            });
        }, 1000)

    }, [])

    return <>
        Hello counter:{counter.hours + ":" + counter.min + ":" + counter.sec}
    </>
}