import Player from "./components/Player.jsx";
import Header from "./components/Header.jsx";
import TimeChallenge from "./components/TimeChallenge.jsx";

function App() {
  return (
    <>
      <Header />
      <Player />
      <div id="challenges">
        <TimeChallenge title = 'EASY' targetTime={1} />
        <TimeChallenge title = 'NOT EASY' targetTime={5} />
        <TimeChallenge title = 'GETTING TOUGH' targetTime={10} />
        <TimeChallenge title = 'PROFESSIONAL' targetTime={20} />
      </div>
    </>
  );
}

export default App;