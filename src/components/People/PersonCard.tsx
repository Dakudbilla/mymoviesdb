import "./people.css";
import { personProps } from "../../services/service";
import noImage from '../../assets/images/noImage.png'

interface PersonCardProps {
    person: personProps
}

const PersonCard = ({ person }: PersonCardProps) => {
    return <>
        <div className="person-card">
            <div className="person-card-image">
                <img loading="lazy" src={person.profile_path ? `https://www.themoviedb.org/t/p/w240_and_h266_face${person.profile_path}` : noImage} alt="mediatype image" width="220px" height="266px" />
            </div>
            <div className="person-card-body">
                <h4><div className="card-title">
                    {person.name}
                </div></h4>
                <p className="person-card-character">
                    {person.character}
                </p>
            </div>
        </div>
    </>;
};

export default PersonCard;
