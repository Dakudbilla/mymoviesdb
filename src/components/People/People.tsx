import axios from "axios"
import { useEffect, useState } from "react"
import { getMediaCasts } from "../../network/api"
import { personProps } from "../../services/service"
import Spinner from "../Spinner/Spinner"
import './people.css'
import PersonCard from "./PersonCard"
console
interface PeopleProps {
    media_id: string
    media_type: string
}

const People = ({ media_id, media_type }: PeopleProps) => {
    const [casts, setCasts] = useState<personProps[]>()
    useEffect(() => {

        const fetchMediaCasts = async () => {
            const res = await axios.get(getMediaCasts(media_id, media_type))
            setCasts(res?.data?.cast)
        }
        fetchMediaCasts()

    }, [media_id])
    return (
        <>
            {
                casts ? <div className="people-container">
                    {
                        casts.length > 0 ? casts.slice(0, 9).map((cast) => <PersonCard person={cast} key={cast.id} />) : <div>No Casts Available</div>
                    }
                </div> : <Spinner />

            }


        </>
    )
}

export default People