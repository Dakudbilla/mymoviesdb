import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MoviesList from "../../components/MoviesList/MoviesList";
import Spinner from "../../components/Spinner/Spinner";
import { getPopularMovies, getTopRatedMovies, getTrendingMovies, getTrendingTV } from "../../network/api";
import { movieProps, TVProps } from "../../services/service";
import './home.css'
const Home = () => {
    const [trendingMovies, setTrendingmovies] = useState<(movieProps & TVProps)[]>()
    const [popularMovies, setPopularmovies] = useState<(movieProps & TVProps)[]>()
    const [topRatedMovies, setTopRatedmovies] = useState<(movieProps & TVProps)[]>()
    const [trendingTV, settrendingTV] = useState<(movieProps & TVProps)[]>()
    useEffect(() => {

        const fetchTrendingMovies = async () => {
            const res = await axios.get(getTrendingMovies())
            setTrendingmovies(res?.data?.results)

        }

        const fetchPopularMovies = async () => {
            const res = await axios.get(getPopularMovies())
            setPopularmovies(res?.data?.results)

        }

        const fetchTopRatedMovies = async () => {
            const res = await axios.get(getTopRatedMovies())
            setTopRatedmovies(res?.data.results)
        }

        const fetchTrendingTV = async () => {
            const res = await axios.get(getTrendingTV())
            console.log(res?.data.results)
            settrendingTV(res?.data.results)
            console.log({ trendingTV })

        }

        fetchTrendingMovies()
        fetchPopularMovies()
        fetchTopRatedMovies()
        fetchTrendingTV()

    }, [])

    return (
        <>

            <div className="container">
                <Header />
                <div className="popular">
                    <div className="popular-container">
                        <div className="popular-title">Trending Movies</div>
                        {trendingMovies ? <MoviesList movies={trendingMovies} /> : <Spinner />}
                    </div>
                    <div className="popular-container">
                        <div className="popular-title">Trending TV</div>
                        {trendingTV ? <MoviesList movies={trendingTV} /> : <Spinner />}
                    </div>

                    <div className="popular-container">
                        <div className="popular-title">Top Rated Movies</div>
                        {topRatedMovies ? <MoviesList movies={topRatedMovies} /> : <Spinner />}
                    </div>

                </div>

            </div>
        </>
    );
};

export default Home;
