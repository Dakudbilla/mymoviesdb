import axios from "axios";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Trending from "../../components/Trending/Trending";
import { getMovie } from "../../network/api";
import './home.css'
const Home = () => {

    useEffect(() => {

        const fetchMovie = async () => {
            const res = await axios.get(getMovie())

            console.log({ res })
        }

        fetchMovie()

    }, [])
    return (
        <>

            <div className="container">
                <Header />
                <div className="popular">
                    <div className="popular-container">
                        <div className="popular-title">What's  Popular</div>
                        <Trending />
                    </div>
                    <div className="popular-container">
                        <div className="popular-title">What's  Popular</div>
                        <Trending />
                    </div>

                </div>

            </div>
        </>
    );
};

export default Home;
