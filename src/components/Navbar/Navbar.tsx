import { Link } from "react-router-dom";
import "./navbar.css";

const NavbBar = () => {
  return (
    <section className="nav">
      <div className="nav-container">
        <div className="nav-title">
          <div className="logo"><Link to='/'>MyMoviesDB</Link></div>
         
        </div>
        <div className="nav-others">
        <ul>
              <li><Link to='/movies'>Movies</Link> </li>
              <li><Link to='/streams'>Streams</Link></li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default NavbBar;
