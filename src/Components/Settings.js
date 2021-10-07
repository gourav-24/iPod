/* This Component renders setting wheel image and name on Settings page */
import setting from "../Images/settings.png";
import "./Settings.css";
function Settings() {
  return (
    <div className="settings-page">
      <div>
        <img
          className="settings-image"
          src={setting}
          alt="settings wheeel"
        ></img>
        <h4> Settings </h4>
      </div>
    </div>
  );
}
export default Settings;
