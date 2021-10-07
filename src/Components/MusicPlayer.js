/* This component plays song */
import music from "../Images/Jaane_Tu..._Ya_Jaane_Na.jpg";
import song from "../Images/KabhiKabhiAditi.mp3";
import "./MusicPlayer.css";
function MusicPlayer() {
  return (
    <div className="music-page">
      <div className="music-box">
        <img className="music-image" src={music} alt="music"></img>
        <span>
          <h4> Kabhi Kabhi Aditi</h4>
          <h5> A. R. Rahman </h5>
        </span>
      </div>
      <div className="Audio-control">
        <audio controls src={song} type="audio/mp3"></audio>
      </div>
    </div>
  );
}
export default MusicPlayer;
