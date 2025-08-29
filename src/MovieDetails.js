import React from "react";
import movieData from "./movieData.js";
import { BrowserRouter, Route, Routes, Link, useParams } 
	   from "react-router-dom";
// TODO: Import components/hooks from react-router-dom

function MovieDetails() {
   // TODO: Call useParams() here
   const {movieId} = useParams(); 
   

   // TODO: Replace "tt0034583" with the movie ID parameter
   // find() returns undefined if the movieId cannot be found
   const movie = movieData.find(m => m.movieId === movieId);
   
   return (
      <>        
         
         
         { /* TODO: Show movie details or "not found" message */ }
         {movie !== undefined ? 
            <>
                <h2>{movie.title} ({movie.year})</h2>
                <p>{movie.desc} <a href={'https://www.imdb.com/title/' + movie.movieId + '/'} target="_blank" rel="noreferrer">More information.</a></p>
                <p>{movie.rating}</p>
                <Link to={`/`}>All Movies</Link>
            </>
         :  <>
                <p>Movie with ID {movieId} not found.</p>
                <Link to={`/`}>All Movies</Link>
            </>
            
        }

         { /* TODO: Add Link to "/" */ }
      </>    
   );
}

export default MovieDetails;