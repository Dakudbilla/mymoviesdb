import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearchedMovies, getSearchedTV, imgBaseURL } from '../../network/api';
import { movieProps, TVProps } from '../../services/service';
import './searchresult.css';
import { formatDate } from '../../utils/formatCurrency';
import Spinner from '../Spinner/Spinner';
import NoImg from '../../assets/images/noIMG.svg'
import ReactPaginate from 'react-paginate';
interface numRes {
  total_pages: number
  total_results: number
  currentPage: number
}
const SearchResult = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState<(movieProps & TVProps)[]>()
  const [tv, setTv] = useState<(movieProps & TVProps)[]>()
  const [numTVRes, setNumTVRes] = useState<numRes>()
  const [numMoviesRes, setNumMovieRes] = useState<numRes>()
  const [isActive, setIsActive] = useState("movies_search")
  const [loopingMedia, setLoopingMedia] = useState<(movieProps & TVProps)[]>()
  const [selectedMoviePage, setSelectedMoviePage] = useState(1)
  const [selectedTVPage, setSelectedTVPage] = useState(1)


  const handlePageClick = (selectedItem: {
    selected: number;
  }) => {
    if (isActive === 'movies_search') {
      setSelectedMoviePage(selectedItem.selected + 1)
    }
    if (isActive === "tv_shows_search") {
      setSelectedTVPage(selectedItem.selected + 1)
    }
  }
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    if (event.currentTarget.id !== isActive) {
      setIsActive(event.currentTarget.id)

    }

    if (event.currentTarget.id === "movies_search" && movies) {
      setLoopingMedia(movies)
    }


    if (event.currentTarget.id === "tv_shows_search" && tv) {
      setLoopingMedia(tv)
    }


  }
  useEffect(() => {
    const fetchSearchMovies = async () => {
      const res = await getSearchedMovies(searchParams.get('query') || '', selectedMoviePage)
      setMovies(res.data.results)
      setLoopingMedia(res.data.results)
      setNumMovieRes({ currentPage: res.data.page, total_pages: res.data.total_pages, total_results: res.data.total_results })
    }

    const fetchSearchTV = async () => {
      const res = await getSearchedTV(searchParams.get('query') || '', selectedTVPage)
      setTv(res.data.results)

      setNumTVRes({ currentPage: res.data.page, total_pages: res.data.total_pages, total_results: res.data.total_results })

    }


    fetchSearchMovies()
    fetchSearchTV()

  }, [selectedMoviePage, selectedTVPage])
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
          loopingMedia ?
            <>
              {loopingMedia.map((movie) => (
                <div className="search-result-main" key={movie.id}>
                  <div className="search-result-card">
                    <div className="search-res-img">
                      <Link to={movie.title ? `/movies/${movie.id}` : `/tv/${movie.id}`}> <img src={movie.poster_path ? `${imgBaseURL}${movie.poster_path}` : NoImg} alt="mediatype image" style={{ maxWidth: '150px', maxHeight: '100%' }} /></Link>

                    </div>
                    <div className="search-res-body">
                      <div className="search-body-title">{movie?.title ? movie.title : movie?.name}</div>
                      <div className="search-body-date">{movie.name ? formatDate(movie.first_air_date) : formatDate(movie.release_date)}</div>
                      <div className="search-body-overview">{movie.overview.length > 256 ? movie.overview.slice(0, 256) + '...' : movie.overview} </div>
                    </div>
                  </div>
                </div>

              ))}
              {
                numMoviesRes && numTVRes ? <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  containerClassName="pagination-container"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={loopingMedia[0].name ? numTVRes?.total_pages : numMoviesRes?.total_pages}
                  previousLabel="< previous"
                  nextLinkClassName='page-link'
                  activeClassName='active'
                  renderOnZeroPageCount={null!}
                /> : ''
              }
            </>
            : <Spinner />
        }
      </div>

    </div>
  </div>;
};

export default SearchResult;
