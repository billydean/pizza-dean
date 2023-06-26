import "./Menu.scss";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <header>
      <h1>Pizza Bone</h1>
      <nav>
        <Link to="/">Home</Link>
        <>Contact</>
      </nav>
    </header>
  );
}

export default Menu;
