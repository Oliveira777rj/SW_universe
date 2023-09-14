import {FaStar} from 'react-icons/fa';

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {

  return (

    <div className='movie-card'>
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar color='yellow'/> {movie.vote_average}
        </p>
        <p>
                {movie.release_date}
        </p>
    </div>
  )
}

export default MovieCard