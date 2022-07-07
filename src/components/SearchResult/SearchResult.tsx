import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchedMovies, getSearchedTV } from '../../network/api';
import { movieProps } from '../../services/service';
import './searchresult.css';
const SearchResult = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState<movieProps[]>()
  const [tv, setTv] = useState<movieProps[]>()


  useEffect(() => {
    const fetchSearchMovies = async () => {
      const res = await getSearchedMovies(searchParams.get('query') || '')
      setMovies(res.data.results)
    }

    const fetchSearchTV = async () => {
      let page = 0
      let totalPages = 0
      do {
        console.log(searchParams.get('query'))
        const res = await getSearchedTV(searchParams.get('query') || '')
        console.log(res)
        setTv(res.data.results)
      } while (page < totalPages)
    }


    fetchSearchMovies()
    fetchSearchTV()

  }, [searchParams.get('query')])
  return <div className="search-result">
    <div className="search-result-container">
      <div className="search-result-sidebar">
        <div className="search-result-sidebar-header">
          Search Results
        </div>
        <ul className="search-results-groups">
          <li>
            <h4>Movies</h4>
            <span>{movies?.length}</span>
          </li>
          <li>
            <h4>TV shows</h4>
            <span>{tv?.length}</span>
          </li>
        </ul>
      </div>
      <div className="search-result-main">Hi</div>
    </div>
  </div>;
};

export default SearchResult;
