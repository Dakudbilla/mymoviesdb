import axios from "axios"
import { useEffect, useState } from "react"
import { getTrendingMovies } from "../../network/api"
import { movieProps } from "../../services/service"
import Card from "../Card/Card"
import './movieslist.css'

const MoviesList = () => {
    const [movies, setMovies] = useState<movieProps[]>()
    useEffect(() => {

        const fetchMovies = async () => {
            const res = await axios.get(getTrendingMovies())
            setMovies(res?.data?.results)
            console.log(res)

        }
        fetchMovies()

    }, [])
    return (
        <>
            {
                movies ? <div className="trend-container">
                    {
                        movies.map((movie) => <Card movie={movie} key={movie.id} />)
                    }
                </div> : <div className="spinner"></div>

            }


        </>
    )
}

export default MoviesList