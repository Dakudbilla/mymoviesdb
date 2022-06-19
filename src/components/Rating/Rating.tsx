import "./rating.css";
const Rating = () => {
  return (
    <>
      <div className="rating-container">
        <svg width="120" height="120" >
          <circle cx="60" cy="60" r="54" fill="none" stroke="rgb(248, 195, 185)" strokeWidth="12" />
          <circle className="inner-circle" style={{ strokeDashoffset: `calc(100 - 85)`, borderRadius: "50%" }} cx="60" cy="60" r="54" fill="none" stroke="tomato" strokeWidth="12" pathLength="100" />
        </svg>
        <div className="percent">
          85<sup>%</sup>
        </div>
      </div>
    </>)
};

export default Rating;
