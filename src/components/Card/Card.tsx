import "./card.css";
import Rating from "../Rating/Rating";
import { imgBaseURL } from "../../network/api";
import { movieProps, TVProps } from "../../services/service";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatCurrency";
import NoImg from '../../assets/images/noIMG.svg'



interface CardProps {
  movie: movieProps & TVProps
}


const Card = ({ movie }: CardProps) => {
  return <>
    <div className="card">
      <div className="card-image" >
        <Link to={movie.title ? `/movies/${movie.id}` : `/tv/${movie.id}`}> <img src={movie.poster_path ? `${imgBaseURL}${movie.poster_path}` : NoImg} alt="mediatype image" /></Link>
        <div className="card-rating">
          <Rating rating={movie.vote_average} />
        </div>
      </div>

      <div className="card-body" style={{ display: 'block', marginTop: '1rem' }}>
        <div className="card-title">
          {movie.title ? movie.title : movie.name}
        </div>
        <div className="card-date">
          {movie.name ? formatDate(movie.first_air_date) : formatDate(movie.release_date)
          }
        </div>
      </div>
    </div>
  </>;
};

export default Card;
