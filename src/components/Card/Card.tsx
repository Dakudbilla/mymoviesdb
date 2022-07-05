import "./card.css";
import Rating from "../Rating/Rating";
import { imgBaseURL } from "../../network/api";
import { movieProps, TVProps } from "../../services/service";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatCurrency";



interface CardProps {
  movie: movieProps & TVProps
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
          {movie.media_type && movie.media_type !== "movie" ? movie.name : movie.title}
        </div>
        <div className="card-date">
          {movie.media_type && movie.media_type !== "movie" ? formatDate(movie.first_air_date) : formatDate(movie.release_date)
          }
        </div>
      </div>
    </div>
  </>;
};

export default Card;
