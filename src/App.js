import React, { useEffect,useState } from "react";
import './App.css';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=b91d937b';

const App = () => {

    const [movies,setMovies]=useState([]);
    const[search,setSearch]=useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>Movieland</h1>
            <div className="search">
                <input placeholder="Search for movies" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                <button className="submit" onClick={()=>searchMovies(search)}>search</button>
            </div>

            {
                movies?.length>0
                ?(
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) :
                (
                <div className="container">
                    <h2>No movies found</h2>
                </div>
                )
            }

            
        </div>
    );
}

export default App;
