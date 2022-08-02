import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFaveContext } from "../../context";
import FavMediaCard from "./FavMovieCard";
import "./favorites.css";

const Favourites = () => {
  const { favMedia, isUserLoggedIn } = useFaveContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div className="fav-container">
      {favMedia && favMedia.length > 0 && (
        <h1>Your Favourite TV Shows and Movies</h1>
      )}
      {favMedia && favMedia.length > 0 ? (
        favMedia.map((media) => (
          <FavMediaCard media={media} key={media.mediaId} />
        ))
      ) : (
        <h2>
          <em className="no-fav">
            No Favorites added, <Link to="/">Explore Movies</Link>
          </em>
        </h2>
      )}
    </div>
  );
};

export default Favourites;
