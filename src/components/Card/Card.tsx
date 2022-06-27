import "./card.css";
import testImage from '../../assets/images/test.jpg'
import Rating from "../Rating/Rating";
import { imgBaseURL } from "../../network/api";



const Card = ({ movie }) => {
  return <>
    <div className="card">
      <div className="card-image">
        <img src={`${imgBaseURL}${movie.poster_path}`} alt="test image" />
      </div>
      <div className="card-rating">
        <Rating rating={movie.vote_average} />
      </div>
      <div className="card-body">
        <div className="card-title">
          Title
        </div>
        <div className="card-date">
          Date
        </div>
      </div>
    </div>
  </>;
};

export default Card;
