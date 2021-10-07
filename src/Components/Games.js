/* This Component renders dice image and name on Games page */
import dice from "../Images/dice.png";
import "./Games.css";
function Games() {
  return (
    <div className="games-page">
      <div>
        <img className="dice-image" src={dice} alt="dice"></img>
        <h4> Games </h4>
      </div>
    </div>
  );
}
export default Games;
