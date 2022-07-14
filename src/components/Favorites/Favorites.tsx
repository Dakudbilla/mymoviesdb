import { Link } from "react-router-dom"
import { useFaveContext } from "../../context"
import FavMediaCard from "./FavMovieCard"
import './favorites.css'

const Favourites = () => {
    const { favMedia } = useFaveContext()
    return <div className="fav-container">
        <h1>
            Your Favourite TV Shows and Movies
        </h1>
        {
            favMedia && favMedia.length > 0 ? favMedia.map((media) => <FavMediaCard media={media} key={media.mediaId} />) :
                <h2><em>No Favorites added, <Link to='/'>Explore Movies</Link>  </em> </h2>

        }
    </div>

}

export default Favourites