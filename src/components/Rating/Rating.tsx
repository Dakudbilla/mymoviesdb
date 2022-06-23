import "./rating.css";
const Rating = () => {
  return (
    <>
      <div className="rating-container">
        <svg width="80" height="80" >
          <circle cx="40" cy="40" r="20" fill="#000" stroke="#000" strokeWidth="7" />
          <circle cx="40" cy="40" r="20" fill="#000" stroke="#204529" strokeWidth="3" />
          <circle className="inner-circle" style={{ strokeDashoffset: `calc(100 - 20)`, borderRadius: "50%" }} cx="40" cy="40" r="20" fill="none" stroke="#21d07a" strokeWidth="3" pathLength="100" />
        </svg>
        <div className="percent">
          85<sup>%</sup>
        </div>
      </div>
    </>)
};

export default Rating;
