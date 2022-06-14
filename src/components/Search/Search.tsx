import "./search.css";
const Search = () => {
  return <>
  <div className="search-container">
    <input type="text" name="search" className="search-input" placeholder="Search for movies"/>
    <input type="submit" value="Search" className="search-button" />
  </div>
  </>;
};

export default Search;
