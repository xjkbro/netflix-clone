import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import { PlayArrow } from "@material-ui/icons";

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <div
                                className={`row_poster ${
                                    isLargeRow && "row_posterLarge"
                                }`}
                            >
                                <img
                                    key={movie.id}
                                    src={`${base_url}${
                                        isLargeRow
                                            ? movie.poster_path
                                            : movie.backdrop_path
                                    }`}
                                    alt={movie.name}
                                />
                                <div className="row_title">
                                    <p className="title_name">
                                        {truncate(
                                            movie?.title ||
                                                movie?.name ||
                                                movie?.original_name,
                                            50
                                        )}
                                    </p>
                                    <p className="title_desc">
                                        {truncate(movie?.overview, 180)}
                                    </p>
                                    <button>
                                        Watch Now <PlayArrow />
                                    </button>
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
}

export default Row;
