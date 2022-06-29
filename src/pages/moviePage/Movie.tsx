import "./movie.css";
import testImage from './../../assets/images/test.jpg'
import Rating from "../../components/Rating/Rating";
const Movie = () => {
  return <section className="movie-page">
    <div className="movie-page-header">
      <div className="movie-header-container">
        <div className="movie-poster-image">
          <img src={testImage} alt="movie image" width="300px" height="450px" />
        </div>
        <div className="movie-details">
          <div className="movie-title"> Kaakuka Samula Tikoo</div>
          <div className="movie-header-actions">
            <div className="movie-rating">
              <div className="user-score">User Score</div>
              <Rating rating={5.9} />
            </div>
            <div className="fav-icon">

              <svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path fill="#ffffff" id="heart" d="M27.78131,11.92578c0,4.82666-6.13562,8.68128-11.0376,14.0686a.99978.99978,0,0,1-1.48742,0c-4.902-5.38732-11.03748-9.24194-11.03748-14.0686,0-5.52954,7.53626-9.48682,11.57507-3.82544a.25855.25855,0,0,0,.42029.00562C20.47992,2.43628,27.78131,6.39453,27.78131,11.92578Z" />
              </svg>

            </div>
          </div>
          <div className="move-overview">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore sed molestias veniam in blanditiis inventore facilis exercitationem. Debitis, dolorem quod ratione totam sed eum minima veritatis enim earum delectus nihil reprehenderit asperiores cumque at ducimus, quidem eveniet eius facilis praesentium. Sapiente consequatur fuga illum unde quia! Consectetur illo neque accusantium? Laboriosam explicabo non unde aliquam iste laudantium vitae perspiciatis, quidem quisquam dolorum doloremque assumenda obcaecati minima asperiores tempora incidunt quia natus similique. Perferendis non quaerat vitae sequi illo, a tenetur, eaque rerum iure dicta animi quae, placeat at quos. Mollitia eaque porro nulla excepturi ab aliquid impedit nemo odit nam.

          </div>
        </div>
      </div>

    </div>
  </section >

};

export default Movie;
