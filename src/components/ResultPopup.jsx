import { useImperativeHandle , useRef} from "react";

export default function ResultsPopup({ ref, targettime, remainingTime, onReset }) {
    const dialog = useRef();

    const formattedRemainingTime = (remainingTime/1000).toFixed(2);

    const userLost = remainingTime <=0;

    useImperativeHandle(ref, () => {
        return{
            open(){
                dialog.current.showModal();
            }
        };
    });

    return (
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You Lost</h2>}
            <p>The target time was <strong>{targettime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime}</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
}