import "./card.css";
import Rating from "../Rating/Rating";
import { imgBaseURL } from "../../network/api";
import { movieProps } from "../../services/service";
import { Link } from "react-router-dom";

interface CardProps {
  movie: movieProps
}

const Card = ({ movie }: CardProps) => {
  return <>
    <div className="card">
      <div className="card-image" >
        <Link to={`/movies/${movie.id}`}> <img src={`${imgBaseURL}${movie.poster_path}`} alt="mediatype image" /></Link>
        <div className="card-rating">
          <Rating rating={movie.vote_average} />
        </div>
      </div>

      <div className="card-body" style={{ display: 'block', marginTop: '1rem' }}>
        <div className="card-title">
          {movie.title}
        </div>
        <div className="card-date">
          {new Date(movie.release_date).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })
          }
        </div>
      </div>
    </div>
  </>;
};

export default Card;
