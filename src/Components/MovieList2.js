import React from 'react'
import MovieCard from './MovieCard'

const MovieList2 = ({dataMovie}) => {
  return (
    <div>
        {dataMovie.map((movie,i)=> <MovieCard key={i} data={movie} />)}
    </div>
  )
}

export default MovieList2