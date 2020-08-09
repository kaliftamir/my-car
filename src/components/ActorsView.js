import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActorModel from '../data-model/ActorModel'

import ActorCard from './ActorCard';
import MovieModel from '../data-model/MovieModel';
import MovieCard from './MovieCard';




function ActorsView (props) {

  const {id}=props; //detructuring assignment

  const JSONactors = [
    {
      "id":1,
      "fname":"Jeff",
      "lname":"Bridges",
      "bday":1949,
      "img":"Jeff.jpg",
      "imdb":"https://www.imdb.com/name/nm0000313/?ref_=nv_sr_srsg_0"
    },
    {
      "id":2,
      "fname":"Laura",
      "lname":"Dern",
      "bday":1967,
      "img":"laura.jpg",
      "imdb":"https://www.imdb.com/name/nm0000368/mediaviewer/rm4228886528?ref_=nm_ov_ph"
    },
    {
      "id":3,
      "fname":"John",
      "lname":"Turturro",
      "bday":1957,
      "img":"John.jpg",
      "imdb":"https://www.imdb.com/name/nm0001806/?ref_=tt_cl_t15"
    },
    {
      "id":4,
      "fname":"Julianne",
      "lname":"Moore",
      "bday":1951,
      "img":"Juli.jpg",
      "imdb":"https://www.imdb.com/name/nm0000194/?ref_=tt_cl_t3"
    }
  ];

  const actorsData = [];
  for (let i=0;i<=3;i++) {
    
    actorsData.push(new ActorModel(JSONactors[i].id,JSONactors[i].fname,JSONactors[i].lname,JSONactors[i].bday,JSONactors[i].img,JSONactors[i].imdb))

  }
  

  // actorsData.push(new ActorModel(1,"Jeff", "Bridges", 1949 , "Jeff.jpg","https://www.imdb.com/name/nm0000313/?ref_=nv_sr_srsg_0"));
  // actorsData.push(new ActorModel(2,"Laura", "Dern", 1967 , "laura.jpg","https://www.imdb.com/name/nm0000368/mediaviewer/rm4228886528?ref_=nm_ov_ph"));
  // actorsData.push(new ActorModel(3,"John", "Turturro", 1957 , "john.jpg","https://www.imdb.com/name/nm0001806/?ref_=tt_cl_t15"));
  // actorsData.push(new ActorModel(4,"Julianne", "Moore", 1951 , "juli.jpg","https://www.imdb.com/name/nm0000194/?ref_=tt_cl_t3"));

  //actorsData.push(<div className={i === selectedDot ? "selected" : ""}></div>);
  console.log(actorsData)

  const [sortedData, setSortedData] = React.useState(false);
  const [iname, setIname] = React.useState("");
  //const [isSelected, setIsSelected] = React.useState(actorsData[0]);
  
  // console.log(`isSelected: ${isSelected.value}`)
  // function changeSelected(event) {

  //   console.log(`isSelected2: ${event.currentTarget.id}`)
  //  // setIsSelected(actorsData[event])
    
  // }


  function updateIname(event) {
    
    setIname(event.target.value)  
    
  }
 
  function sortByName() {     
     
    setSortedData(true)
    console.log(sortedData)      
 }


  let sortedArr =  actorsData;
  if (sortedData===true) {

     sortedArr = actorsData.sort((a,b)=> a.lname > b.lname ? 1:-1)

  } else {
     sortedArr = actorsData
  }

  // ----------------------------movies-----------------------------------------
  
  const moviesData = [];
  
  moviesData.push(new MovieModel(1,"The Big Lebowski", 120, "bl.jpg" , "Joel Coen",["John Goodman","Julianne Moore"]));
  moviesData.push(new MovieModel(2,"Hell or High Water", 102, "hhw.jpg" , "David Mackenzie",["Chris Pine","Marin Ireland"]));
  moviesData.push(new MovieModel(3,"Iron Man", 126, "im.jpg" , "Jon Favreau",["Robert Downey Jr.","naGwyneth Paltrowme"]));
  moviesData.push(new MovieModel(4,"Marriage Story", 137, "ms.jpg" , "Noah Baumbach",["Adam Driver","Scarlett Johansson"]));
  moviesData.push(new MovieModel(5,"Wild at Heart", 102, "wh.jpg" , "David Lynch",["Nicolas Cage","Willem Dafoe"]));
  moviesData.push(new MovieModel(6,"Jurassic Park", 127, "jp.jpg" , "JSteven Spielberg",["Jeff Goldblum","Sam Neill"]));
  moviesData.push(new MovieModel(7,"Raging Bull", 129, "rb.jpg" , "Martin Scorsese",["Robert Downey Jr.","naGwyneth Paltrowme"]));
  moviesData.push(new MovieModel(8,"Transformers", 126, "t.jpg" , "Michael Bay",["Robert Downey Jr.","Gwyneth Paltrowme"]));
  moviesData.push(new MovieModel(9,"Exodus", 150, "e.jpg" , "Ridley Scott",["Christian Bale","Joel Edgerton"]));
  moviesData.push(new MovieModel(10,"The Hunger Games", 126, "hg.jpg" , "Jon Favreau",["Robert Downey Jr.","naGwyneth Paltrowme"]));
  moviesData.push(new MovieModel(11,"Children of Men", 126, "cm.jpg" , "Jon Favreau",["Robert Downey Jr.","naGwyneth Paltrowme"]));
  moviesData.push(new MovieModel(12,"Kingsman", 126, "km.jpg" , "Jon Favreau",["Robert Downey Jr.","naGwyneth Paltrowme"]));
  
  const [myData, setMyData] = React.useState([]);

  let moviesToRender = myData.map(movie => 

    <div key={movie.index} className="col-lg-12 col-md-12">
     
                      
      <MovieCard name={movie.name}
       length={movie.length} poster={movie.poster}
       director={movie.director} stars={movie.stars}/>
    
    </div>);
  
  function actorClick (event) {
    
    let newArr;
    if(event.id===1) { 

      newArr=moviesData.slice(0, 3);

    } else if (event.id===2) {

      newArr=moviesData.slice(3, 6);

    } else if (event.id===3) {

      newArr=moviesData.slice(6, 9);
      
    } else if (event.id===4) {

      newArr=moviesData.slice(9, 12);
      
    }
     
    setMyData(newArr) 
       
  }
//------------------------------------------------------------------------------

  // const [clickResult, setClickResult] = React.useState(1);
  

  // // This function should be invoked each time clicking on Actor image

  //  function tactorChanged (event) {
  //    alert(event.id)

  //    if (event.id===1) {

  //       // Calling the TMDB API to get the result for the given searchText
  //       const URL = "https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=" + searchText;

  //       axios.get(URL).then(response => {
  //           this.setState({
  //               searchResults: response.data.results
  //           })    
            
  //       })

  //     } else {
  //         this.setState({
  //             searchResults: []
  //         })   
  //   }

  //  }

  //  addActor(index) {

  //   const actorName =  clickResults[index].name;
  //   const actorImage = clickResults[index].profile_path


  //   this.setState({
  //       actors: this.state.actors.concat(new ActorModel(actorName, actorImage)),
  //       searchResults: []
  //   })
  // }

  // const actorsView = actors.map(actor => 
  //   <Col lg={3} md={4} sm={6}>
  //       <ActorCard actor={actor}/>
  //   </Col>)

  //-------------------------------------------------------------------------------------


  

  
  const actorsToRender = sortedArr.map(actor => 
    (actor.fname.toLowerCase().startsWith(iname)
    || actor.lname.toLowerCase().startsWith(iname)) ? 

    // (actor===selectedActor) ?

    // <div key={actor.id} className="col-lg-3 col-md-6 selected">
    //   <div className="card">
                      
    //     <ActorCard id={id} src={actor.img} name={`${actor.fname} ${actor.lname}`} bday={actor.bday} imdb={actor.imdb} age={`Age: ${actor.age()}`}>
         
    //     </ActorCard>
      
    //   </div>

    // </div> :

    <div key={actor.id} onClick={() => {actorClick(actor)}}
     className="col-lg-3 col-md-6">
       
        <div className="card">
                        
          <ActorCard id={id} src={actor.img}
           name={`${actor.fname} ${actor.lname}`} bday={actor.bday}
            imdb={actor.imdb} age={`Age: ${actor.age()}`}>           

          </ActorCard>        
        
        </div>
              
  
      </div>
      :
      <div></div>
      )

  
  return (

    <div className="container">
          <input value={iname} onChange={updateIname}></input>
          <button onClick={sortByName}>Sort</button>
          <div className="row">

             {actorsToRender} 

          </div>
          <div className="row">
            {moviesToRender}
          </div>           
                                
    </div>

  )
  
};


  export default ActorsView;