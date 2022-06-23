
import NavbBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movie from "./pages/moviePage/Movie";
import Movies from "./pages/Movies/Movies";

const App = () => {
  return (
    <>
      <NavbBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
