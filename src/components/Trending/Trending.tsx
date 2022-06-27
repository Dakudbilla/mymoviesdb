import axios from "axios"
import { useEffect, useState } from "react"
import { getTrendingMovies } from "../../network/api"
import Card from "../Card/Card"
import './trending.css'

const Trending = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {

        const fetchMovie = async () => {
            const res = await axios.get(getTrendingMovies())
            console.log(res)
            setMovies(res?.data?.results)

        }

        fetchMovie()

    }, [])
    return (
        <>
            {
                movies ? <div className="trend-container">
                    {
                        movies.map((movie) => <Card movie={movie} key={movie.id} />)
                    }
                </div> : <div>Loading</div>
            }


        </>
    )
}

export default Trending