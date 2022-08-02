import NavbBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movie from "./pages/moviePage/Movie";
import Movies from "./pages/Movies/Movies";
import SearchResult from "./components/SearchResult/SearchResult";
import { FavMovieContextProvider } from "./context";
import Favourites from "./components/Favorites/Favorites";
const App = () => {
  //style to make footer always at the bottom of page
  const appStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  } as React.CSSProperties;

  return (
    <FavMovieContextProvider>
      <div style={appStyle}>
        <NavbBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/tv/:id" element={<Movie />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/favorites" element={<Favourites />} />
        </Routes>

        <Footer />
      </div>
    </FavMovieContextProvider>
  );
};

export default App;
