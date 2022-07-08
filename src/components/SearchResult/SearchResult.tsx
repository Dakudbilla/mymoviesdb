import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearchedMovies, getSearchedTV, imgBaseURL } from '../../network/api';
import { movieProps } from '../../services/service';
import './searchresult.css';
import { formatDate } from '../../utils/formatCurrency';
import Spinner from '../Spinner/Spinner';
import NoImg from '../../assets/images/noIMG.svg'
interface numRes {
  total_pages: number
  total_results: number
}
const SearchResult = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState<movieProps[]>()
  const [tv, setTv] = useState<movieProps[]>()
  const [numTVRes, setNumTVRes] = useState<numRes>()
  const [numMoviesRes, setNumMovieRes] = useState<numRes>()
  const [isActive, setIsActive] = useState("movies_search")
  const [loopingMedia, setLoopingMedia] = useState<movieProps[]>()

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    if (event.currentTarget.id !== isActive) {
      setIsActive(event.currentTarget.id)

    }

    if (event.currentTarget.id === "movies_search" && movies) {
      console.log({ 'mmmooov': movies })
      setLoopingMedia(movies)
    }


    if (event.currentTarget.id === "tv_shows_search" && tv) {
      console.log({ 'kkdks': tv })
      setLoopingMedia(tv)
    }


  }
  useEffect(() => {
    const fetchSearchMovies = async () => {
      const res = await getSearchedMovies(searchParams.get('query') || '')
      setMovies(res.data.results)
      setLoopingMedia(res.data.results)
      setNumMovieRes({ total_pages: res.data.total_pages, total_results: res.data.total_results })
    }

    const fetchSearchTV = async () => {
      const res = await getSearchedTV(searchParams.get('query') || '')
      setTv(res.data.results)

      setNumTVRes({ total_pages: res.data.total_pages, total_results: res.data.total_results })

    }


    fetchSearchMovies()
    fetchSearchTV()

  }, [])
  return <div className="search-result">
    <div className="search-result-container">
      <div className="search-result-sidebar">
        <div className="search-result-sidebar-header">
          Search Results
        </div>
        <ul className="search-results-groups">
          <li className={isActive === "movies_search" ? "isActive-search" : ''} id="movies_search" onClick={handleClick}>
            <h4>Movies</h4>
            <span>{numMoviesRes?.total_results}</span>
          </li>
          <li id='tv_shows_search' className={isActive === "tv_shows_search" ? "isActive-search" : ''} onClick={handleClick}>
            <h4>TV shows</h4>
            <span>{numTVRes?.total_results}</span>
          </li>
        </ul>
      </div>
      <div className="search-result-main-container" >
        {
          loopingMedia ? loopingMedia.map((movie) => (
            <div className="search-result-main" key={movie.id}>
              <div className="search-result-card">
                <div className="search-res-img">
                  <Link to={`/movies/${movie.id}`}> <img src={movie.poster_path ? `${imgBaseURL}${movie.poster_path}` : NoImg} alt="mediatype image" width="200px" height="100%" /></Link>

                </div>
                <div className="search-res-body">
                  <div className="search-body-title">{movie.title}</div>
                  <div className="search-body-date">{formatDate(movie.release_date)}</div>
                  <div className="search-body-overview">{movie.overview.length > 256 ? movie.overview.slice(0, 256) + '...' : movie.overview} </div>
                </div>
              </div>
            </div>
          )) : <Spinner />
        }
      </div>

    </div>
  </div>;
};

export default SearchResult;
