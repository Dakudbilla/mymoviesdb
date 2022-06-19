import "./card.css";
import testImage from '../../assets/images/test.jpg'
import Rating from "../Rating/Rating";
const Card = () => {
  return <>
    <div className="card">
      <div className="card-image">
        <img src={testImage} alt="test image" />
        <div className="card-rating">
          <Rating />
        </div>
      </div>

      <div className="body">
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
