/* This genric component just renders name of image on centre of that particular page  */
import "./Genric.css";
function Genric(props) {
  return (
    <div className="Genric-page">
      <div>
        <h4> {props.name} </h4>
      </div>
    </div>
  );
}
export default Genric;
