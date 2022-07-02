import { usePalette } from 'react-palette'

import "./movie.css";
import testImage from './../../assets/images/test.jpg'
import Rating from "../../components/Rating/Rating";
import Trending from "../../components/Trending/Trending";
import { hexToRGB } from '../../utils/hextoRGB';
import { useParams } from 'react-router-dom';
const Movie = () => {
  const { id: movieID } = useParams()
  const { data, loading, error } = usePalette(testImage)

  console.log(movieID)
  return <section className="movie-page">
    <div className="movie-page-header" >
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundImage: `linear-gradient(to right, ${data.vibrant ? hexToRGB(data.vibrant, 1) : data.vibrant}, ${data.vibrant ? hexToRGB(data.vibrant, 0.6) : data.vibrant} )`, backgroundSize: 'cover' }}>
        <div className="movie-header-container" >
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

    </div>
    <div className="movie-extras">
      <div className="movie-cast">
        <div className="movie-cast-container">
          <div className="movie-cast-title">Top Billed Casts</div>
          <div className="movie-casts-cards" >
            <Trending />
            <div className="shadow"></div>

          </div>
        </div>
      </div>
      <div className="movie-sidebar">
        <div className="social-icons" >
          <svg xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(0)' }} width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(0)' }} width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(0)' }} width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(0)' }} width="24" height="24" viewBox="0 0 24 24"><path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fillRule="evenodd" clipRule="evenodd" /></svg>
        </div>
        <div className="movie-status">
          <div className="movie-status-title"> Status</div>
          <div className="movie-status-content"> Released</div>
        </div>

        <div className="movie-language">
          <div className="movie-language-title">Available language</div>
          <div className="movie-language-content"> English</div>
        </div>

        <div className="movie-budget">
          <div className="movie-budget-title">Available Budget</div>
          <div className="movie-budget-content"> $19,000,000</div>
        </div>

        <div className="movie-revenue">
          <div className="movie-revenue-title">Revenue</div>
          <div className="movie-revenue-content"> $9,000,000</div>
        </div>

      </div>


    </div>

  </section >

};

export default Movie;
