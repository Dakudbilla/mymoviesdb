
import { movieProps, TVProps } from "../../services/service"
import Card from "../Card/Card"
import './movieslist.css'

interface MoviesListProps {
    movies: (movieProps & TVProps)[]
}

const MoviesList = ({ movies }: MoviesListProps) => {

    return (
        <>
            {
                <div className="trend-container">
                    {
                        movies.map((movie) => <Card movie={movie} key={movie.id} />)
                    }
                </div>

            }


        </>
    )
}

export default MoviesList