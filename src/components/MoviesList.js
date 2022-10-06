import React from 'react'
import Movie from './Movie'
import '../styles/MoviesList.css'

function MoviesList({movies}) {
  return (
    <div className="movies-container">
			{movies.map((movie)=>{
				 return <Movie key={movie.id} movie={movie}/>
			})}
	</div>
  )
}

export default MoviesList