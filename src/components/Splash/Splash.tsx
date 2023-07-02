import { Link } from "react-router-dom";
import "./Splash.scss";

// NOTE for link to pizza form
// <Link to="form"></Link>

function Splash() {
  return (
    <>
      <div className="splash-zone"></div>
      <Link to="/form" className="start-form">
        INITIATE PIZZA
      </Link>
    </>
  );
}

export default Splash;
