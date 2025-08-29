import React from "react";
import movieData from "./movieData.js";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// TODO: Import components from react-router-dom

function MovieList() { 
   return (
      <>
         <table>      
            <tr>
               <th>Title</th>
               <th>Year</th>
               <th>Rating</th>
            </tr>
            {/* TODO: Add movies in movieData */}
            {movieData.map((item) => 
                <tr key={item.movieId}>
                    <th><Link to={`/movie/${item.movieId}`}>{item.title}</Link></th>
                    <td>{item.year}</td>
                    <td>{item.rating}</td>
                </tr>
            )}
         </table>       
      </>
   );
}

export default MovieList;