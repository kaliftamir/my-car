import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieModel from '../data-model/MovieModel'

import MovieCard from './MovieCard';




function MoviesView (props) {

  const {name,length,poster,director,stars}=props; //detructuring assignment

  

  const moviesData = [];
  moviesData.push(new MovieModel("Jeff", "Bridges", 1949 , "Jeff.jpg","https://www.imdb.com/name/nm0000313/?ref_=nv_sr_srsg_0"));
  moviesData.push(new MovieModel("Laura", "Dern", 1967 , "laura.jpg","https://www.imdb.com/name/nm0000368/mediaviewer/rm4228886528?ref_=nm_ov_ph"));
  moviesData.push(new MovieModel("John", "Turturro", 1957 , "john.jpg","https://www.imdb.com/name/nm0001806/?ref_=tt_cl_t15"));
  moviesData.push(new MovieModel("Julianne", "Moore", 1951 , "juli.jpg","https://www.imdb.com/name/nm0000194/?ref_=tt_cl_t3"));

  console.log(moviesData)


  
  const moviesToRender = 

    <div>
      <div className="card">
                      
        <MovieCard src={actor.img} name={`${actor.fname} ${actor.lname}`} bday={actor.bday} imdb={actor.imdb} age={`Age: ${actor.age()}`}/>

      
      </div>

    </div>);
  
  
  return (

    <div className="container">
          <input value={iname} onChange={updateIname}></input>
          <button onClick={sortByName}>Sort</button>
          <div className="row">

             {moviesToRender} 

          </div>
          
                                
    </div>

  )
  
};


  export default MoviesView;