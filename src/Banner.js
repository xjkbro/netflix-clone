import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoIcon from "@material-ui/icons/Info";

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, []);
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">
                        <PlayArrowIcon />
                        <span className="button_word">Play</span>
                    </button>
                    <button className="banner_button">
                        <InfoIcon />
                        <span className="button_word">My List</span>
                    </button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview, 220)}
                </h1>
            </div>
            <div className="banner-fadeBottom" />
        </header>
    );
}

export default Banner;
