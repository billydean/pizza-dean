import "./Menu.scss";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/" className="menu-link">
            Home
          </Link>
        </div>
        <div className="contact-surface">
          <div className="contact">LinkedIn</div>
          <div className="contact">GitHub</div>
        </div>
      </nav>
      <h1>Pizza Bone</h1>
    </header>
  );
}

export default Menu;
