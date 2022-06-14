import Search from "../Search/Search";
import "./header.css";
const Header = () => {
  return (
    <section className="header">
      <div className="header-wrapper">
        <div className= "header-wrapper-wrapper">
        <div className="title">
          <h1>Welcome.</h1>
          <h4>
            Millions of movies, TV shows and people to discover. Explore now.
          </h4>
        </div>
        <Search />
        </div>
      </div>
    </section>
  );
};

export default Header;
