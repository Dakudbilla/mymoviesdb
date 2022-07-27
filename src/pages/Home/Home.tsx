import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MoviesList from "../../components/MoviesList/MoviesList";
import Spinner from "../../components/Spinner/Spinner";
import { getPopularMovies, getTopRatedMovies, getTopRatedTV, getTrendingMovies, getTrendingTV } from "../../network/api";
import { movieProps, TVProps } from "../../services/service";
import './home.css'

interface selectProps {

    isActiveTrending: string
    isActiveTopRated: string

}
const Home = () => {
    const [trendingMovies, setTrendingmovies] = useState<(movieProps & TVProps)[]>()
    const [popularMovies, setPopularmovies] = useState<(movieProps & TVProps)[]>()
    const [topRatedMovies, setTopRatedmovies] = useState<(movieProps & TVProps)[]>()
    const [trendingTV, settrendingTV] = useState<(movieProps & TVProps)[]>()
    const [topRatedTV, setTopRatedTV] = useState<(movieProps & TVProps)[]>()
    const [isActive, setIsActive] = useState<selectProps>({ isActiveTrending: '0TV', isActiveTopRated: '0TVtopRated' })

    const handleSelect = (event: React.MouseEvent<HTMLLIElement>) => {

        if (event.currentTarget.id.includes('top')) {
            setIsActive({ ...isActive, isActiveTopRated: event.currentTarget.id })
        } else {
            setIsActive({ ...isActive, isActiveTrending: event.currentTarget.id })
        }
    }
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
            settrendingTV(res?.data.results)

        }

        const fetchTopRatedTV = async () => {
            const res = await axios.get(getTopRatedTV())
            setTopRatedTV(res?.data.results)

        }

        fetchTrendingMovies()
        fetchPopularMovies()
        fetchTopRatedMovies()
        fetchTrendingTV()
        fetchTopRatedTV()

    }, [])



    return (
        <>

            <div className="container">
                <Header />
                <div className="popular">
                    <div className="popular-container">
                        <div className="popular-header">
                            <div className="popular-title">Trending </div>
                            <ul>
                                {
                                    ["TV", "Movies"].map((item, index) => <li key={index + item} id={`${index + item}`} className={isActive.isActiveTrending === `${index + item}` ? "active-media" : ''} onClick={handleSelect} >{item}</li>)
                                }


                            </ul>
                        </div>
                        {trendingMovies && trendingTV ? <MoviesList movies={isActive.isActiveTrending === '1Movies' ? trendingMovies : trendingTV} /> : <Spinner />}
                    </div>


                    <div className="popular-container">
                        <div className="popular-header">
                            <div className="popular-title">TopRated </div>
                            <ul>
                                {
                                    ["TV", "Movies"].map((item, index) => <li key={index + item} id={`${index + item + "topRated"}`} className={isActive.isActiveTopRated === `${index + item + "topRated"}` ? "active-media" : ''} onClick={handleSelect} >{item}</li>)
                                }


                            </ul>
                        </div>
                        {topRatedMovies && topRatedTV ? <MoviesList movies={isActive.isActiveTopRated === '1MoviestopRated' ? topRatedMovies : topRatedTV} /> : <Spinner />}
                    </div>

                </div>

            </div>
        </>
    );
};

export default Home;
