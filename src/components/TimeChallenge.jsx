import React, { useState } from "react";

export default function TimeChallenge({ title, targetTime }) {
    const [timeStarted, setTimeStarted] = useState(false);
    const [timeExpired, setTimeExpired] = useState(false);

    function handleSelect() {
        setTimeout(() => {
            setTimeExpired(true);
        }, targetTime * 1000);

        setTimeStarted(true);
    }

    return (
        <section className="challenge">
            <h3>{title}</h3>
            {timeExpired && <p>You Lost</p>  }
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <button onClick={handleSelect} >
                {timeStarted ? 'stop' :'Start'} challenge
            </button>
            <p className= {timeStarted ? 'active' : undefined } >
                {timeStarted ? 'Time is running' : 'Time Inactive'}
            </p>
        </section>
    );
} 