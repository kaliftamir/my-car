import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieModel from '../data-model/MovieModel'

import MovieCard from './MovieCard';




function MoviesView (props) {

  const {name,length,poster,director,stars}=props; //detructuring assignment

  

  const moviesData = [];
  moviesData.push(new MovieModel("The Big Lebowski", 120, "bl.jpg" , "Joel Coen",["name1","name2"]));
  moviesData.push(new MovieModel("The Big Lebowski", 120, "bl.jpg" , "Joel Coen",["name1","name2"]));
  moviesData.push(new MovieModel("The Big Lebowski", 120, "bl.jpg" , "Joel Coen",["name1","name2"]));
  

  console.log(moviesData)

  

  
  const moviesToRender = moviesData.map(movie => 

    <div className="col-lg-12 col-md-12">
     
                      
      <MovieCard name={movie.name} length={movie.length} poster={movie.poster} director={movie.director} stars={movie.stars}/>


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