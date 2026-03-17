import { useState } from "react";

export default function Player() {
    const [enterPlayerName , setEnterPlayerName] = useState("");
    const [toSubmit , setToSubmit] = useState(false);

    function changedName(events){
        setToSubmit(false);
        setEnterPlayerName(events.target.value)
    }

    function submit(){
        setToSubmit(true)
    }
  return (
    <section id="player">
      <h2>Welcome {toSubmit ? enterPlayerName: "unknown entity"}</h2>
      <p>
        <input type="text"  onChange={changedName} value={enterPlayerName}/>
        <button onClick={submit}>Set Name</button>
      </p>
    </section>
  );
}