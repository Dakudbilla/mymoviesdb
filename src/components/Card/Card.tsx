import "./card.css";
import testImage from '../../assets/images/test.jpg'
const Card = () => {
  return <>
    <div className="card">
      <div className="card-image">
        <img src={testImage} alt="test image" />
        <div className="card-rating">
          <div className="card-rating-number">
            <span>82</span>  
            
            <sup className="rating-sup"><i className="uil uil-percentage"></i></sup>
          </div>
          {/* <div className="card-rating-loader">
            
          </div> */}
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
