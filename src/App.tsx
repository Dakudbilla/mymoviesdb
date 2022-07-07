
import NavbBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movie from "./pages/moviePage/Movie";
import Movies from "./pages/Movies/Movies";
import SearchResult from "./components/SearchResult/SearchResult";

const App = () => {
  return (
    <>
      <NavbBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
