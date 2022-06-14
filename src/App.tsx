import Header from "./components/Header/Header";
import NavbBar from "./components/Navbar/Navbar";
import "./App.css";
import Trending from "./components/Trending/Trending";
const App = () => {
  return (
    <>
      <NavbBar />
      <div className="container">
        <Header />
        <div className="popular">
          <div className="popular-container">
          <div className="popular-title">What's  Popular</div>
          
          <Trending/>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default App;
