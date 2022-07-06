import axios from "axios"
import { useEffect, useState } from "react"
import { getMovieCasts } from "../../network/api"
import { movieProps, personProps } from "../../services/service"
import Card from "../Card/Card"
import './people.css'
import PersonCard from "./PersonCard"

interface PeopleProps {
    movie_id: string
}

const People = ({ movie_id }: PeopleProps) => {
    const [casts, setCasts] = useState<personProps[]>()
    useEffect(() => {

        const fetchMovies = async () => {
            const res = await axios.get(getMovieCasts(movie_id))
            setCasts(res?.data?.cast)
            console.log(res)

        }
        fetchMovies()

    }, [movie_id])
    return (
        <>
            {
                casts ? <div className="people-container">
                    {
                        casts.slice(0, 9).map((cast) => <PersonCard person={cast} key={cast.id} />)
                    }
                </div> : <div className="spinner"></div>

            }


        </>
    )
}

export default People