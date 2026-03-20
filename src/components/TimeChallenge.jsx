import React, { useState , useRef } from "react";
import ResultsPopup from "./ResultPopup";

export default function TimeChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();

    const [timeStarted, setTimeStarted] = useState(false);
    const [timeExpired, setTimeExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimeExpired(true);
            dialog.current.showModal();
        }, targetTime * 1000);

        setTimeStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current);

    }

    return (
        <>
        <ResultsPopup ref={dialog} targettime={targetTime} result='lost'/>
        <section className="challenge">
            <h3>{title}</h3>
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
        </>
    );
} 