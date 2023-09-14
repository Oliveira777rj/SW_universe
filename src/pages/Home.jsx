import './MovieGrid.css'
import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';

const moviesURL = import.meta.env.VITE_API_SW;
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async(url) => {
      const res = await fetch(url);
      const data = await res.json();

      setTopMovies(data.results);
  };

      useEffect(() => {
        const topRatedUrl = `${moviesURL}star+wars&${apikey}`
        getTopRatedMovies(topRatedUrl)
      },[]);

  return (
    <div className="container">
      <h2 className='title'>Conteúdo do Universo Star Wars</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Home