import React, { useState, useEffect } from "react";

import { CountdownBlock, RemainingTime } from "../components/CountdownComp";

function addZero(num) {
    return num < 10 ? '0' + num : num;
};

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

    return (
        <CountdownBlock>
            <RemainingTime>{addZero(seconds)}</RemainingTime>
        </CountdownBlock>
    );
};

export { Countdown, addZero };