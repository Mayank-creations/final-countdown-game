import React, { useState , useRef } from "react";

export default function TimeChallenge({ title, targetTime }) {

    const timer = useRef();

    const [timeStarted, setTimeStarted] = useState(false);
    const [timeExpired, setTimeExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimeExpired(true);
        }, targetTime * 1000);

        setTimeStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current);

    }

    return (
        <section className="challenge">
            <h3>{title}</h3>
            {timeExpired && <p>You Lost</p>  }
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <button onClick = {timeStarted ? handleStop : handleStart}  >
                {timeStarted ? 'stop' :'Start'} challenge
            </button>
            <p className= {timeStarted ? 'active' : undefined } >
                {timeStarted ? 'Time is running' : 'Time Inactive'}
            </p>
        </section> 
    );
} 