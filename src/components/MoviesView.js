import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieModel from '../data-model/MovieModel'

import MovieCard from './MovieCard';




function MoviesView (props) {

  const {name,length,poster,director,stars}=props; //detructuring assignment

  

  const moviesData = [];
  moviesData.push(new MovieModel("Jeff", "Bridges", 1949 , "Jeff.jpg","https://www.imdb.com/name/nm0000313/?ref_=nv_sr_srsg_0"));
  

  console.log(moviesData)

  

  
  const moviesToRender = moviesData.map(movie => 

    <div>
      <div>
                      
        <MovieCard name={movie.name} length={movie.length} poster={movie.poster} director={movie.director} stars={movie.stars}/>

      
      </div>

    </div>);
  
  
  return (

    <div className="container">

          <div className="row">

             {moviesToRender} 

          </div>
          
                                
    </div>

  )
  
};


  export default MoviesView;