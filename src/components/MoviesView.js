import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieModel from '../data-model/MovieModel'

import MovieCard from './MovieCard';




function MoviesView (props) {

 // const {name,length,poster,director,stars}=props; //detructuring assignment

  

  const moviesData = [];
  moviesData.push(new MovieModel(1,"The Big Lebowski", 120, "bl.jpg" , "Joel Coen",["John Goodman","Julianne Moore"]));
  moviesData.push(new MovieModel(2,"Hell or High Water", 102, "hhw.jpg" , "David Mackenzie",["Chris Pine","Marin Ireland"]));
  moviesData.push(new MovieModel(3,"Iron Man", 126, "im.jpg" , "Jon Favreau",["Robert Downey Jr.","naGwyneth Paltrowme"]));
  moviesData.push(new MovieModel(4,"The Big Lebowski", 120, "bl.jpg" , "Joel Coen",["John Goodman","Julianne Moore"]));
  moviesData.push(new MovieModel(5,"Hell or High Water", 102, "hhw.jpg" , "David Mackenzie",["Chris Pine","Marin Ireland"]));
  moviesData.push(new MovieModel(6,"Iron Man", 126, "im.jpg" , "Jon Favreau",["Robert Downey Jr.","naGwyneth Paltrowme"]));
  

  console.log(moviesData)

  

  
  const moviesToRender = moviesData.map(movie => 

    <div key={movie.index} className="col-lg-12 col-md-12">
     
                      
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