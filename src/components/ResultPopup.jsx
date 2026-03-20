export default function ResultsPopup({ ref, result, targettime }) {
    return (
        <dialog ref={ref} className="result-modal">
            <h2>YOU {result}</h2>
            <p>The target time was <strong>{targettime} seconds.</strong></p>
            <p>You stopped the timer with <strong> X seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}