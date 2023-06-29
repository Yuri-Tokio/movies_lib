import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
//useState - Hook para gerenciar o estado dos filmes
//useEffect - Hook para fazer a chamada da API quando a pagina carregar

import "../Styles/MoviesGrid.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
// pegando chaves e valores do .env

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    };

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);
        //isso faz a chamada do fetch e podemos verificar em network preview
    }, []);

    return (
        <div className="container">
            <h2 className="title">Melhores filmes</h2>
            <div className="movies-container">
                {topMovies.length > 0 &&
                    topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default Home;