import { Link } from "react-router-dom";
import { useFaveContext } from "../../context";
import "./navbar.css";

const NavbBar = () => {
  const { isUserLoggedIn, addOrRemoveFav, favMovies, signInWithGoogle } = useFaveContext()

  return (
    <section className="nav">
      <div className="nav-container">
        <div className="nav-title">
          <div className="logo"><Link to='/'>MyMoviesDB</Link></div>
        </div>
        <div className="nav-others">
          <ul>
            <li><Link to='/movies'>Movies</Link> </li>
            {
              isUserLoggedIn ? <li><Link to='/favorites'>My Favourites</Link> </li> : <li style={{ cursor: 'pointer' }} onClick={() => signInWithGoogle()}> Sign In with Google</li>
            }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavbBar;
