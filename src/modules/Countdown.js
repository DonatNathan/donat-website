import React, { useState, useEffect } from "react";

import { CountdownBlock, RemainingTime } from "../components/CountdownComp";

const Countdown = ({end}) => {
    const [seconds, setSeconds] = useState(0);

    const getTimeUntil = (endCountdown) => {
        const time = Date.parse(endCountdown) - Date.parse(new Date());
        setSeconds(Math.floor((time/1000)));
    };
    
    useEffect(() => {
        getTimeUntil(end);
    });
    
    useEffect(() => {
        setInterval(() => getTimeUntil(end), 1000)
    }, [end]);

    const addZero = (num) => {
        return num < 10 ? '0' + num : num;
    };

    return (
        <CountdownBlock>
            <p>Deadline</p>
            <RemainingTime>{addZero(seconds)}</RemainingTime>
        </CountdownBlock>
    );
};

export default Countdown;