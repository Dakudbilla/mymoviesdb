import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { favMediaProps } from "../../context"
import { getMovieDetails, getTVDetails, imgBaseURL } from "../../network/api"
import { movieProps, TVProps } from "../../services/service"
import { formatDate, NoImg } from "../../utils/formatCurrency"
import './favorites.css'
interface FavMediaCardProps {
    media: favMediaProps
}

const FavMediaCard = ({ media }: FavMediaCardProps) => {
    const [mediaData, setMediaData] = useState<movieProps & TVProps>({} as movieProps & TVProps)
    useEffect(() => {
        const fetchMovie = async () => {
            if (media.mediaType === 'tv') {
                const res = await axios.get(getTVDetails(media.mediaId))
                setMediaData(res?.data)
            }
            else if (media.mediaType === 'movie') {
                const res = await axios.get(getMovieDetails(media.mediaId))
                setMediaData(res?.data)
            }
        }

        fetchMovie()
    }, [media])
    return mediaData &&
        <div className="fav-media-main" >
            <div className="fav-media-card">
                <div className="fav-media-img">
                    <Link to={mediaData.title ? `/movies/${mediaData.id}` : `/tv/${mediaData.id}`}>
                        <img src={mediaData.poster_path ? `${imgBaseURL}${mediaData.poster_path}` : NoImg()} alt="mediatype image" width="150px" height="100%" />
                    </Link>
                </div>
                <div className="fav-media-body">
                    <div className="fav-media-body-title">{mediaData?.title ? mediaData.title : mediaData?.name}</div>
                    <div className="fav-media-body-date">{mediaData?.name ? formatDate(mediaData.first_air_date) : formatDate(mediaData.release_date)}</div>
                    <div className="fav-media-body-overview">{mediaData ? mediaData.overview?.length > 256 ? mediaData.overview.slice(0, 256) + '...' : mediaData.overview : ''} </div>
                </div>
            </div>
        </div>
}

export default FavMediaCard