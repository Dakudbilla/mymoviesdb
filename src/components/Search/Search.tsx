import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSearchedMovies, getSearchedTV } from "../../network/api";
import "./search.css";
const Search = () => {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate(`/search?query=${searchText}`)

  }


  return <>
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit} >
        <input type="text" name="search" value={searchText} onChange={(event) => setSearchText(event.currentTarget.value)} className="search-input" placeholder="Search for movies" />
        <button type="submit" className="search-button" >Search</button>
      </form>
    </div>

  </>;
};

export default Search;
