import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MoviesList from './components/MoviesList';


function App() {
	const url = "https://api.themoviedb.org/3/movie/popular?api_key=0e6c29ccb037cfed0b6a15c8b52598aa&language=en-US&page=1";

	const [movies, setMovies] = useState([]);
	const [filteredMovies, setFilteredMovies] = useState([]);

	useEffect(()=>{
		fetchMovies();
	}, [])

	const fetchMovies = async () => {
		const data = await fetch(url);
		const movies = await data.json();
		setMovies(movies.results)
		setFilteredMovies(movies.results)
		console.log(movies.results)
	};
	
	const setFilteringGenreId = (id) =>{
		let filtered;
		if(id === 0) filtered = movies;
		else {
			filtered = movies.filter((movie)=>movie.genre_ids.includes(id));
		}

		setFilteredMovies(filtered);
	}
		
  return (
	<>
		<Header setFilteringGenreId={setFilteringGenreId} />
		<MoviesList movies = {filteredMovies}/>
	</>
  );
}

export default App;
