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
            console.log("hhhh")
            setIsActive({ isActiveTrending: isActive.isActiveTrending, isActiveTopRated: event.currentTarget.id })
        } else {
            setIsActive({ isActiveTrending: event.currentTarget.id, isActiveTopRated: isActive.isActiveTopRated })
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
            console.log(res?.data.results)
            settrendingTV(res?.data.results)
            console.log({ trendingTV })

        }

        const fetchTopRatedTV = async () => {
            const res = await axios.get(getTopRatedTV())
            console.log(res?.data.results)
            setTopRatedTV(res?.data.results)
            console.log({ trendingTV })

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
                                    ["TV", "Movies"].map((item, index) => <li key={index + item} id={`${index + item}`} className={isActive.isActiveTrending === `${index + item}` ? "active" : ''} onClick={handleSelect} >{item}</li>)
                                }


                            </ul>
                        </div>
                        {trendingMovies && trendingTV ? <MoviesList movies={isActive.isActiveTrending === '1Movies' ? trendingMovies : trendingTV} /> : <Spinner />}
                    </div>
                    {/* <div className="popular-container">
                        <div className="popular-header">
                            <div className="popular-title">Trending TV</div>
                            <ul >
                                <li>TV</li>
                                <li>Movies</li>
                            </ul>
                        </div>
                        {trendingTV ? <MoviesList movies={trendingTV} /> : <Spinner />}
                    </div> */}

                    <div className="popular-container">
                        <div className="popular-header">
                            <div className="popular-title">Top Rated </div>
                            <ul>
                                {
                                    ["TV", "Movies"].map((item, index) => <li key={index + item} id={`${index + item + "topRated"}`} className={isActive.isActiveTopRated === `${index + item + "topRated"}` ? "active" : ''} onClick={handleSelect} >{item}</li>)
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
