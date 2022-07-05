import "./rating.css";

interface ratingProps {
  rating: number
}

const Rating = ({ rating }: ratingProps) => {

  return (
    <>
      <div className="rating-container">
        <svg width="80" height="80" >
          <circle cx="40" cy="40" r="20" fill="#000" stroke="#000" strokeWidth="7" />
          <circle cx="40" cy="40" r="20" fill="#000" stroke={Math.round(rating * 10) >= 70 ? "#204529" : "#423d0f"} strokeWidth="3" />
          <circle className="inner-circle" style={{ strokeDashoffset: `calc(100 - ${rating * 10})`, borderRadius: "50%" }} cx="40" cy="40" r="20" fill="none" stroke={Math.round(rating * 10) >= 70 ? "#21d07a" : "#d2d531"} strokeWidth="3" pathLength="100" />
        </svg>
        {
          rating ? <div className="percent">
            {Math.round(rating * 10)}<sup>%</sup>
          </div> : <div className="percent">NR</div>
        }
      </div>
    </>)
};

export default Rating;
